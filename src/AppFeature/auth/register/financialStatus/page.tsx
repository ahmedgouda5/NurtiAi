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
  FinanceCard,
  CardEmoji,
  CardLabel,
  ErrorText,
  ActionsRow,
  BackButton,
  SubmitButton,
} from "./style";

type FinancialStatus = "low" | "middle" | "high";

const OPTIONS: {
  value: FinancialStatus;
  label: string;
  emoji: string;
}[] = [
  { value: "low", label: "Budget-Conscious", emoji: "🌿" },
  { value: "middle", label: "Moderate", emoji: "⚖️" },
  { value: "high", label: "Premium", emoji: "💎" },
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
    <Container>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={springTransition}
      >
        <Card>
          <Header>
            <Title>Food Budget 💰</Title>
            <Subtitle>
              Step 4 of 5 — We&apos;ll tailor your meal plans to your budget.
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
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <FinanceCard $isActive={selected === value}>
                  <CardEmoji>{emoji}</CardEmoji>
                  <CardLabel>{label}</CardLabel>
                </FinanceCard>
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

export default FinancialStatusStep;
