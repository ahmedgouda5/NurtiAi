"use client";

import { motion } from "framer-motion";
import { Check, X, Rocket } from "lucide-react";

import { SectionTitle } from "@/AppFeature/shared/SectionTitle";
import { Button } from "@/AppFeature/shared/Button";

import { fadeUp, staggerContainer } from "@/utils/animations";

import {
  Description,
  Divider,
  FeaturedTag,
  Grid,
  Item,
  List,
  Name,
  Period,
  Plan,
  Price,
  PriceWrapper,
  Section,
} from "./styles";
import { plans } from "@/data/plans";
import { SpanItalic } from "../Hero/styles";

export function Pricing() {
  return (
    <Section id="pricing">
      <div className="container">
        <SectionTitle
          eyebrow="Pricing"
          title={
            <>
              Simple, <SpanItalic>transparent </SpanItalic>pricing
            </>
          }
          description="Start free. Upgrade when you're ready. Cancel anytime."
        />

        <Grid
          as={motion.div}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {plans.map((plan) => (
            <Plan
              key={plan.name}
              $featured={plan.featured}
              $premium={plan.premium}
              as={motion.article}
              variants={fadeUp}
            >
              <div>
                {plan.featured && <FeaturedTag>Most Popular</FeaturedTag>}

                <Name $premium={plan.premium}>{plan.name}</Name>

                <PriceWrapper>
                  <Price>{plan.price}</Price>
                  <Period>{plan.period}</Period>
                </PriceWrapper>

                <Description>{plan.description}</Description>

                <Divider />
              </div>

              <List>
                {plan.features.map((feature) => (
                  <Item
                    key={feature.text}
                    $active={feature.available}
                    $premium={plan.premium}
                  >
                    {feature.available ? <Check size={20} /> : <X size={20} />}

                    <span>{feature.text}</span>
                  </Item>
                ))}
              </List>

              <div className="mt-auto">
                <Button
                  href="/"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    padding: "18px",
                    borderRadius: "999px",
                  }}
                >
                  {plan.featured && <Rocket size={18} />}
                  {plan.button}
                </Button>
              </div>
            </Plan>
          ))}
        </Grid>
      </div>
    </Section>
  );
}
