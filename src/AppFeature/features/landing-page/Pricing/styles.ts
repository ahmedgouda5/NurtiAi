import styled, { css } from "styled-components";
import { theme } from "@/styles/theme";

export const Section = styled.section`
  padding: clamp(4rem, 8vw, 8rem) 0;
`;

export const Grid = styled.div`
  display: grid;
  gap: 2rem;
  margin-top: 4rem;

  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

/* ⭐️ CARD FIXED LAYOUT */
export const Plan = styled.article<{
  $featured?: boolean;
  $premium?: boolean;
}>`
  display: flex;
  flex-direction: column;

  height: 100%;
  min-height: 720px;

  padding: 2rem;
  border-radius: 32px;

  background: linear-gradient(
    180deg,
    rgba(9, 21, 42, 0.98),
    rgba(5, 13, 28, 0.98)
  );

  border: 1px solid rgba(255, 255, 255, 0.08);

  transition: all 0.3s ease;

  align-self: stretch;

  ${({ $featured }) =>
    $featured &&
    css`
      border: 1px solid rgba(0, 255, 170, 0.35);
      box-shadow:
        0 0 60px rgba(0, 255, 170, 0.12),
        0 30px 70px rgba(0, 255, 170, 0.08);
      transform: translateY(-10px);
    `}

  ${({ $premium }) =>
    $premium &&
    css`
      border: 1px solid rgba(255, 183, 0, 0.2);
    `}
`;

/* HEADER */
export const Header = styled.div`
  min-height: 180px;
  display: flex;
  flex-direction: column;
`;

/* CONTENT */
export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

/* FOOTER */
export const Footer = styled.div`
  margin-top: auto;
`;

/* BADGE */
export const FeaturedTag = styled.span`
  display: inline-block;
  margin-bottom: 0.6rem;
  padding: 0.85rem 1.4rem;
  border-radius: 999px;
  background: ${theme.colors.primary};
  color: #000;
  font-weight: 700;
  font-size: 0.9rem;
  margin-inline: auto;
`;

/* NAME FIX RTL */
export const Name = styled.span<{
  $premium?: boolean;
}>`
  margin-bottom: 1.5rem;

  font-size: 1.1rem;
  font-weight: 700;

  color: ${({ $premium }) => ($premium ? "#FFB800" : theme.colors.primary)};

  [dir="ltr"] & {
    letter-spacing: 2px;
  }

  [dir="rtl"] & {
    letter-spacing: 0;
    text-align: right;
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.4rem;
`;

export const Price = styled.h3`
  margin: 0;
  font-size: clamp(4rem, 7vw, 5.5rem);
  line-height: 1;
  font-weight: 800;
  color: white;
`;

export const Period = styled.span`
  margin-bottom: 0.8rem;
  font-size: 1.4rem;
  color: #8ea1bf;
`;

export const Description = styled.p`
  margin-top: 1.5rem;
  color: #93a3bc;
  line-height: 1.8;

  min-height: 110px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin: 1.5rem 0;
  background: rgba(255, 255, 255, 0.08);
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  flex: 1;
`;

export const Item = styled.li<{
  $active: boolean;
  $premium?: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 0.9rem;

  color: ${({ $active }) => ($active ? "#ffffff" : "#5f718f")};

  svg {
    color: ${({ $active, $premium }) =>
      !$active ? "#5f718f" : $premium ? "#FFB800" : theme.colors.primary};
  }
`;
