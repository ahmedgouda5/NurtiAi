import { keyframes, css } from "styled-components";

// ─── Keyframe Definitions ────────────────────────────────────────────────────

export const fadeUpKeyframes = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const fadeInKeyframes = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

export const fadeDownKeyframes = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const slideInLeftKeyframes = keyframes`
  from { opacity: 0; transform: translateX(-30px); }
  to   { opacity: 1; transform: translateX(0); }
`;

export const slideInRightKeyframes = keyframes`
  from { opacity: 0; transform: translateX(30px); }
  to   { opacity: 1; transform: translateX(0); }
`;

export const scaleInKeyframes = keyframes`
  from { opacity: 0; transform: scale(0.92); }
  to   { opacity: 1; transform: scale(1); }
`;

export const bmiRevealKeyframes = keyframes`
  from { opacity: 0; transform: scale(0.95) translateY(10px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
`;

export const pulseKeyframes = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.5; }
`;

export const floatKeyframes = keyframes`
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-8px); }
`;

// ─── Easing Constants ────────────────────────────────────────────────────────

/** Equivalent to Framer Motion spring(stiffness:140, damping:18) */
export const SPRING_EASE = "cubic-bezier(0.16, 1, 0.3, 1)";
export const EASE_OUT = "cubic-bezier(0.0, 0, 0.2, 1)";

// ─── Reusable Animation CSS Helpers ─────────────────────────────────────────

/**
 * Fade + slide up on mount. Use directly inside styled-component template.
 * @param delay  Optional delay in seconds (default 0)
 * @param duration Duration in seconds (default 0.55)
 */
export const animateFadeUp = (delay = 0, duration = 0.55) => css`
  animation: ${fadeUpKeyframes} ${duration}s ${SPRING_EASE} ${delay}s both;
`;

export const animateFadeIn = (delay = 0, duration = 0.4) => css`
  animation: ${fadeInKeyframes} ${duration}s ease ${delay}s both;
`;

export const animateSlideInLeft = (delay = 0, duration = 0.5) => css`
  animation: ${slideInLeftKeyframes} ${duration}s ${SPRING_EASE} ${delay}s both;
`;

export const animateSlideInRight = (delay = 0, duration = 0.5) => css`
  animation: ${slideInRightKeyframes} ${duration}s ${SPRING_EASE} ${delay}s both;
`;

export const animateScaleIn = (delay = 0, duration = 0.45) => css`
  animation: ${scaleInKeyframes} ${duration}s ${SPRING_EASE} ${delay}s both;
`;

// ─── In-View Animation CSS ───────────────────────────────────────────────────

/**
 * Use with useInViewAnimation hook.
 * Element starts hidden; when `isVisible` prop is true, animates in.
 *
 * Usage in styled-component:
 *   ${({ $isVisible }) => $isVisible ? inViewFadeUp() : hiddenState}
 */
export const hiddenState = css`
  opacity: 0;
  transform: translateY(28px);
`;

export const inViewFadeUp = (delay = 0, duration = 0.55) => css`
  animation: ${fadeUpKeyframes} ${duration}s ${SPRING_EASE} ${delay}s both;
`;

export const inViewFadeIn = (delay = 0, duration = 0.4) => css`
  animation: ${fadeInKeyframes} ${duration}s ease ${delay}s both;
`;

export const inViewSlideLeft = (delay = 0, duration = 0.5) => css`
  animation: ${slideInLeftKeyframes} ${duration}s ${SPRING_EASE} ${delay}s both;
`;

// ─── Hover / Interaction Helpers ─────────────────────────────────────────────

export const hoverLift = css`
  transition: transform 0.25s ${SPRING_EASE};
  &:hover {
    transform: translateY(-4px);
  }
`;

export const hoverScale = (scale = 1.03) => css`
  transition: transform 0.2s ${SPRING_EASE};
  &:hover {
    transform: scale(${scale});
  }
  &:active {
    transform: scale(${scale - 0.06});
  }
`;

export const buttonPress = css`
  transition: transform 0.15s ease;
  &:active {
    transform: scale(0.97);
  }
`;
