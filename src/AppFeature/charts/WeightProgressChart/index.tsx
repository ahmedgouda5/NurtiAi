"use client";

import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { weightProgressData } from "@/data/charts";
import { CanvasWrap, Header, Meta, Title, Wrap } from "./styles";
import { GlassCard } from "@/AppFeature/shared/GlassCard";
import { useTranslation } from "react-i18next";
import { ChartTooltip } from "@/components/charts/ChartTooltip";
import {
  CHART_COLORS,
  TICK_COLOR,
  GRID_COLOR,
  DOT_STROKE,
  DOT_RADIUS,
} from "@/components/charts/chartTheme";

export function WeightProgressChart() {
  const { t } = useTranslation();

  return (
    <GlassCard padding="0">
      <Wrap as={motion.div} whileHover={{ y: -4 }}>
        <Header>
          <div>
            <Title>{t("Analytics.WeightProgressChart.title")}</Title>
            <Meta>{t("Analytics.WeightProgressChart.meta")}</Meta>
          </div>
          <Meta>-5.4%</Meta>
        </Header>
        <CanvasWrap>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={weightProgressData}
              margin={{ top: 8, right: 8, left: -16, bottom: 0 }}
            >
              <defs>
                <linearGradient id="weightGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor={CHART_COLORS.green}
                    stopOpacity={0.18}
                  />
                  <stop
                    offset="95%"
                    stopColor={CHART_COLORS.green}
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid stroke={GRID_COLOR} vertical={false} />
              <XAxis
                dataKey="month"
                tick={{ fill: TICK_COLOR, fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: TICK_COLOR, fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip content={<ChartTooltip />} cursor={{ stroke: GRID_COLOR }} />
              <Area
                type="monotone"
                dataKey="value"
                name="Weight"
                stroke={CHART_COLORS.green}
                strokeWidth={3}
                fill="url(#weightGradient)"
                dot={{
                  r: DOT_RADIUS,
                  fill: CHART_COLORS.green,
                  stroke: DOT_STROKE,
                  strokeWidth: 2,
                }}
                activeDot={{
                  r: DOT_RADIUS + 2,
                  fill: CHART_COLORS.green,
                  stroke: DOT_STROKE,
                  strokeWidth: 2,
                }}
                isAnimationActive={true}
                animationDuration={800}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CanvasWrap>
      </Wrap>
    </GlassCard>
  );
}
