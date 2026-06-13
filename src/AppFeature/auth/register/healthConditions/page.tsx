"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, springTransition } from "@/utils/animations";
import { useRegisterForm } from "../RegisterFormContext";
import {
  Container,
  Card,
  Header,
  Title,
  Subtitle,
  HealthyToggle,
  ToggleIcon,
  ToggleLabel,
  ToggleSub,
  ConditionsList,
  ConditionRow,
  ConditionBadge,
  ConditionInput,
  RemoveButton,
  AddButton,
  SuggestionsSection,
  SuggestionsTitle,
  SuggestionsChips,
  SuggestionChip,
  ErrorText,
  ActionsRow,
  BackButton,
  SubmitButton,
} from "./style";

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
    <Container>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={springTransition}
      >
        <Card>
          <Header>
            <Title>Your Health 🏥</Title>
            <Subtitle>
              Step 5 of 5 — Describe any health conditions in your own words.
              This directly shapes your personalised nutrition plan.
            </Subtitle>
          </Header>

          <HealthyToggle
            type="button"
            $isActive={isHealthy}
            onClick={() => {
              setIsHealthy((v) => !v);
              setError("");
            }}
          >
            <ToggleIcon>{isHealthy ? "✅" : "⬜"}</ToggleIcon>
            <div>
              <ToggleLabel>I am healthy</ToggleLabel>
              <ToggleSub>&nbsp;— Skip this step, no conditions to report</ToggleSub>
            </div>
          </HealthyToggle>

          <AnimatePresence>
            {!isHealthy && (
              <motion.div
                key="inputs"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ConditionsList>
                  <AnimatePresence>
                    {conditions.map((value, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ConditionRow>
                          <ConditionBadge>{idx + 1}</ConditionBadge>

                          <ConditionInput
                            ref={(el) => {
                              inputRefs.current[idx] = el;
                            }}
                            value={value}
                            onChange={(e) =>
                              updateCondition(idx, e.target.value)
                            }
                            placeholder={`e.g. "${SUGGESTIONS[idx % SUGGESTIONS.length]}"`}
                            rows={2}
                            $hasValue={!!value.trim()}
                          />

                          {conditions.length > 1 && (
                            <RemoveButton
                              type="button"
                              onClick={() => removeCondition(idx)}
                              title="Remove this condition"
                            >
                              ✕
                            </RemoveButton>
                          )}
                        </ConditionRow>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  <AddButton type="button" onClick={addCondition}>
                    + Add another condition
                  </AddButton>
                </ConditionsList>

                <SuggestionsSection>
                  <SuggestionsTitle>
                    Quick suggestions — click to add:
                  </SuggestionsTitle>
                  <SuggestionsChips>
                    {SUGGESTIONS.map((s) => (
                      <SuggestionChip
                        key={s}
                        type="button"
                        onClick={() => applySuggestion(s)}
                      >
                        {s}
                      </SuggestionChip>
                    ))}
                  </SuggestionsChips>
                </SuggestionsSection>
              </motion.div>
            )}
          </AnimatePresence>

          {error && <ErrorText>{error}</ErrorText>}

          <ActionsRow>
            <BackButton type="button" onClick={goBack}>
              ← Back
            </BackButton>
            <SubmitButton
              onClick={handleSubmit}
              disabled={isSubmitting}
              $isSubmitting={isSubmitting}
            >
              {isSubmitting ? "Creating Account..." : "Create Account 🚀"}
            </SubmitButton>
          </ActionsRow>
        </Card>
      </motion.div>
    </Container>
  );
};

export default HealthConditionsStep;
