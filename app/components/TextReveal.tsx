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
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
    );

    // Check if element is already visible in the viewport before observing.
    // This handles the case where the element is above the fold on initial
    // page load (common on mobile) and the observer callback hasn't fired yet.
    const rect = node.getBoundingClientRect();
    const inViewport =
      rect.top < window.innerHeight &&
      rect.bottom > 0 &&
      rect.left < window.innerWidth &&
      rect.right > 0;

    if (inViewport) {
      node.classList.add("is-visible");
    } else {
      observer.observe(node);
    }

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
