import type { FoodItem } from '@/types/food';

export function sumMacros(items: FoodItem[]) {
  return items.reduce(
    (accumulator, item) => ({
      calories: accumulator.calories + item.calories,
      protein: accumulator.protein + item.protein,
      carbs: accumulator.carbs + item.carbs,
      fat: accumulator.fat + item.fat,
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0 },
  );
}

export function remainingCalories(targetCalories: number, currentCalories: number) {
  return Math.max(targetCalories - currentCalories, 0);
}

export function macroSplit(calories: number, protein: number, carbs: number, fat: number) {
  const total = protein + carbs + fat;
  if (total === 0) {
    return { protein: 0, carbs: 0, fat: 0 };
  }

  return {
    protein: Math.round((protein / total) * 100),
    carbs: Math.round((carbs / total) * 100),
    fat: Math.round((fat / total) * 100),
  };
}

