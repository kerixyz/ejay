export default function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-16 border-t-2 border-sakura bg-softwhite">
      <div className="max-w-3xl mx-auto text-center">

        {/* Ornamental top rule */}
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1 bg-petal/30" />
          <span className="text-petal/60 text-xs">✿</span>
          <span className="text-petal text-sm">🌸</span>
          <span className="text-petal/60 text-xs">✿</span>
          <div className="h-px flex-1 bg-petal/30" />
        </div>

        {/* Kendo / sakura badge */}
        <div className="inline-flex items-center gap-3 border border-crimson/25 bg-crimson/5 px-5 py-2.5 mb-8">
          <span className="text-base">⚔️</span>
          <span className="text-[10px] tracking-[0.28em] text-crimson uppercase font-semibold">
            桜 · Sakura · 桜
          </span>
          <span className="text-base">🌸</span>
        </div>

        {/* Big birthday message */}
        <p
          className="font-bold text-warmblack leading-tight mb-4"
          style={{ fontSize: "clamp(2rem, 9vw, 5rem)", letterSpacing: "-0.02em" }}
        >
          happy birthday,
        </p>
        <p
          className="font-bold text-crimson leading-tight mb-8"
          style={{ fontSize: "clamp(2.5rem, 11vw, 6rem)", letterSpacing: "-0.02em" }}
        >
          Ejay.
        </p>

        {/* Petal scatter */}
        <div className="flex items-center justify-center gap-3 text-lg">
          <span>🌸</span>
          <span className="text-petal/60 text-sm">✿</span>
          <span>⚔️</span>
          <span className="text-petal/60 text-sm">✿</span>
          <span>🌸</span>
        </div>

        {/* Bottom rule */}
        <div className="flex items-center gap-3 mt-10">
          <div className="h-px flex-1 bg-petal/30" />
          <span className="text-[10px] tracking-[0.2em] text-warmblack/25 font-medium uppercase">
            道 · the way
          </span>
          <div className="h-px flex-1 bg-petal/30" />
        </div>

      </div>
    </footer>
  );
}
