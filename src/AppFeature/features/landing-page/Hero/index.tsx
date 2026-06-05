"use client";

import { Button } from "@/AppFeature/shared/Button";
import { GlassCard } from "@/AppFeature/shared/GlassCard";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/utils/animations";
import {
  Badge,
  BadgeFloat,
  Actions,
  Copy,
  DetailText,
  FloatingCard,
  Grid,
  Heading,
  MacroFill,
  MacroLabel,
  MacroRow,
  MacroTrack,
  Macros,
  Mockup,
  RingLabel,
  RingValue,
  RingWrap,
  Section,
  Stat,
  StatLabel,
  StatValue,
  Stats,
  Subtitle,
  SpanItalic,
} from "./styles";
import { theme } from "@/styles/theme";
import { FaCamera, FaPlay } from "react-icons/fa";
import SignUp from "@/AppFeature/auth/register/page";

const stats = [
  { value: "240K+", label: "meals analyzed" },
  { value: "92%", label: "weekly adherence" },
  { value: "18 sec", label: "scan-to-insight time" },
];

export function Hero() {
  return (
    <Section>
      <div className="container">
        <Grid>
          <Copy
            as={motion.div}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Badge as={motion.div} variants={fadeUp}>
              AI-Powered Health Platform
            </Badge>
            <Heading as={motion.h1} variants={fadeUp}>
              Your Personal <SpanItalic>AI Nutrition</SpanItalic> & Fitness
              Coach{" "}
            </Heading>
            <Subtitle as={motion.p} variants={fadeUp}>
              Scan food with your camera, get instant calorie breakdowns,
              personalized workout plans, and real-time coaching — all powered
              by advanced AI.
            </Subtitle>
            <p>محلل تغذية ذكي بالذكاء الاصطناعي</p>
            <Actions as={motion.div} variants={fadeUp}>
              <SignUp />
              <Button>
                <FaCamera />
                Scan food
              </Button>
            </Actions>
            <Stats as={motion.div} variants={fadeUp}>
              {stats.map((stat) => (
                <Stat key={stat.label}>
                  <StatValue>{stat.value}</StatValue>
                  <StatLabel>{stat.label}</StatLabel>
                </Stat>
              ))}
            </Stats>
          </Copy>

          <Mockup
            as={motion.div}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <BadgeFloat $top="12%" $left="-5%">
              +24g protein
            </BadgeFloat>
            <BadgeFloat $top="18%" $left="72%">
              AI scan ready
            </BadgeFloat>
            <BadgeFloat $top="78%" $left="8%">
              7 day streak
            </BadgeFloat>
            <GlassCard padding="1.3rem">
              <FloatingCard className="float">
                <RingWrap>
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    className="glow-ring"
                    aria-hidden="true"
                  >
                    <circle
                      cx="60"
                      cy="60"
                      r="46"
                      stroke="rgba(255,255,255,0.08)"
                      strokeWidth="10"
                      fill="none"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="46"
                      stroke="url(#ringGradient)"
                      strokeWidth="10"
                      strokeLinecap="round"
                      fill="none"
                      strokeDasharray="289"
                      strokeDashoffset="74"
                    />
                    <defs>
                      <linearGradient
                        id="ringGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#00D68F" />
                        <stop offset="100%" stopColor="#38BDF8" />
                      </linearGradient>
                    </defs>
                    <text
                      x="60"
                      y="56"
                      textAnchor="middle"
                      fill="#F0F6FF"
                      fontSize="20"
                      fontWeight="700"
                    >
                      84%
                    </text>
                    <text
                      x="60"
                      y="76"
                      textAnchor="middle"
                      fill="#7A90B3"
                      fontSize="10"
                    >
                      calories
                    </text>
                  </svg>
                  <RingLabel>
                    <span className="gradient-text">Today&apos;s plan</span>
                    <RingValue>1,840 / 2,200 kcal</RingValue>
                    <DetailText>You are 360 calories under target.</DetailText>
                  </RingLabel>
                </RingWrap>
                <Macros>
                  <MacroRow>
                    <MacroLabel>
                      <span>Protein</span>
                      <span>42%</span>
                    </MacroLabel>
                    <MacroTrack>
                      <MacroFill
                        $width="42%"
                        $color="linear-gradient(90deg, #00D68F, #7df2c7)"
                      />
                    </MacroTrack>
                  </MacroRow>
                  <MacroRow>
                    <MacroLabel>
                      <span>Carbs</span>
                      <span>38%</span>
                    </MacroLabel>
                    <MacroTrack>
                      <MacroFill
                        $width="38%"
                        $color="linear-gradient(90deg, #38BDF8, #7bcfff)"
                      />
                    </MacroTrack>
                  </MacroRow>
                  <MacroRow>
                    <MacroLabel>
                      <span>Fat</span>
                      <span>20%</span>
                    </MacroLabel>
                    <MacroTrack>
                      <MacroFill
                        $width="20%"
                        $color="linear-gradient(90deg, #8B5CF6, #b79cff)"
                      />
                    </MacroTrack>
                  </MacroRow>
                </Macros>
              </FloatingCard>
            </GlassCard>
          </Mockup>
        </Grid>
      </div>
    </Section>
  );
}
