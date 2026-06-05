import styled from 'styled-components';

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

export const Side = styled.div`
  display: grid;
  gap: 1rem;
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

