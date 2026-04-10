"use client";

import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  swayDuration: number;
  swayDelay: number;
  size: number;
}

export default function SakuraPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    setPetals(
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        left: 3 + Math.random() * 94,
        delay: Math.random() * 10,
        duration: 7 + Math.random() * 6,
        swayDuration: 2.5 + Math.random() * 2,
        swayDelay: Math.random() * 3,
        size: 12 + Math.random() * 10,
      }))
    );
  }, []);

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {petals.map((p) => (
        <span
          key={p.id}
          className="sakura-petal select-none"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            animationDuration: `${p.duration}s, ${p.swayDuration}s`,
            animationDelay: `${p.delay}s, ${p.swayDelay}s`,
          }}
        >
          🌸
        </span>
      ))}
    </div>
  );
}
