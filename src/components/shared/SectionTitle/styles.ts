import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 0.9rem;
  margin-bottom: clamp(1.5rem, 3vw, 3rem);
`;

export const Eyebrow = styled.span`
  width: fit-content;
  border-radius: 999px;
  border: 1px solid rgba(0, 214, 143, 0.22);
  background: rgba(0, 214, 143, 0.08);
  color: ${theme.colors.primary};
  padding: 0.45rem 0.8rem;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const Title = styled.h2`
  margin: 0;
  font-family: var(--font-syne), sans-serif;
  font-size: clamp(2rem, 4vw, 3.6rem);
  line-height: 0.98;
  letter-spacing: -0.05em;
`;

export const Description = styled.p`
  margin: 0;
  color: var(--color-text-secondary);
  font-size: clamp(1rem, 1.2vw, 1.08rem);
  line-height: 1.7;
  max-width: 62ch;
`;
