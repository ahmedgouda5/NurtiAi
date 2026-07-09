"use client";

import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { macroData } from "@/data/charts";
import { CanvasWrap, Header, Meta, Title, Wrap } from "./styles";
import { GlassCard } from "@/AppFeature/shared/GlassCard";
import { useTranslation } from "react-i18next";
import { ChartTooltip } from "@/components/charts/ChartTooltip";

export function MacroDonutChart() {
  const { t } = useTranslation();

  return (
    <GlassCard padding="0">
      <Wrap as={motion.div} whileHover={{ y: -4 }}>
        <Header>
          <div>
            <Title>{t("Analytics.MacroDonutChart.title")}</Title>
            <Meta>{t("Analytics.MacroDonutChart.meta")}</Meta>
          </div>
          <Meta>100%</Meta>
        </Header>
        <CanvasWrap>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={macroData}
                dataKey="value"
                nameKey="label"
                cx="50%"
                cy="50%"
                innerRadius="62%"
                outerRadius="82%"
                strokeWidth={0}
                paddingAngle={2}
                isAnimationActive={true}
                animationDuration={800}
              >
                {macroData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                  />
                ))}
              </Pie>
              <Tooltip content={<ChartTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </CanvasWrap>
      </Wrap>
    </GlassCard>
  );
}
