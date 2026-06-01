'use client';

import { AnimatePresence, motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { FiX } from 'react-icons/fi';
import { CloseButton, Heading, ModalBody, ModalDescription, ModalHeader, ModalTitle, Overlay, Panel } from './styles';
import { fadeIn, fadeUp, springTransition } from '@/utils/animations';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
};

export function Modal({ isOpen, onClose, title, description, children, size = 'md' }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <Overlay variants={fadeIn} initial="hidden" animate="visible" exit="hidden" onClick={onClose}>
          <Panel
            $size={size}
            variants={fadeUp}
            transition={springTransition}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <ModalHeader>
              <Heading>
                <ModalTitle id="modal-title">{title}</ModalTitle>
                {description ? <ModalDescription>{description}</ModalDescription> : null}
              </Heading>
              <CloseButton type="button" onClick={onClose} aria-label="Close modal">
                <FiX />
              </CloseButton>
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
          </Panel>
        </Overlay>
      ) : null}
    </AnimatePresence>
  );
}

