import type { Metadata } from "next";
import { profile } from "@/content";
import "./globals.css";

const description = profile.tagline.replace(/[*{}]/g, "");

export const metadata: Metadata = {
  metadataBase: new URL("https://eastminnn.github.io"),
  title: profile.name,
  description,
  openGraph: {
    title: `${profile.name} · ${profile.role}`,
    description,
    url: "/",
    siteName: profile.name,
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} · ${profile.role}`,
    description,
  },
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
