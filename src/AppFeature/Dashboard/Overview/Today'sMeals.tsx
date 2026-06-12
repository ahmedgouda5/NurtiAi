import { theme } from "@/styles/theme";

const TodayMeals = () => {
  const Meals = [
    {
      id: 1,
      name: " 🌅 Breakfast",
      cal: "100",
      fat: "10g",
      carbs: "30g",
      protein: "20g",
      Food: ["eggs", "toast"],
    },
    {
      id: 2,
      name: " ☀️ Lunch",
      cal: "100",
      fat: "10g",
      carbs: "30g",
      protein: "20g",
      Food: ["rice", "chicken", "salad"],
    },
    {
      id: 3,
      name: " 🌙 Dinner",
      cal: "100",
      fat: "10g",
      carbs: "30g",
      protein: "20g",
      Food: ["fish", "vegetables", "pasta"],
    },
  ];
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
            className="my-2 rounded-2xl border bg-clip-padding p-3  backdrop-blur-sm"
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
