import styled from "styled-components";

export const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 40;
  backdrop-filter: blur(24px);
  background: rgba(5, 13, 26, 0.62);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 0;
`;

export const Brand = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-family: var(--font-syne), sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
`;

export const Mark = styled.span`
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
  box-shadow: 0 0 24px rgba(0, 214, 143, 0.2);
`;

export const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.3rem;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: var(--color-text-secondary);
  font-weight: 200;
  opacity: 0.5;
  transition:
    opacity 0.2s ease,
    color 0.2s ease;

  &:hover {
    opacity: 1;
    color: var(--color-text);
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const MobileMenuButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  color: var(--color-text);

  @media (max-width: 900px) {
    display: inline-flex;
  }
`;

export const MobileNav = styled.nav<{ $open: boolean }>`
  display: none;

  @media (max-width: 900px) {
    display: grid;
    gap: 0.8rem;
    padding: ${({ $open }) => ($open ? "1rem 0 1.25rem" : "0")};
    max-height: ${({ $open }) => ($open ? "320px" : "0")};
    overflow: hidden;
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    transition: all 0.25s ease;
  }
`;

export const MobileLink = styled.a`
  padding: 0.85rem 1rem;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
`;
