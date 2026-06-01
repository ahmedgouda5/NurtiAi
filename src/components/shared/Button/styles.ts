import Link from 'next/link';
import styled, { css } from 'styled-components';

const buttonStyles = css<{ $variant: 'primary' | 'secondary' | 'ghost'; $fullWidth?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  border: 0;
  border-radius: 999px;
  cursor: pointer;
  padding: 0.95rem 1.35rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    background 0.25s ease,
    color 0.25s ease,
    border-color 0.25s ease;
  color: ${({ $variant }) => ($variant === 'ghost' ? 'var(--color-text)' : 'var(--color-bg)')};
  background: ${({ $variant }) =>
    $variant === 'primary'
      ? 'linear-gradient(135deg, var(--color-primary), #7df2c7)'
      : $variant === 'secondary'
        ? 'rgba(255, 255, 255, 0.06)'
        : 'transparent'};
  border: 1px solid
    ${({ $variant }) => ($variant === 'ghost' ? 'var(--color-border)' : 'rgba(255, 255, 255, 0.08)')};
  box-shadow: ${({ $variant }) =>
    $variant === 'primary' ? '0 16px 34px rgba(0, 214, 143, 0.24)' : 'none'};

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(0, 214, 143, 0.34);
    box-shadow: ${({ $variant }) =>
      $variant === 'primary'
        ? '0 20px 40px rgba(0, 214, 143, 0.28)'
        : '0 20px 40px rgba(0, 0, 0, 0.22)'};
  }

  &:focus-visible {
    outline: 2px solid rgba(0, 214, 143, 0.7);
    outline-offset: 3px;
  }
`;

export const ButtonBase = styled.button<{ $variant: 'primary' | 'secondary' | 'ghost'; $fullWidth?: boolean }>`
  ${buttonStyles}
`;

export const ButtonLink = styled(Link)<{ $variant: 'primary' | 'secondary' | 'ghost'; $fullWidth?: boolean }>`
  ${buttonStyles}
`;

