"use client";
import { WorkoutsDay } from "@/data/WorkoutsDay";
import { theme } from "@/styles/theme";
import { useState } from "react";
import { motion } from "framer-motion";

const Workout = () => {
  const [workout, setWorkout] = useState(WorkoutsDay);

  const handleAddChecked = (id: number) => {
    setWorkout((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: item.status === "done" ? "pending" : "done",
            }
          : item,
      ),
    );
  };

  const completedCount = workout.filter((w) => w.status === "done").length;
  const totalCount = workout.length;
  const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <div className="space-y-4">
      <div
        className="rounded-2xl border p-4"
        style={{ background: "#081222", borderColor: "rgba(255,255,255,0.07)" }}
      >
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl"
              style={{
                background: "linear-gradient(135deg, #00D68F22, #00A87822)",
              }}
            >
              <span className="text-lg">🏋️</span>
            </div>
            <div>
              <h2 className="text-sm font-bold" style={{ color: "#F0F6FF" }}>
                Today&apos;s Workout
              </h2>
              <p className="text-xs" style={{ color: "#7A90B3" }}>
                {completedCount} of {totalCount} completed
              </p>
            </div>
          </div>
          <span
            className="rounded-full px-3 py-1 text-xs font-semibold"
            style={{ background: "#00D68F22", color: "#00D68F" }}
          >
            {Math.round(progress)}%
          </span>
        </div>

        <div
          className="relative h-2 w-full overflow-hidden rounded-full"
          style={{ background: "#0C1830" }}
        >
          <motion.div
            className="absolute left-0 top-0 h-full rounded-full"
            style={{ background: "linear-gradient(90deg, #00D68F, #00A878)" }}
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {workout.map((item, index) => {
          const isDone = item.status === "done";
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                type="button"
                onClick={() => handleAddChecked(item.id)}
                className="flex w-full items-center justify-between rounded-2xl border p-4 text-left transition-all duration-200"
                style={{
                  background: isDone ? "#00D68F0d" : "#081222",
                  borderColor: isDone ? "#00D68F33" : "rgba(255,255,255,0.07)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-6 w-6 items-center justify-center rounded-lg border-2 transition-all duration-200"
                    style={{
                      borderColor: isDone
                        ? "#00D68F"
                        : "rgba(255,255,255,0.15)",
                      background: isDone ? "#00D68F" : "transparent",
                    }}
                  >
                    {isDone && (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M2.5 6L5 8.5L9.5 3.5"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h3
                      className="text-sm font-semibold transition-all duration-200"
                      style={{
                        color: isDone ? "#7A90B3" : "#F0F6FF",
                        textDecoration: isDone ? "line-through" : "none",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-xs" style={{ color: "#7A90B3" }}>
                      {item.duration}
                    </p>
                  </div>
                </div>

                <span
                  className="rounded-full px-3 py-1 text-xs font-medium"
                  style={{
                    background: isDone ? "#00D68F22" : "#0C1830",
                    color: isDone ? "#00D68F" : "#7A90B3",
                  }}
                >
                  {isDone ? "Done ✓" : "Pending"}
                </span>
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Workout;
