"use client";

import AiRecommendations from "@/AppFeature/Dashboard/Overview/AiRecommendations";
import BMIcalculator from "@/AppFeature/Dashboard/Overview/BMIcalculator";
import { MeasuersBoxes } from "@/AppFeature/Dashboard/Overview/MeasuersBoxes";
import RunSteps from "@/AppFeature/Dashboard/Overview/RunSteps";
import Sleep from "@/AppFeature/Dashboard/Overview/Sleep";
import TodayMeals from "@/AppFeature/Dashboard/Overview/Today'sMeals";
import WaterIntake from "@/AppFeature/Dashboard/Overview/WaterIntake";
import dynamic from "next/dynamic";
import useHealthPlanStore from "@/store/HealthPlan.Store";
import useUserStore from "@/store/User.Store";

const CaloriesChart = dynamic(
  () => import("@/AppFeature/Dashboard/Overview/CaloriesAndburnedChart"),
  {
    loading: () => <div>Loading...</div>,
  },
);

const Page = () => {
  const plan = useHealthPlanStore((s) => s.plan);
  const user = useUserStore((s) => s.user);

  const caloriesProgress = plan
    ? Math.min(Math.round((1200 / plan.daily_calories) * 100), 100)
    : 60;

  const weightDisplay = user?.weight ? `${user.weight} kg` : "— kg";

  const workoutDays = plan?.recommended_workout_days ?? 4;

  const allRecommendations = [
    ...(plan?.nutrition_recommendations ?? []),
    ...(plan?.exercise_recommendations ?? []),
    ...(plan?.lifestyle_recommendations ?? []),
  ];

  return (
    <>
      {plan?.summary && (
        <div
          className="mb-6 rounded-2xl border p-4 text-sm"
          style={{
            backgroundColor: "rgba(0,214,143,0.07)",
            borderColor: "rgba(0,214,143,0.25)",
            color: "#a0f0d8",
          }}
        >
          <span className="font-semibold text-[#00D68F]">✨ Your AI Plan: </span>
          {plan.summary}
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <MeasuersBoxes
          title="Daily Calories"
          value={plan ? `${plan.daily_calories.toLocaleString()}` : "2,200"}
          subtitle="kcal daily target"
          valueColor="text-[#00D68F]"
          progress={caloriesProgress}
          progressColor={["#00D68F", "#38BDF8"]}
        />
        <MeasuersBoxes
          title="Protein / Carbs / Fat"
          value={
            plan
              ? `${plan.daily_protein}g · ${plan.daily_carbs}g · ${plan.daily_fat}g`
              : "120g · 250g · 70g"
          }
          subtitle="protein · carbs · fat"
          valueColor="text-[#FF6B6B]"
          progress={plan ? Math.min(Math.round((plan.daily_protein / 200) * 100), 100) : 40}
          progressColor={["#FF6B6B", "#F59E0B"]}
        />
        <MeasuersBoxes
          title="Current Weight"
          value={weightDisplay}
          subtitle="from your profile"
          valueColor="text-[#FFFFFF]"
        />
        <MeasuersBoxes
          title="Workout Goal"
          value={`${workoutDays} days 🔥`}
          subtitle="recommended per week"
          valueColor="text-[#F59E0B]"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 my-6">
        <CaloriesChart />
        <div className="grid grid-rows-2 gap-2">
          <WaterIntake dailyWaterLiters={plan?.daily_water_liters} />
          <Sleep />
        </div>
      </div>

      <div>
        <RunSteps />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <AiRecommendations recommendations={allRecommendations} />
        <TodayMeals
          nutritionRecommendations={plan?.nutrition_recommendations}
          dailyCalories={plan?.daily_calories}
          dailyProtein={plan?.daily_protein}
          dailyCarbs={plan?.daily_carbs}
          dailyFat={plan?.daily_fat}
        />
        <BMIcalculator />
      </div>
    </>
  );
};

export default Page;
