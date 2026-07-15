"use client";

import { Crown, Check, Zap, ArrowRight } from "lucide-react";

import {
  Section,
  Container,
  Header,
  Eyebrow,
  Title,
  TitleAccent,
  Description,
  PlansGrid,
  PlanCard,
  PremiumBadge,
  PopularBadge,
  PlanIcon,
  PlanName,
  PlanDescription,
  PriceBlock,
  PriceRow,
  Price,
  PricePeriod,
  PriceNote,
  FeaturesList,
  FeatureItem,
  UpgradeButton,
  CurrentBadge,
} from "./styles";

interface PlanFeature {
  text: string;
}

interface Plan {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  note?: string;
  features: PlanFeature[];
  isPremium?: boolean;
  isPopular?: boolean;
  isCurrent?: boolean;
}

const plans: Plan[] = [
  {
    id: "pro",
    name: "Pro Plan",
    description: "Advanced features for serious fitness enthusiasts",
    price: "$9.99",
    period: "/month",
    note: "Billed annually at $119.88",
    isPopular: true,
    features: [
      { text: "Advanced AI meal planning" },
      { text: "Detailed macro tracking" },
      { text: "Workout recommendations" },
      { text: "Progress analytics dashboard" },
      { text: "Priority support" },
      { text: "Custom recipe suggestions" },
    ],
  },
  {
    id: "premium",
    name: "Premium Plan",
    description: "The ultimate luxury experience with exclusive perks",
    price: "$29.99",
    period: "/month",
    note: "Billed annually at $359.88",
    isPremium: true,
    features: [
      { text: "Everything in Pro Plan" },
      { text: "Personal AI nutritionist" },
      { text: "1-on-1 coaching sessions" },
      { text: "Exclusive luxury recipes" },
      { text: "VIP community access" },
      { text: "Custom supplement plans" },
      { text: "Early access to new features" },
      { text: "Dedicated account manager" },
    ],
  },
];

export function UpgradePlan() {
  return (
    <Section>
      <Container>
        <Header>
          <Eyebrow>Premium Plans</Eyebrow>
          <Title>
            Upgrade to <TitleAccent>Premium</TitleAccent>
          </Title>
          <Description>
            Unlock the full potential of your fitness journey with our premium
            plans designed for serious results.
          </Description>
        </Header>

        <PlansGrid>
          {plans.map((plan) => (
            <PlanCard key={plan.id} $isPremium={plan.isPremium}>
              {plan.isPopular && <PopularBadge>Most Popular</PopularBadge>}
              {plan.isPremium && <PremiumBadge>Luxury</PremiumBadge>}

              <PlanIcon $isPremium={plan.isPremium}>
                {plan.isPremium ? <Crown size={28} /> : <Zap size={28} />}
              </PlanIcon>

              <PlanName $isPremium={plan.isPremium}>
                {plan.name}
                {plan.isCurrent && <CurrentBadge>Current</CurrentBadge>}
              </PlanName>

              <PlanDescription>{plan.description}</PlanDescription>

              <PriceBlock $isPremium={plan.isPremium}>
                <PriceRow>
                  <Price $isPremium={plan.isPremium}>{plan.price}</Price>
                  <PricePeriod>{plan.period}</PricePeriod>
                </PriceRow>
                {plan.note && <PriceNote>{plan.note}</PriceNote>}
              </PriceBlock>

              <FeaturesList>
                {plan.features.map((feature) => (
                  <FeatureItem key={feature.text} $isPremium={plan.isPremium}>
                    <Check size={18} />
                    <span>{feature.text}</span>
                  </FeatureItem>
                ))}
              </FeaturesList>

              <UpgradeButton
                $isPremium={plan.isPremium}
                type="button"
              >
                {plan.isPremium ? "Get Premium Access" : "Upgrade Now"}
                <ArrowRight size={18} />
              </UpgradeButton>
            </PlanCard>
          ))}
        </PlansGrid>
      </Container>
    </Section>
  );
}
