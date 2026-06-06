"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { fadeUp, staggerContainer } from "@/utils/animations";
import { Actions, Banner, Section, Text, Title } from "./styles";
import { SpanItalic } from "../Hero/styles";
import { SectionTitle } from "@/AppFeature/shared/SectionTitle";
import { IoIosRocket } from "react-icons/io";
import SignIn from "@/AppFeature/auth/login/page";
import SignUp from "@/AppFeature/auth/register/page";

export function CTA() {
  const { t } = useTranslation();

  return (
    <Section>
      <div className="container">
        <Banner
          as={motion.div}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionTitle
            eyebrow={
              <span className="flex items-center gap-2">
                <IoIosRocket size={18} /> {t("cta.eyebrow")}
              </span>
            }
          />
          <Title as={motion.h2} variants={fadeUp}>
            {t("cta.title.normal")}{" "}
            <SpanItalic>{t("cta.title.highlight")}</SpanItalic>{" "}
            {t("cta.title.suffix")}
          </Title>
          <Text as={motion.p} variants={fadeUp}>
            {t("cta.text")}
          </Text>
          <Actions as={motion.div} variants={fadeUp}>
            <SignUp />
            <SignIn />
          </Actions>
        </Banner>
      </div>
    </Section>
  );
}
