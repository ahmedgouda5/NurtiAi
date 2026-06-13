"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, springTransition } from "@/utils/animations";
import { useRegisterForm } from "../RegisterFormContext";
import {
  Container,
  Card,
  Header,
  Title,
  Subtitle,
  CardsGrid,
  StatusCard,
  CardEmoji,
  CardLabel,
  ErrorText,
  ActionsRow,
  BackButton,
  SubmitButton,
} from "./style";

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
    <Container>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={springTransition}
      >
        <Card>
          <Header>
            <Title>Your Relationship Status 💑</Title>
            <Subtitle>
              Step 3 of 5 — This helps us personalise your nutrition plan.
            </Subtitle>
          </Header>

          <CardsGrid>
            {OPTIONS.map(({ value, label, emoji }) => (
              <motion.button
                key={value}
                type="button"
                onClick={() => {
                  setSelected(value);
                  setError("");
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <StatusCard $isActive={selected === value}>
                  <CardEmoji>{emoji}</CardEmoji>
                  <CardLabel>{label}</CardLabel>
                </StatusCard>
              </motion.button>
            ))}
          </CardsGrid>

          {error && <ErrorText>{error}</ErrorText>}

          <ActionsRow>
            <BackButton type="button" onClick={goBack}>
              ← Back
            </BackButton>
            <SubmitButton onClick={handleSubmit}>Next →</SubmitButton>
          </ActionsRow>
        </Card>
      </motion.div>
    </Container>
  );
};

export default MaritalStatusStep;
