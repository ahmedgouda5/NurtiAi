import { WeightData, CaloriesData, ProgressMetric } from "./types";

export const weightData: WeightData[] = [
  { month: "Jan", weight: 86 },
  { month: "Feb", weight: 84 },
  { month: "Mar", weight: 83 },
  { month: "Apr", weight: 82 },
  { month: "May", weight: 81 },
  { month: "Jun", weight: 79.5 },
  { month: "Jul", weight: 78.5 },
  { month: "Aug", weight: 77.8 },
];

export const caloriesData: CaloriesData[] = [
  { month: "Jan", calories: 2450 },
  { month: "Feb", calories: 2380 },
  { month: "Mar", calories: 2200 },
  { month: "Apr", calories: 2150 },
  { month: "May", calories: 2080 },
  { month: "Jun", calories: 2020 },
  { month: "Jul", calories: 1980 },
  { month: "Aug", calories: 1960 },
];

export const progressMetrics: ProgressMetric[] = [
  {
    id: "weight",
    icon: "FaWeight",
    label: "Weight",
    previous: "82 kg",
    current: "77.8 kg",
    color: "primary",
  },
  {
    id: "bmi",
    icon: "FaChartLine",
    label: "BMI",
    previous: "30.1",
    current: "28.6",
    color: "blue",
  },
  {
    id: "steps",
    icon: "FaShoePrints",
    label: "Daily Steps",
    previous: "4,200",
    current: "8,234",
    color: "purple",
  },
  {
    id: "streak",
    icon: "FaFire",
    label: "Streak",
    previous: "3 days",
    current: "14 days 🔥",
    color: "amber",
  },
];
