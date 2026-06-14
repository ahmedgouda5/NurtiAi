import { theme } from "@/styles/theme";
import TodayMeals from "../Overview/Today'sMeals";
import FoodScanner from "./FoodScanner";

const FoodLogPage = () => {
  return (
    <div
      className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2"
      style={{ backgroundColor: theme.colors.bg }}
    >
      <FoodScanner />
      <TodayMeals />
    </div>
  );
};

export default FoodLogPage;
