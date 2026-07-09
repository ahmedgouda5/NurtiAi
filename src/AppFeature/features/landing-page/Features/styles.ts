import { theme } from "@/styles/theme";
import styled, { css } from "styled-components";
import { fadeUpKeyframes, SPRING_EASE, hiddenState } from "@/styles/animations";

export const Section = styled.section`
  padding: clamp(3rem, 7vw, 6rem) 0;
`;

export const Grid = styled.div<{ $isVisible?: boolean }>`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
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
          & > *:nth-child(4) { animation-delay: 0.27s; }
          & > *:nth-child(5) { animation-delay: 0.36s; }
          & > *:nth-child(6) { animation-delay: 0.45s; }
        `
      : css`& > * { ${hiddenState} }`}
`;

export const FeatureCard = styled.a`
  display: grid;
  gap: 0.85rem;
  min-height: 220px;
  padding: 1.3rem;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0px 24px 50px 0px rgba(0, 0, 0, 0.3);
  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(0, 214, 143, 0.28);
    box-shadow: 0 24px 50px rgba(0, 0, 0, 0.3);
  }
`;

export const IconWrap = styled.div<{ bg?: string }>`
  display: grid;
  place-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 16px;
  background: ${({ bg }) => bg};
  border: 1px solid rgba(0, 214, 143, 0.16);
  color: var(--color-primary);
`;
export const Title = styled.h3`
  margin: 0;
  font-size: 1.15rem;
`;

export const Description = styled.p`
  margin: 0;
  color: ${theme.colors.textSecondary};
  line-height: 1.7;
`;

export const Meta = styled.span<{ color?: string }>`
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ color }) => color || theme.colors.primary};
  font-weight: 300;
`;
