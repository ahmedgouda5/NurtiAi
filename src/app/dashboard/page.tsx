import { MeasuersBoxes } from "@/AppFeature/Dashboard/Overview/MeasuersBoxes";

const page = () => {
  return (
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
  );
};

export default page;
