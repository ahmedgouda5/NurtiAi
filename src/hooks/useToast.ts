'use client';

import { useState } from 'react';

export type ToastMessage = {
  id: string;
  title: string;
  description?: string;
};

export function useToast() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  function showToast(title: string, description?: string) {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    setToasts((current) => [...current, { id, title, description }]);
    window.setTimeout(() => {
      setToasts((current) => current.filter((toast) => toast.id !== id));
    }, 3000);
  }

  return {
    toasts,
    showToast,
    dismissToast: (id: string) => setToasts((current) => current.filter((toast) => toast.id !== id)),
  };
}

