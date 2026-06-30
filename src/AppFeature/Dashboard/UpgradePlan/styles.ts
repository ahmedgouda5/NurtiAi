import styled, { css } from "styled-components";
import { theme } from "@/styles/theme";

export const Section = styled.section`
  padding: clamp(2rem, 4vw, 4rem) 0;
  background: ${theme.colors.bg};
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

export const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.4rem;
  border-radius: 999px;
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.12), rgba(245, 158, 11, 0.04));
  border: 1px solid rgba(245, 158, 11, 0.25);
  color: ${theme.colors.amber};
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: clamp(2.25rem, 5vw, 3.25rem);
  font-weight: 800;
  color: ${theme.colors.text};
  line-height: 1.15;
  letter-spacing: -0.5px;
`;

export const TitleAccent = styled.span`
  background: linear-gradient(135deg, ${theme.colors.amber}, #fbbf24, ${theme.colors.amber});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Description = styled.p`
  margin: 1.25rem auto 0;
  max-width: 520px;
  color: ${theme.colors.textSecondary};
  font-size: 1.05rem;
  line-height: 1.7;
`;

export const PlansGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  align-items: stretch;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const PlanCard = styled.article<{ $isPremium?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2.5rem 2rem;
  border-radius: 28px;
  background: ${theme.colors.bg2};
  border: 1px solid ${theme.colors.border};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(255, 255, 255, 0.12);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  }

  ${({ $isPremium }) =>
    $isPremium &&
    css`
      background: linear-gradient(
        180deg,
        rgba(20, 10, 35, 0.95),
        ${theme.colors.bg2}
      );
      border: 1px solid rgba(139, 92, 246, 0.25);
      box-shadow: 0 0 60px rgba(139, 92, 246, 0.08);

      &::before {
        content: "";
        position: absolute;
        inset: -1px;
        border-radius: 28px;
        padding: 1.5px;
        background: linear-gradient(
          160deg,
          rgba(139, 92, 246, 0.4),
          rgba(139, 92, 246, 0.05) 40%,
          rgba(139, 92, 246, 0.05) 60%,
          rgba(139, 92, 246, 0.4)
        );
        -webkit-mask:
          linear-gradient(#fff 0 0) content-box,
          linear-gradient(#fff 0 0);
        mask:
          linear-gradient(#fff 0 0) content-box,
          linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
      }

      &:hover {
        transform: translateY(-8px);
        box-shadow:
          0 0 80px rgba(139, 92, 246, 0.12),
          0 30px 60px rgba(0, 0, 0, 0.3);
      }
    `}
`;

export const PremiumBadge = styled.div`
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.55rem 1.5rem;
  border-radius: 999px;
  background: linear-gradient(135deg, ${theme.colors.purple}, #7c3aed);
  color: #fff;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  white-space: nowrap;
  box-shadow: 0 4px 20px rgba(139, 92, 246, 0.35);
`;

export const PopularBadge = styled.div`
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.55rem 1.5rem;
  border-radius: 999px;
  background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.primaryDark});
  color: #000;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  white-space: nowrap;
  box-shadow: 0 4px 20px rgba(0, 214, 143, 0.35);
`;

export const PlanIcon = styled.div<{ $isPremium?: boolean }>`
  width: 60px;
  height: 60px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;

  ${PlanCard}:hover & {
    transform: scale(1.05);
  }

  ${({ $isPremium }) =>
    $isPremium
      ? css`
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.18), rgba(139, 92, 246, 0.06));
          border: 1px solid rgba(139, 92, 246, 0.25);
          color: ${theme.colors.purple};
        `
      : css`
          background: rgba(0, 214, 143, 0.1);
          border: 1px solid rgba(0, 214, 143, 0.2);
          color: ${theme.colors.primary};
        `}
`;

export const PlanName = styled.h3<{ $isPremium?: boolean }>`
  margin: 0 0 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;

  ${({ $isPremium }) =>
    $isPremium
      ? css`
          color: ${theme.colors.purple};
        `
      : css`
          color: ${theme.colors.primary};
        `}
`;

export const PlanDescription = styled.p`
  margin: 0 0 1.75rem;
  color: ${theme.colors.textSecondary};
  font-size: 0.95rem;
  line-height: 1.6;
`;

export const PriceBlock = styled.div<{ $isPremium?: boolean }>`
  margin-bottom: 1.75rem;
  padding-bottom: 1.75rem;
  border-bottom: 1px solid ${theme.colors.border};
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.35rem;
`;

export const Price = styled.span<{ $isPremium?: boolean }>`
  font-size: 3.25rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -1px;

  ${({ $isPremium }) =>
    $isPremium
      ? css`
          color: ${theme.colors.purple};
        `
      : css`
          color: ${theme.colors.text};
        `}
`;

export const PricePeriod = styled.span`
  color: ${theme.colors.textSecondary};
  font-size: 1rem;
  font-weight: 500;
`;

export const PriceNote = styled.p`
  margin: 0.6rem 0 0;
  color: ${theme.colors.textSecondary};
  font-size: 0.8rem;
  opacity: 0.8;
`;

export const FeaturesList = styled.ul`
  list-style: none;
  margin: 0 0 2rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  flex: 1;
  min-height: 200px;
`;

export const FeatureItem = styled.li<{ $isPremium?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${theme.colors.text};
  font-size: 0.9rem;
  line-height: 1.5;

  svg {
    flex-shrink: 0;

    ${({ $isPremium }) =>
      $isPremium
        ? css`
            color: ${theme.colors.purple};
          `
        : css`
            color: ${theme.colors.primary};
          `}
  }
`;

export const UpgradeButton = styled.button<{ $isPremium?: boolean }>`
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 1rem 1.5rem;
  border-radius: 14px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;

  svg {
    flex-shrink: 0;
  }

  ${({ $isPremium }) =>
    $isPremium
      ? css`
          background: linear-gradient(135deg, ${theme.colors.purple}, #7c3aed);
          color: #fff;

          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(139, 92, 246, 0.35);
          }
        `
      : css`
          background: ${theme.colors.primary};
          color: #000;

          &:hover {
            background: ${theme.colors.primaryDark};
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0, 214, 143, 0.3);
          }
        `}

  &:active {
    transform: translateY(0);
  }
`;

export const CurrentBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
  background: rgba(0, 214, 143, 0.15);
  color: ${theme.colors.primary};
  font-size: 0.7rem;
  font-weight: 600;
  margin-left: 0.5rem;
`;
