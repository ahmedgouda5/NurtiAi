import styled, { css, keyframes } from "styled-components";
import { theme } from "@/styles/theme";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
`;

export const CommunityPage = styled.div`
  padding: clamp(1rem, 3vw, 2rem);
  background: ${theme.colors.bg};
`;

export const Header = styled.div`
  margin-bottom: clamp(1.5rem, 4vw, 2.5rem);
`;

export const Title = styled.h1`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: ${theme.colors.text};
  margin: 0 0 0.25rem 0;
  letter-spacing: -0.02em;
`;

export const Subtitle = styled.p`
  font-size: clamp(0.85rem, 1.2vw, 1rem);
  color: ${theme.colors.textSecondary};
  margin: 0;
`;

export const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const SectionCard = styled.div`
  background: ${theme.colors.bg2};
  border: 1px solid ${theme.colors.border};
  border-radius: 24px;
  padding: clamp(1.25rem, 3vw, 1.75rem);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      ${theme.colors.primary}40,
      ${theme.colors.blue}40,
      transparent
    );
  }
`;

export const SectionTitle = styled.h2`
  font-size: clamp(1rem, 1.8vw, 1.2rem);
  font-weight: 600;
  color: ${theme.colors.text};
  margin: 0 0 1.25rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  letter-spacing: -0.01em;
`;

export const ChallengesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ChallengeItem = styled.div`
  background: ${theme.colors.bg3};
  border: 1px solid ${theme.colors.border};
  border-radius: 14px;
  padding: 0.9rem 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  animation: ${fadeIn} 0.4s ease forwards;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    border-color: ${theme.colors.primary}40;
  }
`;

export const ChallengeHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`;

export const ChallengeIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  background: ${theme.colors.primary}15;
  color: ${theme.colors.primary};
`;

export const StatusBadge = styled.span<{ $variant: "active" | "join" | "popular" }>`
  font-size: 0.6rem;
  font-weight: 600;
  padding: 0.25rem 0.6rem;
  border-radius: 100px;
  text-transform: uppercase;
  letter-spacing: 0.04em;

  ${({ $variant }) => {
    switch ($variant) {
      case "active":
        return css`
          background: ${theme.colors.primary}20;
          color: ${theme.colors.primary};
        `;
      case "join":
        return css`
          background: ${theme.colors.amber}20;
          color: ${theme.colors.amber};
        `;
      case "popular":
        return css`
          background: ${theme.colors.purple}20;
          color: ${theme.colors.purple};
        `;
    }
  }}
`;

export const ChallengeTitle = styled.h3`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${theme.colors.text};
  margin: 0 0 0.25rem 0;
`;

export const ChallengeDescription = styled.p`
  font-size: 0.75rem;
  color: ${theme.colors.textSecondary};
  margin: 0 0 0.6rem 0;
`;

export const ParticipantsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.6rem;
  font-size: 0.7rem;
  color: ${theme.colors.textSecondary};
`;

export const ProgressBarTrack = styled.div`
  width: 100%;
  height: 5px;
  background: ${theme.colors.border};
  border-radius: 100px;
  overflow: hidden;
`;

export const ProgressBarFill = styled.div<{ $progress: number; $variant: "active" | "join" | "popular" }>`
  height: 100%;
  border-radius: 100px;
  transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${shimmer} 2s linear infinite;
  background-size: 200% 100%;

  ${({ $variant }) => {
    switch ($variant) {
      case "active":
        return css`
          background: linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.primaryDark}, ${theme.colors.primary});
        `;
      case "join":
        return css`
          background: linear-gradient(90deg, ${theme.colors.amber}, #F59E0B, ${theme.colors.amber});
        `;
      case "popular":
        return css`
          background: linear-gradient(90deg, ${theme.colors.purple}, ${theme.colors.blue}, ${theme.colors.purple});
        `;
    }
  }}

  width: ${({ $progress }) => $progress}%;
`;

export const LeaderboardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const LeaderboardItemCard = styled.div<{ $isCurrentUser?: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: ${({ $isCurrentUser }) =>
    $isCurrentUser ? `${theme.colors.primary}10` : theme.colors.bg3};
  border: 1px solid ${({ $isCurrentUser }) =>
    $isCurrentUser ? `${theme.colors.primary}50` : theme.colors.border};
  border-radius: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${fadeIn} 0.4s ease forwards;

  ${({ $isCurrentUser }) =>
    $isCurrentUser &&
    css`
      box-shadow: 0 0 20px ${theme.colors.primary}15, inset 0 0 20px ${theme.colors.primary}08;
    `}

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  }
`;

export const RankBadge = styled.span<{ $top?: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: 700;
  background: ${({ $top }) => ($top ? `${theme.colors.amber}20` : `${theme.colors.border}`)};
  color: ${({ $top }) => ($top ? theme.colors.amber : theme.colors.textSecondary)};
  flex-shrink: 0;
`;

export const Avatar = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${theme.colors.purple}, ${theme.colors.blue});
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 600;
  color: ${theme.colors.text};
  flex-shrink: 0;
`;

export const UserInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const UserName = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${theme.colors.text};
  margin-bottom: 0.2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UserSteps = styled.div`
  font-size: 0.75rem;
  color: ${theme.colors.textSecondary};
`;

export const PointsBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.4rem 0.75rem;
  background: ${theme.colors.amber}15;
  border-radius: 100px;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${theme.colors.amber};
  flex-shrink: 0;
`;

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1.5rem;
  text-align: center;
`;

export const EmptyIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  background: ${theme.colors.border};
  color: ${theme.colors.textSecondary};
  margin-bottom: 1rem;
  animation: ${pulse} 2s ease-in-out infinite;
`;

export const EmptyTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${theme.colors.text};
  margin: 0 0 0.35rem 0;
`;

export const EmptyText = styled.p`
  font-size: 0.85rem;
  color: ${theme.colors.textSecondary};
  margin: 0;
  max-width: 280px;
`;
