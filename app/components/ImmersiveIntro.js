"use client";
import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AppIcon from './AppIcon';

export default function ImmersiveIntro({ duration = 3000 }) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setOpen(false), duration);
    const onKey = (e) => { 
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') setOpen(false); 
    };
    window.addEventListener('keydown', onKey);
    return () => { clearTimeout(t); window.removeEventListener('keydown', onKey); };
  }, [duration]);

  const handleClick = useCallback(() => setOpen(false), []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden cursor-pointer bg-white dark:bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          onClick={handleClick}
        >
          {/* Clean gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800" />

          {/* Center content with Apple-style simplicity */}
          <div className="relative z-10 flex h-full w-full items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col items-center gap-8 max-w-2xl mx-auto px-6"
            >
              {/* App Icon with subtle shadow */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative"
              >
                <div className="absolute inset-0 bg-black/5 dark:bg-white/5 rounded-full blur-2xl scale-150" />
                <AppIcon size="xl" />
              </motion.div>

              {/* Title with Apple typography */}
              <motion.h1
                className="text-6xl md:text-7xl font-semibold tracking-tight text-gray-900 dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              >
                RideMate
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="text-xl md:text-2xl font-normal text-gray-600 dark:text-gray-300 tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              >
                Like Strava, but for your motorbike
              </motion.p>

              {/* Minimal continue prompt */}
              <motion.div
                className="mt-8 text-sm text-gray-400 dark:text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  Tap to continue
                </motion.span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
