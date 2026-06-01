import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Section = styled.section`
  padding: clamp(4rem, 8vw, 7rem) 0;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const QuoteCard = styled.blockquote`
  margin: 0;
  padding: 2rem;
  min-height: 360px;

  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.08);

  background: linear-gradient(
    180deg,
    rgba(9, 20, 42, 0.95) 0%,
    rgba(7, 15, 32, 0.95) 100%
  );

  display: flex;
  flex-direction: column;

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(0, 214, 143, 0.25);
  }
`;

export const Stars = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1rem;

  color: #ffb020;
  font-size: 1.2rem;
  letter-spacing: 2px;
`;

export const Quote = styled.p`
  margin: 0;
  flex: 1;
  font-size: 1.05rem;
  line-height: 1.9;
  color: ${theme.colors.textSecondary};
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;

export const Avatar = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.25rem;
  color: white;
  background: linear-gradient(
    135deg,
    ${theme.colors.primaryDark} 0%,
    ${theme.colors.bg2} 100%
  );
  flex-shrink: 0;
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.strong`
  font-size: 1.15rem;
  color: white;
  font-weight: 700;
`;

export const Role = styled.span`
  margin-top: 0.25rem;

  color: rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
`;
