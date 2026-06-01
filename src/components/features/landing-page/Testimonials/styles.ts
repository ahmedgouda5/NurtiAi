import styled from 'styled-components';

export const Section = styled.section`
  padding: clamp(3rem, 7vw, 6rem) 0;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const QuoteCard = styled.blockquote`
  margin: 0;
  padding: 1.35rem;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: linear-gradient(180deg, rgba(12, 24, 48, 0.84), rgba(9, 16, 31, 0.7));
  display: grid;
  gap: 0.85rem;
`;

export const Quote = styled.p`
  margin: 0;
  line-height: 1.75;
  color: var(--color-text);
`;

export const Author = styled.div`
  display: grid;
  gap: 0.2rem;
`;

export const Name = styled.strong`
  font-size: 1rem;
`;

export const Role = styled.span`
  color: var(--color-text-secondary);
  font-size: 0.92rem;
`;

