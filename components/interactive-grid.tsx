"use client";

import { useEffect, useRef } from "react";

const CELL = 40;

// Brand-matched color palette
const PALETTE: [number, number, number][] = [
  [59, 130, 246],   // blue-500
  [34, 211, 238],   // cyan-400
  [99, 102, 241],   // indigo-400
  [14, 165, 233],   // sky-500
  [96, 165, 250],   // blue-400
];

interface GlowCell {
  col: number;
  row: number;
  r: number;
  g: number;
  b: number;
  opacity: number;
  rising: boolean;
  riseSpeed: number;
  fallSpeed: number;
}

export function InteractiveGrid({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId: number;
    const cells = new Map<string, GlowCell>();
    let lastSpawnTime = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    };
    resize();

    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    const spawn = (col: number, row: number, r: number, g: number, b: number) => {
      const key = `${col},${row}`;
      if (cells.has(key)) return;
      const cols = Math.floor(canvas.width / CELL);
      const rows = Math.floor(canvas.height / CELL);
      if (col < 0 || col >= cols || row < 0 || row >= rows) return;
      cells.set(key, {
        col, row, r, g, b,
        opacity: 0,
        rising: true,
        riseSpeed: 0.035 + Math.random() * 0.035,
        fallSpeed: 0.006 + Math.random() * 0.008,
      });
    };

    const spawnRandom = () => {
      const cols = Math.floor(canvas.width / CELL);
      const rows = Math.floor(canvas.height / CELL);
      const col = Math.floor(Math.random() * cols);
      const row = Math.floor(Math.random() * rows);
      const [r, g, b] = PALETTE[Math.floor(Math.random() * PALETTE.length)];
      spawn(col, row, r, g, b);
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const col = Math.floor((e.clientX - rect.left) / CELL);
      const row = Math.floor((e.clientY - rect.top) / CELL);
      // Spawn on the hovered cell + immediate neighbours at lower intensity
      spawn(col, row, 210, 230, 255);
      spawn(col + 1, row, 180, 210, 255);
      spawn(col - 1, row, 180, 210, 255);
      spawn(col, row + 1, 180, 210, 255);
      spawn(col, row - 1, 180, 210, 255);
    };

    canvas.parentElement?.addEventListener("mousemove", onMouseMove);

    const frame = (t: number) => {
      // Randomly spawn new cells every ~120ms
      if (t - lastSpawnTime > 120) {
        lastSpawnTime = t;
        const burst = Math.floor(Math.random() * 3) + 1;
        for (let i = 0; i < burst; i++) spawnRandom();
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const [key, c] of cells) {
        // Advance opacity
        if (c.rising) {
          c.opacity = Math.min(1, c.opacity + c.riseSpeed);
          if (c.opacity >= 1) c.rising = false;
        } else {
          c.opacity -= c.fallSpeed;
          if (c.opacity <= 0) {
            cells.delete(key);
            continue;
          }
        }

        const x = c.col * CELL;
        const y = c.row * CELL;
        const peak = c.opacity;

        // Cell background fill
        ctx.fillStyle = `rgba(${c.r},${c.g},${c.b},${peak * 0.38})`;
        ctx.fillRect(x, y, CELL, CELL);

        // Inner bright highlight at top-left corner
        ctx.fillStyle = `rgba(255,255,255,${peak * 0.06})`;
        ctx.fillRect(x, y, CELL, CELL);

        // Radial glow spreading beyond cell
        const grd = ctx.createRadialGradient(
          x + CELL / 2, y + CELL / 2, 0,
          x + CELL / 2, y + CELL / 2, CELL * 2,
        );
        grd.addColorStop(0, `rgba(${c.r},${c.g},${c.b},${peak * 0.18})`);
        grd.addColorStop(0.5, `rgba(${c.r},${c.g},${c.b},${peak * 0.06})`);
        grd.addColorStop(1, `rgba(${c.r},${c.g},${c.b},0)`);
        ctx.fillStyle = grd;
        ctx.fillRect(x - CELL, y - CELL, CELL * 3, CELL * 3);
      }

      rafId = requestAnimationFrame(frame);
    };

    rafId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      canvas.parentElement?.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: "block" }}
    />
  );
}
