"use client";

import { useState, useRef, useCallback } from "react";

const TERMS = [
  "i know you can't right now. i get it. no pressure.",
  "but like... hypothetically. in the future. sometime oct–feb maybe.",
  "hot springs. northern lights. good food. just saying.",
  "think about it 👉👈",
];

export default function IcelandPage() {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [said, setSaid] = useState<"yes" | null>(null);
  const noRef = useRef<HTMLButtonElement>(null);

  const runAway = useCallback(() => {
    const padding = 80;
    const maxX = window.innerWidth - padding * 2;
    const maxY = window.innerHeight - padding * 2;
    setNoPos({
      x: Math.random() * maxX - maxX / 2,
      y: Math.random() * maxY - maxY / 2,
    });
  }, []);

  if (said === "yes") {
    return (
      <main className="min-h-screen bg-sky-950 flex flex-col items-center justify-center text-white text-center px-6">
        <p className="text-6xl mb-4">🧊</p>
        <h1 className="text-4xl font-bold mb-3">Iceland it is.</h1>
        <p className="text-sky-300 text-lg">We're going. No take-backs. See you there, Ejay.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-sky-950 text-white flex flex-col items-center justify-between px-6 py-16">
      {/* Hero */}
      <div className="flex flex-col items-center text-center flex-1 justify-center gap-10">
        <div className="space-y-3">
          <p className="text-sky-400 uppercase tracking-widest text-sm font-semibold">
            A formal inquiry
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Wanna hang out in <br />
            <span className="text-sky-300">Iceland</span> with me? <br />
            👉👈
          </h1>
        </div>

        {/* Buttons */}
        <div className="relative flex gap-6 items-center justify-center mt-4 h-24">
          {/* YES */}
          <button
            onClick={() => setSaid("yes")}
            className="px-10 py-4 rounded-2xl bg-sky-400 hover:bg-sky-300 text-sky-950 font-bold text-lg transition-colors shadow-lg"
          >
            Yes 🥰
          </button>

          {/* NO — floats away */}
          <button
            ref={noRef}
            onMouseEnter={runAway}
            onTouchStart={runAway}
            style={{
              transform: `translate(${noPos.x}px, ${noPos.y}px)`,
              transition: "transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
            className="px-10 py-4 rounded-2xl bg-white/10 hover:bg-white/10 text-white font-bold text-lg shadow-lg cursor-pointer select-none"
          >
            No
          </button>
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="w-full max-w-2xl mt-16 border-t border-white/10 pt-8">
        <p className="text-white/30 text-xs uppercase tracking-widest mb-4 text-center">
          Terms &amp; Conditions
        </p>
        <ol className="space-y-2">
          {TERMS.map((term, i) => (
            <li key={i} className="text-white/40 text-xs leading-relaxed">
              <span className="text-white/20 mr-2">{i + 1}.</span>
              {term}
            </li>
          ))}
        </ol>
        <p className="text-white/20 text-xs text-center mt-6">
          © {new Date().getFullYear()} Iceland Trip Co. All rights reserved. By existing on this page you have already agreed.
        </p>
      </div>
    </main>
  );
}
