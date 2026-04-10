"use client";

import Hero from "./components/Hero";
import AwardSection from "./components/AwardSection";
import Footer from "./components/Footer";
import { QUIZ_CONFIG } from "@/lib/config";

export default function BdayPage() {
  return (
    <main className="bg-softwhite text-warmblack min-h-screen overflow-x-hidden">
      <Hero />
      {QUIZ_CONFIG.map((config, idx) => (
        <AwardSection key={config.id} config={config} index={idx + 1} />
      ))}
      <Footer />
    </main>
  );
}
