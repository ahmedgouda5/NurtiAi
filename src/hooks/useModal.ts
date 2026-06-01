'use client';

import { useState } from 'react';

export function useModal(initialOpen = false) {
  const [open, setOpen] = useState(initialOpen);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  const toggle = () => setOpen((current) => !current);

  return {
    open,
    setOpen,
    onOpen,
    onClose,
    toggle,
  };
}

