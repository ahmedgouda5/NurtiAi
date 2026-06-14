"use client";

import { memo, useMemo } from "react";
import { FaStar } from "react-icons/fa";
import LeaderboardItem from "./LeaderboardItem";
import EmptyState from "./EmptyState";
import { SectionCard, SectionTitle, LeaderboardList } from "../style";
import { LeaderboardUser } from "../types";

interface LeaderboardProps {
  users: LeaderboardUser[];
}

const Leaderboard = memo(({ users }: LeaderboardProps) => {
  const sortedUsers = useMemo(
    () => [...users].sort((a, b) => a.rank - b.rank),
    [users]
  );

  if (sortedUsers.length === 0) {
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
        {sortedUsers.map((user, index) => (
          <LeaderboardItem key={user.rank} user={user} index={index} />
        ))}
      </LeaderboardList>
    </SectionCard>
  );
});

Leaderboard.displayName = "Leaderboard";

export default Leaderboard;
