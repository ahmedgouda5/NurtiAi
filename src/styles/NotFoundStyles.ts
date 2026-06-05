import styled, { keyframes, css } from "styled-components";
import { theme } from "./theme";

/* ═══════════════════════════════════════════════════════
   KEYFRAMES
   ═══════════════════════════════════════════════════════ */

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translate3d(0, 36px, 0); }
  to   { opacity: 1; transform: translate3d(0, 0, 0); }
`;

const float = keyframes`
  0%, 100% { transform: translate3d(0, 0, 0); }
  50%      { transform: translate3d(0, -18px, 0); }
`;

const breathe = keyframes`
  0%, 100% { transform: scale3d(1, 1, 1);    opacity: 0.6; }
  50%      { transform: scale3d(1.12, 1.12, 1); opacity: 1; }
`;

const orbit = keyframes`
  from { transform: translate3d(-50%, -50%, 0) rotate(0deg); }
  to   { transform: translate3d(-50%, -50%, 0) rotate(360deg); }
`;

const shimmer = keyframes`
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
`;

const grain = keyframes`
  0%, 100% { transform: translate3d(0, 0, 0); }
  10%      { transform: translate3d(-5%, -10%, 0); }
  30%      { transform: translate3d(3%, -15%, 0); }
  50%      { transform: translate3d(12%, 9%, 0); }
  70%      { transform: translate3d(9%, 4%, 0); }
  90%      { transform: translate3d(-1%, 7%, 0); }
`;

const sweep = keyframes`
  from { transform: translate3d(-100%, 0, 0); }
  to   { transform: translate3d(100%, 0, 0); }
`;

const lineGrow = keyframes`
  from { transform: scale3d(0, 1, 1); }
  to   { transform: scale3d(1, 1, 1); }
`;

const entrance = (i: number) => css`
  opacity: 1;
`;

/* ═══════════════════════════════════════════════════════
   SCENE  —  full-viewport stage
   ═══════════════════════════════════════════════════════ */

export const Scene = styled.main`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: clamp(1.5rem, 4vw, 3rem);
  background: ${theme.colors.bg};

  /* cinematic radial washes */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(
        ellipse 80% 50% at 18% 18%,
        rgba(0, 214, 143, 0.07),
        transparent
      ),
      radial-gradient(
        ellipse 60% 40% at 82% 26%,
        rgba(56, 189, 248, 0.055),
        transparent
      ),
      radial-gradient(
        ellipse 70% 50% at 55% 85%,
        rgba(139, 92, 246, 0.035),
        transparent
      ),
      radial-gradient(
        ellipse 50% 50% at 50% 50%,
        rgba(0, 214, 143, 0.02),
        transparent
      );
    pointer-events: none;
  }
`;

export const Grain = styled.div`
  position: absolute;
  inset: -200%;
  width: 400%;
  height: 400%;
  pointer-events: none;
  opacity: 0.022;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  will-change: transform;
  backface-visibility: hidden;
  contain: paint layout;
`;

export const GlowOrb = styled.div<{
  $size: number;
  $x: string;
  $y: string;
  $color: string;
  $delay?: string;
}>`
  position: absolute;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  left: ${({ $x }) => $x};
  top: ${({ $y }) => $y};
  border-radius: 50%;
  background: radial-gradient(
    circle,
    ${({ $color }) => $color} 0%,
    transparent 70%
  );
  filter: blur(70px);
  pointer-events: none;
  contain: paint layout;
`;

/* ═══════════════════════════════════════════════════════
   ORBITAL RINGS  —  decorative rotating circles
   ═══════════════════════════════════════════════════════ */

export const OrbitalRing = styled.div<{
  $size: number;
  $duration?: string;
  $reverse?: boolean;
}>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.025);
  pointer-events: none;
  opacity: 0.5;
  transform: translate3d(-50%, -50%, 0);
  contain: paint layout;

  /* small orbiting dot */
  &::after {
    content: "";
    position: absolute;
    top: -3px;
    left: 50%;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${theme.colors.primary};
    box-shadow:
      0 0 14px ${theme.colors.primary},
      0 0 4px ${theme.colors.primary};
  }
`;

/* ═══════════════════════════════════════════════════════
   CORNER BRACKETS
   ═══════════════════════════════════════════════════════ */

