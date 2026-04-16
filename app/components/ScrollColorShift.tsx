"use client";

import { useEffect } from "react";

export default function ScrollColorShift() {
  useEffect(() => {
    const wrapper = document.getElementById("projects-wrapper");
    if (!wrapper) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            wrapper.classList.add("bg-coral");
          } else {
            wrapper.classList.remove("bg-coral");
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

  return null;
}
