'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/button';
import { DownloadModal } from '@/components/shared/download-modal';
import { Download, Menu, X, ChevronRight } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const sectionIds = [
      'features',
      'how-it-works',
      'advantages',
      'technologies',
      'download',
    ];

    const handleScroll = () => {
      // 1. Header background blur on scroll
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 2. Active Section Detection
      const scrollPosition = window.scrollY + 180;
      let current = '';

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = id;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/85 dark:bg-slate-950/85 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-800/60 shadow-sm shadow-slate-900/5 py-3'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-11">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-10 w-10 shrink-0">
                <Image
                  src="/logo.png"
                  alt="KotoGelo Logo"
                  width={40}
                  height={40}
                  priority
                  className="h-10 w-10 rounded-xl object-contain shadow-md shadow-primary-600/20 group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5 leading-none">
                  KotoGelo
                </span>
                <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 hidden sm:inline mt-0.5">
                  Smart Expense & Bill Splitter
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links with Fixed Height (Zero Layout Shift) */}
            <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/80 p-1 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 backdrop-blur-md shadow-inner">
              {siteConfig.navItems.map((item) => {
                const sectionKey = item.href.replace('#', '');
                const isActive = activeSection === sectionKey;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`h-9 px-3.5 rounded-xl text-xs sm:text-sm font-medium flex items-center justify-center border transition-colors duration-150 select-none ${
                      isActive
                        ? 'border-primary-500/25 dark:border-primary-400/30 bg-primary-500/10 dark:bg-primary-500/20 text-primary-700 dark:text-primary-300 font-semibold'
                        : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Action */}
            <div className="hidden sm:flex items-center gap-3">
              <Button
                onClick={() => setIsDownloadModalOpen(true)}
                variant="gradient"
                size="default"
                className="gap-2 h-10"
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
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl px-6 py-5 space-y-4 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-1.5">
              {siteConfig.navItems.map((item) => {
                const sectionKey = item.href.replace('#', '');
                const isActive = activeSection === sectionKey;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between p-3 rounded-xl text-sm font-semibold border transition ${
                      isActive
                        ? 'border-primary-500/25 bg-primary-500/10 text-primary-600 dark:text-primary-300'
                        : 'border-transparent text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  </Link>
                );
              })}
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
