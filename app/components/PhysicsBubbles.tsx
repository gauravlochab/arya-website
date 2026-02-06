"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";

const BUBBLES = [
  { label: "APOLIS", color: "#6ED7FF", radius: 42 },
  { label: "Valory", color: "#FF7C5E", radius: 38 },
  { label: "Pibit", color: "#FFD56A", radius: 36 },
  { label: "BlackRock", color: "#4a4a4a", radius: 50 },
  { label: "LG", color: "#A50034", radius: 34 },
  { label: "Agents", color: "#8B7BFF", radius: 36 },
  { label: "Swarms", color: "#7CE38B", radius: 38 },
  { label: "LLM", color: "#FF96D5", radius: 32 },
  { label: "On-Chain", color: "#98FFEA", radius: 40 },
  { label: "Infra", color: "#9BA7B7", radius: 30 },
  { label: "Python", color: "#3776AB", radius: 34 },
  { label: "TypeScript", color: "#3178C6", radius: 46 },
  { label: "Open\nSource", color: "#FFB84D", radius: 44 },
  { label: "DevOps", color: "#6F86FF", radius: 32 },
];

export default function PhysicsBubbles() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    const canvas = canvasRef.current;
    if (!scene || !canvas) return;

    const width = scene.offsetWidth;
    const height = scene.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    const { Engine, World, Bodies, Mouse, MouseConstraint, Events } = Matter;

    const engine = Engine.create({
      gravity: { x: 0, y: 0.8, scale: 0.001 },
    });
    engineRef.current = engine;

    // Walls
    const wallThickness = 60;
    const walls = [
      Bodies.rectangle(width / 2, height + wallThickness / 2, width + 100, wallThickness, { isStatic: true }),
      Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height * 2, { isStatic: true }),
      Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height * 2, { isStatic: true }),
    ];
    World.add(engine.world, walls);

    // Create bubbles with staggered drop
    const bodies: { body: Matter.Body; label: string; color: string; radius: number }[] = [];

    BUBBLES.forEach((bubble, i) => {
      const scaleFactor = Math.min(width / 800, 1);
      const radius = bubble.radius * scaleFactor;
      const x = Math.random() * (width - radius * 2) + radius;
      const y = -radius - Math.random() * 400 - i * 60;

      const body = Bodies.circle(x, y, radius, {
        restitution: 0.5,
        friction: 0.3,
        frictionAir: 0.01,
        density: 0.002,
        render: { visible: false },
      });

      bodies.push({ body, label: bubble.label, color: bubble.color, radius });
      World.add(engine.world, body);
    });

    // Mouse interaction
    const mouse = Mouse.create(canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });
    World.add(engine.world, mouseConstraint);

    // Keep mouse in sync with scroll
    mouse.element.removeEventListener("mousewheel", (mouse as any).mousewheel);
    mouse.element.removeEventListener("DOMMouseScroll", (mouse as any).mousewheel);

    // Render loop
    const ctx = canvas.getContext("2d");
    let animationId: number;

    const render = () => {
      // Paper airplane interaction — push bubbles away when plane flies through
      const planePos = (window as any).__planePos;
      if (planePos && scene) {
        const rect = scene.getBoundingClientRect();
        // Convert viewport coords to canvas-local coords
        const px = planePos.x - rect.left;
        const py = planePos.y - rect.top;
        const REPEL_RADIUS = 100;
        const BLAST_FORCE = 0.015;

        // Plane's heading direction for directional push
        const planeAngle = planePos.angle || 0;
        const planeDirX = Math.cos(planeAngle);
        const planeDirY = Math.sin(planeAngle);

        bodies.forEach(({ body, radius }) => {
          const dx = body.position.x - px;
          const dy = body.position.y - py;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < REPEL_RADIUS + radius && dist > 1) {
            const proximity = Math.pow(1 - dist / (REPEL_RADIUS + radius), 2);
            // Blast: push away from plane + push in plane's flight direction
            const awayX = (dx / dist) * BLAST_FORCE * proximity;
            const awayY = (dy / dist) * BLAST_FORCE * proximity;
            const pushX = planeDirX * BLAST_FORCE * proximity * 0.5;
            const pushY = planeDirY * BLAST_FORCE * proximity * 0.5;
            Matter.Body.applyForce(body, body.position, {
              x: awayX + pushX,
              y: awayY + pushY,
            });
          }
        });
      }

      Engine.update(engine, 1000 / 60);

      if (ctx) {
        ctx.clearRect(0, 0, width, height);

        bodies.forEach(({ body, label, color, radius }) => {
          const { x, y } = body.position;
          const angle = body.angle;

          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(angle);

          // Circle
          ctx.beginPath();
          ctx.arc(0, 0, radius, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.fill();

          // Border
          ctx.strokeStyle = "rgba(255,255,255,0.15)";
          ctx.lineWidth = 1;
          ctx.stroke();

          // Label — scale font to fit inside circle, support multi-line
          const lines = label.split("\n");
          const maxTextWidth = radius * 1.5;
          let fontSize = radius * 0.38;
          if (fontSize < 6) fontSize = 6;
          ctx.font = `600 ${fontSize}px ui-monospace, SFMono-Regular, monospace`;
          // Measure widest line and shrink if needed
          const widestLine = lines.reduce((max, line) => {
            const w = ctx.measureText(line).width;
            return w > max ? w : max;
          }, 0);
          if (widestLine > maxTextWidth) {
            fontSize *= maxTextWidth / widestLine;
            ctx.font = `600 ${fontSize}px ui-monospace, SFMono-Regular, monospace`;
          }
          ctx.fillStyle = luminance(color) > 0.4 ? "#0b0c0f" : "#f3f4f6";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          const lineHeight = fontSize * 1.2;
          const totalHeight = lineHeight * (lines.length - 1);
          lines.forEach((line, li) => {
            ctx.fillText(line, 0, -totalHeight / 2 + li * lineHeight);
          });

          ctx.restore();
        });
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    // Resize handler
    const onResize = () => {
      const w = scene.offsetWidth;
      const h = scene.offsetHeight;
      canvas.width = w;
      canvas.height = h;

      // Update floor position
      Matter.Body.setPosition(walls[0], { x: w / 2, y: h + wallThickness / 2 });
      Matter.Body.setPosition(walls[2], { x: w + wallThickness / 2, y: h / 2 });
    };

    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onResize);
      World.clear(engine.world, false);
      Engine.clear(engine);
    };
  }, []);

  return (
    <div ref={sceneRef} className="physics-scene">
      <canvas ref={canvasRef} className="physics-canvas" />
    </div>
  );
}

// Helper: relative luminance for text contrast
function luminance(hex: string): number {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const toLinear = (c: number) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}
