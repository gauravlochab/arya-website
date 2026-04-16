"use client";

import { useEffect, useState } from "react";

export default function GitHubContributions() {
  const [count, setCount] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/github-contributions")
      .then((r) => r.json())
      .then((data) => {
        if (data.contributions) setCount(data.contributions);
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
      <span className="gc-label">contributions this year &rarr;</span>
    </a>
  );
}
