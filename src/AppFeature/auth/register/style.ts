import styled from "styled-components";
import { theme } from "@/styles/theme";

export const RegisterContainer = styled.div`
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

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputGroupFull = styled(InputGroup)`
  @media (min-width: 768px) {
    grid-column: 1 / -1;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border-radius: ${theme.radius};
  background: ${theme.colors.bg3};
  border: 1px solid ${theme.colors.border};
  color: ${theme.colors.text};
  outline: none;

  &:focus {
    border-color: ${theme.colors.primaryDark};
  }
`;

export const ErrorText = styled.p`
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: #ef4444;
`;

export const SubmitContainer = styled.div`
  margin-top: 0.5rem;

  @media (min-width: 768px) {
    grid-column: 1 / -1;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  border-radius: 0.5rem;
  padding: 0.75rem;
  color: white;
  background: linear-gradient(
    135deg,
    ${theme.colors.primary},
    ${theme.colors.primaryDark}
  );
  border: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
