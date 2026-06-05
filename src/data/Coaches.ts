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

export const coachesData: Coach[] = [
  {
    id: 1,
    initials: "SA",
    name: "Dr. Sara Ahmed",
    title: "Nutritionist, MD",
    specialty: "Weight Loss",
    rate: 4.9,
    reviews: 312,
    price: 45,
    gradient: "linear-gradient(135deg,#00D68F,#38BDF8)",
  },
  {
    id: 2,
    initials: "MK",
    name: "Mike Kowalski",
    title: "Fitness Coach, CSCS",
    specialty: "Strength",
    rate: 4.8,
    reviews: 245,
    price: 35,
    gradient: "linear-gradient(135deg,#8B5CF6,#F59E0B)",
  },
  {
    id: 3,
    initials: "LR",
    name: "Dr. Lina Rashid",
    title: "Sports Medicine",
    specialty: "Recovery",
    rate: 5.0,
    reviews: 189,
    price: 55,
    gradient: "linear-gradient(135deg,#FF6B6B,#8B5CF6)",
  },
  {
    id: 4,
    initials: "JT",
    name: "James Torres",
    title: "Yoga & Mindfulness",
    specialty: "Flexibility",
    rate: 4.7,
    reviews: 156,
    price: 30,
    gradient: "linear-gradient(135deg,#38BDF8,#00D68F)",
  },
];
