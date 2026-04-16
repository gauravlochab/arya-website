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
  const [autoPlayed, setAutoPlayed] = useState(false);
  const [userHasSent, setUserHasSent] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-play bot messages on mount
  useEffect(() => {
    if (autoPlayed) return;
    setAutoPlayed(true);

    const botMessages: Message[] = [
      {
        sender: "bot",
        content: (
          <span style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontWeight: 600 }}>
            <span className="chat-available-dot" />
            I&apos;m available for new projects
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
  }, [autoPlayed]);

  // Scroll to bottom when messages change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, showTyping]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    // Add user message
    setMessages((prev) => [...prev, { sender: "user", content: trimmed }]);
    setInput("");
    setUserHasSent(true);

    // Show typing indicator then bot response
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
    // Check if the next message is from user or this is the last message
    const next = messages[index + 1];
    return !next || next.sender === "user";
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
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
                  ? `chat-bubble-rounded chat-bubble-bot${isLastBotInGroup(i) ? " chat-bubble-bot-last" : ""}`
                  : "chat-bubble-rounded chat-bubble-user"
              }
            >
              {msg.content}
            </div>
          </div>
        ))}
        {showTyping && (
          <div className="chat-msg-row chat-msg-left">
            <div className="chat-bubble-rounded chat-bubble-bot chat-typing-indicator">
              <span className="chat-typing-dot" />
              <span className="chat-typing-dot" />
              <span className="chat-typing-dot" />
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>
      <div className="chat-input-bar">
        <input
          type="text"
          className="chat-input-real"
          placeholder="Type here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          aria-label="Type a message"
        />
        <button
          className="chat-send-button"
          onClick={handleSend}
          aria-label="Send message"
          type="button"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}
