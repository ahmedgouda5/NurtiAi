import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface HealthPlan {
  daily_calories: number;
  daily_protein: number;
  daily_carbs: number;
  daily_fat: number;
  daily_water_liters: number;
  recommended_workout_days: number;
  nutrition_recommendations: string[];
  exercise_recommendations: string[];
  lifestyle_recommendations: string[];
  summary: string;
}

interface HealthPlanState {
  plan: HealthPlan | null;
  setPlan: (plan: HealthPlan) => void;
  clearPlan: () => void;
}

const noopStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
};

const useHealthPlanStore = create<HealthPlanState>()(
  persist(
    (set) => ({
      plan: null,
      setPlan: (plan) => set({ plan }),
      clearPlan: () => set({ plan: null }),
    }),
    {
      name: "health-plan",
      storage: createJSONStorage(() =>
        typeof window !== "undefined" ? window.sessionStorage : noopStorage,
      ),
    },
  ),
);

export default useHealthPlanStore;
