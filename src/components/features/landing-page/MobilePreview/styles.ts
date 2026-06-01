import styled from 'styled-components';

export const Section = styled.section`
  padding: clamp(3rem, 7vw, 6rem) 0;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.82fr 1.18fr;
  gap: 1rem;
  align-items: center;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const Phone = styled.div`
  width: min(100%, 340px);
  margin-inline: auto;
  padding: 0.7rem;
  border-radius: 34px;
  background: linear-gradient(180deg, rgba(12, 24, 48, 0.9), rgba(8, 18, 34, 0.8));
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.35);
`;

export const Screen = styled.div`
  border-radius: 26px;
  overflow: hidden;
  min-height: 560px;
  background:
    radial-gradient(circle at top, rgba(0, 214, 143, 0.12), transparent 52%),
    linear-gradient(180deg, rgba(8, 18, 34, 0.96), rgba(5, 13, 26, 0.98));
  padding: 1rem;
  display: grid;
  gap: 0.9rem;
`;

export const Pill = styled.span`
  width: fit-content;
  padding: 0.4rem 0.7rem;
  border-radius: 999px;
  background: rgba(0, 214, 143, 0.08);
  color: var(--color-primary);
  font-size: 0.78rem;
  font-weight: 700;
`;

export const Panel = styled.div`
  padding: 1rem;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  display: grid;
  gap: 0.7rem;
`;

export const Title = styled.h3`
  margin: 0;
`;

export const Text = styled.p`
  margin: 0;
  color: var(--color-text-secondary);
  line-height: 1.7;
`;

export const Wave = styled.div`
  height: 120px;
  border-radius: 18px;
  background:
    linear-gradient(135deg, rgba(0, 214, 143, 0.16), rgba(56, 189, 248, 0.08)),
    repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.08) 0 1px, transparent 1px 12px);
`;

export const SectionCopy = styled.div`
  display: grid;
  gap: 0.75rem;
`;

