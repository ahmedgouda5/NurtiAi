"use client";

import { Button } from "@/components/shared/Button";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/utils/animations";
import { Actions, Banner, Section, Text, Title } from "./styles";
import { SpanItalic } from "../Hero/styles";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { IoIosRocket } from "react-icons/io";
import { theme } from "@/styles/theme";
import { FaPlay } from "react-icons/fa";
import { HiOutlineLogin } from "react-icons/hi";
export function CTA() {
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
                <IoIosRocket size={18} /> Limited Time Offer
              </span>
            }
          />
          <Title as={motion.h2} variants={fadeUp}>
            Start your <SpanItalic> free month</SpanItalic> today
          </Title>
          <Text as={motion.p} variants={fadeUp}>
            Join 250,000+ people already transforming their health with NutriAI.
            No credit card required for the first month.
          </Text>
          <Actions as={motion.div} variants={fadeUp}>
            <Button
              style={{ background: theme.colors.primaryDark, color: "black" }}
              href="/dashboard"
            >
              <FaPlay /> Get Started free
            </Button>
            <Button href="/auth/sign-in" variant="secondary">
              <HiOutlineLogin /> Sign In
            </Button>
          </Actions>
        </Banner>
      </div>
    </Section>
  );
}
