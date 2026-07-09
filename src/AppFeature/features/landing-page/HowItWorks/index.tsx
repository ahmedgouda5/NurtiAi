"use client";

import { SectionTitle } from "@/AppFeature/shared/SectionTitle";
import { Button } from "@/AppFeature/shared/Button";
import { Modal } from "@/AppFeature/shared/Modal";
import { useModal } from "@/hooks/useModal";
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
import { UseHowItsWorks } from "@/data/How_Its_Works";
import { useTranslation } from "react-i18next";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

export function HowItWorks() {
  const steps = UseHowItsWorks();
  const coachModal = useModal();
  const { t } = useTranslation();
  const { ref, isVisible } = useInViewAnimation();

  return (
    <Section>
      <div className="container">
        <SectionTitle
          eyebrow={t("HowItWorks.eyebrow")}
          title={
            <>
              {t("HowItWorks.title.normal")}{" "}
              <SpanItalic>{t("HowItWorks.title.italic")}</SpanItalic>
            </>
          }
        />

        <Grid ref={ref as React.Ref<HTMLDivElement>} $isVisible={isVisible}>
          {steps.map((step, index) => (
            <Step key={step.id}>
              <StepsIcon $iconBg={step.iconBg}>{step.icon}</StepsIcon>
              <Title>
                {index + 1}. {step.title}
              </Title>
              <Text>{step.text}</Text>
              {index === 2 ? (
                <FooterRow>
                  <span>{t("HowItWorks.steps.three.support")}</span>
                  <Button onClick={coachModal.onOpen}>
                    {t("HowItWorks.steps.three.BtnCoach")}
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
