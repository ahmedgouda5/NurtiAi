'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { fadeUp, staggerContainer } from '@/utils/animations';
import { Grid, Panel, Pill, Phone, Screen, SectionCopy, Text, Title, Wave, Section } from './styles';

export function MobilePreview() {
  return (
    <Section>
      <div className="container">
        <Grid as={motion.div} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <Phone as={motion.div} variants={fadeUp}>
            <Screen>
              <Pill>iOS companion</Pill>
              <Panel>
                <Title>Daily score</Title>
                <Text>Tap in a meal, water, or workout and the app adjusts your plan immediately.</Text>
                <Wave />
              </Panel>
              <Panel>
                <Title>Coach pulse</Title>
                <Text>Receive short action prompts based on recent adherence and recovery.</Text>
              </Panel>
            </Screen>
          </Phone>

          <SectionCopy>
            <SectionTitle
              eyebrow="Mobile app"
              title={<>A companion UI that feels native, fast, and simple.</>}
              description="The mobile surface mirrors the desktop system without losing the visual identity or the premium interaction language."
            />
          </SectionCopy>
        </Grid>
      </div>
    </Section>
  );
}

