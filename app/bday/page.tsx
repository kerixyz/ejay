"use client";

// /bday — main page.
// Composes Hero, five quiz-gated AwardSections, and Footer.
// Manages the global hidden-object found-state and renders all HiddenObjects.

import { useState } from "react";
import Hero from "./components/Hero";
import AwardSection from "./components/AwardSection";
import HiddenObject from "./components/HiddenObject";
import Footer from "./components/Footer";
import { QUIZ_CONFIG, HIDDEN_ITEMS } from "@/lib/config";

// ─── Hidden item positions ────────────────────────────────────────────────────
// Absolute positions within the page wrapper.
// Mix of left-edge, right-edge, and one cheeky mid-page placement.

const ITEM_POSITIONS: React.CSSProperties[] = [
  { top: "7%",  left:  "1%"   },
  { top: "15%", right: "1%"   },
  { top: "27%", left:  "0.5%" },
  { top: "38%", right: "0.5%" },
  { top: "50%", left:  "46%"  }, // hidden in the middle of the page
  { top: "61%", right: "1%"   },
  { top: "70%", left:  "1.5%" },
  { top: "79%", right: "2%"   },
  { top: "87%", left:  "6%"   },
  { top: "94%", right: "5%"   },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BdayPage() {
  const [found, setFound]         = useState<Set<number>>(new Set());
  const [showToast, setShowToast] = useState(false);

  function handleFind(id: number) {
    setFound((prev) => {
      const next = new Set(prev);
      next.add(id);
      if (next.size === HIDDEN_ITEMS.length) {
        setShowToast(true);
        // Auto-dismiss after 6 s
        setTimeout(() => setShowToast(false), 6000);
      }
      return next;
    });
  }

  return (
    // position:relative so hidden items can use absolute positioning against the full page height
    <main className="bg-softwhite text-warmblack min-h-screen relative overflow-x-hidden">

      {/* ── Fixed found-counter pill ─────────────────────────────────────────── */}
      <div className="fixed top-4 right-4 z-50">
        <div className="border border-beige bg-softwhite px-3 py-1.5 text-[10px] tracking-[0.18em] text-warmblack/40 font-light uppercase">
          {found.size} / {HIDDEN_ITEMS.length} found
        </div>
      </div>

      {/* ── Hidden objects layer ──────────────────────────────────────────────── */}
      {/* pointer-events-none on wrapper; each button restores pointer-events */}
      <div className="absolute inset-0 pointer-events-none z-40">
        {HIDDEN_ITEMS.map((item, i) => {
          if (found.has(item.id)) return null;
          return (
            <HiddenObject
              key={item.id}
              emoji={item.emoji}
              style={ITEM_POSITIONS[i]}
              onFind={() => handleFind(item.id)}
            />
          );
        })}
      </div>

      {/* ── Page content ─────────────────────────────────────────────────────── */}
      <Hero />

      {QUIZ_CONFIG.map((config, idx) => (
        <AwardSection key={config.id} config={config} index={idx + 1} />
      ))}

      <Footer />

      {/* ── All-found toast ───────────────────────────────────────────────────── */}
      {showToast && (
        <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center pb-6 pointer-events-none animate-slideup">
          <div className="bg-warmblack text-softwhite px-6 py-3 text-[11px] tracking-[0.22em] font-light uppercase">
            all 10 found — well done. ejay would be proud. ☀️
          </div>
        </div>
      )}

    </main>
  );
}
