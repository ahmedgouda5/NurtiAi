"use client";
import { motion } from "framer-motion";
import { SectionTitle } from "@/AppFeature/shared/SectionTitle";
import { fadeUp, staggerContainer } from "@/utils/animations";
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
export function Features() {
  const { t } = useTranslation();
  const features = useFeaturesData();

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

        <Grid
          as={motion.div}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <FeatureCard
                as={motion.a}
                href={feature.href}
                key={feature.id}
                variants={fadeUp}
              >
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