export const CornerDecor = styled.div<{
  $pos: "tl" | "tr" | "bl" | "br";
}>`
  position: absolute;
  width: 60px;
  height: 60px;
  pointer-events: none;
  opacity: 0.8;
  contain: paint layout;

  ${({ $pos }) => {
    const c1 = theme.colors.primary;
    const c2 = theme.colors.blue;
    switch ($pos) {
      case "tl":
        return css`
          top: clamp(1rem, 3vw, 2.5rem);
          left: clamp(1rem, 3vw, 2.5rem);
          border-top: 1px solid ${c1};
          border-left: 1px solid ${c1};
        `;
      case "tr":
        return css`
          top: clamp(1rem, 3vw, 2.5rem);
          right: clamp(1rem, 3vw, 2.5rem);
          border-top: 1px solid ${c2};
          border-right: 1px solid ${c2};
        `;
      case "bl":
        return css`
          bottom: clamp(1rem, 3vw, 2.5rem);
          left: clamp(1rem, 3vw, 2.5rem);
          border-bottom: 1px solid ${c2};
          border-left: 1px solid ${c2};
        `;
      case "br":
        return css`
          bottom: clamp(1rem, 3vw, 2.5rem);
          right: clamp(1rem, 3vw, 2.5rem);
          border-bottom: 1px solid ${c1};
          border-right: 1px solid ${c1};
        `;
    }
  }}

  @media (max-width: 600px) {
    display: none;
  }
`;

/* ═══════════════════════════════════════════════════════
   FLOATING ACCENT DOTS
   ═══════════════════════════════════════════════════════ */

export const FloatingDot = styled.div<{
  $size: number;
  $x: string;
  $y: string;
  $delay?: string;
}>`
  position: absolute;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  left: ${({ $x }) => $x};
  top: ${({ $y }) => $y};
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.07);
  pointer-events: none;
  contain: paint layout;

  @media (max-width: 600px) {
    display: none;
  }
`;

/* ═══════════════════════════════════════════════════════
   CONTENT WRAPPER
   ═══════════════════════════════════════════════════════ */

export const Content = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 740px;
  width: 100%;
`;

/* ═══════════════════════════════════════════════════════
   STATUS PILL
   ═══════════════════════════════════════════════════════ */

export const StatusPill = styled.div`
  ${entrance(0)}
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.45rem 1.2rem;
  border-radius: 100px;
  border: 1px solid rgba(0, 214, 143, 0.14);
  background: rgba(0, 214, 143, 0.04);
  backdrop-filter: blur(14px);
  font-family: var(--font-outfit), system-ui, sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${theme.colors.primary};
`;

export const PillDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${theme.colors.primary};
  box-shadow: 0 0 10px ${theme.colors.primary};
  contain: paint layout;
`;

/* ═══════════════════════════════════════════════════════
   HERO NUMBER  —  the massive "404"
   ═══════════════════════════════════════════════════════ */

export const HeroNumber = styled.div`
  ${entrance(1)}
  position: relative;
  margin: 1.2rem 0 0.6rem;
  font-family: var(--font-syne), system-ui, sans-serif;
  font-size: clamp(7.5rem, 22vw, 15rem);
  font-weight: 800;
  line-height: 0.85;
  letter-spacing: -0.05em;
  user-select: none;
  backface-visibility: hidden;

  /* faint outlined base layer */
  color: transparent;
  -webkit-text-stroke: 1.5px rgba(240, 246, 255, 0.06);
`;

/** Gradient overlay that sits on top of the outlined base */
export const HeroGradient = styled.span`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  background: linear-gradient(
    135deg,
    ${theme.colors.primary} 0%,
    ${theme.colors.blue} 50%,
    ${theme.colors.primary} 100%
  );
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-stroke: 0;
  opacity: 0.85;
  background-position: center;
`;

/* ═══════════════════════════════════════════════════════
   HEADLINE
   ═══════════════════════════════════════════════════════ */

export const Headline = styled.h1`
  ${entrance(2)}
  margin: 0;
  font-family: var(--font-syne), system-ui, sans-serif;
  font-size: clamp(1.35rem, 3.2vw, 2.6rem);
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.025em;
  color: ${theme.colors.text};

  span {
    background: linear-gradient(
      135deg,
      ${theme.colors.primary},
      ${theme.colors.blue}
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;

/* ═══════════════════════════════════════════════════════
   SUBTEXT
   ═══════════════════════════════════════════════════════ */

export const Subtext = styled.p`
  ${entrance(3)}
  margin: 0.85rem 0 0;
  max-width: 46ch;
  color: ${theme.colors.textSecondary};
  font-family: var(--font-outfit), system-ui, sans-serif;
  font-size: clamp(0.92rem, 1.15vw, 1.05rem);
  line-height: 1.85;
