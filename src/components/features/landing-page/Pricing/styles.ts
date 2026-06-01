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

export const Plan = styled.article<{ $featured?: boolean }>`
  display: grid;
  gap: 1rem;
  padding: 1.4rem;
  border-radius: 26px;
  border: 1px solid ${({ $featured }) => ($featured ? 'rgba(0,214,143,0.28)' : 'rgba(255,255,255,0.06)')};
  background:
    linear-gradient(180deg, rgba(12, 24, 48, 0.92), rgba(8, 18, 34, 0.72)),
    ${({ $featured }) => ($featured ? 'radial-gradient(circle at top, rgba(0,214,143,0.14), transparent 55%)' : 'none')};
  box-shadow: ${({ $featured }) => ($featured ? '0 30px 70px rgba(0, 214, 143, 0.15)' : 'none')};
`;

export const Name = styled.h3`
  margin: 0;
`;

export const Price = styled.strong`
  font-size: 2.25rem;
  font-family: var(--font-syne), sans-serif;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.7rem;
`;

export const Item = styled.li`
  color: var(--color-text-secondary);
  line-height: 1.6;
`;

export const FeaturedTag = styled.span`
  width: fit-content;
  padding: 0.4rem 0.7rem;
  border-radius: 999px;
  background: rgba(0, 214, 143, 0.08);
  color: var(--color-primary);
  font-weight: 700;
  font-size: 0.82rem;
`;

