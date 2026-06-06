"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { FiSend, FiX } from "react-icons/fi";
import { Button } from "@/AppFeature/shared/Button";
import { fadeUp } from "@/utils/animations";
import {
  Bubble,
  Composer,
  Header,
  HeaderMeta,
  Input,
  Launcher,
  Messages,
  Panel,
  Status,
  Title,
} from "./styles";
import { FaRobot } from "react-icons/fa";

type ChatMessage = {
  id: string;
  role: "bot" | "user";
  text: string;
};

export function Chatbot() {
  const { t } = useTranslation();

  const cannedReplies = t("chatbot.replies", {
    returnObjects: true,
  }) as string[];

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "bot",
      text: t("chatbot.welcome"),
    },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  function sendMessage(text: string) {
    if (!text.trim()) return;

    const userMessage: ChatMessage = {
      id: `${Date.now()}`,
      role: "user",
      text,
    };
    const reply: ChatMessage = {
      id: `${Date.now()}-bot`,
      role: "bot",
      text: cannedReplies[Math.floor(Math.random() * cannedReplies.length)],
    };

    setMessages((current) => [...current, userMessage, reply]);
    setInput("");
  }

  return (
    <>
      <AnimatePresence>
        {open ? (
          <Panel
            as={motion.section}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <Header>
              <HeaderMeta>
                <Title>{t("chatbot.title")}</Title>
                <Status>{t("chatbot.status")}</Status>
              </HeaderMeta>
              <Button onClick={() => setOpen(false)} aria-label="Close chat">
                <FiX />
              </Button>
            </Header>
            <Messages>
              {messages.map((message) => (
                <Bubble key={message.id} $role={message.role}>
                  {message.text}
                </Bubble>
              ))}
              <div ref={endRef} />
            </Messages>
            <Composer
              onSubmit={(event) => {
                event.preventDefault();
                sendMessage(input);
              }}
            >
              <Input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder={t("chatbot.placeholder")}
              />
              <Button type="submit" aria-label="Send message">
                <FiSend />
              </Button>
            </Composer>
          </Panel>
        ) : null}
      </AnimatePresence>

      <Launcher
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-label="Toggle chat"
      >
        <div className="flex items-center justify-center">
          <FaRobot size={28} />
        </div>
      </Launcher>
    </>
  );
}
