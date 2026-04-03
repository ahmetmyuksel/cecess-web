"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

// Mock data removed

const COLORS = ["#3B82F6", "#F59E0B", "#10B981", "#F43F5E", "#8B5CF6"];

import { CategoryStat } from "@/features/profile/types/dashboard-types";

interface CategoryPieChartProps {
    data?: CategoryStat[];
}

export function CategoryPieChart({ data }: CategoryPieChartProps) {
    const chartData = data && data.length > 0 ? data : [];

    if (chartData.length === 0) {
        return <div className="flex h-full items-center justify-center text-sm text-slate-400">No expenses this month</div>;
    }

    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                >
                    {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip
                    contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #E2E8F0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    formatter={(value: any) => `$${value}`}
                />
                <Legend verticalAlign="bottom" height={36} />
            </PieChart>
        </ResponsiveContainer>
    );
}
