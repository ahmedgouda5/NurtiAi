"use client";

import { SectionTitle } from "@/AppFeature/shared/SectionTitle";
import { WeeklyCaloriesChart } from "@/AppFeature/charts/WeeklyCaloriesChart";
import { WeightProgressChart } from "@/AppFeature/charts/WeightProgressChart";
import { MacroDonutChart } from "@/AppFeature/charts/MacroDonutChart";
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
import { useTranslation } from "react-i18next";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

export function Analytics() {
  const { t } = useTranslation();
  const metrics = [
    { id: 1, label: t("Analytics.metrics.labelOne"), value: "28.4k" },
    { id: 2, label: t("Analytics.metrics.labelTwo"), value: "91%" },
    { id: 3, label: t("Analytics.metrics.labelThree"), value: "4.2m" },
    { id: 4, label: t("Analytics.metrics.labelFour"), value: "12.8k" },
  ];
  const { ref, isVisible } = useInViewAnimation();

  return (
    <Section id="analytics">
      <div className="container">
        <SectionTitle
          eyebrow={t("Analytics.eyebrow")}
          title={
            <>
              {t("Analytics.title.normal")}{" "}
              <SpanItalic> {t("Analytics.title.italic")}</SpanItalic>
            </>
          }
        />

        <Grid>
          <Side>
            <WeightProgressChart />
            <WeeklyCaloriesChart />
          </Side>
          <Side ref={ref as React.Ref<HTMLDivElement>} $isVisible={isVisible}>
            <MetricGrid>
              {metrics.map((metric) => (
                <MetricCard key={metric.id}>
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
