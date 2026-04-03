import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    className?: string;
}

export function FeatureCard({ icon: Icon, title, description, className }: FeatureCardProps) {
    return (
        <div className={cn(
            "group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm border border-slate-100 transition-all hover:shadow-md hover:border-slate-200",
            className
        )}>
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <Icon className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{title}</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
                {description}
            </p>
        </div>
    );
}
