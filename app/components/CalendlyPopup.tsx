"use client";

export default function CalendlyPopup({ variant = "nav" }: { variant?: "nav" | "cta" | "inline" }) {
  const openCalendly = () => {
    if (typeof window !== "undefined" && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: "https://calendly.com/gauravlochab487/15min?background_color=05060f&text_color=f3f4f6&primary_color=5b8def",
      });
    }
  };

  if (variant === "cta") {
    return (
      <button onClick={openCalendly} className="calendly-cta">
        Book a call →
      </button>
    );
  }

  if (variant === "inline") {
    return (
      <button onClick={openCalendly} className="calendly-inline">
        Book a call →
      </button>
    );
  }

  return (
    <button onClick={openCalendly} className="calendly-nav-pill">
      Book a call
    </button>
  );
}
