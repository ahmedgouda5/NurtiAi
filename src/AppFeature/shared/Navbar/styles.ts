import Link from "next/link";
import styled from "styled-components";

/* ================= HEADER ================= */
export const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 40;

  backdrop-filter: blur(24px);
  background: rgba(5, 13, 26, 0.62);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

/* ================= INNER ================= */
export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 0;
`;

/* ================= BRAND ================= */
export const Brand = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;

  font-family: var(--font-syne), sans-serif;
  font-size: 1.15rem;
  font-weight: 700;

  text-decoration: none;
  color: var(--color-text);
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
`;

/* ================= DESKTOP NAV ================= */
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
  font-weight: 300;
  font-size: 0.95rem;

  opacity: 0.6;
  text-decoration: none;

  transition: 0.2s ease;

  &:hover {
    opacity: 1;
    color: var(--color-text);
  }
`;

/* ================= ACTIONS ================= */
export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

/* ================= MOBILE BUTTON ================= */
export const MobileMenuButton = styled.button`
  display: none;

  width: 2.8rem;
  height: 2.8rem;

  border-radius: 14px;

  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);

  color: var(--color-text);
  cursor: pointer;

  @media (max-width: 900px) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`;

/* ================= MOBILE NAV (DROP DOWN UNDER BAR) ================= */
export const MobileNav = styled.nav<{ $open: boolean }>`
  display: none;

  @media (max-width: 900px) {
    display: grid;
    gap: 0.6rem;

    overflow: hidden;

    max-height: ${({ $open }) => ($open ? "500px" : "0")};
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    transform: ${({ $open }) =>
      $open ? "translateY(0)" : "translateY(-10px)"};

    transition: all 0.25s ease;

    padding-bottom: ${({ $open }) => ($open ? "1rem" : "0")};
  }
`;

/* ================= MOBILE LINK ================= */
export const MobileLink = styled.a`
  padding: 0.9rem 1rem;

  border-radius: 14px;

  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);

  color: var(--color-text-secondary);
  text-decoration: none;

  transition: 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    color: var(--color-text);
  }
`;

/* ================= MOBILE AUTH SECTION ================= */
export const MobileAuth = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }
`;
