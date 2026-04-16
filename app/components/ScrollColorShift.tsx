"use client";

import { useEffect } from "react";

export default function ScrollColorShift() {
  useEffect(() => {
    const section = document.getElementById("projects");
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const page = document.querySelector(".page");
          if (!page) return;
          if (entry.isIntersecting) {
            page.classList.add("bg-coral");
          } else {
            page.classList.remove("bg-coral");
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return null;
}
