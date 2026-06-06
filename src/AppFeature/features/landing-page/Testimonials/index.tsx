"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { SectionTitle } from "@/AppFeature/shared/SectionTitle";
import { useTestimonialsData } from "@/data/testimonials";
import { fadeUp, staggerContainer } from "@/utils/animations";

import {
  Author,
  AuthorInfo,
  Avatar,
  Grid,
  Name,
  Quote,
  QuoteCard,
  Role,
  Section,
  Stars,
} from "./styles";
import { SpanItalic } from "../Hero/styles";

export default function Testimonials() {
  const { t } = useTranslation();
  const testimonials = useTestimonialsData();

  return (
    <Section id="testimonials">
      <div className="container">
        <SectionTitle
          eyebrow={t("testimonials.eyebrow")}
          title={
            <>
              {t("testimonials.title.normal")}{" "}
              <SpanItalic>{t("testimonials.title.italic")}</SpanItalic>
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
          {testimonials.map((testimonial) => (
            <QuoteCard
              key={testimonial.name}
              as={motion.blockquote}
              variants={fadeUp}
            >
              <Stars>★★★★★</Stars>

              <Quote>{`"${testimonial.quote}"`}</Quote>

              <Author>
                <Avatar>{testimonial.initials}</Avatar>

                <AuthorInfo>
                  <Name>{testimonial.name}</Name>
                  <Role>{testimonial.role}</Role>
                </AuthorInfo>
              </Author>
            </QuoteCard>
          ))}
        </Grid>
      </div>
    </Section>
  );
}
