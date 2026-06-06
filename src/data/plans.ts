"use client";

import { useTranslation } from "react-i18next";

export interface PlanFeature {
  text: string;
  available: boolean;
}

export interface Plan {
  id: number;
  name: string;
  price: string;
  period: string;
  description: string;
  button: string;
  featured?: boolean;
  premium?: boolean;
  features: PlanFeature[];
}

export function usePlansData(): Plan[] {
  const { t } = useTranslation();

  const toFeatures = (keys: string[], available: boolean[]): PlanFeature[] =>
    keys.map((text, i) => ({ text, available: available[i] }));

  return [
    {
      id: 1,
      name: t("pricing.plans.free.name"),
      price: t("pricing.plans.free.price"),
      period: t("pricing.plans.free.period"),
      description: t("pricing.plans.free.description"),
      button: t("pricing.plans.free.button"),
      features: toFeatures(
        t("pricing.plans.free.features", { returnObjects: true }) as string[],
        [true, true, true, true, false, false],
      ),
    },
    {
      id: 2,
      name: t("pricing.plans.pro.name"),
      price: t("pricing.plans.pro.price"),
      period: t("pricing.plans.pro.period"),
      description: t("pricing.plans.pro.description"),
      button: t("pricing.plans.pro.button"),
      featured: true,
      features: toFeatures(
        t("pricing.plans.pro.features", { returnObjects: true }) as string[],
        [true, true, true, true, true, false],
      ),
    },
    {
      id: 3,
      name: t("pricing.plans.premium.name"),
      price: t("pricing.plans.premium.price"),
      period: t("pricing.plans.premium.period"),
      description: t("pricing.plans.premium.description"),
      button: t("pricing.plans.premium.button"),
      premium: true,
      features: toFeatures(
        t("pricing.plans.premium.features", {
          returnObjects: true,
        }) as string[],
        [true, true, true, true, true, true],
      ),
    },
  ];
}
