"use client";

import React, { useState } from "react";
import {
  Code2,
  Server,
  Database,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  Zap,
  Globe,
  Smartphone,
  Cloud,
  Lock,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState<"all" | "mobile" | "backend" | "web" | "security">("all");

  const techCategories = [
    {
      id: "mobile",
      title: "Mobile App (Android & iOS)",
      icon: Smartphone,
      color: "from-blue-600 to-indigo-600",
      accentBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
      description: "সুপারফাস্ট ৬০+ FPS পারফর্মেন্স এবং অফলাইন-ফার্স্ট মোবাইল আর্কিটেকচার",
      techs: [
        {
          name: "React Native (v0.81)",
          role: "Cross-Platform Native Engine",
          desc: "একটি কোডবেস থেকে পিওর নেটিভ হাই-পারফর্মেন্স অ্যান্ড ব্লিস্টারিন স্পিড।",
          badge: "Mobile Core",
        },
        {
          name: "Expo (v54)",
          role: "Modern Native Framework",
          desc: "স্মুথ বিল্ড, ফাস্ট রিফ্রেশ এবং ওটিএ (OTA) আপডেটের আধুনিক ইকোসিস্টেম।",
          badge: "Ecosystem",
        },
        {
          name: "TypeScript",
          role: "Type-Safe Reliability",
          desc: "প্রতিটি ট্রানজ্যাকশন এবং ডেটা স্ট্রাকচারের ১০০% টাইপ সেফটি ও জিরো রানটাইম এরর।",
          badge: "Strict Typing",
        },
        {
          name: "Offline-First Storage",
          role: "Local DB with Instant Response",
          desc: "ইন্টারনেট ছাড়াও সেকেন্ডের ভগ্নাংশে লোকাল ডাটাবেস এন্ট্রি ও রিকভারি।",
          badge: "Zero Latency",
        },
      ],
    },
    {
      id: "backend",
      title: "Backend & Database Engine",
      icon: Server,
      color: "from-emerald-600 to-teal-600",
      accentBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
      description: "এন্টারপ্রাইজ-গ্রেড হাই-স্কেলেবিলিটি এবং নির্ভরযোগ্য আর্থিক ট্রানজ্যাকশন ইঞ্জিন",
      techs: [
        {
          name: "NestJS (v11)",
          role: "Enterprise Node Framework",
          desc: "মডুলার মাইক্রোসার্ভিস আর্কিটেকচার যা লাখো রিকোয়েস্ট লো-ল্যাটেন্সিতে হ্যান্ডেল করে।",
          badge: "API Server",
        },
        {
          name: "Prisma ORM (v7)",
          role: "Next-Gen Database ORM",
          desc: "অ্যাসিড (ACID) ট্রানজ্যাকশন কমপ্লায়েন্ট এবং টাইপ-সেফ ডাটাবেস কোয়েরি।",
          badge: "Data Layer",
        },
        {
          name: "PostgreSQL",
          role: "Relational Database",
          desc: "ফাইন্যান্সিয়াল ডাটা সুরক্ষার জন্য বিশ্বের সবচেয়ে নির্ভরযোগ্য রিলেশনাল ডাটাবেস।",
          badge: "Core DB",
        },
        {
          name: "Redis Cache (ioredis)",
          role: "In-Memory Data Store",
          desc: "গ্রুপ স্প্লিট এবং ইনস্ট্যান্ট সিঙ্ক মেসেজের জন্য মাইক্রোসেকেন্ড-লেভেল ক্যাশিং।",
          badge: "Fast Cache",
        },
      ],
    },
    {
      id: "web",
      title: "Web & Design System",
      icon: Globe,
      color: "from-amber-600 to-orange-600",
      accentBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
      description: "মডার্ন এজ-রেন্ডারড ওয়েব এক্সপেরিয়েন্স ও অ্যাক্সেসিবল UI সিস্টেম",
      techs: [
        {
          name: "Next.js 15 (App Router)",
          role: "React Fullstack Web Framework",
          desc: "সার্ভার সাইড রেন্ডারিং (SSR) এবং আল্ট্রাফাস্ট এসইও ফ্রেন্ডলি ওয়েব ফ্রেমওয়ার্ক।",
          badge: "Modern Web",
        },
        {
          name: "Tailwind CSS",
          role: "Utility-First CSS System",
          desc: "রেসপনসিভ গ্রিড, আধুনিক গ্লাস-মরফিজম এবং ডার্ক মোড কালার ভেরিয়েবল।",
          badge: "Design Tokens",
        },
        {
          name: "shadcn/ui & Radix",
          role: "Accessible Primitives",
          desc: "সহজ ও সুন্দর কম্পোনেন্ট স্ট্রাকচার যা ইউজার ফ্রেন্ডলি এক্সপেরিয়েন্স দেয়।",
          badge: "UI Library",
        },
        {
          name: "Lucide React",
          role: "Clean Vector Icons",
          desc: "হালকা এবং পিক্সেল-পারফেক্ট আইকন যা প্রতিটি ফিচারের অর্থ স্পষ্ট করে।",
          badge: "Icons",
        },
      ],
    },
    {
      id: "security",
      title: "Security & Validation Layer",
      icon: Lock,
      color: "from-purple-600 to-pink-600",
      accentBg: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
      description: "অত্যাধুনিক ক্রিপ্টোগ্রাফিক সুরক্ষা ও কঠোর ইনপুট ভ্যালিডেশন",
      techs: [
        {
          name: "JWT & Bcrypt",
          role: "Cryptographic Auth",
          desc: "নিরাপদ টোকেন জেনারেশন এবং সর্বোচ্চ এনক্রিপ্টেড পাসওয়ার্ড হ্যাশিং।",
          badge: "Security",
        },
        {
          name: "Zod & Class-Validator",
          role: "Schema & Payload Validation",
          desc: "প্রতিটি রিকোয়েস্টের কঠোর যাচাইকরণ যাতে কোনো ভুল ডাটা এন্ট্রি না হতে পারে।",
          badge: "Validation",
        },
        {
          name: "Conflict-Free Sync Engine",
          role: "Multi-Device Synchronization",
          desc: "একাধিক মেম্বার একসাথে বিল এন্ট্রি করলেও ডাটা কনফ্লিক্ট ছাড়া অটো-সিঙ্ক।",
          badge: "Sync Engine",
        },
        {
          name: "Docker & Containerization",
          role: "Cloud DevOps Ready",
          desc: "আইসোলেটেড কন্টেইনারাইজড ডিপ্লয়মেন্ট এবং অটো-স্কেলিং সাপোর্ট।",
          badge: "DevOps",
        },
      ],
    },
  ];

  const filteredCategories =
    activeCategory === "all"
      ? techCategories
      : techCategories.filter((c) => c.id === activeCategory);

  return (
    <section id="technologies" className="relative py-24 bg-white dark:bg-slate-900 transition-colors">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-1/3 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary-600/5 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300">
            <Code2 className="h-3.5 w-3.5" />
            <span>আধুনিক প্রযুক্তি স্ট্যাক • Technologies</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            বিশ্বমানের প্রযুক্তিতে নির্মিত{" "}
            <span className="bg-gradient-to-r from-primary-600 to-emerald-500 bg-clip-text text-transparent">
              নির্ভরযোগ্য আর্কিটেকচার
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            জিরো ল্যাগ, ১০০% ডাটা সুরক্ষা এবং রিয়েল-টাইম মাল্টি-ইউজার সিঙ্কের নিশ্চয়তায় KotoGelo ব্যবহার করে আধুনিকতম টেকনোলজি।
          </p>

          {/* Category Filter Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "all", label: "সব টেকনোলজি (All Tech)" },
              { id: "mobile", label: "📱 Mobile App (RN & Expo)" },
              { id: "backend", label: "⚙️ Backend (NestJS & Prisma)" },
              { id: "web", label: "🌐 Web (Next.js & Tailwind)" },
              { id: "security", label: "🔒 Security & Sync" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === tab.id
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-md scale-105"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid by Category */}
        <div className="space-y-12">
          {filteredCategories.map((cat) => {
            const CatIcon = cat.icon;
            return (
              <div
                key={cat.id}
                className="rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-950/60 p-6 sm:p-8 backdrop-blur-xl animate-in fade-in duration-300"
              >
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200/60 dark:border-slate-800/60">
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`h-12 w-12 rounded-2xl ${cat.accentBg} flex items-center justify-center shadow-inner`}
                    >
                      <CatIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        {cat.description}
                      </p>
                    </div>
                  </div>
                  <Badge variant="pill" className="w-fit text-xs">
                    Production Ready
                  </Badge>
                </div>

                {/* Tech Cards in Category */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {cat.techs.map((tech, idx) => (
                    <div
                      key={idx}
                      className="group rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900 p-5 hover:border-primary-500/40 dark:hover:border-primary-500/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                            {tech.badge}
                          </span>
                          <div className="h-2 w-2 rounded-full bg-emerald-500" />
                        </div>

                        <h4 className="text-base font-bold text-slate-900 dark:text-white tracking-tight mb-0.5">
                          {tech.name}
                        </h4>
                        <p className="text-xs font-semibold text-primary-600 dark:text-primary-400 mb-2">
                          {tech.role}
                        </p>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          {tech.desc}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                        <Zap className="h-3 w-3" />
                        <span>Optimized & Active</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
