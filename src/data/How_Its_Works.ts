"use client";
import { useTranslation } from "react-i18next";

export function UseHowItsWorks() {
  const { t } = useTranslation();
  return [
    {
      id: 1,
      icon: "📱",
      iconBg: "blue",
      title: t("HowItWorks.steps.one.title"),
      text: t("HowItWorks.steps.one.description"),
    },
    {
      id: 2,
      icon: "🍽️",
      iconBg: "brown",
      title: t("HowItWorks.steps.two.title"),
      text: t("HowItWorks.steps.two.description"),
    },
    {
      id: 3,
      icon: "🚀",
      iconBg: "green",
      title: t("HowItWorks.steps.three.title"),
      text: t("HowItWorks.steps.three.description"),
    },
  ];
}
