"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Download, Smartphone, QrCode, X, CheckCircle2, Apple, ExternalLink, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReleaseInfo } from "@/hooks/use-release-info";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  const { info } = useReleaseInfo();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Dialog Box */}
      <div className="relative w-full max-w-lg rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 h-9 w-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center mb-6">
          <div className="relative h-14 w-14 mx-auto mb-3">
            <Image
              src="/logo.png"
              alt="KotoGelo App Icon"
              width={56}
              height={56}
              className="h-14 w-14 rounded-2xl object-contain shadow-lg shadow-primary-600/30"
            />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            Download KotoGelo App
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            আপনার ফোনে হিসাব রাখার সেরা অ্যাপটি এখনই ইনস্টল করুন
          </p>
        </div>

        <div className="space-y-3">
          {/* Direct APK Download */}
          <a
            href={siteConfig.links.apkDirect}
            download
            className="flex items-center justify-between p-4 rounded-2xl border-2 border-primary-500/40 bg-primary-50/50 dark:bg-primary-950/30 hover:border-primary-500 transition group"
          >
            <div className="flex items-center gap-3.5">
              <div className="h-11 w-11 rounded-xl bg-primary-600 text-white flex items-center justify-center shadow-md shadow-primary-600/30">
                <Download className="h-5 w-5 group-hover:-translate-y-0.5 transition" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                    Direct Android APK ({info.version})
                  </h4>
                  <span className="text-[10px] bg-primary-600 text-white px-2 py-0.5 rounded-full font-semibold">
                    {info.sizeFormatted} • Latest
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  ইনস্ট্যান্ট ডাউনলোড করুন • অটো-আপডেট ব্যাকড
                </p>
              </div>
            </div>
            <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-primary-600 transition" />
          </a>

          {/* Google Play Store */}
          <a
            href={siteConfig.links.playstore}
            className="flex items-center justify-between p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition group"
          >
            <div className="flex items-center gap-3.5">
              <div className="h-11 w-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-600/30">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.793 12 3.61 22.186a2.372 2.372 0 0 1-.61-1.636V3.45c0-.623.226-1.196.609-1.636zm11.24 11.242l2.368 2.368-12.784 7.38 10.416-9.748zm0-2.112L4.433 1.196l12.784 7.38-2.368 2.368zm1.488 1.056l4.08 2.355c1.07.618 1.07 1.636 0 2.254l-4.08 2.355-2.073-2.074 2.073-2.89z" />
                </svg>
              </div>
              <div className="text-left">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                  Google Play Store
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Android 8.0 or higher
                </p>
              </div>
            </div>
            <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition" />
          </a>

          {/* iOS App Store */}
          <div className="flex items-center justify-between p-4 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-900/30 opacity-75">
            <div className="flex items-center gap-3.5">
              <div className="h-11 w-11 rounded-xl bg-slate-700 text-white flex items-center justify-center">
                <Apple className="h-5 w-5" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                    Apple iOS (App Store)
                  </h4>
                  <span className="text-[10px] bg-amber-500/20 text-amber-600 dark:text-amber-400 px-2 py-0.5 rounded-full font-semibold">
                    Coming Soon
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  iOS & iPadOS version under review
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
            <CheckCircle2 className="h-4 w-4" /> 100% Free & Open Source
          </div>
          <span>Offline Ready</span>
        </div>
      </div>
    </div>
  );
}
