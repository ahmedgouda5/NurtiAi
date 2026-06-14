import { memo } from "react";
import { FaWeight, FaChartLine, FaShoePrints, FaFire } from "react-icons/fa";
import {
  MetricCard,
  MetricIcon,
  MetricLabel,
  MetricValues,
  MetricPrevious,
  MetricCurrent,
} from "../style";
import { ProgressMetric } from "../types";

interface ProgressCardProps {
  metric: ProgressMetric;
}

const iconMap: Record<string, React.ReactNode> = {
  FaWeight: <FaWeight />,
  FaChartLine: <FaChartLine />,
  FaShoePrints: <FaShoePrints />,
  FaFire: <FaFire />,
};

const ProgressCard = memo(({ metric }: ProgressCardProps) => {
  return (
    <MetricCard
      $color={metric.color}
      role="article"
      aria-label={`${metric.label} progress`}
    >
      <MetricIcon $color={metric.color}>{iconMap[metric.icon]}</MetricIcon>
      <MetricLabel>{metric.label}</MetricLabel>
      <MetricValues>
        <MetricPrevious>{metric.previous}</MetricPrevious>
        <MetricCurrent>{metric.current}</MetricCurrent>
      </MetricValues>
    </MetricCard>
  );
});

ProgressCard.displayName = "ProgressCard";

export default ProgressCard;
