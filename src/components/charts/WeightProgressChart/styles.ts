import styled from 'styled-components';

export const Wrap = styled.div`
  display: grid;
  gap: 1rem;
  padding: 1.25rem;
  min-height: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: start;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 1.05rem;
`;

export const Meta = styled.p`
  margin: 0;
  color: var(--color-text-secondary);
  font-size: 0.92rem;
`;

export const CanvasWrap = styled.div`
  min-height: 260px;
`;

