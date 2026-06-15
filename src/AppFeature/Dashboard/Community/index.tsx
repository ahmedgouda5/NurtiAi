import ActiveChallenges from "./components/ActiveChallenges";
import Leaderboard from "./components/Leaderboard";
import { CommunityPage, MainGrid } from "./style";
import {
  challenges as defaultChallenges,
  leaderboard as defaultLeaderboard,
} from "./data";
import { CommunityProps } from "./types";

const CommunityDashboard = ({ challenges, leaderboard }: CommunityProps) => {
  return (
    <CommunityPage>
      <MainGrid>
        <ActiveChallenges challenges={challenges || defaultChallenges} />
        <Leaderboard users={leaderboard || defaultLeaderboard} />
      </MainGrid>
    </CommunityPage>
  );
};

export default CommunityDashboard;
