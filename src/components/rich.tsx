import { Fragment } from "react";
import { ClaudeBuddy } from "./claude-buddy";

export function Rich({ text }: { text: string }) {
  return text.split(/(\*.+?\*|\{.+?\})/g).map((part, i) => {
    if (/^\*.+\*$/.test(part)) return <em key={i}>{part.slice(1, -1)}</em>;
    if (/^\{.+\}$/.test(part))
      return <ClaudeBuddy key={i}>{part.slice(1, -1)}</ClaudeBuddy>;
    return <Fragment key={i}>{part}</Fragment>;
  });
}
