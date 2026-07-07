"use client";

import { useState, useEffect } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Don't run on touch devices — there is no cursor there,
    // and the glow was getting stuck permanently in the top-left corner.
    const isTouchDevice =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;

    if (isTouchDevice) return;

    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 w-40 h-40 rounded-full hidden md:block"
      style={{
        left: position.x - 80,
        top: position.y - 80,
        background:
          "radial-gradient(circle, rgba(34,211,238,0.35), transparent 70%)",
        filter: "blur(20px)",
      }}
    />
  );
}