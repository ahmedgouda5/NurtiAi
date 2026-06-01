import styled from "styled-components";

export const FooterShell = styled.footer`
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(4, 10, 20, 0.74);
  padding: 2rem 0;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Brand = styled.div`
  display: grid;
  gap: 0.75rem;
`;

export const Title = styled.h3`
  margin: 0;
  font-family: var(--font-syne), sans-serif;
`;

export const Text = styled.p`
  margin: 0;
  color: var(--color-text-secondary);
  line-height: 1.7;
`;

export const Links = styled.div`
  display: grid;
  gap: 0.7rem;
`;

export const LinkTitle = styled.span`
  font-weight: 700;
  color: var(--color-text);
`;

export const FooterLink = styled.a`
  color: var(--color-text-secondary);
  transition: color 0.2s ease;

  &:hover {
    color: var(--color-primary);
  }
`;

export const Bottom = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: start;
  }
`;

