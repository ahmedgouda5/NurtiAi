"use client";

import { theme } from "@/styles/theme";
import { useTranslation } from "react-i18next";
import {
  FiActivity,
  FiBarChart2,
  FiMessageSquare,
  FiRotateCw,
  FiShield,
  FiTrendingUp,
} from "react-icons/fi";

export function useFeaturesData() {
  const { t } = useTranslation();

  return [
    {
      id: "food-scanner",
      icon: FiRotateCw,
      bg: theme.colors.primaryDark,
      title: t("features.items.foodScanner.title"),
      description: t("features.items.foodScanner.description"),
      href: "/scanner",
    },
    {
      id: "analytics",
      icon: FiBarChart2,
      bg: theme.colors.amber,
      title: t("features.items.analytics.title"),
      description: t("features.items.analytics.description"),
      href: "/analytics",
    },
    {
      id: "workout-plans",
      icon: FiActivity,
      bg: theme.colors.purple,
      title: t("features.items.workoutPlans.title"),
      description: t("features.items.workoutPlans.description"),
      href: "/dashboard",
    },
    {
      id: "sessions",
      icon: FiMessageSquare,
      bg: theme.colors.blue,
      title: t("features.items.sessions.title"),
      description: t("features.items.sessions.description"),
      href: "/dashboard",
    },
    {
      id: "prediction",
      icon: FiTrendingUp,
      bg: theme.colors.coral,
      title: t("features.items.prediction.title"),
      description: t("features.items.prediction.description"),
      href: "/dashboard",
    },
    {
      id: "achievements",
      icon: FiShield,
      bg: theme.colors.primaryDark,
      title: t("features.items.achievements.title"),
      description: t("features.items.achievements.description"),
      href: "/dashboard",
    },
  ];
}

