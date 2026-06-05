import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 80;
  display: grid;
  place-items: center;
  padding: 1rem;
  background: rgba(1, 7, 16, 0.62);
  backdrop-filter: blur(18px);
`;

export const Panel = styled(motion.div)<{ $size: 'sm' | 'md' | 'lg' }>`
  width: min(100%, ${({ $size }) => ($size === 'sm' ? '480px' : $size === 'md' ? '640px' : '860px')});
  max-height: min(88vh, 920px);
  overflow: auto;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    linear-gradient(180deg, rgba(13, 24, 48, 0.96), rgba(6, 12, 24, 0.94)),
    radial-gradient(circle at top, rgba(0, 214, 143, 0.14), transparent 55%);
  box-shadow: 0 40px 90px rgba(0, 0, 0, 0.45);
  padding: clamp(1.1rem, 3vw, 2rem);
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.2rem;
`;

export const Heading = styled.div`
  display: grid;
  gap: 0.45rem;
`;

export const ModalTitle = styled.h3`
  margin: 0;
  font-family: var(--font-syne), sans-serif;
  font-size: clamp(1.4rem, 2vw, 2rem);
`;

export const ModalDescription = styled.p`
  margin: 0;
  color: var(--color-text-secondary);
  line-height: 1.6;
`;

export const CloseButton = styled.button`
  display: grid;
  place-items: center;
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.05);
  color: var(--color-text);
  cursor: pointer;
  transition:
    transform 0.2s ease,
    background 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    transform: rotate(6deg);
    border-color: rgba(0, 214, 143, 0.32);
    background: rgba(0, 214, 143, 0.08);
  }
`;

export const ModalBody = styled.div`
  display: grid;
  gap: 1rem;
`;

