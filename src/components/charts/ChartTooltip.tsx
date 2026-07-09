"use client";

import React from "react";
import {
  TOOLTIP_BG,
  TOOLTIP_TITLE_COLOR,
  TOOLTIP_BODY_COLOR,
  TOOLTIP_BORDER_COLOR,
} from "./chartTheme";

interface PayloadEntry {
  name?: string | number;
  value?: string | number;
  color?: string;
}

interface ChartTooltipProps {
  active?: boolean;
  payload?: PayloadEntry[];
  label?: string | number;
}

const tooltipWrapStyle: React.CSSProperties = {
  backgroundColor: TOOLTIP_BG,
  border: `1px solid ${TOOLTIP_BORDER_COLOR}`,
  borderRadius: 8,
  padding: "8px 12px",
  fontSize: 13,
  lineHeight: 1.6,
};

const labelStyle: React.CSSProperties = {
  color: TOOLTIP_TITLE_COLOR,
  fontWeight: 600,
  marginBottom: 2,
};

const valueStyle: React.CSSProperties = {
  color: TOOLTIP_BODY_COLOR,
};

/**
 * A typed, reusable dark-themed tooltip for Recharts.
 * Pass this as the `content` prop of Recharts <Tooltip />.
 *
 * @example
 * <Tooltip content={<ChartTooltip />} />
 */
export function ChartTooltip({ active, payload, label }: ChartTooltipProps) {
  if (!active || !payload || payload.length === 0) return null;

  return (
    <div style={tooltipWrapStyle}>
      {label !== undefined && <p style={labelStyle}>{label}</p>}
      {payload.map((entry: PayloadEntry, i: number) => (
        <p key={i} style={valueStyle}>
          <span style={{ color: entry.color ?? TOOLTIP_BODY_COLOR }}>
            {entry.name}
          </span>
          {": "}
          <strong style={{ color: TOOLTIP_TITLE_COLOR }}>{entry.value}</strong>
        </p>
      ))}
    </div>
  );
}
