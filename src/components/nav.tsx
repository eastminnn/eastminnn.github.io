"use client";

import { useEffect, useState } from "react";
import { sections } from "./sections";

// 데스크톱 왼쪽 메뉴. 지금 보고 있는 섹션의 선이 길어진다.
export function Nav() {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    // 화면 40% 지점을 지난 마지막 섹션이 현재 섹션. 맨 아래에 닿으면 마지막 섹션.
    const update = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      let current = sections[0].id;
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
          current = id;
        }
      }
      setActive(atBottom ? sections[sections.length - 1].id : current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <nav aria-label="섹션 메뉴" className="hidden lg:block">
      <ul className="mt-14 w-max">
        {sections.map(({ id, label }) => {
          const on = active === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={on ? "true" : undefined}
                className="group flex items-center py-2.5"
              >
                <span
                  className={`mr-4 h-px transition-all duration-300 ${
                    on
                      ? "w-16 bg-fg"
                      : "w-8 bg-faint group-hover:w-16 group-hover:bg-fg"
                  }`}
                />
                <span
                  className={`text-xs font-bold tracking-widest uppercase transition-colors ${
                    on ? "text-fg" : "text-faint group-hover:text-fg"
                  }`}
                >
                  {label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
