"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, springTransition } from "@/utils/animations";
import { theme } from "@/styles/theme";
import { Button } from "@/AppFeature/shared/Button";
import { useRegisterForm } from "../RegisterFormContext";

type MaritalStatus = "single" | "married" | "divorced" | "widowed";

const OPTIONS: {
  value: MaritalStatus;
  label: string;
  emoji: string;
}[] = [
  { value: "single", label: "Single", emoji: "🧑" },
  { value: "married", label: "Married", emoji: "💍" },
  { value: "divorced", label: "Divorced", emoji: "🌱" },
  { value: "widowed", label: "Widowed", emoji: "🕊️" },
];

const MaritalStatusStep = () => {
  const { saveStep3, goBack } = useRegisterForm();
  const [selected, setSelected] = useState<MaritalStatus | null>(null);
  const [error, setError] = useState("");

  function handleSubmit() {
    if (!selected) {
      setError("Please select your marital status.");
      return;
    }
    setError("");
    saveStep3({ maritalStatus: selected });
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
            Your Relationship Status 💑
          </h1>
          <p className="mt-2" style={{ color: theme.colors.textSecondary }}>
            Step 3 of 5 — This helps us personalise your nutrition plan.
          </p>
        </div>

        {/* Cards grid */}
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
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="status-card rounded-2xl p-4"
                style={{
                  background: isActive
                    ? theme.colors.primary + "22"
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

        {/* Actions */}
        <div className="mt-8 flex gap-3 justify-between">
          <button
            type="button"
            onClick={goBack}
            className="back-btn w-full"
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
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        @media (min-width: 768px) {
          .cards-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .status-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 1.5rem 1rem;
          border-radius: ${theme.radius};
          border: 2px solid;
          cursor: pointer;
          transition:
            background 0.2s,
            border-color 0.2s;
          text-align: center;
        }
        .card-emoji {
          font-size: 2rem;
          line-height: 1;
        }
        .card-label {
          font-size: 1rem;
          font-weight: 600;
        }
        .card-desc {
          font-size: 0.75rem;
        }
        .card-check {
          position: absolute;
          top: 0.5rem;
          right: 0.75rem;
          font-size: 1rem;
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

export default MaritalStatusStep;
