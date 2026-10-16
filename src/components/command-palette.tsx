"use client";

import { Command } from "cmdk";
import { useCallback, useEffect, useState } from "react";
import { profile, projects, writing } from "@/content";
import { sections } from "./sections";

type Theme = "system" | "light" | "dark";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  try {
    if (theme === "system") localStorage.removeItem("theme");
    else localStorage.setItem("theme", theme);
  } catch {}
  if (theme === "system") delete root.dataset.theme;
  else root.dataset.theme = theme;
}

const itemClass =
  "flex cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-[15px] text-dim";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const run = useCallback((fn: () => void) => {
    setOpen(false);
    fn();
  }, []);

  const go = (id: string) =>
    run(() => document.getElementById(id)?.scrollIntoView());
  const visit = (href: string) => run(() => window.open(href, "_blank"));
  const notify = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 1800);
  };

  return (
    <>
      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="빠르게 이동"
        loop
        contentClassName="overflow-hidden rounded-2xl border border-line bg-bg shadow-2xl shadow-black/10"
      >
        <Command.Input
          placeholder="어디로 갈까요?"
          className="w-full border-b border-line bg-transparent px-5 py-4 text-[16px] text-fg outline-none placeholder:text-faint"
        />
        <Command.List className="max-h-[50vh] overflow-y-auto overscroll-contain p-2">
          <Command.Empty className="px-3 py-8 text-center text-[14px] text-faint">
            찾는 결과가 없어요
          </Command.Empty>

          <Command.Group heading="섹션">
            {sections.map((s) => (
              <Command.Item
                key={s.id}
                value={`섹션 ${s.label} ${s.ko}`}
                onSelect={() => go(s.id)}
                className={itemClass}
              >
                {s.label}
                <span className="text-[12px] text-faint">이동</span>
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading="프로젝트">
            {projects.map((p) => (
              <Command.Item
                key={p.title}
                value={`프로젝트 ${p.title}`}
                keywords={p.tags}
                onSelect={() => (p.href ? visit(p.href) : go("projects"))}
                className={itemClass}
              >
                <span className="truncate">{p.title}</span>
                <span className="shrink-0 text-[12px] text-faint">
                  {p.tags.slice(0, 2).join(" · ")}
                </span>
              </Command.Item>
            ))}
          </Command.Group>

          {writing.length > 0 && (
            <Command.Group heading="글">
              {writing.map((w) => (
                <Command.Item
                  key={w.title}
                  value={`글 ${w.title}`}
                  onSelect={() => visit(w.href)}
                  className={itemClass}
                >
                  <span className="truncate">{w.title}</span>
                  <span className="shrink-0 text-[12px] text-faint">
                    {w.year}
                  </span>
                </Command.Item>
              ))}
            </Command.Group>
          )}

          <Command.Group heading="링크">
            <Command.Item
              value="이메일 주소 복사 email"
              onSelect={() =>
                run(() => {
                  navigator.clipboard
                    ?.writeText(profile.email)
                    .then(() => notify("이메일 주소를 복사했어요"))
                    .catch(() => {});
                })
              }
              className={itemClass}
            >
              이메일 주소 복사
              <span className="text-[12px] text-faint">{profile.email}</span>
            </Command.Item>
            {profile.socials
              .filter((s) => !s.href.startsWith("mailto:"))
              .map((s) => (
              <Command.Item
                key={s.label}
                value={`링크 ${s.label}`}
                onSelect={() => visit(s.href)}
                className={itemClass}
              >
                {s.label}
                <span className="text-[12px] text-faint">↗</span>
              </Command.Item>
            ))}
            {profile.resume && (
              <Command.Item
                value="이력서 resume"
                onSelect={() => visit(profile.resume!)}
                className={itemClass}
              >
                이력서 보기
                <span className="text-[12px] text-faint">PDF</span>
              </Command.Item>
            )}
          </Command.Group>

          <Command.Group heading="테마">
            {(
              [
                ["system", "시스템 설정 따르기"],
                ["light", "라이트 모드"],
                ["dark", "다크 모드"],
              ] as const
            ).map(([theme, label]) => (
              <Command.Item
                key={theme}
                value={`테마 ${label} ${theme}`}
                onSelect={() => run(() => applyTheme(theme))}
                className={itemClass}
              >
                {label}
              </Command.Item>
            ))}
          </Command.Group>
        </Command.List>
      </Command.Dialog>

      <div
        role="status"
        aria-live="polite"
        className={`fixed bottom-8 left-1/2 z-50 -translate-x-1/2 rounded-full bg-fg px-4 py-2 text-[13px] text-bg transition-all duration-300 ${
          toast ? "opacity-100" : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        {toast}
      </div>
    </>
  );
}
