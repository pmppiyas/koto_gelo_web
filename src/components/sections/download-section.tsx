"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useReleaseInfo } from "@/hooks/use-release-info";
import {
  Download,
  Smartphone,
  QrCode,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Apple,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  FileCheck,
  Sparkles,
  HelpCircle,
} from "lucide-react";

export function DownloadSection() {
  const { info } = useReleaseInfo();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "Direct APK কীভাবে ফোনে ইনস্টল করবেন?",
      a: "Download APK বাটনে চাপ দিয়ে ফাইলটি ডাউনলোড করুন। এরপর ফাইলে ট্যাপ করে 'Install' সিলেক্ট করুন। যদি 'Install from unknown sources' চায়, তবে এক ক্লিকে Allow করে দিন। অ্যাপটি ১০০% নিরাপদ ও পরীক্ষিত।",
    },
    {
      q: "আমার ডাটা কি অফলাইনে হারিয়ে যেতে পারে?",
      a: "না, KotoGelo লোকাল ডাটাবেস আর্কিটেকচারে চলে। ফোন রিস্টার্ট বা অফলাইন থাকলেও সব ডাটা সুরক্ষিত থাকে। ইন্টারনেট কানেক্ট হলেই তা আপনার ব্যক্তিগত ক্লাউড অ্যাকাউন্টে অটো-সিঙ্ক হয়ে যাবে।",
    },
    {
      q: "অ্যাপটি ব্যবহার করতে কি কোনো টাকা দিতে হবে?",
      a: "না, KotoGelo সম্পূর্ণ ফ্রি এবং কোনো গোপন চার্জ নেই। আমরা কোনো বিরক্তিকর বিজ্ঞাপন প্রদর্শন করি না।",
    },
    {
      q: "মেস মেম্বার বা বন্ধুরা কীভাবে গ্রুপে যুক্ত হবে?",
      a: "গ্রুপ খোলার পর একটি ৬ ডিজিটের ইনভাইট কোড তৈরি হয়। আপনার বন্ধুদের সাথে কোডটি শেয়ার করলেই তারা এক ক্লিকে মেস বা ট্যুর গ্রুপে যুক্ত হতে পারবে।",
    },
  ];

  return (
    <section id="download" className="relative py-24 bg-slate-50/70 dark:bg-slate-950/70 overflow-hidden">
      {/* Ambient Glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-gradient-to-t from-primary-600/15 via-emerald-500/10 to-transparent blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
            <Download className="h-3.5 w-3.5" />
            <span>গেট অ্যাপ • Download KotoGelo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            টাকা ব্যবস্থাপনায় আজই আনুন{" "}
            <span className="bg-gradient-to-r from-primary-600 to-emerald-500 bg-clip-text text-transparent">
              পূর্ণ নিয়ন্ত্রণ
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            কোনো বিজ্ঞাপন নেই, কোনো পেইড সাবস্ক্রিপশন নেই। আপনার অ্যান্ড্রয়েড ফোনের জন্য এখনই ডাউনলোড করে হিসাব রাখা শুরু করুন।
          </p>
        </div>

        {/* Main Download Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left / Primary Option: Direct APK Card */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl border-2 border-primary-500/40 bg-gradient-to-br from-white via-primary-50/30 to-white dark:from-slate-900 dark:via-primary-950/20 dark:to-slate-900 p-8 shadow-xl shadow-primary-600/5 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 h-40 w-40 rounded-full bg-primary-500/10 blur-2xl" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="relative h-14 w-14 shrink-0">
                    <Image
                      src="/logo.png"
                      alt="KotoGelo Android APK"
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-2xl object-contain shadow-lg shadow-primary-600/25"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                      KotoGelo Android APK
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                      Official Stable Release • {info.version}
                    </p>
                  </div>
                </div>

                <Badge variant="pill" className="border-primary-500/30 text-xs font-bold">
                  🌟 Most Popular
                </Badge>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                প্লে-স্টোর ছাড়াও সরাসরি আপনার ফোনে এক ক্লিকে ইনস্টল করুন। সম্পূর্ণ লাইটওয়েট সাইজ এবং ইনস্ট্যান্ট অফলাইন সেটআপ।
              </p>

              {/* APK Specs */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800 mb-8 text-center">
                <div>
                  <p className="text-[10px] text-slate-400 font-semibold">ফাইল সাইজ</p>
                  <p className="text-sm font-black text-slate-900 dark:text-white">{info.sizeFormatted}</p>
                </div>
                <div className="border-x border-slate-200 dark:border-slate-700">
                  <p className="text-[10px] text-slate-400 font-semibold">অ্যান্ড্রয়েড ভার্সন</p>
                  <p className="text-sm font-black text-slate-900 dark:text-white">8.0 or Higher</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-semibold">সিকিউরিটি</p>
                  <p className="text-sm font-black text-emerald-600 dark:text-emerald-400">Verified ✅</p>
                </div>
              </div>
            </div>

            {/* Direct Download Button */}
            <div className="space-y-3">
              <a
                href={siteConfig.links.apkDirect}
                download
                className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-gradient-to-r from-primary-600 via-indigo-600 to-emerald-600 text-white font-bold text-base shadow-lg shadow-primary-600/30 hover:shadow-xl hover:shadow-primary-600/40 hover:opacity-95 transition active:scale-[0.99]"
              >
                <Download className="h-5 w-5 animate-bounce" />
                <span>Download Android APK (Direct)</span>
              </a>

              <p className="text-[11px] text-center text-slate-500 dark:text-slate-400">
                🔒 ১০০% নিরাপদ • ম্যালওয়্যার ও ভাইরাস মুক্ত ফাইল
              </p>
            </div>
          </div>

          {/* Right Column: Google Play & App Store & QR Code */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Google Play Store Card */}
            <a
              href={siteConfig.links.playstore}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/80 hover:border-emerald-500/50 hover:shadow-lg transition-all duration-300 backdrop-blur-xl flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-600/20 group-hover:scale-105 transition">
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.793 12 3.61 22.186a2.372 2.372 0 0 1-.61-1.636V3.45c0-.623.226-1.196.609-1.636zm11.24 11.242l2.368 2.368-12.784 7.38 10.416-9.748zm0-2.112L4.433 1.196l12.784 7.38-2.368 2.368zm1.488 1.056l4.08 2.355c1.07.618 1.07 1.636 0 2.254l-4.08 2.355-2.073-2.074 2.073-2.89z" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-extrabold text-slate-900 dark:text-white text-base">
                      Google Play Store
                    </h4>
                    <span className="text-[10px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full font-bold">
                      4.9 ★
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    অটো-আপডেট ও প্লে প্রটেক্ট ভেরিফাইড
                  </p>
                </div>
              </div>
              <ExternalLink className="h-5 w-5 text-slate-400 group-hover:text-emerald-600 transition" />
            </a>

            {/* Apple iOS Card */}
            <div className="p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl opacity-80 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-slate-800 text-white flex items-center justify-center shadow-md">
                  <Apple className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-extrabold text-slate-900 dark:text-white text-base">
                      Apple App Store (iOS)
                    </h4>
                    <span className="text-[10px] bg-amber-500/20 text-amber-600 dark:text-amber-400 px-2 py-0.5 rounded-full font-bold">
                      Under Review
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    iPhone ও iPad ভার্সন খুব শীঘ্রই আসছে
                  </p>
                </div>
              </div>
            </div>

            {/* Scan QR Code Card */}
            <div className="p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl flex items-center gap-4">
              <div className="h-16 w-16 rounded-2xl bg-slate-900 p-2 flex items-center justify-center shrink-0 border border-slate-700">
                <QrCode className="h-12 w-12 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                  মোবাইল ক্যামেরা দিয়ে স্ক্যান করুন
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  ফোন দিয়ে সরাসরি QR কোড স্ক্যান করে ইনস্ট্যান্ট ডাউনলোড লিঙ্ক ওপেন করুন।
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Trust Badges Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-800/60">
            <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white">১০০% সুরক্ষিত</p>
              <p className="text-[10px] text-slate-500">নো ডাটা লিকেজ</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-800/60">
            <div className="h-10 w-10 rounded-xl bg-primary-500/10 text-primary-600 dark:text-primary-400 flex items-center justify-center shrink-0">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white">সুপারফাস্ট স্পিড</p>
              <p className="text-[10px] text-slate-500">৬০ FPS রেসপন্স</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-800/60">
            <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
              <FileCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white">লাইটওয়েট APK</p>
              <p className="text-[10px] text-slate-500">মাত্র ~১৪.২ MB</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-800/60">
            <div className="h-10 w-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white">জিরো বিজ্ঞাপন</p>
              <p className="text-[10px] text-slate-500">১০০% স্প্যাম মুক্ত</p>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions (FAQ) Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              সাধারণ জিজ্ঞাসা (FAQ)
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              ডাউনলোড বা ব্যবহার নিয়ে আপনার মনের কিছু প্রশ্নের উত্তর
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/80 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center justify-between gap-4"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="h-4 w-4 text-primary-600 shrink-0" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
