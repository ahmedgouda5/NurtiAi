"use client";

import { useEffect, useState, type ReactNode } from "react";
import { FiX } from "react-icons/fi";
import {
  CloseButton,
  Heading,
  ModalBody,
  ModalDescription,
  ModalHeader,
  ModalTitle,
  Overlay,
  Panel,
} from "./styles";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
};

export function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  size = "md",
}: ModalProps) {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isClosing, setIsClosing] = useState(false);
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);

  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen);
    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);
    } else if (shouldRender) {
      setIsClosing(true);
    }
  }

  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        setShouldRender(false);
        setIsClosing(false);
      }, 300); // matches CSS animation duration
      return () => clearTimeout(timer);
    }
  }, [isClosing]);

  if (!shouldRender) return null;

  return (
    <Overlay $isClosing={isClosing} onClick={onClose}>
      <Panel
        $size={size}
        $isClosing={isClosing}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <ModalHeader>
          <Heading>
            <ModalTitle id="modal-title">{title}</ModalTitle>
            {description ? (
              <ModalDescription>{description}</ModalDescription>
            ) : null}
          </Heading>
          <CloseButton type="button" onClick={onClose} aria-label="Close modal">
            <FiX />
          </CloseButton>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </Panel>
    </Overlay>
  );
}
