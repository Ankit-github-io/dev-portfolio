'use client';
import Hero from "@/components/Hero";
import HomeContent from "@/components/HomeContent";

/**
 * Home Page Component
 * 
 * Complete landing page with hero and content sections
 */
export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Home Content with Animations */}
      <HomeContent />
    </main>
  );
}
