import { useTranslation } from "react-i18next";

export interface Coach {
  id: number;
  initials: string;
  name: string;
  title: string;
  specialty: string;
  rate: number;
  reviews: number;
  price: number;
  gradient: string;
}
export function useCoachesData(): Coach[] {
  const { t } = useTranslation();
  return [
    {
      id: 1,
      initials: "SA",
      name: t("coaches.items.1.name"),
      title: t("coaches.items.1.title"),
      specialty: t("coaches.items.1.specialty"),
      rate: 4.9,
      reviews: 312,
      price: 45,
      gradient: "linear-gradient(135deg,#00D68F,#38BDF8)",
    },
    {
      id: 2,
      initials: "MK",
      name: t("coaches.items.2.name"),
      title: t("coaches.items.2.title"),
      specialty: t("coaches.items.2.specialty"),
      rate: 4.8,
      reviews: 245,
      price: 35,
      gradient: "linear-gradient(135deg,#8B5CF6,#F59E0B)",
    },
    {
      id: 3,
      initials: "LR",
      name: t("coaches.items.3.name"),
      title: t("coaches.items.3.title"),
      specialty: t("coaches.items.3.specialty"),
      rate: 5.0,
      reviews: 189,
      price: 55,
      gradient: "linear-gradient(135deg,#FF6B6B,#8B5CF6)",
    },
    {
      id: 4,
      initials: "JT",
      name: t("coaches.items.4.name"),
      title: t("coaches.items.4.title"),
      specialty: t("coaches.items.4.specialty"),
      rate: 4.7,
      reviews: 156,
      price: 30,
      gradient: "linear-gradient(135deg,#38BDF8,#00D68F)",
    },
  ];
}
