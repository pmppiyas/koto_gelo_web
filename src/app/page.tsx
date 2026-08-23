import React from "react";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { AdvantagesSection } from "@/components/sections/advantages-section";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  return (
    <div className="relative flex flex-col">
      {/* 1. High Impact Hero Section */}
      <HeroSection />

      {/* 2. Stats Highlight Bar */}
      <section className="relative z-10 py-10 border-y border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {siteConfig.stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-2">
                <span className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-primary-600 to-emerald-600 bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Features Section */}
      <FeaturesSection />

      {/* 4. Advantages & Comparison Section */}
      <AdvantagesSection />

      {/* Upcoming Section Anchors */}
      <div id="how-it-works" className="scroll-mt-24" />
      <div id="technologies" className="scroll-mt-24" />
      <div id="download" className="scroll-mt-24" />
    </div>
  );
}
