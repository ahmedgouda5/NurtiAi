"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { FaRobot } from "react-icons/fa";

const Chatbot = dynamic(
  () =>
    import("@/AppFeature/chatbot").then((m) => ({
      default: m.Chatbot,
    })),
  {
    ssr: false,
    loading: () => null,
  },
);

export function ChatbotLoader() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <button
          onClick={() => setLoaded(true)}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg"
          aria-label="Open chatbot"
        >
          <FaRobot size={28} />
        </button>
      )}

      {loaded && <Chatbot />}
    </>
  );
}
