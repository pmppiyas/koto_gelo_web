import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Heart, ShieldCheck, Github, Smartphone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-950 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-primary-600 to-emerald-500 p-0.5 shadow-md">
              <div className="h-full w-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span className="text-white font-black text-sm">ক</span>
              </div>
            </div>
            <div>
              <p className="font-bold text-slate-900 dark:text-white text-sm">
                KotoGelo (কত গেলো?)
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Simple, Private & Powerful Expense Tracking for Everyone
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600 dark:text-slate-400">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-primary-600 dark:hover:text-white transition"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-500">
            <span>© {new Date().getFullYear()} KotoGelo. Made with ❤️ in BD.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
