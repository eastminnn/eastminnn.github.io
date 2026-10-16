import type { Metadata } from "next";
import { profile } from "@/content";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.name} · ${profile.role}`,
  description: profile.tagline.replace(/[*{}]/g, ""),
};

const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
