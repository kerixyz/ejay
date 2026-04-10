"use client";

import { useState } from "react";
import Image from "next/image";
import { AwardConfig, PhotoSlot } from "@/lib/config";

interface Props {
  config: AwardConfig;
  index: number;
}

interface ConfettiPiece {
  id: number;
  x: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
  isCircle: boolean;
}

const BURST_COLORS = ["#FBDDE2", "#C5283D", "#EDE8DF", "#1A1A1A", "#E8A0AA", "#6B9B6B"];

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

function ConfettiBurst() {
  const [pieces] = useState<ConfettiPiece[]>(() => generateBurst(24));
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

// ─── Petal divider ────────────────────────────────────────────────────────────

function PetalDivider() {
  return (
    <div className="flex items-center gap-3 my-10">
      <div className="h-px flex-1 bg-petal/30" />
      <span className="text-petal/60 text-xs">✿</span>
      <span className="text-petal text-xs">🌸</span>
      <span className="text-petal/60 text-xs">✿</span>
      <div className="h-px flex-1 bg-petal/30" />
    </div>
  );
}

// ─── Polaroid ─────────────────────────────────────────────────────────────────

const ROTATIONS = [-2, 1.5, -1, 2.5, -0.5, 1.8];

function PolaroidSlot({ photo, index }: { photo?: PhotoSlot; index: number }) {
  return (
    <div
      style={{ transform: `rotate(${ROTATIONS[index]}deg)` }}
      className="bg-white p-2.5 pb-8 shadow-[0_3px_16px_rgba(197,40,61,0.08)] transition-all duration-300 hover:[transform:rotate(0deg)_scale(1.04)] hover:z-10 relative"
    >
      <div className="relative w-full aspect-square overflow-hidden bg-sakura" style={{ minHeight: "110px" }}>
        {photo ? (
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 45vw, 30vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[11px] font-normal text-petal/60 italic">photo</span>
          </div>
        )}
      </div>
      <div className="mt-3 text-center">
        <div className="h-px w-8 bg-petal/30 mx-auto mb-2" />
        <p className="text-[11px] font-normal text-warmblack/35 italic">
          {photo?.caption || ""}
        </p>
      </div>
    </div>
  );
}

// ─── Unlocked reveal ──────────────────────────────────────────────────────────

function UnlockedContent({ config }: { config: AwardConfig }) {
  return (
    <div className="animate-unlock">
      {/* Ornate certificate badge */}
      <div className="border border-crimson/20 bg-crimson/[0.03] p-5 mb-10">
        <div className="border border-crimson/10 p-4">
          <div className="flex items-start gap-5">
            {/* Double-bordered emoji seal */}
            <div className="relative flex-shrink-0">
              <div className="w-16 h-16 border-2 border-crimson/40 flex items-center justify-center bg-softwhite">
                <span className="text-2xl" aria-hidden="true">{config.emoji}</span>
              </div>
              <div className="absolute -inset-1 border border-crimson/15 pointer-events-none" />
            </div>
            <div className="pt-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-petal text-[10px]">✿</span>
                <p className="text-[11px] tracking-[0.22em] text-crimson uppercase font-semibold">
                  Certificate of Excellence
                </p>
              </div>
              <h2 className="text-xl font-bold text-warmblack leading-snug">{config.award}</h2>
              <p className="text-sm font-normal text-warmblack/45 mt-1.5">
                Awarded to: <span className="font-semibold text-crimson">Ejay</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Polaroid grid — always 6 slots, fills with placeholders if photos not yet added */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
        {Array.from({ length: 6 }).map((_, i) => (
          <PolaroidSlot key={i} photo={config.photos?.[i]} index={i} />
        ))}
      </div>
    </div>
  );
}

// ─── Quiz variant ─────────────────────────────────────────────────────────────

function QuizVariant({ config, onUnlock }: { config: AwardConfig; onUnlock: () => void }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [showWrong, setShowWrong] = useState(false);

  function handleSelect(i: number) {
    setSelected(i);
    if (i === config.correctIndex) {
      setShowWrong(false);
      setTimeout(onUnlock, 300);
    } else {
      setShowWrong(true);
    }
  }

  return (
    <div>
      <h2
        className="font-bold text-warmblack mb-8 leading-snug"
        style={{ fontSize: "clamp(1.15rem, 4vw, 1.4rem)" }}
      >
        {config.question}
      </h2>
      <div className="space-y-3">
        {config.options!.map((option, i) => {
          const isSelected = selected === i;
          const isCorrect  = isSelected && i === config.correctIndex;
          const isWrong    = isSelected && i !== config.correctIndex;
          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              className={[
                "w-full text-left px-5 py-4 border text-base font-normal transition-all duration-200 active:scale-[0.99]",
                isCorrect
                  ? "border-crimson bg-crimson/5 text-crimson"
                  : isWrong
                  ? "border-warmblack/10 text-warmblack/30"
                  : "border-beige hover:border-petal hover:bg-sakura/30 text-warmblack",
              ].join(" ")}
            >
              <span className={`mr-3 text-sm ${isCorrect ? "text-crimson" : "text-petal"}`}>
                {isCorrect ? "●" : isWrong ? "×" : "○"}
              </span>
              {option}
              {isCorrect && <span className="ml-2 text-sm text-crimson">✓</span>}
            </button>
          );
        })}
      </div>
      {showWrong && (
        <p className="mt-5 text-sm tracking-[0.12em] text-crimson font-semibold animate-fadein">
          {config.wrongMessage}
        </p>
      )}
    </div>
  );
}

