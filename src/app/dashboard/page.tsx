import AiRecommendations from "@/AppFeature/Dashboard/Overview/AiRecommendations";
import BMIcalculator from "@/AppFeature/Dashboard/Overview/BMIcalculator";
import { MeasuersBoxes } from "@/AppFeature/Dashboard/Overview/MeasuersBoxes";
import RunSteps from "@/AppFeature/Dashboard/Overview/RunSteps";
import Sleep from "@/AppFeature/Dashboard/Overview/Sleep";
import TodayMeals from "@/AppFeature/Dashboard/Overview/Today'sMeals";
import WaterIntake from "@/AppFeature/Dashboard/Overview/WaterIntake";
import dynamic from "next/dynamic";

const CaloriesChart = dynamic(
  () => import("@/AppFeature/Dashboard/Overview/CaloriesAndburnedChart"),
  {
    loading: () => <div>Loading...</div>,
  },
);
const page = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <MeasuersBoxes
          title="Calories Today"
          value="1200"
          subtitle="of 2,200 goal"
          valueColor="text-[#00D68F]"
          progress={60}
          progressColor={["#00D68F", "#38BDF8"]}
        />
        <MeasuersBoxes
          title="Calories Burned"
          value="342
"
          subtitle="kcal from exercise
"
          valueColor="text-[#FF6B6B]"
          progress={40}
          progressColor={["#FF6B6B", "#F59E0B"]}
        />
        <MeasuersBoxes
          title="Current Weight
"
          value="77.8 kg
"
          subtitle=" −0.4 this week
"
          valueColor="text-[#FFFFFF]"
        />
        <MeasuersBoxes
          title="Weekly Streak
"
          value="14 🔥"
          subtitle="days in a row!
"
          valueColor="text-[#F59E0B]"
        />
      </div>
      <div className="grid gap-6 md:grid-cols-2 my-6">
        <CaloriesChart />
        <div className="grid grid-rows-2  gap-2">
          <WaterIntake />
          <Sleep />
        </div>
      </div>
      <div>
        <RunSteps />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <AiRecommendations />
        <TodayMeals />
        <BMIcalculator />
      </div>
    </>
  );
};

export default page;
