"use client";

import { useMemo } from "react";
import WeightChart from "./components/WeightChart";
import CaloriesChart from "./components/CaloriesChart";
import ProgressComparison from "./components/ProgressComparison";
import { ProgressPage, ChartsGrid } from "./style";
import { weightData, caloriesData, progressMetrics } from "./data";

const ProgressDashboard = () => {
  const memoizedWeightData = useMemo(() => weightData, []);
  const memoizedCaloriesData = useMemo(() => caloriesData, []);
  const memoizedMetrics = useMemo(() => progressMetrics, []);

  return (
    <ProgressPage>
      <ChartsGrid>
        <WeightChart data={memoizedWeightData} />
        <CaloriesChart data={memoizedCaloriesData} />
      </ChartsGrid>

      <ProgressComparison metrics={memoizedMetrics} />
    </ProgressPage>
  );
};

export default ProgressDashboard;
