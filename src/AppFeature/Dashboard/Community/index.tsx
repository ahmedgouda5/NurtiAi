"use client";

import { useMemo } from "react";
import ActiveChallenges from "./components/ActiveChallenges";
import Leaderboard from "./components/Leaderboard";
import { CommunityPage, MainGrid } from "./style";
import {
  challenges as defaultChallenges,
  leaderboard as defaultLeaderboard,
} from "./data";
import { CommunityProps } from "./types";

const CommunityDashboard = ({ challenges, leaderboard }: CommunityProps) => {
  const memoizedChallenges = useMemo(
    () => challenges || defaultChallenges,
    [challenges],
  );
  const memoizedLeaderboard = useMemo(
    () => leaderboard || defaultLeaderboard,
    [leaderboard],
  );

  return (
    <CommunityPage>
      <MainGrid>
        <ActiveChallenges challenges={memoizedChallenges} />
        <Leaderboard users={memoizedLeaderboard} />
      </MainGrid>
    </CommunityPage>
  );
};

export default CommunityDashboard;
