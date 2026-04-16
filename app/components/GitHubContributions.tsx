"use client";

import { useEffect, useState } from "react";

export default function GitHubContributions() {
  const [count, setCount] = useState<string | null>(null);
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/github-contributions")
      .then((r) => r.json())
      .then((data) => {
        if (data.contributions) {
          setCount(data.contributions);
          setYear(data.year);
        }
      })
      .catch(() => {});
  }, []);

  if (!count) return null;

  return (
    <a
      href="https://github.com/gauravlochab"
      target="_blank"
      rel="noopener noreferrer"
      className="github-contributions"
    >
      <span className="gc-number">{count}</span>
      <span className="gc-label">contributions in {year}</span>
    </a>
  );
}
