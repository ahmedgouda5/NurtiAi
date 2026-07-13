import { theme } from "@/styles/theme";

type MealEntry = {
  id: number;
  name: string;
  cal: string;
  fat: string;
  carbs: string;
  protein: string;
  Food: string[];
};

type TodayMealsProps = {
  nutritionRecommendations?: string[];
  dailyCalories?: number;
  dailyProtein?: number;
  dailyCarbs?: number;
  dailyFat?: number;
};

const MEAL_LABELS = [
  { icon: "🌅", label: "Breakfast" },
  { icon: "☀️", label: "Lunch" },
  { icon: "🌙", label: "Dinner" },
];

function buildMealsFromPlan(
  recommendations: string[],
  dailyCalories: number,
  dailyProtein: number,
  dailyCarbs: number,
  dailyFat: number,
): MealEntry[] {
  // Rough split: Breakfast 25%, Lunch 40%, Dinner 35%
  const splits = [0.25, 0.4, 0.35];

  return recommendations.slice(0, 3).map((rec, i) => {
    const split = splits[i] ?? 0.33;
    return {
      id: i + 1,
      name: ` ${MEAL_LABELS[i]?.icon ?? "🍽️"} ${MEAL_LABELS[i]?.label ?? `Meal ${i + 1}`}`,
      cal: Math.round(dailyCalories * split).toString(),
      protein: `${Math.round(dailyProtein * split)}g`,
      carbs: `${Math.round(dailyCarbs * split)}g`,
      fat: `${Math.round(dailyFat * split)}g`,
      Food: rec
        .split(/[,.;]/)
        .map((s) => s.trim())
        .filter(Boolean)
        .slice(0, 4),
    };
  });
}

const DEFAULT_MEALS: MealEntry[] = [
  {
    id: 1,
    name: " 🌅 Breakfast",
    cal: "550",
    fat: "15g",
    carbs: "70g",
    protein: "30g",
    Food: ["eggs", "oats", "fruit"],
  },
  {
    id: 2,
    name: " ☀️ Lunch",
    cal: "880",
    fat: "25g",
    carbs: "110g",
    protein: "50g",
    Food: ["rice", "chicken", "salad"],
  },
  {
    id: 3,
    name: " 🌙 Dinner",
    cal: "770",
    fat: "20g",
    carbs: "95g",
    protein: "45g",
    Food: ["fish", "vegetables", "quinoa"],
  },
];

const TodayMeals = ({
  nutritionRecommendations,
  dailyCalories = 2200,
  dailyProtein = 120,
  dailyCarbs = 250,
  dailyFat = 70,
}: TodayMealsProps) => {
  const Meals =
    nutritionRecommendations && nutritionRecommendations.length >= 3
      ? buildMealsFromPlan(
          nutritionRecommendations,
          dailyCalories,
          dailyProtein,
          dailyCarbs,
          dailyFat,
        )
      : DEFAULT_MEALS;

  return (
    <div
      className="rounded-3xl border p-4"
      style={{
        backgroundColor: theme.colors.border,
        borderColor: theme.colors.border,
      }}
    >
      <nav className="flex justify-between">
        <h1
          className="text-lg font-bold tracking-wider flex gap-2 items-center"
          style={{ color: theme.colors.text }}
        >
          Today&apos;s Meals
        </h1>
        <button style={{ color: theme.colors.primaryDark }}>+Add</button>
      </nav>
      <section>
        {Meals.map((meal) => (
          <div
            key={meal.id}
            className="my-2 rounded-2xl border bg-clip-padding p-3 backdrop-blur-sm"
            style={{
              backgroundColor: theme.colors.border,
              borderColor: theme.colors.border,
            }}
          >
            <div className="flex justify-between items-center">
              <h2 style={{ color: theme.colors.text }}>{meal.name}</h2>
              <h4 style={{ color: theme.colors.primary }}>{meal.cal} Kcal</h4>
            </div>
            <div className="flex items-center justify-between">
              <p
                className="text-sm"
                style={{ color: theme.colors.textSecondary }}
              >
                {meal.Food.map((food, idx) => (
                  <span key={food}>
                    {food} {idx < meal.Food.length - 1 ? "," : ""}
                  </span>
                ))}
              </p>
              <div
                className="flex justify-between items-center text-sm gap-[1.5px]"
                style={{ color: theme.colors.textSecondary }}
              >
                <h4>F:{meal.fat} </h4>
                <h4>C:{meal.carbs}</h4>
                <h4>P:{meal.protein}</h4>
              </div>
            </div>
          </div>
        ))}
      </section>
      <button
        className="w-full py-2 rounded-xl mt-2 font-semibold text-white"
        style={{
          backgroundColor: `${theme.colors.primaryDark}55`,
          color: theme.colors.primary,
        }}
      >
        + Add New Meal
      </button>
    </div>
  );
};

export default TodayMeals;
