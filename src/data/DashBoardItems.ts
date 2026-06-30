import {
  Home,
  Utensils,
  Dumbbell,
  LineChart,
  Users,
  User,
  Calendar,
  Crown,
  ArrowLeft,
} from "lucide-react";

export const menuItems = [
  { title: "Overview", icon: Home, href: "/dashboard" },
  { title: "Food Log", icon: Utensils, href: "/dashboard/food-log" },
  { title: "Workouts", icon: Dumbbell, href: "/dashboard/workouts" },
  { title: "Progress", icon: LineChart, href: "/dashboard/progress" },
  { title: "Community", icon: Users, href: "/dashboard/community" },
  { title: "Profile", icon: User, href: "/dashboard/profile" },
  { title: "Book Coach", icon: Calendar, href: "/dashboard/book-coach" },
];

export const bottomItems = [
  { title: "Upgrade Plan", icon: Crown, href: "/dashboard/upgradePlan" },
  { title: "Back to Home", icon: ArrowLeft, href: "/" },
];
