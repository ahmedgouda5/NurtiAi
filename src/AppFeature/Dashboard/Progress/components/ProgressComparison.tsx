import { memo } from "react";
import ProgressCard from "./ProgressCard";
import { ComparisonSection, ComparisonTitle, ComparisonGrid } from "../style";
import { ProgressMetric } from "../types";

interface ProgressComparisonProps {
  metrics: ProgressMetric[];
}

const ProgressComparison = memo(({ metrics }: ProgressComparisonProps) => {
  return (
    <ComparisonSection>
      <ComparisonTitle>Progress Comparison</ComparisonTitle>
      <ComparisonGrid>
        {metrics.map((metric) => (
          <ProgressCard key={metric.id} metric={metric} />
        ))}
      </ComparisonGrid>
    </ComparisonSection>
  );
});

ProgressComparison.displayName = "ProgressComparison";

export default ProgressComparison;
