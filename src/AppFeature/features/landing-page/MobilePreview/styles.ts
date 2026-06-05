import { theme } from "@/styles/theme";
import styled, { keyframes } from "styled-components";

// ─── Animations ───────────────────────────────────────────────────────────────

export const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const floatA = keyframes`
  0%, 100% { transform: translateY(0px) rotate(-2deg); }
  50%       { transform: translateY(-14px) rotate(-2deg); }
`;

const floatB = keyframes`
  0%, 100% { transform: translateY(0px) rotate(2deg); }
  50%       { transform: translateY(-10px) rotate(2deg); }
`;

const pulseGlow = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(0, 214, 143, 0.15); }
  50%       { box-shadow: 0 0 40px 10px rgba(0, 214, 143, 0.08); }
`;

export const barGrow = keyframes`
  from { transform: scaleY(0); }
  to   { transform: scaleY(1); }
`;

const shimmer = keyframes`
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
`;

// ─── Layout ───────────────────────────────────────────────────────────────────

export const Section = styled.section`
  background: ${theme.colors.bg};
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 80px 6vw;
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    right: 15%;
    top: 50%;
    transform: translateY(-50%);
    width: 600px;
    height: 600px;
    background: radial-gradient(
      circle,
      rgba(0, 214, 143, 0.06) 0%,
      transparent 70%
    );
    pointer-events: none;
  }
`;

export const Inner = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 60px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

// ─── Left Column ──────────────────────────────────────────────────────────────

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  animation: ${fadeUp} 0.7s ease both;
`;

export const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(0, 214, 143, 0.12);
  border: 1px solid rgba(0, 214, 143, 0.3);
  border-radius: 100px;
  padding: 6px 16px;
  width: fit-content;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${theme.colors.primary};

  @media (max-width: 900px) {
    margin: 0 auto;
  }
`;

export const BadgeIcon = styled.span`
  font-size: 13px;
`;

export const Headline = styled.h2`
  font-family: "Syne", "Clash Display", sans-serif;
  font-size: clamp(40px, 5vw, 72px);
  font-weight: 800;
  line-height: 1.05;
  color: ${theme.colors.text};
  margin: 0;

  span {
    display: block;
    background: linear-gradient(
      90deg,
      ${theme.colors.primary},
      ${theme.colors.blue},
      ${theme.colors.primary}
    );
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${shimmer} 3s linear infinite;
  }
`;

export const Subtitle = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: ${theme.colors.textSecondary};
  max-width: 500px;
  margin: 0;

  @media (max-width: 900px) {
    margin: 0 auto;
  }
`;

export const StoreButtons = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export const StoreBtn = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  background: ${theme.colors.bg3};
  border: 1px solid ${theme.colors.border};
  border-radius: 14px;
  padding: 14px 24px;
  text-decoration: none;
  color: ${theme.colors.text};
  cursor: pointer;
  transition:
    border-color 0.2s,
    transform 0.2s,
    background 0.2s;
  min-width: 180px;

  &:hover {
    border-color: rgba(0, 214, 143, 0.4);
    background: ${theme.colors.bg2};
    transform: translateY(-2px);
  }
`;

export const StoreBtnIcon = styled.div`
  font-size: 26px;
  line-height: 1;
`;

export const StoreBtnText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StoreBtnLabel = styled.span`
  font-size: 10px;
  color: ${theme.colors.textSecondary};
  letter-spacing: 0.05em;
`;

export const StoreBtnName = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: ${theme.colors.text};
`;

export const Stats = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export const StatPill = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid ${theme.colors.border};
  border-radius: 100px;
  padding: 8px 16px;
  font-size: 13px;
  color: ${theme.colors.textSecondary};
  font-weight: 500;
`;

// ─── Right Column ─────────────────────────────────────────────────────────────

export const Right = styled.div`
  position: relative;
  height: 460px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// ─── Card A – Nutrition Tracker ───────────────────────────────────────────────

export const CardA = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%) rotate(-2deg);
  width: 240px;
  background: ${theme.colors.bg3};
  border: 1px solid ${theme.colors.border};
  border-radius: 24px;
  padding: 22px;
  animation:
    ${floatA} 5s ease-in-out infinite,
    ${pulseGlow} 4s ease-in-out infinite;
  z-index: 2;
`;

export const CalorieBar = styled.div`
  height: 6px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.08);
  margin-bottom: 10px;
  overflow: hidden;

  &::after {
    content: "";
    display: block;
    height: 100%;
    width: 84%;
    border-radius: 3px;
    background: linear-gradient(
      90deg,
      ${theme.colors.primary},
      ${theme.colors.blue}
    );
  }
`;

export const CalorieText = styled.p`
  font-size: 11px;
  color: ${theme.colors.textSecondary};
  margin: 0 0 14px;
`;

export const MacroRow = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 18px;
`;

export interface MacroPillProps {
  color: string;
}

export const MacroPill = styled.div<MacroPillProps>`
  flex: 1;
  background: ${({ color }) => color}22;
  border: 1px solid ${({ color }) => color}44;
  border-radius: 10px;
  padding: 8px 4px;
  text-align: center;

  .pct {
    font-size: 13px;
    font-weight: 700;
    color: ${({ color }) => color};
  }
  .lbl {
    font-size: 9px;
    color: ${theme.colors.textSecondary};
    margin-top: 2px;
  }
`;

export const MealTitle = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: ${theme.colors.primary};
  margin: 0 0 10px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const MealRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  color: ${theme.colors.textSecondary};
  margin-bottom: 5px;

  span:last-child {
    color: ${theme.colors.text};
  }
`;

// ─── Card B – AI Scan ─────────────────────────────────────────────────────────

export const CardB = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%) rotate(2deg);
  width: 200px;
  background: linear-gradient(145deg, ${theme.colors.bg3}, ${theme.colors.bg2});
  border: 1px solid rgba(0, 214, 143, 0.2);
  border-radius: 24px;
  padding: 22px;
  animation: ${floatB} 6s ease-in-out 1s infinite;
  z-index: 3;
`;

export const ScanLabel = styled.p`
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${theme.colors.textSecondary};
  margin: 0 0 8px;
`;

export const ScanFood = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: ${theme.colors.text};
  margin: 0 0 6px;
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const ScanKcal = styled.p`
  font-size: 28px;
  font-weight: 800;
  color: ${theme.colors.primary};
  margin: 0 0 18px;
  font-family: "Syne", sans-serif;
`;

export const StepsLabel = styled.p`
  font-size: 10px;
  color: ${theme.colors.textSecondary};
  margin: 0 0 10px;
`;

export const BarsRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
  height: 40px;
`;

export interface BarProps {
  h: number;
  $active?: boolean;
}

export const Bar = styled.div<BarProps>`
  flex: 1;
  height: ${({ h }) => h}%;
  background: ${({ $active }) =>
    $active ? theme.colors.primary : theme.colors.bg};
  border: 1px solid
    ${({ $active }) =>
      $active ? theme.colors.primary : "rgba(255,255,255,0.1)"};
  border-radius: 4px;
  transform-origin: bottom;
  animation: ${barGrow} 0.6s ease both;
  animation-delay: ${() => Math.random() * 0.4}s;
`;
