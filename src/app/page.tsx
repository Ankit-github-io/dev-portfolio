'use client';
import Hero from "@/components/Hero";
import HomeContent from "@/components/HomeContent";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <Hero />
      <HomeContent />
    </main>
  );
}