// ─── Checklist variant ────────────────────────────────────────────────────────

function ChecklistVariant({ config, onUnlock }: { config: AwardConfig; onUnlock: () => void }) {
  const total = config.checklistItems!.length;
  const [checked, setChecked] = useState<Set<number>>(new Set());

  function toggle(i: number) {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(i)) {
        next.delete(i);
      } else {
        next.add(i);
        if (next.size === total) {
          setTimeout(onUnlock, 400);
        }
      }
      return next;
    });
  }

  return (
    <div>
      <p
        className="font-bold text-warmblack mb-8 leading-snug"
        style={{ fontSize: "clamp(1.15rem, 4vw, 1.4rem)" }}
      >
        {config.checklistPrompt}
      </p>
      <div className="space-y-3">
        {config.checklistItems!.map((item, i) => {
          const isChecked = checked.has(i);
          return (
            <button
              key={i}
              onClick={() => toggle(i)}
              className={[
                "w-full text-left px-5 py-4 border text-base font-normal transition-all duration-200 active:scale-[0.99]",
                isChecked
                  ? "border-crimson bg-crimson/5 text-crimson"
                  : "border-beige hover:border-petal hover:bg-sakura/30 text-warmblack",
              ].join(" ")}
            >
              <span className={`mr-3 text-sm ${isChecked ? "text-crimson" : "text-petal"}`}>
                {isChecked ? "■" : "□"}
              </span>
              {item}
              {isChecked && <span className="ml-2 text-sm text-crimson">✓</span>}
            </button>
          );
        })}
      </div>
      {checked.size > 0 && checked.size < total && (
        <p className="mt-5 text-sm tracking-[0.12em] text-petal font-semibold animate-fadein">
          {checked.size} / {total} — keep going 🌸
        </p>
      )}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

// Japanese section number characters for decorative use
const JP_NUMBERS = ["一", "二", "三", "四", "五"];

export default function AwardSection({ config, index }: Props) {
  const [unlocked, setUnlocked]       = useState(false);
  const [confettiKey, setConfettiKey] = useState(0);

  function handleUnlock() {
    setConfettiKey((k) => k + 1);
    setUnlocked(true);
  }

  return (
    <section className="relative border-t-2 border-sakura py-12 md:py-16 px-6 md:px-12 lg:px-24 bg-softwhite">
      {confettiKey > 0 && <ConfettiBurst key={confettiKey} />}

      <div className="max-w-3xl mx-auto">

        {/* Section header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <span
              className="text-2xl font-bold text-sakura leading-none select-none"
              aria-hidden="true"
            >
              {JP_NUMBERS[index - 1]}
            </span>
            <div className="h-5 w-px bg-petal/30" />
            <span className="text-[11px] tracking-[0.25em] text-crimson uppercase font-semibold">
              Award {String(index).padStart(2, "0")}
            </span>
          </div>
          <span className="text-xl" aria-hidden="true">{config.emoji}</span>
        </div>

        {unlocked ? (
          <UnlockedContent config={config} />
        ) : config.type === "checklist" ? (
          <ChecklistVariant config={config} onUnlock={handleUnlock} />
        ) : (
          <QuizVariant config={config} onUnlock={handleUnlock} />
        )}

        {!unlocked && <PetalDivider />}
      </div>
    </section>
  );
}
