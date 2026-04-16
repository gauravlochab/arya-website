"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  text: string;
}

export default function ScrollRevealText({ text }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function onScroll() {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const viewH = window.innerHeight;

      // Start revealing when section enters bottom third of viewport
      // Finish when section reaches top third
      const start = viewH * 0.85;
      const end = viewH * 0.15;
      const sectionMid = rect.top + rect.height / 2;

      if (sectionMid >= start) {
        setProgress(0);
      } else if (sectionMid <= end) {
        setProgress(1);
      } else {
        setProgress((start - sectionMid) / (start - end));
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial check
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const words = text.split(" ");
  const totalWords = words.length;

  return (
    <div ref={containerRef} className="scroll-reveal-text">
      {words.map((word, i) => {
        // Each word lights up based on scroll progress
        const wordProgress = i / totalWords;
        const isLit = wordProgress < progress;

        return (
          <span
            key={i}
            className={`scroll-reveal-word ${isLit ? "lit" : ""}`}
          >
            {word}{" "}
          </span>
        );
      })}
    </div>
  );
}
