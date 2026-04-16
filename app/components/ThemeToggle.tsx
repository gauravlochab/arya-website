"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

const STORAGE_KEY = "gaurav-theme";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
    applyTheme(initial);
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }

  return (
    <button
      className="text-[13px] font-bold transition-colors hover:opacity-70"
      type="button"
      onClick={toggleTheme}
    >
      <span className={theme === "light" ? "text-[var(--text)]" : "text-[var(--muted)]"}>Light</span>
      {" "}
      <span className="text-[var(--muted)] font-normal">/</span>
      {" "}
      <span className={theme === "dark" ? "text-[var(--text)]" : "text-[var(--muted)]"}>Dark</span>
    </button>
  );
}
