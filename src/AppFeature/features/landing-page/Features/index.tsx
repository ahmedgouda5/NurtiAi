"use client";

import { motion } from "framer-motion";
import {
  FiActivity,
  FiBarChart2,
  FiMessageSquare,
  FiRotateCw,
  FiShield,
  FiTrendingUp,
} from "react-icons/fi";
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
import { SpanItalic } from "../Hero/styles";
import { theme } from "@/styles/theme";
import { FaArrowRight } from "react-icons/fa";

const features = [
  {
    icon: FiRotateCw,
    title: "AI Food Scanner",
    bg: `${theme.colors.primaryDark}`,
    description:
      "Snap a photo of any meal. Our AI instantly identifies food items, estimates portion sizes, and calculates full nutrition breakdown.",
    href: "/scanner",
  },
  {
    icon: FiBarChart2,
    bg: `${theme.colors.amber}`,

    title: "Smart Analytics",
    description:
      "Weekly and monthly charts showing your calorie trends, macronutrient ratios, weight progress, and predicted outcomes.",
    href: "/analytics",
  },
  {
    icon: FiActivity,
    bg: `${theme.colors.purple}`,

    title: "Workout Plans",
    description:
      "AI-generated workout routines tailored to your fitness level, available equipment, and goals. Adapt in real time based on progress.",
    href: "/dashboard",
  },
  {
    icon: FiMessageSquare,
    bg: `${theme.colors.blue}`,

    title: "Coach & Doctor Sessions",
    description:
      "Book 1-on-1 sessions with certified nutritionists, fitness coaches, and doctors. They monitor your data in real time.",
    href: "/dashboard",
  },
  {
    icon: FiTrendingUp,
    bg: `${theme.colors.coral}`,

    title: "Weight Prediction",
    description:
      "AI models predict your weight trajectory based on your diet, exercise, and metabolism. See where you'll be in 30 days.",
    href: "/dashboard",
  },
  {
    icon: FiShield,
    bg: `${theme.colors.primaryDark}`,

    title: "Gamified Achievements",
    description:
      "Join step challenges, nutrition streaks, and transformation contests with thousands of members globally.",
    href: "/dashboard",
  },
];

export function Features() {
  return (
    <Section id="features">
      <div className="container">
        <SectionTitle
          eyebrow="Everything You Need
"
          title={
            <>
              Your complete <SpanItalic>health ecosystem</SpanItalic>{" "}
            </>
          }
          description="From food scanning to AI coaching, every tool you need to reach your health goals lives in one powerful platform.

"
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
                key={feature.title}
                variants={fadeUp}
              >
                <IconWrap bg={feature.bg}>
                  <Icon />
                </IconWrap>
                <Title>{feature.title}</Title>
                <Description>{feature.description}</Description>
                <Meta color={feature.bg}>
                  Learn more <FaArrowRight />
                </Meta>
              </FeatureCard>
            );
          })}
        </Grid>
      </div>
    </Section>
  );
}
