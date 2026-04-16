"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";

const BUBBLES = [
  // Companies
  { label: "Apolis", color: "#6ED7FF", radius: 44 },
  { label: "Valory", color: "#FF7C5E", radius: 40 },
  { label: "Pibit", color: "#FFD56A", radius: 36 },
  { label: "LG", color: "#A50034", radius: 32 },
  { label: "Smarter", color: "#7CE38B", radius: 38 },
  { label: "OpenAI", color: "#10A37F", radius: 42 },
  { label: "Claude", color: "#D4A574", radius: 37 },
  // Frameworks & Tools
  { label: "LangChain", color: "#1C3C3C", radius: 46 },
  { label: "FastAPI", color: "#009688", radius: 34 },
  { label: "Python", color: "#3776AB", radius: 48 },
  { label: "Elastic\nsearch", color: "#FED10A", radius: 46 },
  { label: "Qdrant", color: "#DC382C", radius: 33 },
  { label: "Docker", color: "#2496ED", radius: 36 },
  { label: "AWS", color: "#FF9900", radius: 34 },
  { label: "Redis", color: "#DC382C", radius: 32 },
  { label: "Hugging\nFace", color: "#FFD21E", radius: 42 },
  { label: "vLLM", color: "#8B7BFF", radius: 30 },
  { label: "Kubernetes", color: "#326CE5", radius: 42 },
  { label: "PostgreSQL", color: "#336791", radius: 40 },
  // Concepts & Skills
  { label: "RAG", color: "#FF96D5", radius: 33 },
  { label: "Agents", color: "#A78BFA", radius: 46 },
  { label: "LLM", color: "#F472B6", radius: 38 },
  { label: "DeFi", color: "#98FFEA", radius: 32 },
  { label: "On-Chain", color: "#34D399", radius: 36 },
  { label: "TypeScript", color: "#3178C6", radius: 40 },
  { label: "DevOps", color: "#6F86FF", radius: 30 },
  { label: "Celery", color: "#A9CC54", radius: 28 },
  { label: "RLHF", color: "#F97316", radius: 32 },
  { label: "React", color: "#61DAFB", radius: 34 },
  { label: "Next.js", color: "#FFFFFF", radius: 33 },
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

    const { Engine, World, Bodies, Mouse, MouseConstraint } = Matter;

    const engine = Engine.create({
      gravity: { x: 0.1, y: 1.0, scale: 0.001 },
    });
    engineRef.current = engine;

    // Walls: only floor + right wall. No left wall — bubbles pile right naturally.
    const wallThickness = 60;
    const walls = [
      // Floor at the very bottom
      Bodies.rectangle(width / 2, height + wallThickness / 2, width + 400, wallThickness, { isStatic: true }),
      // Right wall
      Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height * 3, { isStatic: true }),
    ];
    World.add(engine.world, walls);

    // Create bubbles — bias start positions heavily to the right (40-100% of width)
    const bodies: { body: Matter.Body; label: string; color: string; radius: number }[] = [];

    BUBBLES.forEach((bubble, i) => {
      const scaleFactor = Math.min(width / 800, 1.2);
      const radius = bubble.radius * scaleFactor;
      // Bias X position heavily to the right half
      const x = width * 0.4 + Math.random() * (width * 0.6);
      // Start from high above, staggered cascade
      const y = -radius - Math.random() * 500 - i * 40;

      const body = Bodies.circle(x, y, radius, {
        restitution: 0.4,
        friction: 0.3,
        frictionAir: 0.02,
        density: 0.003,
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

    // Prevent Matter.js from hijacking scroll events.
    mouse.element.removeEventListener("mousewheel", (mouse as any).mousewheel);
    mouse.element.removeEventListener("DOMMouseScroll", (mouse as any).mousewheel);
    mouse.element.removeEventListener("wheel", (mouse as any).mousewheel);
    mouse.element.removeEventListener("touchmove", (mouse as any).mousemove);

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
        const REPEL_RADIUS = 140;
        const BLAST_FORCE = 0.06;

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
            const awayX = (dx / dist) * BLAST_FORCE * proximity;
            const awayY = (dy / dist) * BLAST_FORCE * proximity;
            const pushX = planeDirX * BLAST_FORCE * proximity * 0.7;
            const pushY = planeDirY * BLAST_FORCE * proximity * 0.7;
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

    // Resize handler — only update floor and right wall
    const onResize = () => {
      const w = scene.offsetWidth;
      const h = scene.offsetHeight;
      canvas.width = w;
      canvas.height = h;

      // Update floor
      Matter.Body.setPosition(walls[0], { x: w / 2, y: h + wallThickness / 2 });
      // Update right wall
      Matter.Body.setPosition(walls[1], { x: w + wallThickness / 2, y: h / 2 });
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
