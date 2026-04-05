# Calendly Integration Plan — gaurav.gg

## Overview
Add a "Book a call" button in the site nav that opens a Calendly popup widget, allowing visitors to schedule a 15-minute quick chat directly from the website.

## User Requirements (from interview)

| Decision | Choice |
|----------|--------|
| Calendly account | Needs to be created (gauravlochab487@gmail.com) |
| Meeting type | 15-min quick chat |
| Placement | Nav only — replaces/adds alongside current "Reach out" |
| Button text | "Book a call" |
| Open style | Popup widget (Calendly embed overlay on site) |
| Email links | Keep both — email links stay in CTA + footer |
| Calendly email | gauravlochab487@gmail.com |

## Pre-requisite: Create Calendly Account

Before implementing, Gaurav needs to:

1. Go to https://calendly.com/signup
2. Sign up with gauravlochab487@gmail.com
3. Create a **15-minute** event type called "Quick Chat" or "Intro Call"
4. Note the event URL (e.g., `https://calendly.com/gauravlochab487/15min`)
5. Optionally connect Google Calendar for automatic availability

## Implementation Plan

### Files to Modify
1. **`app/page.tsx`** — Add "Book a call" nav link alongside "Reach out"
2. **`app/components/CalendlyPopup.tsx`** — New component for the popup widget
3. **`app/layout.tsx`** — Add Calendly widget script to `<head>`
4. **`app/globals.css`** — Styling for the booking button

### Step 1: Add Calendly Widget Script

In `app/layout.tsx`, add the Calendly CSS and JS in the `<head>`:

```tsx
<head>
  <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
  <script src="https://assets.calendly.com/assets/external/widget.js" async />
</head>
```

### Step 2: Create CalendlyPopup Component

New file: `app/components/CalendlyPopup.tsx`

```tsx
"use client";

export default function CalendlyPopup({ url }: { url: string }) {
  const openCalendly = () => {
    if (typeof window !== "undefined" && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({ url });
    }
  };

  return (
    <button onClick={openCalendly} className="nav-link text-[var(--text)]">
      Book a call
    </button>
  );
}
```

### Step 3: Update Navigation in page.tsx

In the header nav, add the "Book a call" button next to "Reach out":

```tsx
<div className="flex items-center gap-3 sm:gap-6">
  <ThemeToggle />
  <CalendlyPopup url="https://calendly.com/gauravlochab487/15min" />
  <a className="nav-link text-[var(--text)]" href="mailto:gauravlochab487@gmail.com">
    Reach out
  </a>
</div>
```

### Step 4: Style the Button

The button should match the existing `nav-link` style — uppercase, small, with the underline hover effect. Add to `globals.css`:

```css
.calendly-btn {
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
}
```

### Step 5: Calendly Popup Theme

Calendly's popup widget supports a `prefill` and custom colors:

```tsx
Calendly.initPopupWidget({
  url: 'https://calendly.com/gauravlochab487/15min',
  color: '#5b8def',           // Match site accent
  textColor: '#f3f4f6',       // Match site text
  primaryColor: '#5b8def',    // Match site accent
});
```

## Mobile Considerations
- The Calendly popup widget is responsive and works on mobile
- Button should be tappable (min 44px touch target)
- On very small screens, may need to abbreviate to "Book" instead of "Book a call"

## Testing Checklist
- [ ] Calendly account created
- [ ] 15-min event type configured
- [ ] "Book a call" button visible in nav
- [ ] Clicking opens Calendly popup overlay
- [ ] Popup colors match site theme
- [ ] "Reach out" email link still works alongside
- [ ] CTA section and footer email links untouched
- [ ] Works on mobile (popup is responsive)
- [ ] Works in both dark and light mode
- [ ] `npm run build` passes
- [ ] Deploy to Vercel

## Blocked On
**Gaurav creating a Calendly account and 15-min event type.** Once the Calendly URL is provided, implementation takes ~15 minutes.
