"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, springTransition } from "@/utils/animations";
import { theme } from "@/styles/theme";
import { Button } from "@/AppFeature/shared/Button";
import { useRegisterForm } from "../RegisterFormContext";

type FinancialStatus = "low" | "middle" | "high";

const OPTIONS: {
  value: FinancialStatus;
  label: string;
  emoji: string;
}[] = [
  {
    value: "low",
    label: "Budget-Conscious",
    emoji: "🌿",
  },
  {
    value: "middle",
    label: "Moderate",
    emoji: "⚖️",
  },
  {
    value: "high",
    label: "Premium",
    emoji: "💎",
  },
];

const FinancialStatusStep = () => {
  const { saveStep4, goBack } = useRegisterForm();
  const [selected, setSelected] = useState<FinancialStatus | null>(null);
  const [error, setError] = useState("");

  function handleSubmit() {
    if (!selected) {
      setError("Please select your financial situation.");
      return;
    }
    setError("");
    saveStep4({ financialStatus: selected });
  }

  return (
    <div>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={springTransition}
        className="mx-auto max-w-4xl rounded-3xl border p-6 md:p-8"
        style={{
          background: theme.colors.bg2,
          borderColor: theme.colors.border,
        }}
      >
        <div className="mb-8">
          <h1
            className="text-3xl font-bold"
            style={{ color: theme.colors.text }}
          >
            Food Budget 💰
          </h1>
          <p className="mt-2" style={{ color: theme.colors.textSecondary }}>
            Step 4 of 5 — We&apos;ll tailor your meal plans to your budget.
          </p>
        </div>

        <div className="cards-grid">
          {OPTIONS.map(({ value, label, emoji }) => {
            const isActive = selected === value;
            return (
              <motion.button
                key={value}
                type="button"
                onClick={() => {
                  setSelected(value);
                  setError("");
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="finance-card rounded-2xl p-4"
                style={{
                  background: isActive
                    ? theme.colors.primary + "1a"
                    : theme.colors.bg3,
                  borderColor: isActive
                    ? theme.colors.primary
                    : theme.colors.border,
                  color: theme.colors.text,
                }}
              >
                <span className="card-emoji">{emoji}</span>
                <span className="card-label">{label}</span>
              </motion.button>
            );
          })}
        </div>

        {error && <p className="mt-4 text-sm text-red-500">{error}</p>}

        <div className="mt-8 flex gap-3">
          <button
            type="button"
            onClick={goBack}
            className="back-btn w-full rounded-lg p-3"
            style={{
              background: theme.colors.bg3,
              borderColor: theme.colors.border,
              color: theme.colors.textSecondary,
            }}
          >
            ← Back
          </button>
          <button
            onClick={handleSubmit}
            className="w-full rounded-lg p-3 text-white"
            style={{
              background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.primaryDark})`,
            }}
          >
            Next →
          </button>
        </div>
      </motion.div>

      <style jsx>{`
        .cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        @media (min-width: 640px) {
          .cards-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .finance-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.4rem;
          padding: 1.5rem;
          border-radius: ${theme.radius};
          border: 2px solid;
          cursor: pointer;
          text-align: left;
          transition:
            background 0.2s,
            border-color 0.2s;
        }
        .card-emoji {
          font-size: 2rem;
          line-height: 1;
          margin-bottom: 0.25rem;
        }
        .card-label {
          font-size: 1.1rem;
          font-weight: 700;
        }
        .card-desc {
          font-size: 0.85rem;
        }
        .card-examples {
          font-size: 0.75rem;
          font-style: italic;
          margin-top: 0.25rem;
        }
        .card-check {
          position: absolute;
          top: 0.75rem;
          right: 1rem;
          font-size: 1.1rem;
          font-weight: 700;
        }
        .back-btn {
          padding: 12px 24px;
          border-radius: ${theme.radius};
          border: 1px solid;
          cursor: pointer;
          white-space: nowrap;
          transition: background 0.2s;
        }
      `}</style>
    </div>
  );
};

export default FinancialStatusStep;
