"use client";

import { useTranslation } from "react-i18next";
import { SectionTitle } from "@/AppFeature/shared/SectionTitle";
import { useTestimonialsData } from "@/data/testimonials";

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
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

export default function Testimonials() {
  const { t } = useTranslation();
  const testimonials = useTestimonialsData();
  const { ref, isVisible } = useInViewAnimation();

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

        <Grid ref={ref as React.Ref<HTMLDivElement>} $isVisible={isVisible}>
          {testimonials.map((testimonial) => (
            <QuoteCard key={testimonial.name}>
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
