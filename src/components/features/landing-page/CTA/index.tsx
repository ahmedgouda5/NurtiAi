'use client';

import { Button } from '@/components/shared/Button';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/utils/animations';
import { Actions, Banner, Section, Text, Title } from './styles';

export function CTA() {
  return (
    <Section>
      <div className="container">
        <Banner as={motion.div} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <Title as={motion.h2} variants={fadeUp}>
            Ship a premium health product experience in weeks, not quarters.
          </Title>
          <Text as={motion.p} variants={fadeUp}>
            NutriAI gives you a clean marketing layer, a dashboard, and the interaction patterns needed for serious nutrition coaching.
          </Text>
          <Actions as={motion.div} variants={fadeUp}>
            <Button href="/dashboard">Start free</Button>
            <Button href="#features" variant="secondary">
              Explore product
            </Button>
          </Actions>
        </Banner>
      </div>
    </Section>
  );
}

