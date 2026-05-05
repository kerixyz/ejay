"use client";

import { useState } from "react";

export default function CoachellaPage() {
  const [answer, setAnswer] = useState<"yes" | "no" | null>(null);

  if (answer === "yes") {
    return (
      <main className="min-h-screen bg-amber-950 flex flex-col items-center justify-center text-center px-6 gap-6">
        <p className="text-5xl">🤠</p>
        <h1 className="text-4xl font-bold text-amber-200 leading-tight">
          Partner secured.
        </h1>
        <p className="text-amber-400 text-base max-w-xs">
          Coachella 2027. You, me, the desert. No take-backs, cowgirl.
        </p>
      </main>
    );
  }

  if (answer === "no") {
    return (
      <main className="min-h-screen bg-amber-950 flex flex-col items-center justify-center text-center px-6 gap-6">
        <p className="text-5xl">🌵</p>
        <h1 className="text-4xl font-bold text-amber-200 leading-tight">
          A coward.
        </h1>
        <p className="text-amber-400 text-base max-w-xs">
          The desert remembers. Come back when you're ready.
        </p>
        <button
          onClick={() => setAnswer(null)}
          className="mt-4 text-amber-600 text-sm underline underline-offset-4"
        >
          reconsider
        </button>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-amber-950 flex items-center justify-center px-6 py-12">
      {/* Poster */}
      <div className="w-full max-w-sm bg-amber-100 text-amber-950 rounded-sm shadow-2xl px-8 py-10 flex flex-col items-center gap-5"
        style={{ fontFamily: "var(--font-dm-sans)" }}>

        {/* Border decoration */}
        <div className="w-full border-2 border-amber-800 rounded-sm px-6 py-8 flex flex-col items-center gap-5">

          <p className="text-xs tracking-[0.3em] uppercase text-amber-700">
            Coachella Valley — 2027
          </p>

          <h1 className="text-6xl font-black tracking-tight text-amber-950 leading-none">
            WANTED
          </h1>

          <div className="w-full h-px bg-amber-800/40" />

          <p className="text-sm tracking-widest uppercase text-amber-800">
            one coachella partner
          </p>

          {/* Photo placeholder */}
          <div className="w-32 h-32 rounded-sm bg-amber-200 border border-amber-400 flex items-center justify-center text-5xl">
            🤠
          </div>

          <div className="w-full h-px bg-amber-800/40" />

          <p className="text-center text-sm text-amber-900 leading-relaxed">
            Answers to the name <span className="font-semibold">Ejay</span>.
            Known accomplice of good vibes, late nights, and questionable snack choices.
            Last seen: somewhere fun.
          </p>

          <div className="w-full h-px bg-amber-800/40" />

          <p className="text-xs uppercase tracking-widest text-amber-700">Reward</p>
          <p className="text-center text-xs text-amber-800 leading-relaxed">
            The best weekend of 2027. Issued by ur clingy friend.
          </p>

          <div className="w-full h-px bg-amber-800/40" />

          {/* Buttons */}
          <div className="flex gap-4 w-full mt-2">
            <button
              onClick={() => setAnswer("yes")}
              className="flex-1 py-3 bg-amber-800 hover:bg-amber-700 text-amber-100 text-sm font-bold tracking-widest uppercase rounded-sm transition-colors"
            >
              I'm in
            </button>
            <button
              onClick={() => setAnswer("no")}
              className="flex-1 py-3 bg-transparent border border-amber-800 hover:bg-amber-200 text-amber-800 text-sm font-bold tracking-widest uppercase rounded-sm transition-colors"
            >
              I'm a coward
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}
