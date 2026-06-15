import { FaStar } from "react-icons/fa";
import LeaderboardItem from "./LeaderboardItem";
import EmptyState from "./EmptyState";
import { SectionCard, SectionTitle, LeaderboardList } from "../style";
import { LeaderboardUser } from "../types";

interface LeaderboardProps {
  users: LeaderboardUser[];
}

const Leaderboard = ({ users }: LeaderboardProps) => {
  const sorted = [...users].sort((a, b) => a.rank - b.rank);

  if (sorted.length === 0) {
    return (
      <SectionCard>
        <SectionTitle>
          <FaStar /> Leaderboard
        </SectionTitle>
        <EmptyState
          icon="🌟"
          title="No leaderboard data"
          text="Start logging your activities to climb the ranks!"
        />
      </SectionCard>
    );
  }

  return (
    <SectionCard>
      <SectionTitle>
        <FaStar /> Leaderboard
      </SectionTitle>
      <LeaderboardList>
        {sorted.map((user, index) => (
          <LeaderboardItem key={user.rank} user={user} index={index} />
        ))}
      </LeaderboardList>
    </SectionCard>
  );
};

export default Leaderboard;
