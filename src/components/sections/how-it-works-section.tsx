"use client";

import React, { useState } from "react";
import {
  DownloadCloud,
  PlusCircle,
  PieChart,
  Users,
  CreditCard,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Smartphone,
  Share2,
  Calculator,
  Check,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function HowItWorksSection() {
  const [activeMode, setActiveMode] = useState<"personal" | "group">("personal");

  const personalSteps = [
    {
      step: "01",
      title: "অ্যাপ ডাউনলোড ও ইনস্ট্যান্ট স্টার্ট",
      subtitle: "Download & Ready in 5 Seconds",
      description:
        "কোনো দীর্ঘ ফর্ম বা পাসওয়ার্ডের ঝামেলা নেই। APK ডাউনলোড বা প্লে-স্টোর থেকে ইনস্টল করেই সাথে সাথে হিসাব শুরু করুন।",
      icon: DownloadCloud,
      badge: "Instant Setup",
      color: "from-primary-600 to-indigo-600",
      accentBg: "bg-primary-500/10 text-primary-600 dark:text-primary-400",
      uiPreview: {
        header: "Welcome to KotoGelo",
        content: "Tap to set initial wallet balance: ৳ ২০,০০০",
        tag: "Zero Setup Delay",
      },
    },
    {
      step: "02",
      title: "মাত্র ২ ট্যাপে খরচ বা ইনকাম তুলুন",
      subtitle: "2-Tap Fast Logging",
      description:
        "টাকার পরিমাণ লিখুন এবং ক্যাটাগরি (বাজার, খাবার, বিল) ও পেমেন্ট মেথড (ক্যাশ, বিকাশ, নগদ) সিলেক্ট করে সেভ বাটনে চাপুন।",
      icon: PlusCircle,
      badge: "< 2s Logging",
      color: "from-emerald-600 to-teal-600",
      accentBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
      uiPreview: {
        header: "Add Expense",
        content: "🛒 কাঁচাবাজার • ৳ ১,৪৫০ • bKash",
        tag: "Auto Balance Update",
      },
    },
    {
      step: "03",
      title: "স্মার্ট অ্যানালিটিক্সে দেখুন কত গেলো",
      subtitle: "Live Spending Insights & Reports",
      description:
        "ড্যাশবোর্ডে বর্তমান ব্যালেন্স, মাসিক মোট খরচ এবং কোন খাতে কত শতাংশ টাকা খরচ হয়েছে তার রঙিন পাই চার্ট দেখে বাজেট নিয়ন্ত্রণ করুন।",
      icon: PieChart,
      badge: "Full Control",
      color: "from-amber-600 to-orange-600",
      accentBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
      uiPreview: {
        header: "Monthly Breakdown",
        content: "Food 38% • Bazar 25% • Bills 17%",
        tag: "Smart Budget Tracker",
      },
    },
  ];

  const groupSteps = [
    {
      step: "01",
      title: "মেস বা ট্যুর গ্রুপ তৈরি করুন",
      subtitle: "Create Group & Invite Friends",
      description:
        "মেস বা ট্যুরের নাম দিয়ে নতুন গ্রুপ খুলুন। ফ্রেন্ডদের ইনভাইট কোড বা লিঙ্ক শেয়ার করলেই তারা এক ক্লিকে যুক্ত হতে পারবে।",
      icon: Users,
      badge: "Multiplayer Split",
      color: "from-blue-600 to-indigo-600",
      accentBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
      uiPreview: {
        header: "Sajek Tour Group",
        content: "Invite Code: #SAJEK26 • 5 Members",
        tag: "Real-time Multi-user",
      },
    },
    {
      step: "02",
      title: "যেকেউ বিল এন্ট্রি করুক স্বচ্ছভাবে",
      subtitle: "Log Expenses with Exact Split",
      description:
        "যিনি হোটেলের ভাড়া বা রাতের ডিনার পে করবেন, তিনি এন্ট্রি দেবেন। সবার মধ্যে সমানভাবে বা কাস্টম মিল রেটে ভাগ হয়ে যাবে।",
      icon: Calculator,
      badge: "Zero Confusion",
      color: "from-emerald-600 to-teal-600",
      accentBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
      uiPreview: {
        header: "Resort Payment",
        content: "Tanvir Paid ৳ ১২,৫০০ (৳ ২,৫০০ / person)",
        tag: "Auto Share Calculation",
      },
    },
    {
      step: "03",
      title: "১-ক্লিকে কার কাছে কত পাওনা সেটেল করুন",
      subtitle: "1-Click Instant Settlement",
      description:
        "ট্যুর বা মাস শেষে অ্যাপ অটোমেটিক বলে দেবে কে কাকে কত টাকা দেবে। জাস্ট ১ ট্যাপে ডেট ক্লিয়ার করে ফ্রেন্ডলি সেটেলমেন্ট সম্পন্ন করুন।",
      icon: CheckCircle2,
      badge: "Debt Free",
      color: "from-purple-600 to-pink-600",
      accentBg: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
      uiPreview: {
        header: "Final Settlement",
        content: "Abir owes Tanvir ৳ ১,২০০ • Settled ✅",
        tag: "Zero Conflict",
      },
    },
  ];

  const currentSteps = activeMode === "personal" ? personalSteps : groupSteps;

  return (
    <section id="how-it-works" className="relative py-24 bg-slate-50/50 dark:bg-slate-950/50">
      {/* Background Decorative */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 h-[600px] w-[700px] rounded-full bg-gradient-to-br from-primary-600/5 via-emerald-500/5 to-transparent blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1 text-xs font-semibold text-primary-700 dark:text-primary-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span>কীভাবে কাজ করে? • How It Works</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            মাত্র ৩টি সহজ ধাপে{" "}
            <span className="bg-gradient-to-r from-primary-600 to-emerald-500 bg-clip-text text-transparent">
              নিখুঁত হিসাব নিয়ন্ত্রণ
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            দৈনন্দিন ব্যক্তিগত খরচ হোক কিংবা বন্ধুদের সাথে জটিল মেস/ট্যুরের বিল—সবকিছুই চোখের পলকে ম্যানেজ করুন।
          </p>

          {/* Mode Switch Pills */}
          <div className="pt-4 flex items-center justify-center">
            <div className="inline-flex items-center gap-1 p-1 rounded-2xl bg-slate-200/80 dark:bg-slate-800 border border-slate-300/80 dark:border-slate-700">
              <button
                onClick={() => setActiveMode("personal")}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  activeMode === "personal"
                    ? "bg-primary-600 text-white shadow-md shadow-primary-600/25"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                👤 পার্সোনাল খরচ (Personal Tracking)
              </button>
              <button
                onClick={() => setActiveMode("group")}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  activeMode === "group"
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/25"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                👥 মেস ও ট্যুর স্প্লিট (Group Split)
              </button>
            </div>
          </div>
        </div>

        {/* 3 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connector Line on Desktop */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 -translate-y-12 bg-gradient-to-r from-primary-500/20 via-emerald-500/20 to-primary-500/20 -z-1" />

          {currentSteps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="group relative rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/80 p-8 shadow-sm backdrop-blur-xl hover:border-primary-500/40 dark:hover:border-primary-500/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Step Top Bar */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`h-14 w-14 rounded-2xl ${item.accentBg} flex items-center justify-center shadow-inner group-hover:scale-110 transition duration-300`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="text-3xl font-black text-slate-300 dark:text-slate-800 group-hover:text-primary-500/40 transition">
                      {item.step}
                    </span>
                  </div>

                  <Badge variant="pill" className="mb-3 text-[11px] font-semibold">
                    {item.badge}
                  </Badge>

                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-primary-600 dark:text-primary-400 mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Simulated UI Card in Step */}
                <div className="mt-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/60 dark:border-slate-800/60 space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white">
                    <span>{item.uiPreview.header}</span>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400">
                      ● Active
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    {item.uiPreview.content}
                  </p>
                  <div className="pt-1 flex items-center gap-1 text-[10px] text-slate-400 font-medium">
                    <Check className="h-3 w-3 text-emerald-500" />
                    <span>{item.uiPreview.tag}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
