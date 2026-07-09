import styled, { css } from 'styled-components';
import { fadeUpKeyframes, SPRING_EASE, hiddenState } from "@/styles/animations";

export const Section = styled.section`
  padding: clamp(3rem, 7vw, 6rem) 0;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 1rem;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const Side = styled.div<{ $isVisible?: boolean }>`
  display: grid;
  gap: 1rem;

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

export const MetricGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const MetricCard = styled.div`
  padding: 1.2rem;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
`;

export const MetricLabel = styled.span`
  display: block;
  color: var(--color-text-secondary);
  margin-bottom: 0.5rem;
`;

export const MetricValue = styled.strong`
  font-size: 1.5rem;
`;

