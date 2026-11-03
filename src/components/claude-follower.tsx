"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Sprite } from "./claude-sprite";

const OFFSET_X = 18;
const OFFSET_Y = 20;
const EASE = 0.1;
const IDLE_MS = 300;

type Look = { x: number; y: number };

export function canFollow() {
  return (
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function ClaudeFollower({ from }: { from: { x: number; y: number } }) {
  const ref = useRef<HTMLDivElement>(null);
  const [look, setLook] = useState<Look>({ x: 0, y: 0 });
  const [greeting, setGreeting] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let x = from.x;
    let y = from.y;
    let mouseX = from.x;
    let mouseY = from.y;
    let lastMove = performance.now();
    let current: Look = { x: 0, y: 0 };
    let frame = 0;

    const onMove = (e: PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      lastMove = performance.now();
    };

    const tick = () => {
      x += (mouseX + OFFSET_X - x) * EASE;
      y += (mouseY + OFFSET_Y - y) * EASE;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;

      // 멈춰 있을 때만 커서 쪽을 쳐다본다.
      const idle = performance.now() - lastMove > IDLE_MS;
      const eyes = el.querySelector("svg")?.getBoundingClientRect();
      const next =
        idle && eyes
          ? {
              x: direction(mouseX - (eyes.left + eyes.width / 2)),
              y: direction(mouseY - (eyes.top + eyes.height / 3)),
            }
          : { x: 0, y: 0 };
      if (next.x !== current.x || next.y !== current.y) {
        current = next;
        setLook(next);
      }
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    frame = requestAnimationFrame(tick);
    const timer = window.setTimeout(() => setGreeting(false), 1600);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timer);
      window.removeEventListener("pointermove", onMove);
    };
  }, [from]);

  return createPortal(
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-40 flex flex-col items-center will-change-transform"
      style={{ transform: `translate3d(${from.x}px, ${from.y}px, 0)` }}
    >
      <span
        className={`mb-1 rounded-full bg-fg px-2.5 py-1 text-[12px] font-semibold whitespace-nowrap text-bg transition-opacity duration-300 ${
          greeting ? "opacity-100" : "opacity-0"
        }`}
      >
        따라갈게요!
      </span>
      <Sprite shaking={false} look={look} scale={4} />
    </div>,
    document.body,
  );
}

function direction(delta: number) {
  if (delta > 12) return 1;
  if (delta < -12) return -1;
  return 0;
}
