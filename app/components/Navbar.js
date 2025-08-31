"use client";
import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import AppIcon from './AppIcon';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200/20 dark:border-gray-800/20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Global">
        <div className="flex flex-1">
          <div className="hidden lg:flex lg:gap-x-8">
            <Link href="/privacy" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
              Privacy
            </Link>
            <Link href="/support" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
              Support
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button 
              type="button" 
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300" 
              onClick={() => setOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
        
        <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
          <span className="sr-only">RideMate</span>
          <AppIcon size="sm" />
          <span className="hidden sm:block text-lg font-semibold tracking-tight text-gray-900 dark:text-white">RideMate</span>
        </Link>
        
        <div className="flex flex-1 justify-end items-center gap-3">
          <button 
            aria-label="Toggle dark mode" 
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} 
            className="rounded-full p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
          >
            {resolvedTheme === 'dark' ? (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
              </svg>
            ) : (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd"/>
              </svg>
            )}
          </button>
          <a 
            href="https://apps.apple.com/au/app/ridemate-ride-tracking/id6744748216?itscg=30200&itsct=apps_box_link&mttnsubad=6744748216" 
            target="_blank" 
            className="hidden sm:inline-block hover:scale-105 transition-transform duration-200"
          >
            <img className="h-9 w-auto dark:hidden" src="/AppStoreBadge-Dark.svg" alt="Download on the App Store" />
            <img className="h-9 w-auto hidden dark:block" src="/AppStoreBadge-Light.svg" alt="Download on the App Store" />
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white dark:bg-black" onClick={() => setOpen(false)}>
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800">
            <button 
              type="button" 
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300" 
              onClick={() => setOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <AppIcon size="sm" />
              <span className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">RideMate</span>
            </Link>
            <div /> {/* Spacer */}
          </div>
          <div className="px-6 py-6 space-y-6">
            <Link href="/" className="block text-lg font-medium text-gray-900 dark:text-white">Home</Link>
            <Link href="/privacy" className="block text-lg font-medium text-gray-900 dark:text-white">Privacy</Link>
            <Link href="/support" className="block text-lg font-medium text-gray-900 dark:text-white">Support</Link>
            <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
              <a 
                href="https://apps.apple.com/au/app/ridemate-ride-tracking/id6744748216?itscg=30200&itsct=apps_box_link&mttnsubad=6744748216" 
                target="_blank" 
                className="inline-block"
              >
                <img className="h-12 w-auto dark:hidden" src="/AppStoreBadge-Dark.svg" alt="Download on the App Store" />
                <img className="h-12 w-auto hidden dark:block" src="/AppStoreBadge-Light.svg" alt="Download on the App Store" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
