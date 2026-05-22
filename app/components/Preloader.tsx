"use client";

import { useEffect, useState } from "react";
import { siteData } from "../../content";

/**
 * Brief intro overlay shown on initial load, then faded out.
 * Collapses instantly when the user prefers reduced motion.
 */
export default function Preloader() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hold = reduce ? 0 : 700;
    const fade = reduce ? 0 : 600;

    const hideTimer = setTimeout(() => setHidden(true), hold);
    const removeTimer = setTimeout(() => setRemoved(true), hold + fade);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (removed) return null;

  return (
    <div className={`preloader ${hidden ? "preloader--hidden" : ""}`} aria-hidden="true">
      <span className="preloader__logo">{siteData.logo}</span>
    </div>
  );
}
