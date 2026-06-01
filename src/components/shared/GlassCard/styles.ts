import styled from 'styled-components';

export const Card = styled.article<{ $padding?: string }>`
  position: relative;
  overflow: hidden;
  padding: ${({ $padding }) => $padding ?? '1.35rem'};
  border-radius: 24px;
  border: 1px solid var(--color-border);
  background:
    linear-gradient(180deg, rgba(15, 27, 54, 0.82), rgba(8, 18, 34, 0.66)),
    radial-gradient(circle at top, rgba(0, 214, 143, 0.1), transparent 55%);
  box-shadow: 0 26px 55px rgba(0, 0, 0, 0.24);
  backdrop-filter: blur(22px);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(0, 214, 143, 0.2);
    box-shadow: 0 30px 70px rgba(0, 0, 0, 0.35);
  }
`;

export const CardGlow = styled.div`
  position: absolute;
  inset: auto auto -25% 60%;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 214, 143, 0.2), transparent 70%);
  filter: blur(24px);
  pointer-events: none;
`;

