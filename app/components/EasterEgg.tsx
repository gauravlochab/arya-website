"use client";

import { useEffect, useRef } from "react";

const SPEED = 1.8;
const STEER_RATE = 0.04;
const MOUSE_REPEL_RADIUS = 150;
const NUM_SPARKLES = 4;

function catmullRomToBezier(pts: [number, number][]): string {
  if (pts.length < 2) return "";
  if (pts.length === 2)
    return `M${pts[0][0]},${pts[0][1]} L${pts[1][0]},${pts[1][1]}`;
  let d = `M${pts[0][0]},${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(i - 1, 0)];
    const p1 = pts[i];
    const p2 = pts[Math.min(i + 1, pts.length - 1)];
    const p3 = pts[Math.min(i + 2, pts.length - 1)];
    d += ` C${p1[0] + (p2[0] - p0[0]) / 6},${p1[1] + (p2[1] - p0[1]) / 6} ${p2[0] - (p3[0] - p1[0]) / 6},${p2[1] - (p3[1] - p1[1]) / 6} ${p2[0]},${p2[1]}`;
  }
  return d;
}

function steer(cur: number, tgt: number, amt: number): number {
  let d = tgt - cur;
  while (d > Math.PI) d -= Math.PI * 2;
  while (d < -Math.PI) d += Math.PI * 2;
  return cur + d * amt;
}

/* Small heart SVG path centered at (0,0), about 14px tall */
function heartPath(cx: number, cy: number, size: number): string {
  const s = size / 14;
  return `M${cx},${cy + 3 * s} `
    + `C${cx},${cy + 1 * s} ${cx - 5 * s},${cy - 4 * s} ${cx},${cy - 2 * s} `
    + `C${cx + 5 * s},${cy - 4 * s} ${cx},${cy + 1 * s} ${cx},${cy + 3 * s} Z`;
}

export default function EasterEgg() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const svg = svgRef.current;
    if (!svg) return;

    let W = window.innerWidth;
    let H = window.innerHeight;
    const isMobile = W < 768;
    svg.setAttribute("viewBox", `0 0 ${W} ${H}`);

    const TRAIL_MAX = isMobile ? 100 : 180;
    const MARGIN = isMobile ? 120 : 100;
    const WANDER_SCALE = isMobile ? 0.6 : 1;
    const PLANE_SCALE = isMobile ? 0.7 : 1;
    const SPARKLE_SIZE_MULT = isMobile ? 1.5 : 2.5;
    const TRAIL_WIDTH = isMobile ? 2 : 3;
    const TRAIL_DASH = isMobile ? "2 8" : "3 10";
    const TEXT_PAD_X = isMobile ? 80 : 60;
    const TEXT_PAD_Y_TOP = isMobile ? 80 : 40;
    const TEXT_PAD_Y_BOT = isMobile ? 80 : 40;

    let mouseX = -9999;
    let mouseY = -9999;
    const isFine = window.matchMedia("(pointer: fine)").matches;
    function onPointerMove(e: PointerEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }
    if (isFine)
      window.addEventListener("pointermove", onPointerMove, { passive: true });

    const trailEl = svg.querySelector(".ee-trail") as SVGPathElement;
    const trailGrad = svg.querySelector("#ee-trail-grad") as SVGLinearGradientElement;
    const textEl = svg.querySelector(".ee-text") as SVGTextElement;
    const heartEl = svg.querySelector(".ee-heart") as SVGPathElement;
    const planeEl = svg.querySelector(".ee-plane") as SVGGElement;
    const sparkleEls = svg.querySelectorAll(".ee-sparkle") as NodeListOf<SVGCircleElement>;

    /* Apply mobile-aware trail styling */
    trailEl.setAttribute("stroke-width", String(TRAIL_WIDTH));
    trailEl.setAttribute("stroke-dasharray", TRAIL_DASH);

    let x = -100;
    let y = H * 0.4 + Math.random() * H * 0.2;
    let angle = -0.1;
    let prevAngle = -0.1;
    let frame = 0;
    let entering = true;
    const trail: [number, number][] = [];
    let rafId: number;

    const TAIL_LOCAL_X = -52;
    const TAIL_LOCAL_Y = 4;

    /* Sparkle state */
    interface Sparkle {
      x: number; y: number;
      vx: number; vy: number;
      life: number; maxLife: number;
      size: number;
    }
    const sparkles: Sparkle[] = [];

    function emitSparkle() {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      // Emit from around the plane body
      const ox = -20 + Math.random() * -20;
      const oy = (Math.random() - 0.5) * 20;
      sparkles.push({
        x: x + ox * cos - oy * sin,
        y: y + ox * sin + oy * cos,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3 - 0.2,
        life: 1,
        maxLife: 60 + Math.random() * 40,
        size: SPARKLE_SIZE_MULT + Math.random() * SPARKLE_SIZE_MULT,
      });
      // Keep sparkle count reasonable
      while (sparkles.length > NUM_SPARKLES) sparkles.shift();
    }

    function tick() {
      frame++;
      if (entering) {
        x += 2.5;
        y -= 0.2;
        angle = -0.1;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        trail.push([
          x + TAIL_LOCAL_X * cos - TAIL_LOCAL_Y * sin,
          y + TAIL_LOCAL_X * sin + TAIL_LOCAL_Y * cos,
        ]);
        if (trail.length > TRAIL_MAX) trail.shift();
        if (x > W * 0.12) entering = false;
      } else {
        let tgt = angle
          + Math.sin(frame * 0.013) * 0.02 * WANDER_SCALE
          + Math.sin(frame * 0.004) * 0.035 * WANDER_SCALE
          + Math.cos(frame * 0.0025) * 0.025 * WANDER_SCALE;
        if (x < MARGIN) tgt = steer(tgt, 0, Math.pow((MARGIN - x) / MARGIN, 1.5) * 0.1);
        if (x > W - MARGIN) tgt = steer(tgt, Math.PI, Math.pow((x - (W - MARGIN)) / MARGIN, 1.5) * 0.1);
        if (y < MARGIN) tgt = steer(tgt, Math.PI * 0.4, Math.pow((MARGIN - y) / MARGIN, 1.5) * 0.1);
        if (y > H - MARGIN) tgt = steer(tgt, -Math.PI * 0.4, Math.pow((y - (H - MARGIN)) / MARGIN, 1.5) * 0.1);
        if (x < 30 || x > W - 30 || y < 30 || y > H - 30)
          tgt = steer(tgt, Math.atan2(H / 2 - y, W / 2 - x), 0.15);
        if (frame % 60 === 0) tgt += (Math.random() - 0.5) * 0.4;
        if (isFine) {
          const dx = x - mouseX, dy = y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_REPEL_RADIUS && dist > 1)
            tgt = steer(tgt, Math.atan2(dy, dx), Math.pow(1 - dist / MOUSE_REPEL_RADIUS, 2) * 0.12);
        }
        prevAngle = angle;
        angle = steer(angle, tgt, STEER_RATE);
        // Speed varies: faster gliding down, slower climbing up
        const verticalFactor = Math.sin(angle); // positive = going down
        const speed = SPEED + verticalFactor * 0.4;
        x += Math.cos(angle) * speed;
        y += Math.sin(angle) * speed;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        trail.push([
          x + TAIL_LOCAL_X * cos - TAIL_LOCAL_Y * sin,
          y + TAIL_LOCAL_X * sin + TAIL_LOCAL_Y * cos,
        ]);
        if (trail.length > TRAIL_MAX) trail.shift();

        // Emit sparkle occasionally
        if (frame % 35 === 0) emitSparkle();
      }

      /* ── Update DOM ── */

      // Trail
      if (trail.length > 4) {
        trailEl.setAttribute("d", catmullRomToBezier(trail));
        const tail = trail[0];
        const head = trail[trail.length - 1];
        trailGrad.setAttribute("x1", String(tail[0]));
        trailGrad.setAttribute("y1", String(tail[1]));
        trailGrad.setAttribute("x2", String(head[0]));
        trailGrad.setAttribute("y2", String(head[1]));
      }

      // Text + heart — placed at ~25% along the trail, clamped to viewport
      if (trail.length > 40) {
        const idx = Math.floor(trail.length * 0.25);
        const pt = trail[idx];
        // Clamp to stay visible within viewport
        const tx = Math.max(TEXT_PAD_X, Math.min(W - TEXT_PAD_X, pt[0]));
        const ty = Math.max(TEXT_PAD_Y_TOP, Math.min(H - TEXT_PAD_Y_BOT, pt[1]));
        textEl.setAttribute("x", String(tx));
        textEl.setAttribute("y", String(ty - 18));
        heartEl.setAttribute("d", heartPath(tx + 58, ty - 18, 14));
        const show = trail.length > 80;
        textEl.style.opacity = show ? "0.9" : "0";
        heartEl.style.opacity = show ? "0.75" : "0";
      }

      // Sparkles
      for (let i = 0; i < NUM_SPARKLES; i++) {
        const el = sparkleEls[i];
        if (i < sparkles.length) {
          const s = sparkles[i];
          s.x += s.vx;
          s.y += s.vy;
          s.life -= 1 / s.maxLife;
          if (s.life < 0) s.life = 0;
          el.setAttribute("cx", String(s.x));
          el.setAttribute("cy", String(s.y));
          el.setAttribute("r", String(s.size * s.life));
          el.style.opacity = String(s.life * 0.8);
        } else {
          el.style.opacity = "0";
        }
      }

      // Airplane — paper plane physics: bob, rock, and bank into turns
      const bob = Math.sin(frame * 0.04) * 3;
      const rock = Math.sin(frame * 0.025) * 3;
      // Bank into turns: tilt proportional to how fast the angle is changing
      let turnRate = angle - prevAngle;
      while (turnRate > Math.PI) turnRate -= Math.PI * 2;
      while (turnRate < -Math.PI) turnRate += Math.PI * 2;
      const bank = turnRate * 600; // amplify into degrees (subtle lean)
      planeEl.setAttribute(
        "transform",
        `translate(${x},${y + bob}) rotate(${(angle * 180) / Math.PI + rock + bank}) scale(${PLANE_SCALE})`
      );
      rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);

    function onResize() {
      W = window.innerWidth;
      H = window.innerHeight;
      svg!.setAttribute("viewBox", `0 0 ${W} ${H}`);
    }
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      if (isFine) window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <svg ref={svgRef} className="ee-overlay" aria-hidden="true">
      <defs>
        <pattern id="ee-hatch" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="5" className="ee-hatch-line" strokeWidth="1.2" />
        </pattern>
        <linearGradient id="ee-trail-grad" gradientUnits="userSpaceOnUse">
          <stop offset="0%" className="ee-trail-stop-start" />
          <stop offset="100%" className="ee-trail-stop-end" />
        </linearGradient>
        <filter id="ee-shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="1" dy="2" stdDeviation="3" floodOpacity="0.35" />
          <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#5b8def" floodOpacity="0.15" />
        </filter>
        <filter id="ee-text-glow" x="-20%" y="-30%" width="140%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Dotted trail */}
      <path className="ee-trail" d="" fill="none" stroke="url(#ee-trail-grad)" strokeDasharray="3 10" strokeLinecap="round" strokeWidth="3" suppressHydrationWarning />

      {/* Tiny drawn heart at trail tail */}
      <path className="ee-heart" d="" style={{ opacity: 0 }} />

      {/* "Hi Tammy" text */}
      <text className="ee-text" x="0" y="0" textAnchor="middle" dominantBaseline="auto" filter="url(#ee-text-glow)" style={{ opacity: 0 }}>
        Hi Tammy
      </text>

      {/* Sparkle particles */}
      {Array.from({ length: NUM_SPARKLES }).map((_, i) => (
        <circle key={i} className="ee-sparkle" cx="0" cy="0" r="0" style={{ opacity: 0 }} />
      ))}

      {/* Paper airplane */}
      <g className="ee-plane" filter="url(#ee-shadow)" transform="translate(-200,-200)">
        <polygon points="-48,2 -58,-6 -54,10" className="ee-wing-shadow" />
        <polygon points="0,2 -48,2 -44,16" className="ee-wing-lower" />
        <polygon points="0,-1 -66,-26 -48,1" className="ee-wing-upper" />
        <polygon points="-14,-1 -58,-22 -44,0" className="ee-wing-flap" />
        <line x1="0" y1="0" x2="-48" y2="2" className="ee-fold-main" />
      </g>
    </svg>
  );
}
