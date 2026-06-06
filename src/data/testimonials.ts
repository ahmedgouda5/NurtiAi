"use client";

import { useTranslation } from "react-i18next";

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  initials: string;
  quote: string;
}

export function useTestimonialsData(): Testimonial[] {
  const { t } = useTranslation();

  return [
    {
      id: 1,
      name: t("testimonials.items.1.name"),
      role: t("testimonials.items.1.role"),
      initials: "RK",
      quote: t("testimonials.items.1.quote"),
    },
    {
      id: 2,
      name: t("testimonials.items.2.name"),
      role: t("testimonials.items.2.role"),
      initials: "AM",
      quote: t("testimonials.items.2.quote"),
    },
    {
      id: 3,
      name: t("testimonials.items.3.name"),
      role: t("testimonials.items.3.role"),
      initials: "LN",
      quote: t("testimonials.items.3.quote"),
    },
  ];
}
