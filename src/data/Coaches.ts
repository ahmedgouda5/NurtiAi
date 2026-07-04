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
  bio: string;
  experience: number;
  certifications: string[];
  languages: string[];
  availability: string;
  sessionsCompleted: number;
  avatar?: string;
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
      bio: "Certified nutritionist with over 8 years of experience helping clients achieve their health goals through personalized meal planning and lifestyle coaching.",
      experience: 8,
      certifications: ["ISSN Certified", "Precision Nutrition L2", "NASM-CPT"],
      languages: ["English", "Arabic"],
      availability: "Mon – Fri, 9AM – 6PM",
      sessionsCompleted: 1240,
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
      bio: "Sports dietitian specializing in athletic performance and body composition. Passionate about evidence-based nutrition strategies for peak performance.",
      experience: 6,
      certifications: ["CISSN", "ACE-CPT", "Sports Nutrition Diploma"],
      languages: ["English", "French"],
      availability: "Mon – Sat, 8AM – 5PM",
      sessionsCompleted: 980,
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
      bio: "Holistic wellness coach combining nutrition science with mindfulness practices. Expert in gut health, hormonal balance, and sustainable weight management.",
      experience: 10,
      certifications: ["RD Licensed", "Intuitive Eating Counselor", "Yoga RYT-200"],
      languages: ["English", "Spanish"],
      availability: "Tue – Sat, 10AM – 7PM",
      sessionsCompleted: 2100,
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
      bio: "Clinical nutritionist focused on metabolic health and chronic disease prevention. Specializes in creating realistic, science-backed nutrition plans.",
      experience: 5,
      certifications: ["CNS", "CDE", "Plant-Based Nutrition Certificate"],
      languages: ["English"],
      availability: "Mon – Fri, 7AM – 4PM",
      sessionsCompleted: 720,
    },
  ];
}
