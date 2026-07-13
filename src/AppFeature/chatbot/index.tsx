"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiSend, FiX } from "react-icons/fi";
import { Button } from "@/AppFeature/shared/Button";
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

  const [open, setOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [prevOpen, setPrevOpen] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "bot",
      text: t("chatbot.welcome"),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  if (open !== prevOpen) {
    setPrevOpen(open);
    if (open) {
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

  async function sendMessage(text: string) {
    if (!text.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: `${Date.now()}`,
      role: "user",
      text,
    };

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/Chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: text }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();

      const reply: ChatMessage = {
        id: `${Date.now()}-bot`,
        role: "bot",
        text: data.reply || "No response",
      };

      setMessages((current) => [...current, reply]);
    } catch (error) {
      console.error("Chat API error:", error);
      const errorReply: ChatMessage = {
        id: `${Date.now()}-bot`,
        role: "bot",
        text: "Sorry, I am having trouble connecting right now. Please try again later.",
      };
      setMessages((current) => [...current, errorReply]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {shouldRender && (
        <Panel $isClosing={isClosing}>
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
            {isLoading && (
              <Bubble key="loading" $role="bot">
                <div className="flex h-5 items-center space-x-1 px-1">
                  <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: '0ms' }} />
                  <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: '150ms' }} />
                  <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: '300ms' }} />
                </div>
              </Bubble>
            )}
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
      )}

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
