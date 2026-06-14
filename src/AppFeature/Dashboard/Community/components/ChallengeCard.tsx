"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { FaRunning, FaFire, FaTrophy, FaUsers } from "react-icons/fa";
import {
  ChallengeItem,
  ChallengeHeader,
  ChallengeIcon,
  StatusBadge,
  ChallengeTitle,
  ChallengeDescription,
  ParticipantsRow,
  ProgressBarTrack,
  ProgressBarFill,
} from "../style";
import { Challenge } from "../types";

interface ChallengeCardProps {
  challenge: Challenge;
  index: number;
}

const iconMap: Record<number, React.ReactNode> = {
  1: <FaRunning />,
  2: <FaFire />,
  3: <FaTrophy />,
};

const ChallengeCard = memo(({ challenge, index }: ChallengeCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.1 }}
    >
      <ChallengeItem>
        <ChallengeHeader>
          <ChallengeIcon>{iconMap[challenge.id] || <FaTrophy />}</ChallengeIcon>
          <StatusBadge $variant={challenge.badge}>{challenge.status}</StatusBadge>
        </ChallengeHeader>
        <ChallengeTitle>{challenge.title}</ChallengeTitle>
        <ChallengeDescription>{challenge.description}</ChallengeDescription>
        <ParticipantsRow>
          <FaUsers size={14} />
          {challenge.participants.toLocaleString()} participants
        </ParticipantsRow>
        <ProgressBarTrack>
          <ProgressBarFill
            $progress={challenge.progress}
            $variant={challenge.badge}
          />
        </ProgressBarTrack>
      </ChallengeItem>
    </motion.div>
  );
});

ChallengeCard.displayName = "ChallengeCard";

export default ChallengeCard;
