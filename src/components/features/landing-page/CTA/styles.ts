import styled from 'styled-components';

export const Section = styled.section`
  padding: clamp(3rem, 7vw, 6rem) 0 5rem;
`;

export const Banner = styled.div`
  padding: clamp(1.5rem, 4vw, 3rem);
  border-radius: 32px;
  border: 1px solid rgba(0, 214, 143, 0.2);
  background:
    radial-gradient(circle at top right, rgba(0, 214, 143, 0.16), transparent 30%),
    linear-gradient(135deg, rgba(10, 20, 40, 0.96), rgba(6, 12, 24, 0.92));
  display: grid;
  gap: 1rem;
  text-align: center;
`;

export const Title = styled.h2`
  margin: 0;
  font-family: var(--font-syne), sans-serif;
  font-size: clamp(2rem, 4.8vw, 4rem);
  line-height: 0.98;
`;

export const Text = styled.p`
  margin: 0 auto;
  max-width: 64ch;
  color: var(--color-text-secondary);
  line-height: 1.8;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.85rem;
  flex-wrap: wrap;
`;

