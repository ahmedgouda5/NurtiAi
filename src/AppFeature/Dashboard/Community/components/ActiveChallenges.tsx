"use client";

import { memo, useMemo } from "react";
import { FaTrophy } from "react-icons/fa";
import ChallengeCard from "./ChallengeCard";
import EmptyState from "./EmptyState";
import { SectionCard, SectionTitle, ChallengesList } from "../style";
import { Challenge } from "../types";

interface ActiveChallengesProps {
  challenges: Challenge[];
}

const ActiveChallenges = memo(({ challenges }: ActiveChallengesProps) => {
  const sortedChallenges = useMemo(
    () =>
      [...challenges].sort((a, b) => {
        const order = { active: 0, popular: 1, join: 2 };
        return order[a.badge] - order[b.badge];
      }),
    [challenges]
  );

  if (sortedChallenges.length === 0) {
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
        {sortedChallenges.map((challenge, index) => (
          <ChallengeCard key={challenge.id} challenge={challenge} index={index} />
        ))}
      </ChallengesList>
    </SectionCard>
  );
});

ActiveChallenges.displayName = "ActiveChallenges";

export default ActiveChallenges;
