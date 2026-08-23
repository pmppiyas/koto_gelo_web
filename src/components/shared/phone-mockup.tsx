"use client";

import React, { useState } from "react";
import {
  Wallet,
  TrendingDown,
  TrendingUp,
  Users,
  PieChart,
  Plus,
  ArrowUpRight,
  ArrowDownLeft,
  Coffee,
  ShoppingBag,
  Home,
  CheckCircle2,
  Sparkles,
  Bell,
} from "lucide-react";

export function PhoneMockup() {
  const [activeTab, setActiveTab] = useState<"all" | "group">("all");

  return (
    <div className="relative mx-auto w-full max-w-[360px] sm:max-w-[380px]">
      {/* Ambient Glow behind phone */}
      <div className="absolute -inset-4 rounded-[48px] bg-gradient-to-tr from-primary-600/30 via-emerald-500/20 to-amber-500/20 blur-2xl opacity-70 animate-pulse-glow" />

      {/* Floating Badge Left */}
      <div className="absolute -left-6 top-24 z-30 hidden sm:flex items-center gap-2.5 rounded-2xl border border-emerald-500/30 bg-white/90 dark:bg-slate-900/90 px-3.5 py-2.5 shadow-xl shadow-emerald-500/10 backdrop-blur-md animate-float">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
          <CheckCircle2 className="h-4 w-4" />
        </div>
        <div>
          <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Mess Bill Settled</p>
          <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">+ ৳ ১,২০০ Received</p>
        </div>
      </div>

      {/* Floating Badge Right */}
      <div className="absolute -right-6 bottom-32 z-30 hidden sm:flex items-center gap-2.5 rounded-2xl border border-indigo-500/30 bg-white/90 dark:bg-slate-900/90 px-3.5 py-2.5 shadow-xl shadow-indigo-500/10 backdrop-blur-md [animation-delay:2s] animate-float">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary-500/20 text-primary-600 dark:text-primary-400">
          <PieChart className="h-4 w-4" />
        </div>
        <div>
          <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Monthly Savings</p>
          <p className="text-xs font-bold text-slate-900 dark:text-white">৳ ১২,৮০০ (32%)</p>
        </div>
      </div>

      {/* Phone Body */}
      <div className="relative rounded-[44px] border-[6px] border-slate-900 bg-slate-950 p-2.5 shadow-2xl shadow-slate-950/60 ring-1 ring-slate-800">
        {/* Dynamic Island / Notch */}
        <div className="absolute left-1/2 top-4 z-40 h-4.5 w-24 -translate-x-1/2 rounded-full bg-black flex items-center justify-center">
          <div className="h-2 w-2 rounded-full bg-slate-800 mr-2"></div>
          <div className="h-2 w-2 rounded-full bg-primary-500/40"></div>
        </div>

        {/* Screen Content */}
        <div className="relative overflow-hidden rounded-[36px] bg-slate-900 text-slate-100 min-h-[580px] flex flex-col font-sans select-none">
          {/* Status Bar */}
          <div className="flex justify-between items-center px-6 pt-3 pb-2 text-[10px] text-slate-400 font-medium">
            <span>9:41 AM</span>
            <div className="flex items-center gap-1.5">
              <span>5G</span>
              <div className="h-2 w-4 rounded-sm border border-slate-400 p-[1px]">
                <div className="h-full w-3/4 rounded-2xs bg-emerald-400" />
              </div>
            </div>
          </div>

          {/* App Header */}
          <div className="px-5 pt-3 pb-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-primary-600 to-emerald-500 p-0.5 flex items-center justify-center shadow-md shadow-primary-600/30">
                <div className="h-full w-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                  <span className="text-xs font-black text-white">ক</span>
                </div>
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-medium">স্বাগতম, তানভীর 👋</p>
                <h4 className="text-sm font-bold text-white tracking-tight">কত গেলো? (KotoGelo)</h4>
              </div>
            </div>
            <button className="h-8 w-8 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white">
              <Bell className="h-4 w-4" />
            </button>
          </div>

          {/* Balance Card with Gradient */}
          <div className="px-4 py-1">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-600 via-indigo-700 to-slate-900 p-4.5 shadow-lg border border-primary-400/20">
              <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 h-24 w-24 rounded-full bg-white/10 blur-xl" />
              <div className="flex justify-between items-start mb-2">
                <span className="text-[11px] font-medium text-primary-100 flex items-center gap-1">
                  <Wallet className="h-3 w-3" /> বর্তমান ব্যালেন্স
                </span>
                <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/30 text-emerald-200 font-semibold border border-emerald-400/30">
                  +14% This Month
                </span>
              </div>
              <h2 className="text-2xl font-black text-white tracking-tight mb-3">৳ ৪২,৫৫০.০০</h2>
              
              <div className="grid grid-cols-2 gap-2 pt-2.5 border-t border-white/10 text-xs">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
                    <ArrowDownLeft className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <p className="text-[9px] text-slate-300">ইনকাম</p>
                    <p className="text-[11px] font-bold text-emerald-300">৳ ৬০,০০০</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-lg bg-rose-500/20 text-rose-300 flex items-center justify-center">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <p className="text-[9px] text-slate-300">খরচ</p>
                    <p className="text-[11px] font-bold text-rose-300">৳ ১৭,৪৫০</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Action Pills */}
          <div className="px-4 py-2.5 grid grid-cols-4 gap-2">
            {[
              { icon: Plus, label: "Add Expense", bg: "bg-primary-500/20 text-primary-400" },
              { icon: Users, label: "Mess Split", bg: "bg-emerald-500/20 text-emerald-400" },
              { icon: PieChart, label: "Analytics", bg: "bg-amber-500/20 text-amber-400" },
              { icon: Sparkles, label: "AI Insights", bg: "bg-purple-500/20 text-purple-400" },
            ].map((action, i) => {
              const Icon = action.icon;
              return (
                <button
                  key={i}
                  className="flex flex-col items-center gap-1 p-2 rounded-xl bg-slate-800/60 border border-slate-800 hover:bg-slate-800 transition"
                >
                  <div className={`h-8 w-8 rounded-lg ${action.bg} flex items-center justify-center`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-[9px] font-medium text-slate-300 text-center leading-tight">
                    {action.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Filter Tabs */}
          <div className="px-4 pt-1 flex items-center justify-between">
            <div className="flex items-center gap-1 bg-slate-800/80 p-1 rounded-lg border border-slate-700/60">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-2.5 py-1 text-[10px] font-bold rounded-md transition ${
                  activeTab === "all"
                    ? "bg-primary-600 text-white shadow-xs"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                সাম্প্রতিক খরচ
              </button>
              <button
                onClick={() => setActiveTab("group")}
                className={`px-2.5 py-1 text-[10px] font-bold rounded-md transition ${
                  activeTab === "group"
                    ? "bg-primary-600 text-white shadow-xs"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                গ্রুপ হিসাব
              </button>
            </div>
            <span className="text-[10px] text-primary-400 font-semibold cursor-pointer">সব দেখুন</span>
          </div>

          {/* Transactions List */}
          <div className="px-4 py-2 space-y-2 flex-1 overflow-hidden">
            {activeTab === "all" ? (
              <>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/50 border border-slate-800/70">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <ShoppingBag className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">আজকের বাজার (কাঁচাবাজার)</p>
                      <p className="text-[10px] text-slate-400">Personal • 10:30 AM</p>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-rose-400">- ৳ ১,৮৫০</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/50 border border-slate-800/70">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                      <Users className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">সাজেক ট্যুর বিল (Abir Paid)</p>
                      <p className="text-[10px] text-slate-400">Tour Group (4 Members)</p>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-emerald-400">+ ৳ ৩,৪০০</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/50 border border-slate-800/70">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                      <Coffee className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">ইভনিং কফি & স্ন্যাক্স</p>
                      <p className="text-[10px] text-slate-400">Food & Cafe • Yesterday</p>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-rose-400">- ৳ ৩২০</span>
                </div>
              </>
            ) : (
              <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">ধানমন্ডি মেস মিল ২০২৬</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-md font-semibold">Active</span>
                </div>
                <p className="text-[11px] text-slate-300">মোট মেম্বার: ৬ জন • মোট মিল খরচ: ৳ ২৪,৬০০</p>
                <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-primary-500 to-emerald-400" />
                </div>
                <div className="flex justify-between items-center text-[10px] pt-1">
                  <span className="text-slate-400">আপনার বর্তমান ব্যালেন্স:</span>
                  <span className="font-bold text-emerald-400">আপনি পাবেন ৳ ২,১৫০</span>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Nav Bar */}
          <div className="mt-auto px-6 py-2.5 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-between text-slate-400">
            <div className="flex flex-col items-center gap-0.5 text-primary-400">
              <Home className="h-4 w-4" />
              <span className="text-[8px] font-bold">Home</span>
            </div>
            <div className="flex flex-col items-center gap-0.5 hover:text-slate-200">
              <PieChart className="h-4 w-4" />
              <span className="text-[8px]">Analytics</span>
            </div>
            <div className="flex flex-col items-center gap-0.5 hover:text-slate-200">
              <Users className="h-4 w-4" />
              <span className="text-[8px]">Groups</span>
            </div>
            <div className="flex flex-col items-center gap-0.5 hover:text-slate-200">
              <Wallet className="h-4 w-4" />
              <span className="text-[8px]">Cards</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
