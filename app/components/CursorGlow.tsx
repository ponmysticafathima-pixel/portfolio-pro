"use client";

import { useState, useEffect } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50 w-40 h-40 rounded-full"
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