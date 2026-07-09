"use client";
import { SectionTitle } from "@/AppFeature/shared/SectionTitle";
import {
  Description,
  FeatureCard,
  Grid,
  IconWrap,
  Meta,
  Section,
  Title,
} from "./styles";
import { FaArrowRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useFeaturesData } from "@/data/Featuers";
import { SpanItalic } from "../Hero/styles";
import i18n from "@/lib/i18n";
import { FaArrowLeft } from "react-icons/fa6";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

export function Features() {
  const { t } = useTranslation();
  const features = useFeaturesData();
  const { ref, isVisible } = useInViewAnimation();

  return (
    <Section id="features">
      <div className="container">
        <SectionTitle
          eyebrow={t("features.eyebrow")}
          title={
            <>
              {t("features.title.normal")}
              <SpanItalic> {t("features.title.italic")}</SpanItalic>
            </>
          }
          description={t("features.description")}
        />

        <Grid ref={ref as React.Ref<HTMLDivElement>} $isVisible={isVisible}>
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <FeatureCard href={feature.href} key={feature.id}>
                <IconWrap bg={feature.bg}>
                  <Icon />
                </IconWrap>
                <Title>{feature.title}</Title>
                <Description>{feature.description}</Description>
                <Meta color={feature.bg}>
                  {t("features.learnMore")}{" "}
                  {i18n.language === "en" ? <FaArrowRight /> : <FaArrowLeft />}
                </Meta>
              </FeatureCard>
            );
          })}
        </Grid>
      </div>
    </Section>
  );
}
