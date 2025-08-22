"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";

const COLORS = ['hsl(var(--chart-2))', 'hsl(var(--chart-5))', 'hsl(var(--chart-3))'];

type TaxPieChartProps = {
  data: { name: string; value: number }[];
};

export function TaxPieChart({ data }: TaxPieChartProps) {
  const chartConfig = {
    income: {
      label: "Post-Tax Income",
    },
    tax: {
      label: "Tax",
    },
    deductions: {
      label: "Deductions",
    },
  }

  return (
      <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square h-full"
      >
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Tooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    labelLine={false}
                    label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                    strokeWidth={2}
                    >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                 <ChartLegend
                    content={<ChartLegendContent nameKey="name" />}
                    className="-mt-4"
                />
            </PieChart>
        </ResponsiveContainer>
    </ChartContainer>
  );
}
