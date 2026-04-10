"use client";

import SakuraPetals from "./SakuraPetals";

export default function Hero() {
  return (
    <section className="relative px-6 md:px-12 lg:px-24 pt-16 pb-14 border-b-2 border-sakura overflow-hidden bg-softwhite">

      {/* Falling petals */}
      <SakuraPetals />

      {/* "桜" kanji watermark */}
      <div
        className="absolute right-4 top-4 leading-none select-none pointer-events-none font-bold text-sakura"
        style={{ fontSize: "clamp(8rem, 30vw, 18rem)", opacity: 0.18 }}
        aria-hidden="true"
      >
        桜
      </div>

      <div className="max-w-3xl mx-auto relative z-10">

        {/* Top ornamental rule */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-petal/40" />
          <div className="flex items-center gap-2">
            <span className="text-petal text-xs">✿</span>
            <span className="text-[11px] tracking-[0.3em] text-crimson uppercase font-semibold">
              a birthday collection
            </span>
            <span className="text-petal text-xs">✿</span>
          </div>
          <div className="h-px flex-1 bg-petal/40" />
        </div>

        {/* Kicker */}
        <p className="text-xs tracking-[0.25em] text-sage uppercase font-semibold mb-3">
          presented in her honour
        </p>

        {/* Name */}
        <h1
          className="font-bold text-warmblack leading-none mb-5"
          style={{ fontSize: "clamp(3.5rem, 14vw, 8rem)", letterSpacing: "-0.02em" }}
        >
          Ejay
        </h1>

        {/* Descriptor */}
        <p className="text-base font-normal text-warmblack/60 mb-8 max-w-md leading-relaxed">
          Certificates, memories &amp; accolades — curated with love and
          moderate editorial restraint.
        </p>

        {/* Kendo stamp badge */}
        <div className="inline-flex items-center gap-3 border border-crimson/30 bg-crimson/5 px-4 py-2.5 mb-10">
          <span className="text-lg">⚔️</span>
          <div className="h-4 w-px bg-crimson/20" />
          <span className="text-[11px] tracking-[0.22em] text-crimson font-semibold uppercase">
            道場 · Dojo
          </span>
          <div className="h-4 w-px bg-crimson/20" />
          <span className="text-lg">🌸</span>
        </div>

        {/* Bottom rule */}
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-petal/40" />
          <span className="text-petal text-[10px]">✿</span>
          <div className="h-px flex-1 bg-petal/40" />
        </div>

        <p className="mt-4 text-[11px] tracking-[0.18em] text-warmblack/30 font-medium uppercase">
          scroll to unlock awards
        </p>

      </div>
    </section>
  );
}
