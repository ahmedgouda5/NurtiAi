"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { theme } from "@/styles/theme";

const chartData = [
  { month: "Mon", desktop: 186, mobile: 80 },
  { month: "Tue", desktop: 305, mobile: 200 },
  { month: "Wed", desktop: 237, mobile: 120 },
  { month: "Thu", desktop: 73, mobile: 190 },
  { month: "Fri", desktop: 209, mobile: 130 },
  { month: "Sat", desktop: 214, mobile: 140 },
  { month: "Sun", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Calories",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Burned",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

const CaloriesAndburnedChart = () => {
  return (
    <Card
      className="h-full rounded-3xl border p-3 "
      style={{
        backgroundColor: theme.colors.bg2,
        borderColor: theme.colors.border,
      }}
    >
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <h3
            className="text-xs font-semibold uppercase tracking-wider md:text-sm"
            style={{ color: theme.colors.text }}
          >
            Weekly Overview
          </h3>
          <p
            className="text-xs py-[2.5px]"
            style={{ color: theme.colors.textSecondary }}
          >
            Calories in vs burned
          </p>
        </div>
        <div className="flex gap-2 text-xs font-semibold uppercase tracking-wider">
          <div className="flex items-center gap-1">
            <div
              className="size-2 rounded-full"
              style={{ backgroundColor: theme.colors.primary }}
            ></div>
            <div style={{ color: theme.colors.textSecondary }}>Intake</div>
          </div>
          <div className="flex items-center gap-1">
            <div
              className="size-2 rounded-full"
              style={{ backgroundColor: theme.colors.coral }}
            ></div>
            <div style={{ color: theme.colors.textSecondary }}>Burned</div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill={theme.colors.primary} radius={4} />
            <Bar dataKey="mobile" fill={theme.colors.coral} radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default CaloriesAndburnedChart;
