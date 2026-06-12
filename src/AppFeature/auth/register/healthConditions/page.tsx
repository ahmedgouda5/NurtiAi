"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, springTransition } from "@/utils/animations";
import { theme } from "@/styles/theme";
import { useRegisterForm } from "../RegisterFormContext";

const SUGGESTIONS = [
  "I have Type 2 Diabetes and need a low-sugar plan",
  "I suffer from high blood pressure",
  "I have IBS and certain foods trigger bloating",
  "I'm lactose intolerant",
  "I have hypothyroidism",
  "I have celiac disease (gluten intolerance)",
  "I experience chronic acid reflux / GERD",
  "I have PCOS and insulin resistance",
];

const HealthConditionsStep = () => {
  const { submitAll, goBack, isSubmitting } = useRegisterForm();

  const [conditions, setConditions] = useState<string[]>([""]);
  const [isHealthy, setIsHealthy] = useState(false);
  const [error, setError] = useState("");
  const inputRefs = useRef<(HTMLTextAreaElement | null)[]>([]);

  function updateCondition(index: number, value: string) {
    setError("");
    const next = [...conditions];
    next[index] = value;
    setConditions(next);
  }

  function addCondition() {
    setConditions((prev) => [...prev, ""]);
    setTimeout(() => {
      inputRefs.current[conditions.length]?.focus();
    }, 50);
  }

  function removeCondition(index: number) {
    setConditions((prev) => prev.filter((_, i) => i !== index));
  }

  function applySuggestion(text: string) {
    setError("");
    const emptyIdx = conditions.findIndex((c) => c.trim() === "");
    if (emptyIdx !== -1) {
      updateCondition(emptyIdx, text);
    } else {
      setConditions((prev) => [...prev, text]);
    }
  }

  async function handleSubmit() {
    if (isHealthy) {
      await submitAll({ healthConditions: ["None — I am healthy"] });
      return;
    }

    const filled = conditions.map((c) => c.trim()).filter(Boolean);
    if (filled.length === 0) {
      setError(
        'Please describe at least one health condition, or check "I am healthy".',
      );
      return;
    }
    setError("");
    await submitAll({ healthConditions: filled });
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
        <div className="mb-6">
          <h1
            className="text-3xl font-bold"
            style={{ color: theme.colors.text }}
          >
            Your Health 🏥
          </h1>
          <p className="mt-2" style={{ color: theme.colors.textSecondary }}>
            Step 5 of 5 — Describe any health conditions in your own words. This
            directly shapes your personalised nutrition plan.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            setIsHealthy((v) => !v);
            setError("");
          }}
          className="healthy-toggle"
          style={{
            background: isHealthy
              ? theme.colors.primary + "1a"
              : theme.colors.bg3,
            borderColor: isHealthy ? theme.colors.primary : theme.colors.border,
            color: isHealthy ? theme.colors.primary : theme.colors.text,
          }}
        >
          <span className="toggle-icon">{isHealthy ? "✅" : "⬜"}</span>
          <div>
            <span className="toggle-label">I am healthy</span>
            <span
              className="toggle-sub"
              style={{ color: theme.colors.textSecondary }}
            >
              &nbsp;— Skip this step, no conditions to report
            </span>
          </div>
        </button>

        {/* Condition inputs */}
        <AnimatePresence>
          {!isHealthy && (
            <motion.div
              key="inputs"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="conditions-list">
                <AnimatePresence>
                  {conditions.map((value, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="condition-row"
                    >
                      <div
                        className="condition-badge"
                        style={{
                          background: theme.colors.primary + "22",
                          color: theme.colors.primary,
                        }}
                      >
                        {idx + 1}
                      </div>

                      {/* Textarea */}
                      <textarea
                        ref={(el) => {
                          inputRefs.current[idx] = el;
                        }}
                        value={value}
                        onChange={(e) => updateCondition(idx, e.target.value)}
                        placeholder={`e.g. "${SUGGESTIONS[idx % SUGGESTIONS.length]}"`}
                        rows={2}
                        className="condition-input w-full mt-2"
                        style={{
                          background: theme.colors.bg3,
                          borderColor: value.trim()
                            ? theme.colors.primary
                            : theme.colors.border,
                          color: theme.colors.text,
                        }}
                      />

                      {conditions.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeCondition(idx)}
                          className="remove-btn"
                          style={{ color: theme.colors.textSecondary }}
                          title="Remove this condition"
                        >
                          ✕
                        </button>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>

                <button
                  type="button"
                  onClick={addCondition}
                  className="add-btn"
                  style={{
                    color: theme.colors.primary,
                    borderColor: theme.colors.primary + "55",
                    background: theme.colors.primary + "0d",
                  }}
                >
                  + Add another condition
                </button>
              </div>

              <div className="suggestions-section">
                <p
                  className="suggestions-title"
                  style={{ color: theme.colors.textSecondary }}
                >
                  Quick suggestions — click to add:
                </p>
                <div className="suggestions-chips">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => applySuggestion(s)}
                      className="suggestion-chip"
                      style={{
                        background: theme.colors.bg3,
                        borderColor: theme.colors.border,
                        color: theme.colors.textSecondary,
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {error && <p className="mt-3 text-sm text-red-500">{error}</p>}

        <div className="mt-8 flex gap-3">
          <button
            type="button"
            onClick={goBack}
            className="back-btn"
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
            disabled={isSubmitting}
            className="submit-btn w-full"
            style={{
              background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.primaryDark})`,
              opacity: isSubmitting ? 0.7 : 1,
            }}
          >
            {isSubmitting ? "Creating Account..." : "Create Account 🚀"}
          </button>
        </div>
      </motion.div>

      <style jsx>{`
        /* Healthy toggle */
        .healthy-toggle {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          width: 100%;
          padding: 1rem 1.25rem;
          border-radius: ${theme.radius};
          border: 2px solid;
          font-size: 1rem;
          cursor: pointer;
          margin-bottom: 1.5rem;
          text-align: left;
          transition:
            background 0.2s,
            border-color 0.2s,
            color 0.2s;
        }
        .toggle-icon {
          font-size: 1.3rem;
          flex-shrink: 0;
        }
        .toggle-label {
          font-weight: 700;
        }
        .toggle-sub {
          font-size: 0.85rem;
          font-weight: 400;
        }

        /* Conditions list */
        .conditions-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }
        .condition-row {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }
        .condition-badge {
          flex-shrink: 0;
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: 700;
          margin-top: 0.6rem;
        }
        .condition-input {
          flex: 1;
          padding: 0.75rem 1rem;
          border-radius: ${theme.radius};
          border: 1.5px solid;
          font-size: 0.9rem;
          resize: vertical;
          outline: none;
          line-height: 1.5;
          transition:
            border-color 0.2s,
            background 0.2s;
          font-family: inherit;
        }
        .condition-input:focus {
          border-color: ${theme.colors.primary} !important;
        }
        .remove-btn {
          flex-shrink: 0;
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          border: none;
          background: transparent;
          font-size: 0.85rem;
          cursor: pointer;
          margin-top: 0.6rem;
          opacity: 0.6;
          transition: opacity 0.2s;
        }
        .remove-btn:hover {
          opacity: 1;
        }

        /* Add button */
        .add-btn {
          align-self: flex-start;
          padding: 0.5rem 1rem;
          border-radius: ${theme.radius};
          border: 1.5px dashed;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition:
            background 0.2s,
            opacity 0.2s;
        }
        .add-btn:hover {
          opacity: 0.8;
        }

        /* Suggestions */
        .suggestions-section {
          margin-bottom: 0.5rem;
        }
        .suggestions-title {
          font-size: 0.8rem;
          margin-bottom: 0.5rem;
        }
        .suggestions-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .suggestion-chip {
          padding: 0.3rem 0.75rem;
          border-radius: 99px;
          border: 1px solid;
          font-size: 0.75rem;
          cursor: pointer;
          transition:
            background 0.15s,
            color 0.15s,
            border-color 0.15s;
        }
        .suggestion-chip:hover {
          border-color: ${theme.colors.primary};
          color: ${theme.colors.primary};
        }

        /* Actions */
        .back-btn {
          padding: 12px 24px;
          border-radius: ${theme.radius};
          border: 1px solid;
          cursor: pointer;
          white-space: nowrap;
          transition: background 0.2s;
        }
        .submit-btn {
          padding: 12px 20px;
          border-radius: ${theme.radius};
          border: none;
          color: #fff;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: opacity 0.2s;
        }
        .submit-btn:hover:not(:disabled) {
          opacity: 0.88;
        }
      `}</style>
    </div>
  );
};

export default HealthConditionsStep;