`;

/* ═══════════════════════════════════════════════════════
   GRADIENT DIVIDER
   ═══════════════════════════════════════════════════════ */

export const Divider = styled.div`
  height: 1px;
  margin: 2.2rem 0;
  overflow: hidden;
  opacity: 1;
  contain: paint layout;

  &::after {
    content: "";
    display: block;
    width: 64px;
    height: 1px;
    margin: 0 auto;
    background: linear-gradient(
      90deg,
      transparent,
      ${theme.colors.primary},
      ${theme.colors.blue},
      transparent
    );
    transform-origin: center;
    transform: scale3d(1, 1, 1);
  }
`;

/* ═══════════════════════════════════════════════════════
   BUTTON GROUP
   ═══════════════════════════════════════════════════════ */

export const ButtonGroup = styled.div`
  ${entrance(5)}
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const PrimaryBtn = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  min-height: 3.4rem;
  padding: 0 2.2rem;
  border-radius: 100px;
  border: none;
  background: linear-gradient(
    135deg,
    ${theme.colors.primary},
    ${theme.colors.primaryDark}
  );
  color: ${theme.colors.bg};
  font-family: var(--font-outfit), system-ui, sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 0.015em;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;
  box-shadow:
    0 6px 28px rgba(0, 214, 143, 0.22),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform;
  backface-visibility: hidden;

  /* sweep highlight on hover */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(
      120deg,
      transparent 30%,
      rgba(255, 255, 255, 0.22) 50%,
      transparent 70%
    );
    transform: translate3d(-110%, 0, 0);
    transition: transform 0.65s ease;
    pointer-events: none;
    will-change: transform;
  }

  &:hover {
    transform: translate3d(0, -3px, 0);
    box-shadow:
      0 14px 42px rgba(0, 214, 143, 0.32),
      inset 0 1px 0 rgba(255, 255, 255, 0.18);

    &::before {
      transform: translate3d(110%, 0, 0);
    }
  }

  &:active {
    transform: translate3d(0, -1px, 0);
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 3px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`;

/* ── Secondary Button ───────────────────────────────── */

export const SecondaryBtn = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  min-height: 3.4rem;
  padding: 0 2.2rem;
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.09);
  background: rgba(255, 255, 255, 0.025);
  backdrop-filter: blur(14px);
  color: ${theme.colors.text};
  font-family: var(--font-outfit), system-ui, sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.015em;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform;
  backface-visibility: hidden;

  &:hover {
    transform: translate3d(0, -3px, 0);
    border-color: rgba(0, 214, 143, 0.28);
    background: rgba(0, 214, 143, 0.05);
    box-shadow: 0 8px 30px rgba(0, 214, 143, 0.08);
  }

  &:active {
    transform: translate3d(0, -1px, 0);
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.blue};
    outline-offset: 3px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`;

/* ═══════════════════════════════════════════════════════
   BOTTOM META BAR
   ═══════════════════════════════════════════════════════ */

export const MetaBar = styled.div`
  ${entrance(6)}
  display: flex;
  align-items: center;
  gap: 1.8rem;
  margin-top: 2.8rem;
  padding: 0.85rem 1.6rem;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.04);
  background: rgba(255, 255, 255, 0.015);
  backdrop-filter: blur(10px);

  @media (max-width: 520px) {
    flex-direction: column;
    gap: 0.6rem;
    padding: 1rem;
  }
`;

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-family: var(--font-outfit), system-ui, sans-serif;
  font-size: 0.74rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${theme.colors.textSecondary};

  strong {
    color: ${theme.colors.text};
    font-weight: 600;
  }
`;

export const MetaSep = styled.span`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);

  @media (max-width: 520px) {
    display: none;
  }
`;

/* ═══════════════════════════════════════════════════════
   AMBIENT HORIZONTAL LINES
   ═══════════════════════════════════════════════════════ */

export const AmbientLine = styled.div<{ $top: string; $delay?: string }>`
  position: absolute;
  top: ${({ $top }) => $top};
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(0, 214, 143, 0.06) 30%,
    rgba(56, 189, 248, 0.04) 70%,
    transparent 100%
  );
  pointer-events: none;
  opacity: 0.6;
  contain: paint layout;
`;
