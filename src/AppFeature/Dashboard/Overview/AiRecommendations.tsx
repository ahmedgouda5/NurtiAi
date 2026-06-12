"use client";
import { theme } from "@/styles/theme";
import { FaBrain } from "react-icons/fa6";
const recomendations = [
  {
    title: "🥗 Meal Suggestion",
    description:
      "Add more fiber today. Try a quinoa salad with chickpeas for dinner — you're 14g short of your fiber goal.",
    color: theme.colors.primaryDark,
    bg: theme.colors.primary,
  },
  {
    title: "💧 Hydration Alert",
    description:
      "You need 2 more glasses of water before bedtime. Dehydration slows fat metabolism by up to 3%.",
    color: theme.colors.amber,
    bg: theme.colors.amber,
  },
  {
    title: "🏃🏿 Workout Tip",
    description:
      "Great consistency this week! Tomorrow's scheduled rest day — light stretching only to maximize recovery.",
    color: theme.colors.purple,
    bg: theme.colors.purple,
  },
];

const AiRecommendations = () => {
  return (
    <div
      className="rounded-3xl border p-5"
      style={{
        backgroundColor: theme.colors.border,
        borderColor: theme.colors.border,
      }}
    >
      <h1
        className="text-xl font-semibold tracking-wider flex gap-2 items-center"
        style={{ color: theme.colors.text }}
      >
        <FaBrain style={{ color: theme.colors.primary }} /> AI Recommendations
      </h1>
      {recomendations.map((item) => (
        <div
          key={item.title}
          className="my-2 rounded-2xl border bg-clip-padding p-3  backdrop-blur-sm"
          style={{
            backgroundColor: `${item.bg}10`,
            borderColor: item.color,
          }}
        >
          <h2 style={{ color: item.color }}>{item.title}</h2>
          <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AiRecommendations;
