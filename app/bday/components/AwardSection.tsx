"use client";

// AwardSection — reusable quiz-gated award reveal.
// LOCKED:   shows question + multiple-choice options.
// UNLOCKED: reveals a geometric certificate badge + polaroid photo grid.

import { useState } from "react";
import { AwardConfig } from "@/lib/config";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Props {
  config: AwardConfig;
  /** 1-based index used for the "Award 01" label. */
  index: number;
}

interface ConfettiPiece {
  id: number;
  x: number;       // left% within the burst container
  delay: number;   // animation-delay in seconds
  duration: number;
  color: string;
  size: number;
  isCircle: boolean;
}

// ─── Confetti helpers ─────────────────────────────────────────────────────────

const BURST_COLORS = ["#F5F0E8", "#C4714A", "#E8DFD0", "#1C1C1A", "#d4a574"];

function generateBurst(count: number): ConfettiPiece[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: 5 + Math.random() * 90,
    delay: Math.random() * 0.35,
    duration: 0.7 + Math.random() * 0.6,
    color: BURST_COLORS[Math.floor(Math.random() * BURST_COLORS.length)],
    size: 4 + Math.random() * 5,
    isCircle: Math.random() > 0.5,
  }));
}

// Mounts once, plays the animation, then sits invisible (forwards fill).
// Re-keyed by parent to replay on each correct answer (unlikely but safe).
function ConfettiBurst() {
  const [pieces] = useState<ConfettiPiece[]>(() => generateBurst(20));
  return (
    <div
      aria-hidden="true"
      className="absolute inset-x-0 top-0 h-28 overflow-hidden pointer-events-none z-10"
    >
      {pieces.map((p) => (
        <div
          key={p.id}
          className="confetti-piece absolute top-0"
          style={{
            left: `${p.x}%`,
            width: p.size,
            height: p.isCircle ? p.size : p.size * 1.7,
            borderRadius: p.isCircle ? "50%" : "2px",
            backgroundColor: p.color,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

// ─── Polaroid placeholder ─────────────────────────────────────────────────────
// data-slot is the hook for swapping in <Image /> later.
// e.g. query '[data-slot="smile-photo-1"]' and replace with:
//   <Image src="..." alt="..." fill className="object-cover" />

const ROTATIONS = [-2, 1.5, -1, 2.5, -0.5, 1.8];

function PolaroidSlot({ sectionId, index }: { sectionId: string; index: number }) {
  return (
    <div
      style={{ transform: `rotate(${ROTATIONS[index]}deg)` }}
      className="bg-white p-2.5 pb-8 shadow-[0_2px_14px_rgba(0,0,0,0.07)] transition-all duration-300 hover:[transform:rotate(0deg)_scale(1.03)] hover:z-10 relative"
    >
      {/* Photo placeholder — swap with <Image> */}
      <div
        data-slot={`${sectionId}-photo-${index + 1}`}
        className="bg-beige w-full aspect-square flex items-center justify-center"
        style={{ minHeight: "110px" }}
      >
        {/* To replace: <Image src="..." alt="..." fill className="object-cover" /> */}
        <span className="text-[10px] font-light text-warmblack/30 italic">
          photo
        </span>
      </div>
      {/* Caption area */}
      <div className="mt-3 text-center">
        <div className="h-px w-8 bg-beige mx-auto mb-2" />
        <p className="text-[10px] font-light text-warmblack/35 italic">
          caption here
        </p>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function AwardSection({ config, index }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const [unlocked, setUnlocked]   = useState(false);
  const [showWrong, setShowWrong] = useState(false);
  const [confettiKey, setConfettiKey] = useState(0);

  function handleSelect(optionIndex: number) {
    if (unlocked) return;
    setSelected(optionIndex);

    if (optionIndex === config.correctIndex) {
      setShowWrong(false);
      setConfettiKey((k) => k + 1); // triggers confetti burst
      // Small pause so the correct state registers before the reveal mounts.
      setTimeout(() => setUnlocked(true), 300);
    } else {
      setShowWrong(true);
    }
  }

  return (
    <section className="relative border-t border-beige py-16 px-6 md:px-12 lg:px-24">

      {/* Confetti burst — keyed so it replays if somehow triggered again */}
      {confettiKey > 0 && <ConfettiBurst key={confettiKey} />}

      <div className="max-w-3xl mx-auto">

        {/* Section header row */}
        <div className="flex items-center justify-between mb-10">
          <span className="text-[10px] tracking-[0.28em] text-terracotta uppercase font-light">
            Award {String(index).padStart(2, "0")}
          </span>
          <span className="text-base" aria-hidden="true">
            {config.emoji}
          </span>
        </div>

        {unlocked ? (
          /* ── UNLOCKED ─────────────────────────────────────────────── */
          <div className="animate-unlock">

            {/* Geometric certificate badge */}
            <div className="flex items-start gap-5 mb-12">
              {/* Thin-bordered emoji square */}
              <div className="w-14 h-14 border border-terracotta flex items-center justify-center flex-shrink-0">
                <span className="text-2xl" aria-hidden="true">
                  {config.emoji}
                </span>
              </div>
              {/* Certificate text */}
              <div className="pt-1">
                <p className="text-[10px] tracking-[0.25em] text-terracotta uppercase font-light mb-1">
                  Certificate of Excellence
                </p>
                <h2 className="text-xl font-light text-warmblack leading-snug">
                  {config.award}
                </h2>
                <p className="text-xs font-light text-warmblack/40 mt-1">
                  Awarded to: Ejay
                </p>
              </div>
            </div>

            {/* Polaroid photo grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
              {Array.from({ length: 6 }).map((_, i) => (
                <PolaroidSlot key={i} sectionId={config.id} index={i} />
              ))}
            </div>

          </div>
        ) : (
          /* ── LOCKED ───────────────────────────────────────────────── */
          <div>

            {/* Question */}
            <h2
              className="font-light text-warmblack mb-8 leading-snug"
              style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)" }}
            >
              {config.question}
            </h2>

            {/* Options */}
            <div className="space-y-2.5">
              {config.options.map((option, i) => {
                const isSelected = selected === i;
                const isCorrectSelected = isSelected && i === config.correctIndex;
                const isWrongSelected  = isSelected && i !== config.correctIndex;

                return (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    className={[
                      "w-full text-left px-5 py-3 border text-sm font-light transition-colors duration-200",
                      isCorrectSelected
                        ? "border-terracotta bg-terracotta/5 text-terracotta"
                        : isWrongSelected
                        ? "border-warmblack/20 text-warmblack/30"
                        : "border-beige hover:border-warmblack/30 text-warmblack",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {/* Radio indicator */}
                    <span className="mr-3 text-[11px] text-terracotta">
                      {isCorrectSelected ? "●" : isWrongSelected ? "×" : "○"}
                    </span>
                    {option}
                    {isCorrectSelected && (
                      <span className="ml-2 text-[11px] tracking-wide">✓</span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Wrong-answer message */}
            {showWrong && (
              <p className="mt-5 text-xs tracking-[0.15em] text-terracotta font-light animate-fadein">
                {config.wrongMessage}
              </p>
            )}

          </div>
        )}

      </div>
    </section>
  );
}
