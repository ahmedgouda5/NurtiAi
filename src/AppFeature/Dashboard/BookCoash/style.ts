import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Page = styled.div`
  padding: 2rem;
  min-height: 100%;
`;

export const PageHeader = styled.div`
  margin-bottom: 2.5rem;
`;

export const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  color: ${theme.colors.text};
  margin-bottom: 0.5rem;
`;

export const PageSubtitle = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: 1rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
`;

export const Card = styled.article`
  background: ${theme.colors.bg2};
  border: 1px solid ${theme.colors.border};
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 1px;
    background: linear-gradient(135deg, transparent, transparent);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    transition: background 0.35s ease;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: ${theme.colors.primary}40;
    box-shadow: 0 24px 48px rgba(0, 0, 0, 0.35),
      0 0 60px ${theme.colors.primary}10;

    &::before {
      background: linear-gradient(
        135deg,
        ${theme.colors.primary}50,
        ${theme.colors.purple}30
      );
    }
  }
`;

export const CardHeader = styled.div<{ $gradient: string }>`
  padding: 2rem 2rem 1.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at 50% 120%,
      ${({ $gradient }) => $gradient.replace("linear-gradient(135deg,", "").replace(")", "")}15,
      transparent 60%
    );
    pointer-events: none;
  }
`;

export const Avatar = styled.div<{ $gradient: string }>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${({ $gradient }) => $gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;
  font-size: 1.5rem;
  font-weight: 800;
  color: #fff;
  position: relative;
  z-index: 1;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
`;

export const CoachName = styled.h3`
  color: ${theme.colors.text};
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  position: relative;
  z-index: 1;
`;

export const CoachTitle = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: 0.875rem;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
`;

export const RatingRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
  z-index: 1;
`;

export const Stars = styled.span`
  color: ${theme.colors.amber};
  font-size: 0.9rem;
  letter-spacing: 2px;
`;

export const RateValue = styled.span`
  color: ${theme.colors.text};
  font-weight: 700;
  font-size: 0.9rem;
`;

export const ReviewsCount = styled.span`
  color: ${theme.colors.textSecondary};
  font-size: 0.8rem;
`;

export const Divider = styled.div`
  height: 1px;
  background: ${theme.colors.border};
  margin: 0 1.5rem;
`;

export const CardBody = styled.div`
  padding: 1.5rem 2rem 2rem;
`;

export const StatsRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;
`;

export const Stat = styled.div`
  text-align: center;
  flex: 1;
`;

export const StatValue = styled.p`
  color: ${theme.colors.text};
  font-weight: 700;
  font-size: 1.1rem;
`;

export const StatLabel = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: 0.75rem;
  margin-top: 0.2rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const SpecialtyTag = styled.span`
  display: inline-block;
  background: ${theme.colors.bg3};
  border: 1px solid ${theme.colors.border};
  border-radius: 999px;
  padding: 0.35rem 0.85rem;
  color: ${theme.colors.primary};
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
`;

export const Price = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${theme.colors.text};

  span {
    font-size: 0.85rem;
    font-weight: 400;
    color: ${theme.colors.textSecondary};
  }
`;

export const BookButton = styled.button`
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 12px;
  background: ${theme.colors.primary};
  color: #000;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s ease;
  letter-spacing: 0.3px;

  &:hover {
    background: ${theme.colors.primaryDark};
    box-shadow: 0 8px 24px ${theme.colors.primary}30;
  }

  &:active {
    transform: scale(0.98);
  }
`;

// Modal Styles

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  animation: fadeIn 0.25s ease;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

export const ModalContent = styled.div`
  background: ${theme.colors.bg2};
  border: 1px solid ${theme.colors.border};
  border-radius: 24px;
  width: 100%;
  max-width: 620px;
  max-height: 90vh;
  overflow-y: auto;
  animation: slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(24px) scale(0.97);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.border};
    border-radius: 3px;
  }
`;

export const ModalHeader = styled.div<{ $gradient: string }>`
  padding: 2.5rem 2rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at 50% 120%,
      ${({ $gradient }) => $gradient.replace("linear-gradient(135deg,", "").replace(")", "")}20,
      transparent 60%
    );
    pointer-events: none;
  }
`;

export const ModalAvatar = styled.div<{ $gradient: string }>`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: ${({ $gradient }) => $gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;
  font-size: 2rem;
  font-weight: 800;
  color: #fff;
  position: relative;
  z-index: 1;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
`;

export const ModalName = styled.h2`
  color: ${theme.colors.text};
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 0.25rem;
  position: relative;
  z-index: 1;
`;

export const ModalTitle = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: 0.95rem;
  margin-bottom: 0.75rem;
  position: relative;
  z-index: 1;
`;

export const ModalRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
  z-index: 1;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid ${theme.colors.border};
  background: ${theme.colors.bg3};
  color: ${theme.colors.textSecondary};
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 2;

  &:hover {
    background: ${theme.colors.border};
    color: ${theme.colors.text};
  }
`;

export const ModalBody = styled.div`
  padding: 0 2rem 2rem;
`;

export const ModalSection = styled.div`
  margin-bottom: 1.5rem;
`;

export const ModalSectionTitle = styled.h4`
  color: ${theme.colors.text};
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.75rem;
`;

export const ModalBio = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: 0.9rem;
  line-height: 1.7;
`;

export const ModalStatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  background: ${theme.colors.bg3};
  border-radius: 16px;
  padding: 1.25rem;
`;

export const ModalStat = styled.div`
  text-align: center;
`;

export const ModalStatValue = styled.p`
  color: ${theme.colors.text};
  font-weight: 800;
  font-size: 1.2rem;
`;

export const ModalStatLabel = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 0.2rem;
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Tag = styled.span`
  background: ${theme.colors.bg3};
  border: 1px solid ${theme.colors.border};
  border-radius: 999px;
  padding: 0.3rem 0.75rem;
  color: ${theme.colors.text};
  font-size: 0.8rem;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.6rem 0;
  border-bottom: 1px solid ${theme.colors.border};

  &:last-child {
    border-bottom: none;
  }
`;

export const InfoIcon = styled.span`
  color: ${theme.colors.primary};
  font-size: 1rem;
  width: 20px;
  text-align: center;
`;

export const InfoLabel = styled.span`
  color: ${theme.colors.textSecondary};
  font-size: 0.85rem;
  flex: 1;
`;

export const InfoValue = styled.span`
  color: ${theme.colors.text};
  font-size: 0.85rem;
  font-weight: 600;
`;

export const ModalFooter = styled.div`
  padding: 1.5rem 2rem;
  border-top: 1px solid ${theme.colors.border};
  display: flex;
  gap: 1rem;
`;

export const SubscribeButton = styled.button`
  flex: 1;
  height: 52px;
  border: none;
  border-radius: 14px;
  background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.primaryDark});
  color: #000;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    box-shadow: 0 8px 32px ${theme.colors.primary}40;
    transform: translateY(-1px);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const CancelButton = styled.button`
  height: 52px;
  padding: 0 1.5rem;
  border-radius: 14px;
  border: 1px solid ${theme.colors.border};
  background: transparent;
  color: ${theme.colors.textSecondary};
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${theme.colors.bg3};
    color: ${theme.colors.text};
  }
`;
