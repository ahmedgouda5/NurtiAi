"use client";

import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { weeklyCaloriesData } from "@/data/charts";
import { CanvasWrap, Header, Meta, Title, Wrap } from "./styles";
import { GlassCard } from "@/AppFeature/shared/GlassCard";
import { useTranslation } from "react-i18next";
import { ChartTooltip } from "@/components/charts/ChartTooltip";
import { CHART_COLORS, TICK_COLOR, GRID_COLOR } from "@/components/charts/chartTheme";

export function WeeklyCaloriesChart() {
  const { t } = useTranslation();

  return (
    <GlassCard padding="0">
      <Wrap as={motion.div} whileHover={{ y: -4 }}>
        <Header>
          <div>
            <Title>{t("Analytics.WeeklyCaloriesChart.title")}</Title>
            <Meta>{t("Analytics.WeeklyCaloriesChart.meta")}</Meta>
          </div>
          <Meta>1,965 avg</Meta>
        </Header>
        <CanvasWrap>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={weeklyCaloriesData}
              margin={{ top: 8, right: 8, left: -16, bottom: 0 }}
              barCategoryGap="30%"
            >
              <CartesianGrid
                stroke={GRID_COLOR}
                vertical={false}
              />
              <XAxis
                dataKey="label"
                tick={{ fill: TICK_COLOR, fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: TICK_COLOR, fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                content={<ChartTooltip />}
                cursor={{ fill: "rgba(255,255,255,0.04)" }}
              />
              <Bar
                dataKey="value"
                name="Calories"
                radius={[7, 7, 0, 0]}
                isAnimationActive={true}
                animationDuration={700}
              >
                {weeklyCaloriesData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={CHART_COLORS.blueFill}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CanvasWrap>
      </Wrap>
    </GlassCard>
  );
}
