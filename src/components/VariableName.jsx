import { useEffect, useRef } from "react";

export default function VariableName({ text }) {
  const wrapRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const letters = Array.from(wrap.querySelectorAll("[data-letter]"));
    let frame = 0;

    const onMove = (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        for (const el of letters) {
          const box = el.getBoundingClientRect();
          const dx = event.clientX - (box.left + box.width / 2);
          const dy = event.clientY - (box.top + box.height / 2);
          const closeness = Math.max(0, 1 - Math.hypot(dx, dy) / 240);
          const weight = Math.round(300 + closeness * 500);
          const width = Math.round(100 - closeness * 30);
          el.style.fontVariationSettings = `"wght" ${weight}, "wdth" ${width}`;
        }
      });
    };

    const reset = () => {
      cancelAnimationFrame(frame);
      for (const el of letters) el.style.fontVariationSettings = "";
    };

    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerleave", reset);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", reset);
    };
  }, [text]);

  return (
    <h1 className="variable-name" ref={wrapRef} aria-label={text}>
      {text.split(" ").map((word, w) => (
        <span className="variable-name__word" aria-hidden="true" key={w}>
          {word.split("").map((char, i) => (
            <span data-letter className="variable-name__letter" key={i}>
              {char}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}
