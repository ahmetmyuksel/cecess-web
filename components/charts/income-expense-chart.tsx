"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

// Mock data removed

import { MonthlyStat } from "@/features/profile/types/dashboard-types";

interface IncomeExpenseChartProps {
    data?: MonthlyStat[];
    incomeLabel: string;
    expenseLabel: string;
}

export function IncomeExpenseChart({ data, incomeLabel, expenseLabel }: IncomeExpenseChartProps) {
    // Fallback if no data
    const chartData = data && data.length > 0 ? data : [
        { name: "No Data", Income: 0, Expense: 0 }
    ];

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                data={chartData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis
                    dataKey="name"
                    stroke="#64748B"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    stroke="#64748B"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value: any) => `$${value}`}
                />
                <Tooltip
                    cursor={{ fill: '#F1F5F9' }}
                    contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #E2E8F0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Legend wrapperStyle={{ paddingTop: '20px' }} />
                <Bar dataKey="Income" name={incomeLabel} fill="#3B82F6" radius={[4, 4, 0, 0]} barSize={20} />
                <Bar dataKey="Expense" name={expenseLabel} fill="#F43F5E" radius={[4, 4, 0, 0]} barSize={20} />
            </BarChart>
        </ResponsiveContainer>
    );
}
