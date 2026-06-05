import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  overflow: hidden;
  padding: clamp(4.5rem, 9vw, 3rem) 0 clamp(3rem, 6vw, 6rem);
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
  gap: clamp(1.5rem, 4vw, 4rem);
  align-items: center;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const Copy = styled.div`
  display: grid;
  gap: 1.1rem;
`;

export const Badge = styled.div`
  width: fit-content;
  padding: 0.55rem 0.9rem;
  border-radius: 999px;
  border: 1px solid rgba(0, 214, 143, 0.2);
  background: rgba(0, 214, 143, 0.08);
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const Heading = styled.h1`
  margin: 0;
  font-family: var(--font-syne), sans-serif;
  font-size: clamp(3rem, 8vw, 6.8rem);
  line-height: 0.95;
  letter-spacing: -0.07em;
  max-width: 11ch;
`;

export const Subtitle = styled.p`
  margin: 0;
  max-width: 60ch;
  color: var(--color-text-secondary);
  font-size: clamp(1rem, 1.8vw, 1.2rem);
  line-height: 1.8;
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-top: 0.5rem;
`;

export const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.9rem;
  margin-top: 0.75rem;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const Stat = styled.div`
  padding: 1rem;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
`;

export const StatValue = styled.strong`
  display: block;
  font-size: 1.25rem;
  margin-bottom: 0.2rem;
`;

export const StatLabel = styled.span`
  color: var(--color-text-secondary);
  font-size: 0.92rem;
`;

export const Mockup = styled.div`
  position: relative;
  display: grid;
  gap: 1rem;
`;

export const FloatingCard = styled.div`
  position: relative;
  overflow: hidden;
  padding: 1.25rem;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    linear-gradient(180deg, rgba(14, 27, 54, 0.92), rgba(7, 12, 23, 0.78)),
    radial-gradient(circle at top, rgba(0, 214, 143, 0.14), transparent 55%);
  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.4);
`;

export const RingWrap = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 1rem;
  align-items: center;
`;

export const RingLabel = styled.div`
  display: grid;
  gap: 0.2rem;
`;

export const RingValue = styled.strong`
  font-size: 1.6rem;
`;

export const Macros = styled.div`
  display: grid;
  gap: 0.55rem;
`;

export const MacroRow = styled.div`
  display: grid;
  gap: 0.35rem;
`;

export const MacroTrack = styled.div`
  height: 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.05);
  overflow: hidden;
`;

export const MacroFill = styled.div<{ $width: string; $color: string }>`
  width: ${({ $width }) => $width};
  height: 100%;
  border-radius: inherit;
  background: ${({ $color }) => $color};
`;

export const BadgeFloat = styled.span<{ $top: string; $left: string }>`
  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  padding: 0.55rem 0.85rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(16px);
  font-size: 0.85rem;
`;

export const DetailText = styled.span`
  color: var(--color-text-secondary);
`;

export const MacroLabel = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const IntroText = styled.p`
  margin-top: 0;
`;

export const SpanItalic = styled.span`
  background: linear-gradient(
    40deg,
    ${theme.colors.primaryDark},
    ${theme.colors.blue}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;
