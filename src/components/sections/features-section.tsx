"use client";

import React, { useState } from "react";
import {
  Wallet,
  Users,
  PieChart,
  WifiOff,
  BellRing,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  TrendingDown,
  Receipt,
  Layers,
  Smartphone,
  Share2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function FeaturesSection() {
  const [activeCategory, setActiveCategory] = useState<"all" | "personal" | "group" | "analytics">("all");

  const features = [
    {
      id: "quick-log",
      category: "personal",
      title: "ইনস্ট্যান্ট ডেইলি খরচ ট্র্যাকিং",
      subtitle: "Instant 2-Tap Expense Logging",
      description:
        "বাজারের খরচ, রিকশাভাড়া বা রেস্টুরেন্টের বিল—মাত্র ২ সেকেন্ডে ক্যাটাগরি ও পেমেন্ট মেথড (ক্যাশ, বিকাশ, নগদ, কার্ড) সহ এন্ট্রি করুন।",
      icon: Wallet,
      gradient: "from-primary-600 to-indigo-600",
      accentBg: "bg-primary-500/10 text-primary-600 dark:text-primary-400",
      badge: "Fast & Effortless",
      highlights: ["কাস্টম ক্যাটাগরি তৈরি", "বিকাশ/নগদ/ক্যাশ ট্যাগিং", "ডেইলি ও মান্থলি সামারি"],
      preview: {
        type: "expense-card",
        title: "Grocery Shopping",
        amount: "- ৳ ২,৪৫০",
        tag: "Bazar • bKash",
        time: "Just now",
      },
    },
    {
      id: "mess-split",
      category: "group",
      title: "মেস ও ট্যুর বিল স্প্লিট",
      subtitle: "Zero-Confusion Group Splitting",
      description:
        "ব্যাচেলর মেস, বন্ধুদের সাথে সাজেক/কক্সবাজার ট্যুর বা অফিসের পার্টি—কার কত মিল খরচ বা কে কাকে কত টাকা দেবে, হিসাব হবে অটোমেটিক।",
      icon: Users,
      gradient: "from-emerald-600 to-teal-600",
      accentBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
      badge: "Most Popular",
      highlights: ["ইকুয়াল / মিল রেট ভিত্তিক ভাগ", "কে কার কাছে পায় লাইভ হিসাব", "১-ক্লিকে ডেট সেটেলমেন্ট"],
      preview: {
        type: "group-card",
        groupName: "Cox's Bazar Tour '26",
        status: "You are owed ৳ ৩,৪০০",
        members: "5 Active Members",
      },
    },
    {
      id: "analytics",
      category: "analytics",
      title: "স্মার্ট ভিজ্যুয়াল চার্ট ও অ্যানালিটিক্স",
      subtitle: "Visual Spending Insights & Reports",
      description:
        "পাই চার্ট ও ট্রেন্ড গ্রাফ দিয়ে নিমেষেই দেখুন আপনার আয়ের কত শতাংশ কোথায় খরচ হচ্ছে। বাজেট নিয়ন্ত্রণে রাখুন সহজে।",
      icon: PieChart,
      gradient: "from-amber-600 to-orange-600",
      accentBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
      badge: "Deep Insights",
      highlights: ["ক্যাটাগরি-ভিত্তিক পাই চার্ট", "মাসিক খরচ বৃদ্ধির তুলনা", "PDF ও CSV এক্সপোর্ট"],
      preview: {
        type: "chart-card",
        title: "Food & Dinings",
        percentage: "38% of Total",
        trend: "↓ 4% lower than last month",
      },
    },
    {
      id: "offline-sync",
      category: "personal",
      title: "১০০% অফলাইন-ফার্স্ট প্রযুক্তি",
      subtitle: "Works Without Internet & Auto Syncs",
      description:
        "ইন্টারনেট কানেকশন নেই? কোনো সমস্যা নেই! অফলাইনে নির্বিঘ্নে সব হিসাব তুলুন, ডাটা কানেক্ট হলেই ক্লাউডে রিয়েল-টাইমে সিঙ্ক হয়ে যাবে।",
      icon: WifiOff,
      gradient: "from-blue-600 to-cyan-600",
      accentBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
      badge: "Ultra Reliable",
      highlights: ["জিরো নেটওয়ার্ক ল্যাগ", "ইনস্ট্যান্ট লোকাল ডাটাবেস", "অটোমেটিক ক্লাউড ব্যাকআপ"],
      preview: {
        type: "offline-card",
        status: "Offline Ready",
        syncedText: "All 128 items locally secured",
      },
    },
    {
      id: "budget-limit",
      category: "personal",
      title: "বাজেট প্ল্যানিং ও ওভারস্পেন্ডিং অ্যালার্ট",
      subtitle: "Smart Budget Limits & Warnings",
      description:
        "মাসের শুরুতে ক্যাটাগরিভিত্তিক বাজেট লিমিট সেট করুন। বাজেট শেষ হওয়ার কাছাকাছি গেলে KotoGelo আপনাকে সতর্ক করে দেবে।",
      icon: BellRing,
      gradient: "from-rose-600 to-pink-600",
      accentBg: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
      badge: "Money Saver",
      highlights: ["মাসিক ক্যাটাগরি ক্যাপ", "রিয়েল-টাইম প্রগ্রেস বার", "স্মার্ট অ্যালার্ট নোটিফিকেশন"],
      preview: {
        type: "budget-card",
        title: "Monthly Dining Budget",
        progress: "৳ ৪,৫০০ / ৳ ৬,০০০ (75%)",
      },
    },
    {
      id: "privacy-clean",
      category: "personal",
      title: "সম্পূর্ণ প্রাইভেট ও বিজ্ঞাপনমুক্ত",
      subtitle: "100% Ad-Free & Data Privacy",
      description:
        "কোনো বিরক্তিকর বিজ্ঞাপন বা স্প্যাম নেই। আপনার ফিন্যান্সিয়াল ডাটা শুধু আপনার ডিভাইসেই এনক্রিপ্টেড ও সুরক্ষিত থাকে।",
      icon: ShieldCheck,
      gradient: "from-purple-600 to-indigo-600",
      accentBg: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
      badge: "Zero Spam",
      highlights: ["কোনো থার্ড-পার্টি ট্র্যাকিং নেই", "এনক্রিপ্টেড লোকাল স্টোরেজ", "ক্লিন ও সুপারফাস্ট ইউজার এক্সপেরিয়েন্স"],
      preview: {
        type: "privacy-card",
        title: "Clean & Private",
        status: "No Ads • 100% Free",
      },
    },
  ];

  const filteredFeatures =
    activeCategory === "all"
      ? features
      : features.filter((f) => f.category === activeCategory);

  return (
    <section id="features" className="relative py-24 bg-slate-50/50 dark:bg-slate-950/50">
      {/* Background Decorative Ambient */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-primary-600/5 blur-[120px]" />
        <div className="absolute left-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span>ফিচারসমূহ • Powerful Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            হিসাব রাখার প্রতিটি ধাপ হোক{" "}
            <span className="bg-gradient-to-r from-primary-600 to-emerald-500 bg-clip-text text-transparent">
              সহজ ও নির্ভুল
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            দৈনন্দিন টুকিটাকি খরচ থেকে শুরু করে বড় ট্যুরের জটিল বিল ভাগাভাগি—KotoGelo-তে আছে আপনার প্রয়োজনীয় সব ফিচার।
          </p>

          {/* Filter Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "all", label: "সব ফিচার (All Features)" },
              { id: "personal", label: "পার্সোনাল খরচ (Personal)" },
              { id: "group", label: "মেস ও ট্যুর স্প্লিট (Group Split)" },
              { id: "analytics", label: "অ্যানালিটিক্স ও চার্ট (Analytics)" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === tab.id
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-md shadow-slate-900/10 scale-105"
                    : "bg-white/80 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Features Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredFeatures.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.id}
                className="group relative overflow-hidden rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70 p-6 sm:p-8 backdrop-blur-xl hover:border-primary-500/40 dark:hover:border-primary-500/40 hover:shadow-2xl hover:shadow-primary-600/10 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Glow on Hover */}
                <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br from-primary-500/10 via-emerald-500/10 to-transparent blur-2xl group-hover:scale-150 transition duration-500" />

                <div>
                  {/* Card Header with Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`h-12 w-12 rounded-2xl ${item.accentBg} flex items-center justify-center shadow-inner group-hover:scale-110 transition duration-300`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge variant="pill" className="text-[11px] font-semibold">
                      {item.badge}
                    </Badge>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-primary-600 dark:text-primary-400 mb-3">
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 mb-6">
                    {item.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Interactive Preview Widget Component inside Card */}
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  {item.preview.type === "expense-card" && (
                    <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800/60">
                      <div className="flex items-center gap-2.5">
                        <div className="h-8 w-8 rounded-xl bg-primary-500/20 text-primary-500 flex items-center justify-center">
                          <Receipt className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-900 dark:text-white">
                            {item.preview.title}
                          </p>
                          <p className="text-[10px] text-slate-500">{item.preview.tag}</p>
                        </div>
                      </div>
                      <span className="text-xs font-black text-rose-500">
                        {item.preview.amount}
                      </span>
                    </div>
                  )}

                  {item.preview.type === "group-card" && (
                    <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-1.5">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-slate-900 dark:text-white">
                          {item.preview.groupName}
                        </span>
                        <span className="text-[10px] bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded-md font-semibold">
                          {item.preview.members}
                        </span>
                      </div>
                      <p className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400">
                        {item.preview.status}
                      </p>
                    </div>
                  )}

                  {item.preview.type === "chart-card" && (
                    <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-1.5">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-slate-900 dark:text-white">
                          {item.preview.title}
                        </span>
                        <span className="text-xs font-black text-amber-600 dark:text-amber-400">
                          {item.preview.percentage}
                        </span>
                      </div>
                      <div className="h-2 w-full bg-amber-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-amber-500 rounded-full" />
                      </div>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400">
                        {item.preview.trend}
                      </p>
                    </div>
                  )}

                  {item.preview.type === "offline-card" && (
                    <div className="flex items-center justify-between p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                      <div className="flex items-center gap-2">
                        <div className="h-2.5 w-2.5 rounded-full bg-blue-500 animate-pulse" />
                        <span className="text-xs font-bold text-slate-900 dark:text-white">
                          {item.preview.status}
                        </span>
                      </div>
                      <span className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold">
                        {item.preview.syncedText}
                      </span>
                    </div>
                  )}

                  {item.preview.type === "budget-card" && (
                    <div className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/20 space-y-1.5">
                      <div className="flex justify-between items-center text-xs font-bold text-slate-900 dark:text-white">
                        <span>{item.preview.title}</span>
                        <span className="text-rose-600 dark:text-rose-400">75%</span>
                      </div>
                      <div className="h-2 w-full bg-rose-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-rose-500 rounded-full" />
                      </div>
                      <p className="text-[10px] text-slate-500">
                        {item.preview.progress}
                      </p>
                    </div>
                  )}

                  {item.preview.type === "privacy-card" && (
                    <div className="flex items-center justify-between p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-xs font-bold text-purple-700 dark:text-purple-300">
                      <span>{item.preview.title}</span>
                      <span className="text-[10px] bg-purple-500/20 px-2 py-0.5 rounded-md">
                        {item.preview.status}
                      </span>
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
