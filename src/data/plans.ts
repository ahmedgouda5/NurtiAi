export const plans = [
  {
    name: "FREE TRIAL",
    price: "$0",
    period: "/ first month",
    description:
      "Everything you need to start your health transformation. No credit card required.",
    button: "Start Free Trial",
    features: [
      { text: "AI Food Scanner (20/day)", available: true },
      { text: "Basic Calorie Tracking", available: true },
      { text: "3 Workout Plans", available: true },
      { text: "Weekly Analytics", available: true },
      { text: "Coach Sessions", available: false },
      { text: "AI Predictions", available: false },
    ],
  },
  {
    name: "PRO",
    price: "$19",
    period: "/ month",
    featured: true,
    description:
      "Advanced AI tools, unlimited tracking, and detailed insights for serious health goals.",
    button: "Get Pro",
    features: [
      { text: "Unlimited Food Scans", available: true },
      { text: "Full Macro & Micro Tracking", available: true },
      { text: "All Workout Plans", available: true },
      { text: "AI Weight Prediction", available: true },
      { text: "Monthly Analytics", available: true },
      { text: "Coach Sessions", available: false },
    ],
  },
  {
    name: "PREMIUM COACH",
    price: "$79",
    period: "/ month",
    description:
      "Everything in Pro, plus dedicated coach/doctor sessions and priority support.",
    button: "Get Premium",
    premium: true,
    features: [
      { text: "Everything in Pro", available: true },
      { text: "4 Coach Sessions/month", available: true },
      { text: "Doctor Consultation", available: true },
      { text: "Custom Meal Plans", available: true },
      { text: "Priority Support 24/7", available: true },
      { text: "Before/After Tracking", available: true },
    ],
  },
];
