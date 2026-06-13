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
  margin-bottom: 1.5rem;
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

export const HealthyToggle = styled.button<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 1rem 1.25rem;
  border-radius: ${theme.radius};
  border: 2px solid;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 1.5rem;
  text-align: left;
  transition: background 0.2s, border-color 0.2s, color 0.2s;
  background: ${({ $isActive }) =>
    $isActive ? theme.colors.primary + "1a" : theme.colors.bg3};
  border-color: ${({ $isActive }) =>
    $isActive ? theme.colors.primary : theme.colors.border};
  color: ${({ $isActive }) =>
    $isActive ? theme.colors.primary : theme.colors.text};
`;

export const ToggleIcon = styled.span`
  font-size: 1.3rem;
  flex-shrink: 0;
`;

export const ToggleLabel = styled.span`
  font-weight: 700;
`;

export const ToggleSub = styled.span`
  font-size: 0.85rem;
  font-weight: 400;
  color: ${theme.colors.textSecondary};
`;

export const ConditionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

export const ConditionRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const ConditionBadge = styled.div`
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 700;
  margin-top: 0.6rem;
  background: ${theme.colors.primary + "22"};
  color: ${theme.colors.primary};
`;

export const ConditionInput = styled.textarea<{ $hasValue: boolean }>`
  flex: 1;
  padding: 0.75rem 1rem;
  border-radius: ${theme.radius};
  border: 1.5px solid;
  font-size: 0.9rem;
  resize: vertical;
  outline: none;
  line-height: 1.5;
  transition: border-color 0.2s, background 0.2s;
  font-family: inherit;
  width: 100%;
  margin-top: 0.5rem;
  background: ${theme.colors.bg3};
  border-color: ${({ $hasValue }) =>
    $hasValue ? theme.colors.primary : theme.colors.border};
  color: ${theme.colors.text};

  &:focus {
    border-color: ${theme.colors.primary};
  }
`;

export const RemoveButton = styled.button`
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: none;
  background: transparent;
  font-size: 0.85rem;
  cursor: pointer;
  margin-top: 0.6rem;
  opacity: 0.6;
  transition: opacity 0.2s;
  color: ${theme.colors.textSecondary};

  &:hover {
    opacity: 1;
  }
`;

export const AddButton = styled.button`
  align-self: flex-start;
  padding: 0.5rem 1rem;
  border-radius: ${theme.radius};
  border: 1.5px dashed;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, opacity 0.2s;
  color: ${theme.colors.primary};
  border-color: ${theme.colors.primary + "55"};
  background: ${theme.colors.primary + "0d"};

  &:hover {
    opacity: 0.8;
  }
`;

export const SuggestionsSection = styled.div`
  margin-bottom: 0.5rem;
`;

export const SuggestionsTitle = styled.p`
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  color: ${theme.colors.textSecondary};
`;

export const SuggestionsChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

export const SuggestionChip = styled.button`
  padding: 0.3rem 0.75rem;
  border-radius: 99px;
  border: 1px solid;
  font-size: 0.75rem;
  cursor: pointer;
  transition: background 0.15s, color 0.15s, border-color 0.15s;
  background: ${theme.colors.bg3};
  border-color: ${theme.colors.border};
  color: ${theme.colors.textSecondary};

  &:hover {
    border-color: ${theme.colors.primary};
    color: ${theme.colors.primary};
  }
`;

export const ErrorText = styled.p`
  margin-top: 0.75rem;
  font-size: 0.875rem;
  color: #ef4444;
`;

export const ActionsRow = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 0.75rem;
`;

export const BackButton = styled.button`
  padding: 12px 24px;
  border-radius: ${theme.radius};
  border: 1px solid ${theme.colors.border};
  background: ${theme.colors.bg3};
  color: ${theme.colors.textSecondary};
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s;
`;

export const SubmitButton = styled.button<{ $isSubmitting?: boolean }>`
  width: 100%;
  padding: 12px 20px;
  border-radius: ${theme.radius};
  border: none;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
  background: linear-gradient(
    135deg,
    ${theme.colors.primary},
    ${theme.colors.primaryDark}
  );
  opacity: ${({ $isSubmitting }) => ($isSubmitting ? 0.7 : 1)};

  &:hover:not(:disabled) {
    opacity: 0.88;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
