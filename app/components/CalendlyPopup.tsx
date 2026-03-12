"use client";

export default function CalendlyPopup() {
  const openCalendly = () => {
    if (typeof window !== "undefined" && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: "https://calendly.com/gauravlochab487/15min?background_color=05060f&text_color=f3f4f6&primary_color=5b8def",
      });
    }
  };

  return (
    <button onClick={openCalendly} className="nav-link calendly-btn text-[var(--text)]">
      Book a call
    </button>
  );
}
