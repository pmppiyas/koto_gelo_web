"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  XCircle,
  Zap,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  Sparkles,
  Award,
  Users,
  Check,
  X,
  HelpCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function AdvantagesSection() {
  const [activeTab, setActiveTab] = useState<"cards" | "compare">("cards");

  const coreAdvantages = [
    {
      title: "খাতা-কলমের ঝামেলা চিরতরে শেষ",
      subtitle: "Never Lose Your Financial Records",
      description:
        "খাতা হারিয়ে যাওয়া, হিসাব কাটাকাটি বা বন্ধুদের সাথে ভুল বোঝাবুঝির আর কোনো সুযোগ নেই। প্রতিটি টাকার লেনদেন থাকে ডিজিটাল রেকর্ডে।",
      icon: Zap,
      gradient: "from-primary-600 to-indigo-600",
      accentBg: "bg-primary-500/10 text-primary-600 dark:text-primary-400",
      stats: "100% Digital",
    },
    {
      title: "বাংলাদেশের জন্য তৈরি (Local Friendly)",
      subtitle: "Tailored for bKash, Nagad & Mess Mill",
      description:
        "টাকা (৳) কারেন্সি, বিকাশ, নগদ, রকেট এবং ব্যাচেলর মেসের মিল ও বাজার সিস্টেম সরাসরি সাপোর্ট করে, যা বিদেশি অ্যাপগুলোতে থাকে না।",
      icon: Award,
      gradient: "from-emerald-600 to-teal-600",
      accentBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
      stats: "Made for BD",
    },
    {
      title: "জিরো লার্নিং কার্ভ (সহজতম UI)",
      subtitle: "Simple Enough for Anyone to Use",
      description:
        "কোনো জটিল ব্যাংকিং টার্ম বা কনফিউজিং মেনু নেই। অ্যাপ ওপেন করেই মাত্র ২ ট্যাপে খরচ বা ইনকাম এন্ট্রি করা যায়।",
      icon: Smartphone,
      gradient: "from-amber-600 to-orange-600",
      accentBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
      stats: "< 2s Entry",
    },
    {
      title: "মেস ও ট্যুর স্প্লিটে জটিলতার অবসান",
      subtitle: "Automatic Settlement Calculation",
      description:
        "কে কত টাকা দিয়েছে আর কে কত পাবে—ক্যালকুলেটর নিয়ে ঘণ্টার পর ঘণ্টা বসার দরকার নেই। KotoGelo মুহূর্তেই ব্যালেন্স ক্লিয়ার করে দেয়।",
      icon: Users,
      gradient: "from-blue-600 to-cyan-600",
      accentBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
      stats: "Zero Error",
    },
    {
      title: "১০০% অফলাইন স্পিড ও ক্লাউড ব্যাকআপ",
      subtitle: "Blazing Fast & Ultra Reliable",
      description:
        "ইন্টারনেট না থাকলেও অ্যাপ সুপারফাস্ট কাজ করে। আবার নেটওয়ার্ক পেলেই ক্লাউডে অটো-ব্যাকআপ হয়ে যায়, ফোন বদলালেও ডাটা সুরক্ষিত।",
      icon: ShieldCheck,
      gradient: "from-purple-600 to-pink-600",
      accentBg: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
      stats: "Dual Sync",
    },
    {
      title: "সম্পূর্ণ ফ্রি ও কোনো বিরক্তিকর বিজ্ঞাপন নেই",
      subtitle: "100% Free Forever with Zero Ads",
      description:
        "কোনো হিডেন চার্জ, পেইড পে-ওয়াল বা বিরক্তিকর পপআপ অ্যাড নেই। সম্পূর্ণ বিজ্ঞাপনমুক্ত পরিচ্ছন্ন ইউজার এক্সপেরিয়েন্স।",
      icon: Sparkles,
      gradient: "from-rose-600 to-red-600",
      accentBg: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
      stats: "৳0 / 100% Free",
    },
  ];

  const comparisonRows = [
    {
      feature: "টাকা ও খরচ তোলার গতি",
      traditional: "খুব ধীর (খাতায় লেখা)",
      excel: "মাঝারি (ম্যানুয়াল এন্ট্রি)",
      otherApps: "ধীর (অনেক স্টেপ)",
      kotogelo: "সুপারফাস্ট (< ২ সেকেন্ড)",
    },
    {
      feature: "মেস মিল ও ট্যুর বিল ভাগাভাগি",
      traditional: "❌ চরম ভুল বোঝাবুঝি",
      excel: "⚠️ জটিল ফর্মুলা প্রয়োজন",
      otherApps: "⚠️ মেস সাপোর্ট নেই",
      kotogelo: "✅ অটোমেটিক লাইভ হিসাব",
    },
    {
      feature: "বিকাশ / নগদ / রকেট ট্যাগিং",
      traditional: "❌ নেই",
      excel: "⚠️ ম্যানুয়াল ড্রপডাউন",
      otherApps: "❌ লোকাল মেথড নেই",
      kotogelo: "✅ বিল্ট-ইন বাংলাদেশ পেমেন্ট",
    },
    {
      feature: "অফলাইনে কাজ করার সক্ষমতা",
      traditional: "✅ হ্যাঁ",
      excel: "⚠️ লিমিটেড",
      otherApps: "❌ ইন্টারনেট বাধ্যতামূলক",
      kotogelo: "✅ ১০০% অফলাইন-ফার্স্ট",
    },
    {
      feature: "বিজ্ঞাপন ও স্প্যাম নোটিফিকেশন",
      traditional: "✅ নেই",
      excel: "✅ নেই",
      otherApps: "❌ প্রচুর বিরক্তিকর অ্যাড",
      kotogelo: "✅ সম্পূর্ণ বিজ্ঞাপনমুক্ত",
    },
    {
      feature: "ভিজ্যুয়াল চার্ট ও মাসিক রিপোর্ট",
      traditional: "❌ কোনো চার্ট নেই",
      excel: "⚠️ জটিল চার্ট সেটআপ",
      otherApps: "⚠️ পেইড প্রিমিয়াম ফিচার",
      kotogelo: "✅ ফ্রি লাইভ চার্ট ও রিপোর্ট",
    },
  ];

  return (
    <section id="advantages" className="relative py-24 bg-white dark:bg-slate-900 transition-colors">
      {/* Glow Effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/3 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary-500/5 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1 text-xs font-semibold text-primary-700 dark:text-primary-300">
            <Award className="h-3.5 w-3.5" />
            <span>কেন KotoGelo সেরা? • Advantages</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            হিসাব রাখার সেরা মাধ্যম হিসেবে{" "}
            <span className="bg-gradient-to-r from-primary-600 to-emerald-500 bg-clip-text text-transparent">
              KotoGelo-র বিশেষত্ব
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            খাতা-কলম কিংবা জটিল এক্সেল শিটের দিন শেষ। দেখুন কেন হাজারো মানুষ তাদের দৈনন্দিন হিসাবের জন্য KotoGelo বেছে নিচ্ছেন।
          </p>

          {/* View Mode Toggle */}
          <div className="pt-4 flex items-center justify-center">
            <div className="inline-flex items-center gap-1 p-1 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <button
                onClick={() => setActiveTab("cards")}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
                  activeTab === "cards"
                    ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                প্রধান সুবিধাসমূহ (Advantages)
              </button>
              <button
                onClick={() => setActiveTab("compare")}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
                  activeTab === "compare"
                    ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                সরাসরি তুলনা (Comparison)
              </button>
            </div>
          </div>
        </div>

        {/* Tab 1: Key Advantages Cards */}
        {activeTab === "cards" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 animate-in fade-in duration-300">
            {coreAdvantages.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group relative rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-950/70 p-7 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 hover:bg-white dark:hover:bg-slate-900 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`h-12 w-12 rounded-2xl ${item.accentBg} flex items-center justify-center shadow-inner group-hover:scale-110 transition duration-300`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        {item.stats}
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-slate-900 dark:text-white tracking-tight mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
                      {item.subtitle}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>১০০% কার্যকর ও পরীক্ষিত</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Feature Comparison Matrix Table */}
        {activeTab === "compare" && (
          <div className="overflow-x-auto rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 shadow-lg backdrop-blur-md animate-in fade-in duration-300">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white">
                <tr>
                  <th className="p-5 font-extrabold">ফিচার / সুবিধা</th>
                  <th className="p-5 font-bold text-slate-500 dark:text-slate-400">খাতা-কলম</th>
                  <th className="p-5 font-bold text-slate-500 dark:text-slate-400">এক্সেল শিট</th>
                  <th className="p-5 font-bold text-slate-500 dark:text-slate-400">অন্যান্য অ্যাপ</th>
                  <th className="p-5 font-black bg-primary-600/10 text-primary-600 dark:text-primary-400">
                    KotoGelo ✨
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                {comparisonRows.map((row, i) => (
                  <tr
                    key={i}
                    className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50 transition"
                  >
                    <td className="p-5 font-bold text-slate-900 dark:text-white">
                      {row.feature}
                    </td>
                    <td className="p-5 text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
                      {row.traditional}
                    </td>
                    <td className="p-5 text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
                      {row.excel}
                    </td>
                    <td className="p-5 text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
                      {row.otherApps}
                    </td>
                    <td className="p-5 font-extrabold text-emerald-600 dark:text-emerald-400 bg-primary-500/5 text-xs sm:text-sm">
                      {row.kotogelo}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </section>
  );
}
