export type BmiResult = {
  value: number;
  category: 'Underweight' | 'Normal' | 'Overweight' | 'Obesity';
};

export function calculateBmi(weightKg: number, heightCm: number): BmiResult {
  const heightM = heightCm / 100;
  const value = Number((weightKg / (heightM * heightM)).toFixed(1));

  if (value < 18.5) {
    return { value, category: 'Underweight' };
  }

  if (value < 25) {
    return { value, category: 'Normal' };
  }

  if (value < 30) {
    return { value, category: 'Overweight' };
  }

  return { value, category: 'Obesity' };
}

