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

export const Plan = styled.article<{
  $featured?: boolean;
  $premium?: boolean;
}>`
  position: relative;

  display: flex;
  flex-direction: column;

  min-height: 720px;

  padding: 2rem;

  border-radius: 32px;

  overflow: hidden;

  background: linear-gradient(
    180deg,
    rgba(9, 21, 42, 0.98),
    rgba(5, 13, 28, 0.98)
  );

  border: 1px solid rgba(255, 255, 255, 0.08);

  transition: all 0.3s ease;

  ${({ $featured }) =>
    $featured &&
    css`
      border: 1px solid rgba(0, 255, 170, 0.35);

      background:
        radial-gradient(
          circle at top center,
          rgba(0, 255, 170, 0.12),
          transparent 55%
        ),
        linear-gradient(180deg, rgba(4, 29, 32, 0.98), rgba(3, 18, 20, 0.98));

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

export const FeaturedTag = styled.span`
  position: absolute;

  top: 2rem;
  right: 2rem;

  padding: 0.85rem 1.4rem;

  border-radius: 999px;

  background: ${theme.colors.primary};

  color: #000;

  font-weight: 700;
  font-size: 0.9rem;
`;

export const Name = styled.span<{ $premium?: boolean }>`
  display: inline-block;

  margin-bottom: 2rem;

  font-size: 1.1rem;
  font-weight: 700;

  letter-spacing: 2px;

  color: ${({ $premium }) => ($premium ? "#FFB800" : theme.colors.primary)};
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
  margin-top: 2rem;

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
`;

export const Item = styled.li<{
  $active: boolean;
  $premium?: boolean;
}>`
  display: flex;
  align-items: center;

  gap: 0.9rem;

  font-size: 1rem;

  color: ${({ $active }) => ($active ? "#ffffff" : "#5f718f")};

  svg {
    flex-shrink: 0;

    color: ${({ $active, $premium }) =>
      !$active ? "#5f718f" : $premium ? "#FFB800" : theme.colors.primary};
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: auto;
`;
