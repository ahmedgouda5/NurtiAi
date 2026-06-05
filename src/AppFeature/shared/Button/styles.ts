import Link from "next/link";
import styled, { css } from "styled-components";

const buttonStyles = css<{
  $fullWidth?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
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
  border: 1px solid rgba(255, 255, 255, 0.08);

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(0, 214, 143, 0.34);
  }

  &:focus-visible {
    outline: 2px solid rgba(0, 214, 143, 0.7);
    outline-offset: 3px;
  }
`;

export const ButtonBase = styled.button<{
  $fullWidth?: boolean;
}>`
  ${buttonStyles}
`;

export const ButtonLink = styled(Link)<{
  $fullWidth?: boolean;
}>`
  ${buttonStyles}
`;
