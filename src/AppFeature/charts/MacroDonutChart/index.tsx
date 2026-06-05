"use client";

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { motion } from "framer-motion";
import { macroData } from "@/data/charts";
import { CanvasWrap, Header, Meta, Title, Wrap } from "./styles";
import { GlassCard } from "@/AppFeature/shared/GlassCard";

ChartJS.register(ArcElement, Tooltip, Legend);

export function MacroDonutChart() {
  const data = {
    labels: macroData.map((entry) => entry.label),
    datasets: [
      {
        data: macroData.map((entry) => entry.value),
        backgroundColor: macroData.map((entry) => entry.color),
        borderWidth: 0,
        hoverOffset: 6,
      },
    ],
  };

  return (
    <GlassCard padding="0">
      <Wrap as={motion.div} whileHover={{ y: -4 }}>
        <Header>
          <div>
            <Title>Macro split</Title>
            <Meta>Balanced for strength and recovery</Meta>
          </div>
          <Meta>100%</Meta>
        </Header>
        <CanvasWrap>
          <Doughnut
            data={data}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              cutout: "72%",
              plugins: {
                legend: { display: false },
                tooltip: {
                  backgroundColor: "#081222",
                  titleColor: "#F0F6FF",
                  bodyColor: "#7A90B3",
                },
              },
            }}
          />
        </CanvasWrap>
      </Wrap>
    </GlassCard>
  );
}
