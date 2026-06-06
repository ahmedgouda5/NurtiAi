"use client";

import { useI18nLoading } from "@/providers/I18nProvider";

export function GlobalLanguageLoader() {
  const { loading } = useI18nLoading();

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-9999">
      <div className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full animate-spin" />
    </div>
  );
}
