// app/components/CursorRipple.tsx
"use client";

import { useEffect } from "react";

export default function CursorRipple() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleMove = (e: MouseEvent) => {
      const colors = ["cream", "coffee", "cocoa"];

      colors.forEach((type) => {
        const ripple = document.createElement("div");
        ripple.className = `cursor-ripple ripple-${type}`;
        ripple.style.left = `${e.clientX}px`;
        ripple.style.top = `${e.clientY}px`;
        document.body.appendChild(ripple);

        setTimeout(() => {
          ripple.remove();
        }, 700);
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return null;
}