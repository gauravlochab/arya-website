"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const dot = dotRef.current;
    if (!outer || !dot) return;

    let mouseX = 0;
    let mouseY = 0;
    let outerX = 0;
    let outerY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`;
    };

    const onMouseEnterInteractive = () => {
      outer.style.width = "48px";
      outer.style.height = "48px";
      outer.style.borderColor = "var(--accent)";
      outer.style.opacity = "0.6";
    };

    const onMouseLeaveInteractive = () => {
      outer.style.width = "36px";
      outer.style.height = "36px";
      outer.style.borderColor = "var(--ring, rgba(255,255,255,0.7))";
      outer.style.opacity = "1";
    };

    const animate = () => {
      outerX += (mouseX - outerX) * 0.12;
      outerY += (mouseY - outerY) * 0.12;
      outer.style.transform = `translate(${outerX - 18}px, ${outerY - 18}px)`;
      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMouseMove);

    const interactives = document.querySelectorAll("a, button, .service-card, .testimonial-card, .portfolio-table tbody tr");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterInteractive);
      el.addEventListener("mouseleave", onMouseLeaveInteractive);
    });

    const rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={outerRef}
        className="cursor-ring"
        aria-hidden="true"
      />
      <div
        ref={dotRef}
        className="cursor-dot"
        aria-hidden="true"
      />
    </>
  );
}
