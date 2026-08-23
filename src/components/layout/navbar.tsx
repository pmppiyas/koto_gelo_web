"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { DownloadModal } from "@/components/shared/download-modal";
import {
  Download,
  Menu,
  X,
  Wallet,
  Sparkles,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-800/60 shadow-sm shadow-slate-900/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="h-10 w-10 rounded-2xl bg-gradient-to-tr from-primary-600 via-indigo-600 to-emerald-500 p-0.5 shadow-md shadow-primary-600/20 group-hover:shadow-primary-600/40 transition">
                <div className="h-full w-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                  <span className="text-white font-black text-base tracking-tight">ক</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
                  KotoGelo <span className="text-xs px-1.5 py-0.5 rounded-md bg-primary-500/10 text-primary-600 dark:text-primary-400 font-semibold">কত গেলো?</span>
                </span>
                <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 hidden sm:inline">
                  Smart Expense & Bill Splitter
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 bg-slate-100/70 dark:bg-slate-900/70 p-1.5 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-md">
              {siteConfig.navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 rounded-xl text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 transition"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Action */}
            <div className="hidden sm:flex items-center gap-3">
              <Button
                onClick={() => setIsDownloadModalOpen(true)}
                variant="gradient"
                size="default"
                className="gap-2"
              >
                <Download className="h-4 w-4" />
                <span>Download App</span>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden h-10 w-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl px-6 py-5 space-y-4 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-2">
              {siteConfig.navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                </Link>
              ))}
            </nav>
            <div className="pt-2">
              <Button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsDownloadModalOpen(true);
                }}
                variant="gradient"
                className="w-full justify-center gap-2"
              >
                <Download className="h-4 w-4" />
                <span>Download KotoGelo APK</span>
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Download Modal Trigger */}
      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />
    </>
  );
}
