"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { testimonials } from "@/data/testimonials";
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

export function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="container">
        <SectionTitle
          eyebrow="💚Testimonials"
          title={
            <>
              Real results, <SpanItalic>real people</SpanItalic>
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
