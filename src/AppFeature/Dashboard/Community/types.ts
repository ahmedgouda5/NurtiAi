export interface Challenge {
  id: number;
  title: string;
  participants: number;
  status: "Active" | "Join Now" | "Popular";
  progress: number;
  description: string;
  badge: "active" | "join" | "popular";
}

export interface LeaderboardUser {
  rank: number;
  name: string;
  steps: number;
  points: number;
  currentUser?: boolean;
}

export interface CommunityProps {
  challenges?: Challenge[];
  leaderboard?: LeaderboardUser[];
}
