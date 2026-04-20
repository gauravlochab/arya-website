"use client";

import { useCallback, useEffect, useState } from "react";
// @ts-expect-error — react-dom types not installed
import { createPortal } from "react-dom";

export default function ResumeOverlay() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close on Escape + lock scroll
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  const modal = open ? (
    <div className="resume-backdrop" onClick={close}>
      <div className="resume-modal" onClick={(e) => e.stopPropagation()}>
        <div className="resume-header">
          <span className="resume-title">Resume</span>
          <div className="resume-actions">
            <a
              href="/Gaurav_Resume.pdf"
              download
              className="resume-download"
            >
              Download ↓
            </a>
            <button type="button" className="resume-close" onClick={close}>
              ✕
            </button>
          </div>
        </div>
        <div className="resume-body">
          <iframe
            src="/Gaurav_Resume.pdf"
            className="resume-iframe"
            title="Resume"
          />
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <button
        type="button"
        className="resume-trigger"
        onClick={() => setOpen(true)}
      >
        Resume
      </button>
      {mounted && modal && createPortal(modal, document.body)}
    </>
  );
}
