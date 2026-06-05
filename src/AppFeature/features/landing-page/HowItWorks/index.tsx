"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/AppFeature/shared/SectionTitle";
import { Button } from "@/AppFeature/shared/Button";
import { Modal } from "@/AppFeature/shared/Modal";
import { useModal } from "@/hooks/useModal";
import { fadeUp, staggerContainer } from "@/utils/animations";
import {
  FooterRow,
  Grid,
  Section,
  Step,
  StepsIcon,
  Text,
  Title,
} from "./styles";
import { SpanItalic } from "../Hero/styles";

const steps = [
  {
    icon: "📱",
    iconBg: "blue",
    title: "Set Your Goals",
    text: "Tell us your weight goal, dietary preferences, and fitness level. Our AI builds your personalized plan in seconds.",
  },
  {
    icon: "🍽️",
    iconBg: "brown",
    title: "Track Everything",
    text: "Scan food photos or type names. Log workouts. Track water, sleep, and steps. Everything syncs automatically.",
  },
  {
    icon: "🚀",
    iconBg: "green",
    title: "Transform",
    text: "Get AI recommendations, coach sessions, and community support. Watch your health metrics improve week by week.",
  },
];

export function HowItWorks() {
  const coachModal = useModal();

  return (
    <Section>
      <div className="container">
        <SectionTitle
          eyebrow="How It Works
"
          title={
            <>
              Start in <SpanItalic>3 simple steps</SpanItalic>
            </>
          }
        />

        <Grid
          as={motion.div}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, index) => (
            <Step key={step.title} as={motion.article} variants={fadeUp}>
              <StepsIcon $iconBg={step.iconBg}>{step.icon}</StepsIcon>
              <Title>
                {index + 1}. {step.title}
              </Title>
              <Text>{step.text}</Text>
              {index === 2 ? (
                <FooterRow>
                  <span>Need coaching support?</span>
                  <Button variant="secondary" onClick={coachModal.onOpen}>
                    Book coach
                  </Button>
                </FooterRow>
              ) : null}
            </Step>
          ))}
        </Grid>
      </div>

      <Modal
        isOpen={coachModal.open}
        onClose={coachModal.onClose}
        title="Coach booking modal"
        description="A focused booking experience for onboarding and coaching sessions."
        size="sm"
      >
        <Button fullWidth onClick={coachModal.onClose}>
          Confirm booking
        </Button>
      </Modal>
    </Section>
  );
}
