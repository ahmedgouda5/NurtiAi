import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Container = styled.div``;

export const Card = styled.div`
  margin: 0 auto;
  max-width: 56rem;
  border-radius: 1.5rem;
  border: 1px solid ${theme.colors.border};
  padding: 1.5rem;
  background: ${theme.colors.bg2};

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

export const Header = styled.div`
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: ${theme.colors.text};
`;

export const Subtitle = styled.p`
  margin-top: 0.5rem;
  color: ${theme.colors.textSecondary};
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const FinanceCard = styled.button<{ $isActive: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;

  width: 100%;
  padding: 1.5rem;

  border-radius: ${theme.radius};
  border: 2px solid;
  cursor: pointer;

  text-align: center;
  color: ${theme.colors.text};

  background: ${({ $isActive }) =>
    $isActive ? `${theme.colors.primary}1a` : theme.colors.bg3};

  border-color: ${({ $isActive }) =>
    $isActive ? theme.colors.primary : theme.colors.border};

  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: ${theme.colors.primary};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 2px;
  }
`;

export const CardEmoji = styled.span`
  font-size: 2rem;
  line-height: 1;
  margin-bottom: 0.25rem;
`;

export const CardLabel = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
`;

export const ErrorText = styled.p`
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #ef4444;
`;

export const ActionsRow = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 0.75rem;
`;

export const BackButton = styled.button`
  width: 100%;
  padding: 12px 24px;
  border-radius: ${theme.radius};
  border: 1px solid ${theme.colors.border};
  background: ${theme.colors.bg3};
  color: ${theme.colors.textSecondary};
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: none;
  color: white;
  font-weight: 600;
  cursor: pointer;
  background: linear-gradient(
    135deg,
    ${theme.colors.primary},
    ${theme.colors.primaryDark}
  );

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
