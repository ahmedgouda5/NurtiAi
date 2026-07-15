"use client";

import { theme } from "@/styles/theme";
import { useState } from "react";
import { FaRunning } from "react-icons/fa";

const RunSteps = () => {
  const [steps] = useState(8234);
  const goal = 10000;
  const progress = (steps / goal) * 100;
  return (
    <div
      className="h-full rounded-3xl border p-2 "
      style={{
        backgroundColor: theme.colors.bg2,
        borderColor: theme.colors.border,
      }}
    >
      <nav className="flex justify-between">
        <h1
          style={{ color: theme.colors.text }}
          className="flex items-center text-md font-semibold tracking-wider"
        >
          <FaRunning style={{ color: theme.colors.purple }} />
          Steps Today
        </h1>

        <span style={{ color: theme.colors.textSecondary }}>{steps} steps</span>
      </nav>
      <section className="my-8">
        <div className="flex items-center gap-3">
          <div
            className="h-3 w-full overflow-hidden rounded-full"
            style={{ backgroundColor: theme.colors.textSecondary }}
          >
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{
                width: `${progress}%`,
                background: `linear-gradient(90deg, ${theme.colors.coral} 30%, ${theme.colors.amber} 70%)`,
              }}
            />
          </div>

          <span style={{ color: theme.colors.textSecondary }}>{progress}%</span>
        </div>

        <span
          className="mt-2 block text-left"
          style={{ color: theme.colors.textSecondary }}
        >
          {progress}% of {goal} goal
        </span>
      </section>
    </div>
  );
};

export default RunSteps;
