import { theme } from "@/styles/theme";
import { FaBrain } from "react-icons/fa6";

const EMOJI_MAP: Record<number, { emoji: string; color: string }> = {
  0: { emoji: "🥗", color: theme.colors.primaryDark },
  1: { emoji: "💧", color: theme.colors.amber },
  2: { emoji: "🏃", color: theme.colors.purple },
  3: { emoji: "😴", color: theme.colors.blue },
  4: { emoji: "🧘", color: theme.colors.primaryDark },
  5: { emoji: "💪", color: theme.colors.purple },
};

const BG_MAP: Record<number, string> = {
  0: theme.colors.primary,
  1: theme.colors.amber,
  2: theme.colors.purple,
  3: theme.colors.blue,
  4: theme.colors.primary,
  5: theme.colors.purple,
};

type AiRecommendationsProps = {
  recommendations?: string[];
};

const DEFAULT_RECOMMENDATIONS = [
  "Add more fiber today. Try a quinoa salad with chickpeas for dinner — you're 14g short of your fiber goal.",
  "You need 2 more glasses of water before bedtime. Dehydration slows fat metabolism by up to 3%.",
  "Great consistency this week! Tomorrow's scheduled rest day — light stretching only to maximize recovery.",
];

const AiRecommendations = ({ recommendations }: AiRecommendationsProps) => {
  const items = recommendations?.length
    ? recommendations
    : DEFAULT_RECOMMENDATIONS;

  return (
    <div
      className="rounded-3xl border p-4"
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
      {items.map((text, index) => {
        const { emoji, color } = EMOJI_MAP[index % Object.keys(EMOJI_MAP).length];
        const bg = BG_MAP[index % Object.keys(BG_MAP).length];
        return (
          <div
            key={index}
            className="my-2 rounded-2xl border bg-clip-padding p-3 backdrop-blur-sm"
            style={{
              backgroundColor: `${bg}10`,
              borderColor: color,
            }}
          >
            <h2 style={{ color }}>{emoji} Tip {index + 1}</h2>
            <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
              {text}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default AiRecommendations;
