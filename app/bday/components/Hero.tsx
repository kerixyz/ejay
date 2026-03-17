// Hero — magazine-cover opener.
// Large editorial type, thin rules, sparse terracotta accents.

export default function Hero() {
  return (
    <section className="px-6 md:px-12 lg:px-24 pt-16 pb-14 border-b border-beige">
      <div className="max-w-3xl mx-auto">

        {/* Top rule with centred stamp */}
        <div className="flex items-center gap-5 mb-14">
          <div className="h-px flex-1 bg-beige" />
          <span className="text-[10px] tracking-[0.3em] text-terracotta uppercase font-light">
            a birthday collection
          </span>
          <div className="h-px flex-1 bg-beige" />
        </div>

        {/* Kicker */}
        <p className="text-[11px] tracking-[0.28em] text-terracotta uppercase font-light mb-3">
          presented in her honour
        </p>

        {/* Name — the main event */}
        <h1
          className="font-light text-warmblack leading-none mb-4"
          style={{ fontSize: "clamp(4rem, 14vw, 8rem)", letterSpacing: "-0.02em" }}
        >
          Ejay
        </h1>

        {/* Descriptor line */}
        <p className="text-base font-light text-warmblack/50 mb-8 max-w-md leading-relaxed">
          Certificates, memories &amp; accolades — curated with love and
          moderate editorial restraint.
        </p>

        {/* Terracotta lemon stamp */}
        <div
          className="inline-flex items-center justify-center w-8 h-8 border border-terracotta/50 text-sm mb-10"
          aria-hidden="true"
        >
          🍋
        </div>

        {/* Bottom rule */}
        <div className="h-px bg-beige" />

        {/* Footnote */}
        <p className="mt-4 text-[10px] tracking-[0.2em] text-warmblack/25 font-light uppercase">
          scroll to unlock awards · tap to discover hidden items
        </p>

      </div>
    </section>
  );
}
