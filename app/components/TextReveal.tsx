"use client";

import { useEffect, useMemo, useRef } from "react";

type TextRevealProps = {
  text: string;
  as?: "div" | "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
};

export default function TextReveal({ text, as = "div", className }: TextRevealProps) {
  const Tag = as;
  const ref = useRef<HTMLDivElement>(null);
  const words = useMemo(() => text.split(" "), [text]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`text-reveal ${className ?? ""}`.trim()} aria-label={text} role="heading" aria-level={as === "h1" ? 1 : as === "h2" ? 2 : as === "h3" ? 3 : undefined}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="word"
          style={{ transitionDelay: `${index * 45}ms` }}
          aria-hidden="true"
        >
          {word}
        </span>
      ))}
    </div>
  );
}
