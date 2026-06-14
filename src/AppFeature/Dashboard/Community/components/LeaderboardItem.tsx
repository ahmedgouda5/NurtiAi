"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { FaMedal, FaShoePrints } from "react-icons/fa";
import {
  LeaderboardItemCard,
  RankBadge,
  Avatar,
  UserInfo,
  UserName,
  UserSteps,
  PointsBadge,
} from "../style";
import { LeaderboardUser } from "../types";

interface LeaderboardItemProps {
  user: LeaderboardUser;
  index: number;
}

const medalEmojis: Record<number, string> = {
  1: "🥇",
  2: "🥈",
  3: "🥉",
};

const LeaderboardItem = memo(({ user, index }: LeaderboardItemProps) => {
  const isTop3 = user.rank <= 3;

  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.08 }}
    >
      <LeaderboardItemCard $isCurrentUser={user.currentUser}>
        <RankBadge $top={isTop3}>
          {medalEmojis[user.rank] || user.rank}
        </RankBadge>
        <Avatar>
          {user.name.charAt(0)}
        </Avatar>
        <UserInfo>
          <UserName>{user.name}</UserName>
          <UserSteps>
            <FaShoePrints size={12} /> {user.steps.toLocaleString()} steps today
          </UserSteps>
        </UserInfo>
        <PointsBadge>
          <FaMedal size={14} />
          {user.points.toLocaleString()}
        </PointsBadge>
      </LeaderboardItemCard>
    </motion.div>
  );
});

LeaderboardItem.displayName = "LeaderboardItem";

export default LeaderboardItem;
