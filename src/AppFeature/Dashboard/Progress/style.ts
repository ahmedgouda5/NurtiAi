import styled, { css } from "styled-components";
import { theme } from "@/styles/theme";

export const ProgressPage = styled.div`
  padding: clamp(1rem, 3vw, 2rem);
  background: ${theme.colors.bg};
`;

export const Header = styled.div`
  margin-bottom: clamp(1.5rem, 4vw, 2.5rem);
`;

export const Title = styled.h1`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: ${theme.colors.text};
  margin: 0 0 0.25rem 0;
  letter-spacing: -0.02em;
`;

export const Subtitle = styled.p`
  font-size: clamp(0.85rem, 1.2vw, 1rem);
  color: ${theme.colors.textSecondary};
  margin: 0;
`;

export const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(1rem, 2.5vw, 1.5rem);
  margin-bottom: clamp(1.5rem, 4vw, 2.5rem);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const ChartCard = styled.div`
  background: ${theme.colors.bg2};
  border: 1px solid ${theme.colors.border};
  border-radius: 24px;
  padding: clamp(1rem, 2.5vw, 1.5rem);
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${theme.colors.primary}40, ${theme.colors.blue}40, transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);

    &::before {
      opacity: 1;
    }
  }
`;

export const ChartTitle = styled.h2`
  font-size: clamp(0.95rem, 1.4vw, 1.1rem);
  font-weight: 600;
  color: ${theme.colors.text};
  margin: 0 0 1.25rem 0;
  letter-spacing: -0.01em;
`;

export const ComparisonSection = styled.div`
  margin-bottom: clamp(1.5rem, 4vw, 2.5rem);
`;

export const ComparisonTitle = styled.h2`
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  font-weight: 600;
  color: ${theme.colors.text};
  margin: 0 0 1.25rem 0;
  letter-spacing: -0.01em;
`;

export const ComparisonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: clamp(0.75rem, 2vw, 1rem);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const MetricCard = styled.div<{ $color: string }>`
  background: ${theme.colors.bg2};
  border: 1px solid ${theme.colors.border};
  border-radius: 20px;
  padding: clamp(1rem, 2vw, 1.25rem);
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    border-radius: 20px 20px 0 0;
    background: ${({ $color }) => {
      switch ($color) {
        case "primary":
          return `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.primaryDark})`;
        case "blue":
          return `linear-gradient(90deg, ${theme.colors.blue}, ${theme.colors.purple})`;
        case "purple":
          return `linear-gradient(90deg, ${theme.colors.purple}, ${theme.colors.coral})`;
        case "amber":
          return `linear-gradient(90deg, ${theme.colors.amber}, ${theme.colors.coral})`;
        default:
          return `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.blue})`;
      }
    }};
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.35);
  }
`;

export const MetricIcon = styled.div<{ $color: string }>`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.85rem;
  font-size: 1rem;
  background: ${({ $color }) => {
    switch ($color) {
      case "primary":
        return `${theme.colors.primary}15`;
      case "blue":
        return `${theme.colors.blue}15`;
      case "purple":
        return `${theme.colors.purple}15`;
      case "amber":
        return `${theme.colors.amber}15`;
      default:
        return `${theme.colors.primary}15`;
    }
  }};
  color: ${({ $color }) => {
    switch ($color) {
      case "primary":
        return theme.colors.primary;
      case "blue":
        return theme.colors.blue;
      case "purple":
        return theme.colors.purple;
      case "amber":
        return theme.colors.amber;
      default:
        return theme.colors.primary;
    }
  }};
`;

export const MetricLabel = styled.div`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${theme.colors.textSecondary};
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const MetricValues = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

export const MetricPrevious = styled.div`
  font-size: 0.85rem;
  color: ${theme.colors.textSecondary};
  text-decoration: line-through;
  opacity: 0.7;
`;

export const MetricCurrent = styled.div`
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  font-weight: 700;
  color: ${theme.colors.text};
  letter-spacing: -0.02em;
`;

export const ChartLegend = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.75rem;
  font-size: 0.75rem;
  color: ${theme.colors.textSecondary};
`;

export const LegendDot = styled.span<{ $color: string }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
`;

export const tooltipStyle = css`
  background: ${theme.colors.bg3} !important;
  border: 1px solid ${theme.colors.border} !important;
  border-radius: 12px !important;
  padding: 0.65rem 0.85rem !important;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3) !important;
`;

export const TooltipWrapper = styled.div`
  .recharts-tooltip-wrapper {
    ${tooltipStyle}
  }

  .recharts-default-tooltip {
    background: transparent !important;
    border: none !important;
    padding: 0 !important;
  }

  .recharts-tooltip-label {
    color: ${theme.colors.textSecondary} !important;
    font-size: 0.75rem !important;
    margin-bottom: 0.25rem !important;
  }

  .recharts-tooltip-item {
    color: ${theme.colors.text} !important;
    font-size: 0.85rem !important;
    font-weight: 600 !important;
  }
`;
