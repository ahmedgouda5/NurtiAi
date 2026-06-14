import { Challenge, LeaderboardUser } from "./types";

export const challenges: Challenge[] = [
  {
    id: 1,
    title: "10K Steps Daily",
    participants: 1234,
    status: "Active",
    progress: 82,
    description: "Ends in 5 days",
    badge: "active",
  },
  {
    id: 2,
    title: "No Sugar Week",
    participants: 876,
    status: "Join Now",
    progress: 0,
    description: "Starts Monday",
    badge: "join",
  },
  {
    id: 3,
    title: "30-Day Transformation",
    participants: 5102,
    status: "Popular",
    progress: 58,
    description: "Ongoing",
    badge: "popular",
  },
];

export const leaderboard: LeaderboardUser[] = [
  {
    rank: 1,
    name: "Mohamed H.",
    steps: 12450,
    points: 2340,
  },
  {
    rank: 2,
    name: "Nora R.",
    steps: 11200,
    points: 2110,
  },
  {
    rank: 3,
    name: "Khaled M.",
    steps: 10876,
    points: 1980,
  },
  {
    rank: 47,
    name: "You (Current User)",
    steps: 8234,
    points: 987,
    currentUser: true,
  },
];
