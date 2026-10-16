"use client";

import { useEffect, useRef } from "react";

// 마우스를 따라다니는 조명. brittanychiang.com처럼 페이지 위에 덮이고(z-30),
// 페이지 좌표를 써서 스크롤하면 조명도 콘텐츠와 함께 움직인다.
// 리렌더 없이 CSS 변수만 갱신한다.
export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      el.style.setProperty("--x", `${e.pageX}px`);
      el.style.setProperty("--y", `${e.pageY}px`);
      el.style.opacity = "1";
    };
    const onLeave = () => (el.style.opacity = "0");
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="spotlight pointer-events-none absolute inset-0 z-30 hidden opacity-0 transition-opacity duration-300 lg:block"
    />
  );
}
