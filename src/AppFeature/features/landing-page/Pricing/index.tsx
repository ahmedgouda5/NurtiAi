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
  Header,
  Content,
  Footer,
} from "./styles";

import { SpanItalic } from "../Hero/styles";
import { usePlansData } from "@/data/plans";
import { useTranslation } from "react-i18next";

export function Pricing() {
  const plans = usePlansData();
  const { t } = useTranslation();

  return (
    <Section id="pricing">
      <div className="container">
        <SectionTitle
          eyebrow={t("pricing.eyebrow")}
          title={
            <>
              {t("pricing.title.normal")}{" "}
              <SpanItalic>{t("pricing.title.italic")}</SpanItalic>{" "}
              {t("pricing.title.suffix")}
            </>
          }
          description={t("pricing.description")}
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
              key={plan.id}
              $premium={plan.premium}
              $featured={plan.featured}
              as={motion.article}
              variants={fadeUp}
            >
              {/* HEADER */}
              <Header>
                {plan.featured ? (
                  <FeaturedTag>{t("pricing.mostPopular")}</FeaturedTag>
                ) : (
                  <div style={{ height: "3.2rem" }} />
                )}

                <Name $premium={plan.premium}>{plan.name}</Name>

                <PriceWrapper>
                  <Price>{plan.price}</Price>
                  <Period>{plan.period}</Period>
                </PriceWrapper>

                <Description>{plan.description}</Description>

                <Divider />
              </Header>

              {/* CONTENT */}
              <Content>
                <List>
                  {plan.features.map((feature) => (
                    <Item
                      key={feature.text}
                      $active={feature.available}
                      $premium={plan.premium}
                    >
                      {feature.available ? (
                        <Check size={20} />
                      ) : (
                        <X size={20} />
                      )}
                      <span>{feature.text}</span>
                    </Item>
                  ))}
                </List>
              </Content>

              {/* FOOTER */}
              <Footer>
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
              </Footer>
            </Plan>
          ))}
        </Grid>
      </div>
    </Section>
  );
}
