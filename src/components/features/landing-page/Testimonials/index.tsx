'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { testimonials } from '@/data/testimonials';
import { fadeUp, staggerContainer } from '@/utils/animations';
import { Author, Grid, Name, Quote, QuoteCard, Role, Section } from './styles';

export function Testimonials() {
  return (
    <Section>
      <div className="container">
        <SectionTitle
          eyebrow="Testimonials"
          title={<>Designed to feel credible to teams, founders, and coaches.</>}
          description="A premium interface only works if the product promise is believable. These short testimonials create that signal."
        />

        <Grid as={motion.div} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {testimonials.map((testimonial) => (
            <QuoteCard key={testimonial.name} as={motion.blockquote} variants={fadeUp}>
              <Quote>“{testimonial.quote}”</Quote>
              <Author>
                <Name>{testimonial.name}</Name>
                <Role>{testimonial.role}</Role>
              </Author>
            </QuoteCard>
          ))}
        </Grid>
      </div>
    </Section>
  );
}

