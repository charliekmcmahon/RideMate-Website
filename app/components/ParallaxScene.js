"use client";
import { useScroll, useTransform, motion } from 'framer-motion';

export default function ParallaxScene() {
  const { scrollY } = useScroll();
  
  // Subtle parallax for Apple-like experience
  const yBackground = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 500], [0.05, 0]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Clean gradient background */}
      <motion.div 
        style={{ y: yBackground, opacity }}
        className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white/30 to-transparent dark:from-gray-900/50 dark:via-gray-800/30 dark:to-transparent"
      />

      {/* Subtle grid pattern */}
      <motion.div 
        style={{ 
          y: yBackground,
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
      />
    </div>
  );
}
