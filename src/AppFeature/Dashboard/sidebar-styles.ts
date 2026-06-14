import styled, { css } from "styled-components";
import { theme } from "@/styles/theme";

export const SidebarWrapper = styled.div`
  height: 100%;
  background: ${theme.colors.bg2};
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 120px;
    background: linear-gradient(
      180deg,
      ${theme.colors.primary}08 0%,
      transparent 100%
    );
    pointer-events: none;
    z-index: 0;
  }
`;

export const BrandContainer = styled.div`
  padding: 1.25rem;
  border-bottom: 1px solid ${theme.colors.border};
  position: relative;
  z-index: 1;
`;

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;

export const LogoMark = styled.span`
  display: grid;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 14px;
  background: linear-gradient(
    135deg,
    rgba(0, 214, 143, 0.26),
    rgba(56, 189, 248, 0.18)
  );
  border: 1px solid rgba(0, 214, 143, 0.24);
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const LogoText = styled.h1`
  font-family: var(--font-syne), sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: ${theme.colors.text};
  margin: 0;
  letter-spacing: -0.02em;
`;

export const LogoAccent = styled.span`
  background: linear-gradient(
    135deg,
    ${theme.colors.primary},
    ${theme.colors.blue}
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-style: italic;
`;

export const UserCard = styled.div`
  margin: 1rem 1.25rem;
  padding: 1rem;
  border-radius: 16px;
  border: 1px solid ${theme.colors.border};
  background: ${theme.colors.bg3};
  position: relative;
  z-index: 1;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    border-color: ${theme.colors.primary}30;
    box-shadow: 0 4px 20px ${theme.colors.primary}10;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.85rem;
`;

export const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    ${theme.colors.primary},
    ${theme.colors.blue}
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 700;
  color: ${theme.colors.text};
  box-shadow: 0 4px 12px ${theme.colors.primary}25;
  flex-shrink: 0;
`;

export const UserDetails = styled.div`
  flex: 1;
  min-width: 0;
`;

export const UserName = styled.h3`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${theme.colors.text};
  margin: 0 0 0.2rem 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UserBadge = styled.p`
  font-size: 0.78rem;
  color: ${theme.colors.textSecondary};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.35rem;
`;

export const BadgeDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${theme.colors.amber};
  box-shadow: 0 0 8px ${theme.colors.amber};
`;

export const NavSection = styled.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0.65rem 0;
  position: relative;
  z-index: 1;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    margin: 8px 0;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, ${theme.colors.primary}40, ${theme.colors.blue}30);
    border-radius: 100px;
    transition: background 0.3s ease;

    &:hover {
      background: linear-gradient(180deg, ${theme.colors.primary}70, ${theme.colors.blue}50);
    }
  }

  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, ${theme.colors.primary}80, ${theme.colors.blue}60);
  }

  scrollbar-width: thin;
  scrollbar-color: ${theme.colors.primary}40 transparent;
`;

export const NavItem = styled.div<{ $active?: boolean }>`
  margin: 0.25rem 1rem;
`;

export const NavLink = styled.a<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.6rem 1rem;
  border-radius: 12px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.25s ease;
  position: relative;

  ${({ $active }) =>
    $active
      ? css`
          background: linear-gradient(
            135deg,
            ${theme.colors.primary}20,
            ${theme.colors.primary}10
          );
          color: ${theme.colors.text};
          box-shadow: inset 0 0 0 1px ${theme.colors.primary}30;

          &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 3px;
            height: 60%;
            border-radius: 0 100px 100px 0;
            background: linear-gradient(
              180deg,
              ${theme.colors.primary},
              ${theme.colors.blue}
            );
          }
        `
      : css`
          color: ${theme.colors.textSecondary};

          &:hover {
            background: ${theme.colors.border};
            color: ${theme.colors.text};
          }
        `}
`;

export const NavIcon = styled.div<{ $active?: boolean }>`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  ${({ $active }) =>
    $active &&
    css`
      color: ${theme.colors.primary};
    `}
`;

export const FooterSection = styled.div`
  padding: 1rem 0;
  border-top: 1px solid ${theme.colors.border};
  position: relative;
  z-index: 1;
`;

export const FooterLink = styled.a<{ $highlight?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.7rem 1.75rem;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ $highlight }) =>
    $highlight ? theme.colors.amber : theme.colors.textSecondary};
  transition: all 0.25s ease;

  &:hover {
    background: ${theme.colors.border};
    color: ${({ $highlight }) =>
      $highlight ? theme.colors.amber : theme.colors.text};
  }
`;

export const FooterIcon = styled.span<{ $highlight?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: ${({ $highlight }) =>
    $highlight ? theme.colors.amber : theme.colors.textSecondary};
`;
