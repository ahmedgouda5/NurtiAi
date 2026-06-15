import { FaTrophy } from "react-icons/fa";
import ChallengeCard from "./ChallengeCard";
import EmptyState from "./EmptyState";
import { SectionCard, SectionTitle, ChallengesList } from "../style";
import { Challenge } from "../types";

interface ActiveChallengesProps {
  challenges: Challenge[];
}

const ActiveChallenges = ({ challenges }: ActiveChallengesProps) => {
  const sorted = [...challenges].sort((a, b) => {
    const order = { active: 0, popular: 1, join: 2 };
    return order[a.badge] - order[b.badge];
  });

  if (sorted.length === 0) {
    return (
      <SectionCard>
        <SectionTitle>
          <FaTrophy /> Active Challenges
        </SectionTitle>
        <EmptyState
          icon="🏆"
          title="No active challenges"
          text="Check back soon for new fitness challenges to join!"
        />
      </SectionCard>
    );
  }

  return (
    <SectionCard>
      <SectionTitle>
        <FaTrophy /> Active Challenges
      </SectionTitle>
      <ChallengesList>
        {sorted.map((challenge, index) => (
          <ChallengeCard key={challenge.id} challenge={challenge} index={index} />
        ))}
      </ChallengesList>
    </SectionCard>
  );
};

export default ActiveChallenges;
