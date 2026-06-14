"use client";

import { useId } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { ChartCard, ChartTitle, TooltipWrapper } from "../style";
import { WeightData } from "../types";

interface WeightChartProps {
  data: WeightData[];
}

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number }>; label?: string }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "#0C1830",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "12px",
          padding: "0.65rem 0.85rem",
          boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
        }}
      >
        <p style={{ color: "#7A90B3", fontSize: "0.75rem", margin: "0 0 0.25rem 0" }}>
          {label}
        </p>
        <p style={{ color: "#F0F6FF", fontSize: "0.85rem", fontWeight: 600, margin: 0 }}>
          {payload[0].value} kg
        </p>
      </div>
    );
  }
  return null;
};

const WeightChart = ({ data }: WeightChartProps) => {
  const gradientId = useId();

  return (
    <ChartCard>
      <ChartTitle>Weight Over Time</ChartTitle>
      <TooltipWrapper>
        <ResponsiveContainer width="100%" height={280}>
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00D68F" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#00D68F" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
            <XAxis
              dataKey="month"
              stroke="#7A90B3"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#7A90B3"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              domain={["dataMin - 2", "dataMax + 2"]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="weight"
              stroke="#00D68F"
              strokeWidth={2.5}
              fill={`url(#${gradientId})`}
              dot={{ r: 4, fill: "#00D68F", stroke: "#050D1A", strokeWidth: 2 }}
              activeDot={{ r: 6, fill: "#00D68F", stroke: "#050D1A", strokeWidth: 3 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </TooltipWrapper>
    </ChartCard>
  );
};

export default WeightChart;
