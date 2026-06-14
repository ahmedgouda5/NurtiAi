export interface WeightData {
  month: string;
  weight: number;
}

export interface CaloriesData {
  month: string;
  calories: number;
}

export interface ProgressMetric {
  id: string;
  icon: string;
  label: string;
  previous: string;
  current: string;
  color: string;
}
