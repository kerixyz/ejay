"use client";

// HiddenObject — a small terracotta-bordered emoji stamp.
// Scattered around the page at absolute positions supplied by the parent.
// On click: wiggle keyframe → parent removes it from render → counter increments.

import { useState } from "react";

interface Props {
  emoji: string;
  /** Absolute-position style — supply top/left or top/right from the parent. */
  style: React.CSSProperties;
  onFind: () => void;
}

export default function HiddenObject({ emoji, style, onFind }: Props) {
  const [wiggling, setWiggling] = useState(false);

  function handleClick() {
    if (wiggling) return;
    setWiggling(true);
    // Let the wiggle animation play, then tell the parent to remove this item.
    setTimeout(() => onFind(), 320);
  }

  return (
    <button
      onClick={handleClick}
      style={style}
      aria-label={`hidden item ${emoji}`}
      className={[
        // Stamp appearance
        "absolute pointer-events-auto",
        "border border-terracotta/30 bg-softwhite/70",
        "text-sm leading-none p-1.5",
        "opacity-50 hover:opacity-90 transition-opacity duration-200",
        "cursor-pointer",
        // Wiggle on found
        wiggling ? "animate-wiggle" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {emoji}
    </button>
  );
}
