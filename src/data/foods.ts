import type { FoodItem } from '@/types/food';

export const foods: FoodItem[] = [
  {
    id: 'shawarma-bowl',
    name: 'Chicken Shawarma Bowl',
    arabicName: 'طبق شاورما الدجاج',
    calories: 540,
    protein: 42,
    carbs: 36,
    fat: 24,
    image: '/images/foods/shawarma-bowl.jpg',
    description: 'Lean chicken with rice, tahini, greens, and preserved lemon.',
    tags: ['MENA favorite', 'High protein', 'Lunch'],
  },
  {
    id: 'ful-medames',
    name: 'Ful Medames Boost',
    arabicName: 'فول مدمس',
    calories: 320,
    protein: 19,
    carbs: 30,
    fat: 11,
    image: '/images/foods/ful-medames.jpg',
    description: 'Slow-cooked fava beans with olive oil, cumin, and herbs.',
    tags: ['Fiber rich', 'Breakfast', 'Budget friendly'],
  },
  {
    id: 'labneh-wrap',
    name: 'Labneh Wrap',
    arabicName: 'رول لبنة',
    calories: 280,
    protein: 17,
    carbs: 18,
    fat: 15,
    image: '/images/foods/labneh-wrap.jpg',
    description: 'Whole grain wrap with labneh, cucumber, mint, and zaatar.',
    tags: ['Quick prep', 'Snack', 'Vegetarian'],
  },
];

