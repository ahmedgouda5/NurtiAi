"use client";

import useBMI from "@/hooks/UseBMI";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { theme } from "@/styles/theme";

const BMIcalculator = () => {
  const { weight, height, bmi, status, calculateBMI, setWeight, setHeight } =
    useBMI();
  const [focused, setFocused] = useState<string | null>(null);

  const getStatusColor = () => {
    if (!status) return "#7A90B3";
    const s = status.toLowerCase();
    if (s.includes("normal")) return "#00D68F";
    if (s.includes("overweight")) return "#F59E0B";
    if (s.includes("underweight")) return "#38BDF8";
    if (s.includes("obese")) return "#FF6B6B";
    return "#7A90B3";
  };

  const getBMIPercentage = () => {
    if (bmi === null) return 0;
    return Math.min(Math.max((bmi / 40) * 100, 0), 100);
  };

  return (
    <div
      className="rounded-3xl border p-4"
      style={{
        backgroundColor: theme.colors.border,

        borderColor: theme.colors.border,
      }}
    >
      <div className="mb-6">
        <div className="mb-2 flex items-center gap-3">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-xl"
            style={{
              background: "linear-gradient(135deg, #00D68F22, #00A87822)",
            }}
          >
            <span className="text-lg">⚖️</span>
          </div>
          <h2 className="text-xl font-bold" style={{ color: "#F0F6FF" }}>
            BMI Calculator
          </h2>
        </div>
      </div>

      <form onSubmit={calculateBMI} className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label
              className="mb-1.5 block text-xs font-medium uppercase tracking-wider"
              style={{ color: "#7A90B3" }}
            >
              Weight
            </label>
            <div className="relative">
              <input
                type="number"
                placeholder="kg"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                onFocus={() => setFocused("weight")}
                onBlur={() => setFocused(null)}
                className="w-full rounded-xl border px-4 py-3 text-sm font-medium outline-none transition-all duration-200"
                style={{
                  background: "#0C1830",
                  borderColor:
                    focused === "weight" ? "#00D68F" : "rgba(255,255,255,0.07)",
                  color: "#F0F6FF",
                }}
              />
              <span
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium"
                style={{ color: "#7A90B3" }}
              >
                kg
              </span>
            </div>
          </div>

          <div>
            <label
              className="mb-1.5 block text-xs font-medium uppercase tracking-wider"
              style={{ color: "#7A90B3" }}
            >
              Height
            </label>
            <div className="relative">
              <input
                type="number"
                placeholder="cm"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                onFocus={() => setFocused("height")}
                onBlur={() => setFocused(null)}
                className="w-full rounded-xl border px-4 py-3 text-sm font-medium outline-none transition-all duration-200"
                style={{
                  background: "#0C1830",
                  borderColor:
                    focused === "height" ? "#00D68F" : "rgba(255,255,255,0.07)",
                  color: "#F0F6FF",
                }}
              />
              <span
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium"
                style={{ color: "#7A90B3" }}
              >
                cm
              </span>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-xl py-3 text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
          style={{
            background: "linear-gradient(135deg, #00D68F, #00A878)",
            color: "#F0F6FF",
          }}
        >
          Calculate BMI
        </button>
      </form>

      <AnimatePresence mode="wait">
        {bmi !== null && (
          <motion.div
            key="bmi-result"
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 24 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{
              height: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
              marginTop: { type: "spring", stiffness: 300, damping: 30 },
            }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              transition={{
                delay: 0.15,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className="rounded-2xl border p-5"
              style={{
                background: "#0C1830",
                borderColor: "rgba(255,255,255,0.07)",
              }}
            >
              <div className="mb-4 flex items-center justify-between">
                <span
                  className="text-xs font-medium uppercase tracking-wider"
                  style={{ color: "#7A90B3" }}
                >
                  Your BMI
                </span>
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.3,
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                  }}
                  className="rounded-full px-3 py-1 text-xs font-semibold"
                  style={{
                    background: getStatusColor() + "22",
                    color: getStatusColor(),
                  }}
                >
                  {status}
                </motion.span>
              </div>

              <div className="mb-3 flex items-baseline gap-2">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.2,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                  className="text-4xl font-bold"
                  style={{ color: "#F0F6FF" }}
                >
                  {bmi}
                </motion.span>
                <span className="text-sm" style={{ color: "#7A90B3" }}>
                  kg/m²
                </span>
              </div>

              <div
                className="relative h-2 w-full overflow-hidden rounded-full"
                style={{ background: "#081222" }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${getBMIPercentage()}%` }}
                  transition={{
                    delay: 0.4,
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute left-0 top-0 h-full rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, #38BDF8, #00D68F, #F59E0B, #FF6B6B)",
                  }}
                />
              </div>

              <div
                className="mt-2 flex justify-between text-[10px] font-medium"
                style={{ color: "#7A90B3" }}
              >
                <span>Underweight</span>
                <span>Normal</span>
                <span>Overweight</span>
                <span>Obese</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BMIcalculator;
