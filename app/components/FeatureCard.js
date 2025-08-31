"use client";
import { motion } from 'framer-motion';

export default function FeatureCard({ icon, title, children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      whileHover={{ 
        y: -4,
        transition: { duration: 0.2 }
      }}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
    >
      {/* Icon */}
      <motion.div 
        className="flex items-center justify-center w-14 h-14 mb-6 rounded-xl bg-gray-50 dark:bg-gray-700 group-hover:scale-105 transition-transform duration-200"
      >
        {icon}
      </motion.div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {children}
      </p>
    </motion.div>
  );
}
