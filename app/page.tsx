import Link from "next/link";

const pages = [
  { href: "/bday", label: "happy birthday" },
  { href: "/iceland", label: "iceland trip" },
  { href: "/coachella", label: "coachella 2027" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-softwhite flex flex-col items-center justify-center gap-10">
      <div className="text-center">
        <p className="text-xs tracking-widest uppercase text-petal mb-2">pages for ejay</p>
        <p className="text-zinc-400 text-xs">from ur clingy friend</p>
      </div>

      <nav className="flex flex-col items-center gap-3">
        {pages.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-warmblack text-sm tracking-wide hover:text-crimson transition-colors duration-200"
          >
            {label}
          </Link>
        ))}
      </nav>
    </main>
  );
}
