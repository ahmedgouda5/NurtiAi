import { theme } from "@/styles/theme";
import styled, { css } from "styled-components";
import { fadeUpKeyframes, SPRING_EASE, hiddenState } from "@/styles/animations";

export const Section = styled.section`
  padding: clamp(3rem, 7vw, 6rem) 0 5rem;
`;

export const Banner = styled.div<{ $isVisible?: boolean }>`
  padding: clamp(1.5rem, 4vw, 3rem);
  border-radius: 32px;
  border: 1px solid rgba(0, 214, 143, 0.2);
  background:
    radial-gradient(
      circle at top right,
      rgba(0, 214, 143, 0.16),
      transparent 30%
    ),
    linear-gradient(135deg, rgba(10, 20, 40, 0.96), rgba(6, 12, 24, 0.92));
  display: grid;
  gap: 1rem;
  text-align: center;

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
        `
      : css`& > * { ${hiddenState} }`}
`;

export const Title = styled.h2`
  margin: 0;
  font-family: var(--font-syne), sans-serif;
  font-size: clamp(4rem, 5.8vw, 6rem);
  line-height: 0.98;
`;

export const Text = styled.p`
  margin: 0 auto;
  max-width: 64ch;
  color: ${theme.colors.textSecondary};
  line-height: 1.8;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.85rem;
  flex-wrap: wrap;
`;
