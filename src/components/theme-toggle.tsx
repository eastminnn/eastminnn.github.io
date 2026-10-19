"use client";

export type Theme = "system" | "light" | "dark";

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  try {
    if (theme === "system") localStorage.removeItem("theme");
    else localStorage.setItem("theme", theme);
  } catch {}
  const update = () => {
    if (theme === "system") delete root.dataset.theme;
    else root.dataset.theme = theme;
  };
  if (document.startViewTransition) document.startViewTransition(update);
  else update();
}

function currentTheme() {
  const { theme } = document.documentElement.dataset;
  if (theme === "light" || theme === "dark") return theme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeToggle() {
  return (
    <button
      type="button"
      onClick={() => applyTheme(currentTheme() === "dark" ? "light" : "dark")}
      aria-label="다크 모드 전환"
      title="다크 모드 전환"
      className="block text-dim transition-colors hover:text-fg"
    >
      <svg
        viewBox="0 0 24 24"
        width={22}
        height={22}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <g className="theme-sun">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </g>
        <path
          className="theme-moon"
          d="M20.99 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.78 9.79Z"
        />
      </svg>
    </button>
  );
}
