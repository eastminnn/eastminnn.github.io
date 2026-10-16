import { Fragment } from "react";
import { ClaudeBuddy } from "./claude-buddy";

// "*강조*" 표기를 <em>으로 바꿔 굵고 밝게 보여준다.
// "{강조}"는 강조에 더해, 마우스를 올리면 캐릭터가 튀어나온다.
export function Rich({ text }: { text: string }) {
  return text.split(/(\*.+?\*|\{.+?\})/g).map((part, i) => {
    if (/^\*.+\*$/.test(part)) return <em key={i}>{part.slice(1, -1)}</em>;
    if (/^\{.+\}$/.test(part))
      return <ClaudeBuddy key={i}>{part.slice(1, -1)}</ClaudeBuddy>;
    return <Fragment key={i}>{part}</Fragment>;
  });
}
