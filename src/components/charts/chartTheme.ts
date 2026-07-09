/**
 * Shared Recharts design tokens for NutriAI.
 * All chart components should import from here instead of
 * repeating inline style objects.
 */

// ─── Color Palette ──────────────────────────────────────────────────────────

export const CHART_COLORS = {
  green: "#00D68F",
  greenFill: "rgba(0, 214, 143, 0.18)",
  blue: "#38BDF8",
  blueFill: "rgba(56, 189, 248, 0.75)",
  purple: "#8B5CF6",
  protein: "#00D68F",
  carbs: "#38BDF8",
  fat: "#8B5CF6",
} as const;

export const MACRO_COLORS: Record<string, string> = {
  Protein: CHART_COLORS.protein,
  Carbs: CHART_COLORS.carbs,
  Fat: CHART_COLORS.fat,
};

// ─── Axis & Grid ─────────────────────────────────────────────────────────────

export const AXIS_TICK_STYLE: React.CSSProperties = {
  fill: "#7A90B3",
  fontSize: 12,
};

export const TICK_COLOR = "#7A90B3";
export const GRID_COLOR = "rgba(255,255,255,0.05)";

// ─── Tooltip ─────────────────────────────────────────────────────────────────

export const TOOLTIP_BG = "#081222";
export const TOOLTIP_TITLE_COLOR = "#F0F6FF";
export const TOOLTIP_BODY_COLOR = "#7A90B3";
export const TOOLTIP_BORDER_COLOR = "rgba(255,255,255,0.08)";

// ─── Dot (for line/area charts) ───────────────────────────────────────────────

export const DOT_STROKE = "#04101f";
export const DOT_RADIUS = 5;
