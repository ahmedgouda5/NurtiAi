import styled, { css } from "styled-components";
import { fadeUpKeyframes, SPRING_EASE, hiddenState } from "@/styles/animations";
import { theme } from "@/styles/theme";

export const Section = styled.section`
  padding: clamp(4rem, 8vw, 8rem) 0;
  background: ${theme.colors.bg};
`;

export const Grid = styled.div<{ $isVisible?: boolean }>`
  display: grid;
  gap: 2rem;
  margin-top: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  align-items: stretch;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  ${({ $isVisible }) =>
    $isVisible
      ? css`
          & > * {
            animation: ${fadeUpKeyframes} 0.55s ${SPRING_EASE} both;
          }
          & > *:nth-child(1) { animation-delay: 0s; }
          & > *:nth-child(2) { animation-delay: 0.09s; }
          & > *:nth-child(3) { animation-delay: 0.18s; }
        `
      : css`& > * { ${hiddenState} }`}
`;

export const Plan = styled.article<{
  $featured?: boolean;
  $premium?: boolean;
}>`
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

  ${({ $featured }) =>
    $featured &&
    css`
      background: linear-gradient(
        180deg,
        rgba(0, 40, 25, 0.95),
        ${theme.colors.bg2}
      );
      border: 1px solid rgba(0, 214, 143, 0.25);
      box-shadow: 0 0 60px rgba(0, 214, 143, 0.08);

      &::before {
        content: "";
        position: absolute;
        inset: -1px;
        border-radius: 28px;
        padding: 1.5px;
        background: linear-gradient(
          160deg,
          rgba(0, 214, 143, 0.4),
          rgba(0, 214, 143, 0.05) 40%,
          rgba(0, 214, 143, 0.05) 60%,
          rgba(0, 214, 143, 0.4)
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
          0 0 80px rgba(0, 214, 143, 0.12),
          0 30px 60px rgba(0, 0, 0, 0.3);
      }
    `}

  ${({ $premium }) =>
    $premium &&
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

export const PlanIcon = styled.div<{ $featured?: boolean; $premium?: boolean }>`
  width: 60px;
  height: 60px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;

  ${Plan}:hover & {
    transform: scale(1.05);
  }

  ${({ $featured }) =>
    $featured &&
    css`
      background: rgba(0, 214, 143, 0.1);
      border: 1px solid rgba(0, 214, 143, 0.2);
      color: ${theme.colors.primary};
    `}

  ${({ $premium }) =>
    $premium &&
    css`
      background: linear-gradient(135deg, rgba(139, 92, 246, 0.18), rgba(139, 92, 246, 0.06));
      border: 1px solid rgba(139, 92, 246, 0.25);
      color: ${theme.colors.purple};
    `}

  ${({ $featured, $premium }) =>
    !$featured &&
    !$premium &&
    css`
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: ${theme.colors.textSecondary};
    `}
`;

export const Header = styled.div`
  min-height: 180px;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Footer = styled.div`
  margin-top: auto;
`;

export const Name = styled.span<{
  $featured?: boolean;
  $premium?: boolean;
}>`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;

  ${({ $featured }) =>
    $featured &&
    css`
      color: ${theme.colors.primary};
    `}

  ${({ $premium }) =>
    $premium &&
    css`
      color: ${theme.colors.purple};
    `}

  ${({ $featured, $premium }) =>
    !$featured &&
    !$premium &&
    css`
      color: ${theme.colors.text};
    `}

  [dir="ltr"] & {
    letter-spacing: 0;
  }

  [dir="rtl"] & {
    letter-spacing: 0;
    text-align: right;
  }
`;

export const PlanDescription = styled.p`
  margin: 0 0 1.75rem;
  color: ${theme.colors.textSecondary};
  font-size: 0.95rem;
  line-height: 1.6;
`;

export const PriceBlock = styled.div<{ $featured?: boolean; $premium?: boolean }>`
  margin-bottom: 1.75rem;
  padding-bottom: 1.75rem;
  border-bottom: 1px solid ${theme.colors.border};
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.35rem;
`;

export const Price = styled.h3<{ $featured?: boolean; $premium?: boolean }>`
  margin: 0;
  font-size: 3.25rem;
  line-height: 1;
  font-weight: 800;
  letter-spacing: -1px;

  ${({ $featured }) =>
    $featured &&
    css`
      color: ${theme.colors.primary};
    `}

  ${({ $premium }) =>
    $premium &&
    css`
      color: ${theme.colors.purple};
    `}

  ${({ $featured, $premium }) =>
    !$featured &&
    !$premium &&
    css`
      color: ${theme.colors.text};
    `}
`;

export const Period = styled.span`
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

export const Divider = styled.div`
  display: none;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0 0 2rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  flex: 1;
  min-height: 200px;
`;

export const Item = styled.li<{
  $active: boolean;
  $featured?: boolean;
  $premium?: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${({ $active }) => ($active ? theme.colors.text : "#5f718f")};
  font-size: 0.9rem;
  line-height: 1.5;

  svg {
    flex-shrink: 0;

    ${({ $active, $featured, $premium }) =>
      !$active
        ? css`
            color: #5f718f;
          `
        : $featured
          ? css`
              color: ${theme.colors.primary};
            `
          : $premium
            ? css`
                color: ${theme.colors.purple};
              `
            : css`
                color: ${theme.colors.textSecondary};
              `}
  }
`;

export const UpgradeButton = styled.button<{
  $featured?: boolean;
  $premium?: boolean;
}>`
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

  ${({ $featured }) =>
    $featured &&
    css`
      background: ${theme.colors.primary};
      color: #000;

      &:hover {
        background: ${theme.colors.primaryDark};
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0, 214, 143, 0.3);
      }
    `}

  ${({ $premium }) =>
    $premium &&
    css`
      background: linear-gradient(135deg, ${theme.colors.purple}, #7c3aed);
      color: #fff;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(139, 92, 246, 0.35);
      }
    `}

  ${({ $featured, $premium }) =>
    !$featured &&
    !$premium &&
    css`
      background: rgba(255, 255, 255, 0.08);
      color: ${theme.colors.text};
      border: 1px solid rgba(255, 255, 255, 0.1);

      &:hover {
        background: rgba(255, 255, 255, 0.12);
        transform: translateY(-2px);
      }
    `}

  &:active {
    transform: translateY(0);
  }
`;
