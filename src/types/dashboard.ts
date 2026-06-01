import type { FoodItem } from './food';
import type { WorkoutExercise } from './workout';
import type { BmiResult } from '@/utils/bmi';

export type DashboardTab = 'overview' | 'foods' | 'workouts' | 'progress' | 'community' | 'profile';

export type DashboardStats = {
  calories: number;
  targetCalories: number;
  protein: number;
  water: number;
  steps: number;
  streak: number;
};

export type DashboardMonthlySummary = {
  label: string;
  value: number;
};

export type DashboardState = {
  activeTab: DashboardTab;
  setActiveTab: (tab: DashboardTab) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  foods: FoodItem[];
  workouts: WorkoutExercise[];
  completedExerciseIds: string[];
  toggleExercise: (exerciseId: string) => void;
  bmi: BmiResult;
  monthlySummary: DashboardMonthlySummary[];
  stats: DashboardStats;
};

