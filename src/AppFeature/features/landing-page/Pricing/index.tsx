"use client";

import { Check, X, Crown, Zap, ArrowRight } from "lucide-react";
import { SectionTitle } from "@/AppFeature/shared/SectionTitle";
import {
  Section,
  Grid,
  Plan,
  PopularBadge,
  PremiumBadge,
  PlanIcon,
  Header,
  Content,
  Footer,
  Name,
  PlanDescription,
  PriceBlock,
  PriceWrapper,
  Price,
  Period,
  Divider,
  List,
  Item,
  UpgradeButton,
} from "./styles";
import { SpanItalic } from "../Hero/styles";
import { usePlansData } from "@/data/plans";
import { useTranslation } from "react-i18next";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

export function Pricing() {
  const plans = usePlansData();
  const { t } = useTranslation();
  const { ref, isVisible } = useInViewAnimation();

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

        <Grid ref={ref as React.Ref<HTMLDivElement>} $isVisible={isVisible}>
          {plans.map((plan) => (
            <Plan
              key={plan.id}
              $premium={plan.premium}
              $featured={plan.featured}
            >
              {plan.featured && (
                <PopularBadge>{t("pricing.mostPopular")}</PopularBadge>
              )}
              {plan.premium && <PremiumBadge>Luxury</PremiumBadge>}

              <PlanIcon $featured={plan.featured} $premium={plan.premium}>
                {plan.premium ? <Crown size={28} /> : <Zap size={28} />}
              </PlanIcon>

              <Header>
                <Name $featured={plan.featured} $premium={plan.premium}>
                  {plan.name}
                </Name>
                <PriceBlock $featured={plan.featured} $premium={plan.premium}>
                  <PriceWrapper>
                    <Price $featured={plan.featured} $premium={plan.premium}>
                      {plan.price}
                    </Price>
                    <Period>{plan.period}</Period>
                  </PriceWrapper>
                </PriceBlock>
                <PlanDescription>{plan.description}</PlanDescription>
                <Divider />
              </Header>

              <Content>
                <List>
                  {plan.features.map((feature) => (
                    <Item
                      key={feature.text}
                      $active={feature.available}
                      $featured={plan.featured}
                      $premium={plan.premium}
                    >
                      {feature.available ? (
                        <Check size={18} />
                      ) : (
                        <X size={18} />
                      )}
                      <span>{feature.text}</span>
                    </Item>
                  ))}
                </List>
              </Content>

              <Footer>
                <UpgradeButton
                  $featured={plan.featured}
                  $premium={plan.premium}
                >
                  {plan.featured
                    ? "Get Pro Access"
                    : plan.premium
                      ? "Get Premium Access"
                      : "Get Started"}
                  <ArrowRight size={18} />
                </UpgradeButton>
              </Footer>
            </Plan>
          ))}
        </Grid>
      </div>
    </Section>
  );
}
