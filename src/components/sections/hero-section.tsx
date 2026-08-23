"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PhoneMockup } from "@/components/shared/phone-mockup";
import { DownloadModal } from "@/components/shared/download-modal";
import {
  Download,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Users,
  PieChart,
  CheckCircle,
  Smartphone,
} from "lucide-react";

export function HeroSection() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-36 lg:pb-32">
      {/* Background Decorative Gradients & Grid Glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Top Center Glow */}
        <div className="absolute left-1/2 -top-40 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-primary-600/20 via-emerald-500/15 to-indigo-500/20 blur-[130px]" />
        
        {/* Side Accents */}
        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-[100px]" />
        <div className="absolute left-0 bottom-10 h-[350px] w-[350px] rounded-full bg-indigo-500/10 blur-[100px]" />

        {/* Subtle SVG Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Top Announcement Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-xs font-semibold text-primary-700 dark:text-primary-300 shadow-sm backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-primary-500 animate-ping" />
              <Sparkles className="h-3.5 w-3.5 text-primary-600 dark:text-primary-400" />
              <span>স্মার্ট ডেইলি খরচ ও মেস হিসাবের সহজ সমাধান</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              টাকা কোথায় যাচ্ছে? <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-primary-600 via-indigo-600 to-emerald-500 bg-clip-text text-transparent">
                KotoGelo
              </span>{" "}
              রাখবে নিখুঁত হিসাব!
            </h1>

            {/* Subheading / Value Proposition */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed">
              দৈনন্দিন পার্সোনাল খরচ ট্র্যাক করুন, বন্ধুদের সাথে মেস বা ট্যুরের বিল এক ক্লিকে ভাগ করুন, আর মাসের শেষে কোথায় কত গেলো তার লাইভ চার্ট দেখুন। সম্পূর্ণ ফ্রি ও অফলাইন-ফার্স্ট।
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button
                onClick={() => setIsDownloadModalOpen(true)}
                variant="gradient"
                size="lg"
                className="w-full sm:w-auto gap-2.5 text-base shadow-xl shadow-primary-600/30"
              >
                <Download className="h-5 w-5" />
                <span>Download App Free</span>
              </Button>

              <a
                href="#features"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 font-semibold text-sm backdrop-blur-sm transition shadow-sm"
              >
                <span>এক্সপ্লোর ফিচারসমূহ</span>
                <ArrowRight className="h-4 w-4 text-slate-400" />
              </a>
            </div>

            {/* Quick Feature Pills */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-xl text-left">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60">
                <div className="h-7 w-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">100% Private</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">Offline-first storage</p>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60">
                <div className="h-7 w-7 rounded-lg bg-primary-500/10 text-primary-600 dark:text-primary-400 flex items-center justify-center shrink-0">
                  <Users className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">Mess & Group</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">Easy bill splitting</p>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center gap-2 p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60">
                <div className="h-7 w-7 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                  <Zap className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">Instant Log</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">&lt; 2s Quick Entry</p>
                </div>
              </div>
            </div>

            {/* Community & Rating Proof */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <div className="flex -space-x-1.5">
                  {["#6366F1", "#10B981", "#F59E0B", "#EC4899"].map((color, idx) => (
                    <div
                      key={idx}
                      className="h-6 w-6 rounded-full border-2 border-white dark:border-slate-900 flex items-center justify-center text-[9px] font-bold text-white shadow-xs"
                      style={{ backgroundColor: color }}
                    >
                      {String.fromCharCode(65 + idx)}
                    </div>
                  ))}
                </div>
                <span className="font-semibold text-slate-700 dark:text-slate-200 ml-1">১০০০+ ব্যবহারকারী</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold">
                <span>★★★★★</span>
                <span className="text-slate-700 dark:text-slate-200 ml-0.5">4.9/5 Rating</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-fidelity Smartphone App Mockup */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>

        </div>
      </div>

      {/* Download Modal */}
      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />
    </section>
  );
}
