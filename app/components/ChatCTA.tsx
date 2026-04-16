"use client";

import { useEffect, useRef, useState } from "react";

interface Message {
  sender: "bot" | "user";
  content: string | React.ReactNode;
}

const EMAIL = "gauravlochab487@gmail.com";
const PHONE = "+91-8222022505";

export default function ChatCTA() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [showTyping, setShowTyping] = useState(false);
  const autoPlayedRef = useRef(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-play bot messages on mount
  useEffect(() => {
    if (autoPlayedRef.current) return;
    autoPlayedRef.current = true;

    const botMessages: Message[] = [
      {
        sender: "bot",
        content: (
          <span style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <span className="chat-available-dot" />
            <strong>I&apos;m available for new projects</strong>
          </span>
        ),
      },
      {
        sender: "bot",
        content:
          "Do you have a project in mind? A collaboration proposal? Or do you just want to get in touch?",
      },
      {
        sender: "bot",
        content: (
          <a href={`mailto:${EMAIL}`} className="chat-link">
            Click here to send me a message.
          </a>
        ),
      },
      {
        sender: "bot",
        content: (
          <>
            You can also reach out to me via email, at{" "}
            <a href={`mailto:${EMAIL}`} className="chat-link">
              {EMAIL}
            </a>
            , or by phone at{" "}
            <a href={`tel:${PHONE}`} className="chat-link">
              {PHONE}
            </a>
            .
          </>
        ),
      },
    ];

    const delays = [500, 1500, 2500, 3500];

    delays.forEach((delay, idx) => {
      setTimeout(() => {
        setMessages((prev) => [...prev, botMessages[idx]]);
      }, delay);
    });
  }, []);

  // Scroll to bottom only after user sends a message (not during auto-play)
  const userInteractedRef = useRef(false);
  useEffect(() => {
    if (!userInteractedRef.current) return;
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, showTyping]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    userInteractedRef.current = true;
    setMessages((prev) => [...prev, { sender: "user", content: trimmed }]);
    setInput("");

    setShowTyping(true);
    setTimeout(() => {
      setShowTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          content: (
            <>
              Thanks for reaching out! I&apos;ll get back to you soon. In the meantime, feel free to{" "}
              <a href={`mailto:${EMAIL}`} className="chat-link">
                email me directly
              </a>
              .
            </>
          ),
        },
      ]);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  // Determine if a bot message is the last consecutive bot message before a user message or end
  const isLastBotInGroup = (index: number): boolean => {
    if (messages[index].sender !== "bot") return false;
    const next = messages[index + 1];
    return !next || next.sender === "user";
  };

  return (
    <div className="chat-section">
      <div className="chat-messages-open">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={
              msg.sender === "bot"
                ? "chat-msg-row chat-msg-left"
                : "chat-msg-row chat-msg-right"
            }
          >
            <div
              className={
                msg.sender === "bot"
                  ? `chat-bubble-theo${isLastBotInGroup(i) ? " chat-bubble-last" : ""}`
                  : "chat-bubble-theo chat-bubble-user"
              }
            >
              {msg.content}
            </div>
          </div>
        ))}
        {showTyping && (
          <div className="chat-msg-row chat-msg-left">
            <div className="chat-bubble-theo chat-typing-indicator">
              <span className="chat-typing-dot" />
              <span className="chat-typing-dot" />
              <span className="chat-typing-dot" />
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>
      <div className="chat-input-theo">
        <input
          type="text"
          className="chat-input-field"
          placeholder="Type here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          aria-label="Type a message"
        />
        <button
          className="chat-send-theo"
          onClick={handleSend}
          aria-label="Send message"
          type="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" width="24" height="24">
            <path d="m.938.945.335 1.078L2.977 7.5l-2.04 6.55L15.063 7.5Zm1.625 1.86L11.608 7H3.867ZM3.867 8h7.742l-9.046 4.2Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
