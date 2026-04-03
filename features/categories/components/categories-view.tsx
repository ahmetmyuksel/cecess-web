"use client";

import { useState, useMemo } from "react";
import { useCategories, Category } from "../hooks/use-categories";
import { Modal } from "@/components/ui/modal";
import EmojiPicker, { EmojiClickData, Theme } from "emoji-picker-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent
} from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
    useSortable
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useLanguage } from "@/features/i18n/hooks/use-language";

export function CategoriesView({ initialCategories }: { initialCategories?: Category[] }) {
    const { t } = useLanguage();
    const {
        categories,
        setCategories,
        isLoaded
    } = useCategories(initialCategories);

    const [sortConfig, setSortConfig] = useState<{ key: "manual" | "name" | "type"; direction: "asc" | "desc" }>({ key: "manual", direction: "asc" });

    // Sorting Logic
    const sortedCategories = useMemo(() => {
        // Separate "Uncategorized" (System)
        const pinned = categories.find(c => c.name === "Uncategorized");
        const others = categories.filter(c => c.name !== "Uncategorized");

        let sorted = [...others];
        const { key, direction } = sortConfig;
        const multiplier = direction === "asc" ? 1 : -1;

        if (key === "name") {
            sorted.sort((a, b) => a.name.localeCompare(b.name) * multiplier);
        } else if (key === "type") {
            sorted.sort((a, b) => (a.type.localeCompare(b.type) || a.name.localeCompare(b.name)) * multiplier);
        }
        // else manual: respect original order

        return pinned ? [pinned, ...sorted] : sorted;
    }, [categories, sortConfig]);

    const handleSort = (key: "name" | "type") => {
        setSortConfig(prev => ({
            key,
            direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc"
        }));
    };

    const getSortIcon = (key: string) => {
        if (sortConfig.key !== key) return <span className="text-slate-300 ml-1 text-xs">↕</span>;
        return <span className="text-blue-600 ml-1 text-xs">{sortConfig.direction === "asc" ? "▲" : "▼"}</span>;
    };

    // Sensors for DnD
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            const oldIndex = categories.findIndex((item) => item.id === active.id);
            const newIndex = categories.findIndex((item) => item.id === over.id);
            setCategories(arrayMove(categories, oldIndex, newIndex));
        }
    };

    if (!isLoaded) {
        return (
            <div className="flex min-h-screen bg-slate-50 p-8">
                <main className="flex-1 space-y-6">
                    <div className="flex items-center justify-between">
                        <div className="space-y-2">
                            <div className="h-8 w-48 animate-pulse rounded-md bg-slate-200" />
                            <div className="h-4 w-64 animate-pulse rounded bg-slate-200" />
                        </div>
                        <div className="h-10 w-32 animate-pulse rounded-full bg-slate-200" />
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                        <div className="space-y-4">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="flex items-center justify-between py-2">
                                    <div className="h-6 w-1/3 animate-pulse rounded bg-slate-100" />
                                    <div className="h-6 w-1/4 animate-pulse rounded bg-slate-100" />
                                    <div className="h-6 w-1/6 animate-pulse rounded bg-slate-100" />
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen bg-slate-50 text-slate-900">
            <main className="flex-1 overflow-auto px-8 py-6">
                <header className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900">{t.categories.title}</h1>
                        <p className="text-sm text-slate-600">{t.categories.subtitle}</p>
                    </div>
                    <div className="flex gap-3 items-center text-sm text-slate-500 font-medium">
                        Read-only on Web
                    </div>
                </header>

                <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="overflow-hidden rounded-lg border border-slate-100">
                        <DndContext
                            sensors={sensors}
                            collisionDetection={closestCenter}
                            onDragEnd={handleDragEnd}
                        >
                            <table className="w-full text-sm text-slate-700">
                                <thead>
                                    <tr className="text-left text-slate-500 bg-slate-50 border-b border-slate-100 select-none">
                                        <th
                                            className="py-2 px-4 w-10 cursor-pointer hover:bg-slate-100 transition-colors"
                                            title={t.categories.sort.manual}
                                            onClick={() => setSortConfig({ key: "manual", direction: "asc" })}
                                        >
                                            {sortConfig.key === "manual" ? "⋮⋮" : "•"}
                                        </th>
                                        <th
                                            className="py-2 px-4 cursor-pointer hover:bg-slate-100 transition-colors"
                                            onClick={() => handleSort("name")}
                                        >
                                            {t.categories.table.name} {getSortIcon("name")}
                                        </th>
                                        <th
                                            className="py-2 px-4 cursor-pointer hover:bg-slate-100 transition-colors"
                                            onClick={() => handleSort("type")}
                                        >
                                            {t.categories.table.type} {getSortIcon("type")}
                                        </th>

                                    </tr>
                                </thead>
                                <SortableContext
                                    items={sortedCategories}
                                    strategy={verticalListSortingStrategy}
                                >
                                    <tbody className="divide-y divide-slate-100 bg-white">
                                        {sortedCategories.map((cat) => (
                                            <CategoryRow
                                                key={cat.id}
                                                category={cat}
                                                t={t}
                                                isDragDisabled={sortConfig.key !== "manual"}
                                            />
                                        ))}
                                    </tbody>
                                </SortableContext>
                            </table>
                        </DndContext>
                    </div>
                </section>
            </main >


        </div >
    );
}

import { Edit2, Trash2 } from "lucide-react";

function CategoryRow({
    category,
    t,
    isDragDisabled,
}: {
    category: Category;
    t: any;
    isDragDisabled?: boolean;
}) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({ id: category.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: isDragging ? 10 : "auto",
        position: isDragging ? "relative" as const : "static" as const,
        opacity: isDragging ? 0.8 : 1
    };

    return (
        <tr
            ref={setNodeRef}
            style={style}
            className={`group hover:bg-slate-50 transition-colors ${isDragging ? "bg-slate-100 shadow-md" : ""}`}
        >
            <td className={`py-3 px-4 w-10 text-center ${!isDragDisabled ? "cursor-move text-slate-400 hover:text-slate-600" : "cursor-default text-slate-200"}`}
                {...attributes}
                {...(!isDragDisabled ? listeners : {})}
            >
                {!isDragDisabled ? "⋮⋮" : "•"}
            </td>
            <td className="py-3 px-4 font-medium text-slate-900">
                <div className="flex items-center gap-3">
                    <span className="text-xl">{category.icon ?? "📁"}</span>
                    <span>{category.name}</span>
                </div>
            </td>
            <td className="py-3 px-4">
                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${category.type === "Income" ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
                    }`}>
                    {category.type === "Income" ? t.common.types.income :
                        category.type === "Expense" ? t.common.types.expense :
                            category.type}
                </span>
            </td>

        </tr>
    );
}
