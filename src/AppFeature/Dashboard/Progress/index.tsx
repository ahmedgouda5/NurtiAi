import WeightChart from "./components/WeightChart";
import CaloriesChart from "./components/CaloriesChart";
import ProgressComparison from "./components/ProgressComparison";
import { ProgressPage, ChartsGrid } from "./style";
import { weightData, caloriesData, progressMetrics } from "./data";

const ProgressDashboard = () => {
  return (
    <ProgressPage>
      <ChartsGrid>
        <WeightChart data={weightData} />
        <CaloriesChart data={caloriesData} />
      </ChartsGrid>

      <ProgressComparison metrics={progressMetrics} />
    </ProgressPage>
  );
};

export default ProgressDashboard;
