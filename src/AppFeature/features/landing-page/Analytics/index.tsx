"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/AppFeature/shared/SectionTitle";
import { WeeklyCaloriesChart } from "@/AppFeature/charts/WeeklyCaloriesChart";
import { WeightProgressChart } from "@/AppFeature/charts/WeightProgressChart";
import { MacroDonutChart } from "@/AppFeature/charts/MacroDonutChart";
import { fadeUp, staggerContainer } from "@/utils/animations";
import {
  MetricCard,
  MetricGrid,
  MetricLabel,
  MetricValue,
  Grid,
  Section,
  Side,
} from "./styles";
import { SpanItalic } from "../Hero/styles";

const metrics = [
  { label: "Active users", value: "28.4k" },
  { label: "Avg adherence", value: "91%" },
  { label: "Meal scans", value: "4.2m" },
  { label: "Coach bookings", value: "12.8k" },
];

export function Analytics() {
  return (
    <Section id="analytics">
      <div className="container">
        <SectionTitle
          eyebrow="Analytics"
          title={
            <>
              See your <SpanItalic>transformation</SpanItalic> in real time
            </>
          }
        />

        <Grid>
          <Side>
            <WeightProgressChart />
            <WeeklyCaloriesChart />
          </Side>
          <Side
            as={motion.div}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <MetricGrid>
              {metrics.map((metric) => (
                <MetricCard
                  as={motion.div}
                  key={metric.label}
                  variants={fadeUp}
                >
                  <MetricLabel>{metric.label}</MetricLabel>
                  <MetricValue>{metric.value}</MetricValue>
                </MetricCard>
              ))}
            </MetricGrid>
            <MacroDonutChart />
          </Side>
        </Grid>
      </div>
    </Section>
  );
}

export default Analytics;
