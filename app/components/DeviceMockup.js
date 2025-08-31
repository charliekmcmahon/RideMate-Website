"use client";
import { motion } from 'framer-motion';

export default function DeviceMockup({ src, alt, className = "", type = "iphone" }) {
  if (type === "iphone") {
    return (
      <motion.div 
        className={`relative ${className}`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* iPhone frame */}
        <div className="relative bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
          {/* Screen bezel */}
          <div className="bg-black rounded-[2.5rem] p-1">
            {/* Screen */}
            <div className="relative bg-white rounded-[2.2rem] overflow-hidden">
              {/* Dynamic Island */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-black rounded-full w-24 h-6 z-10"></div>
              
              {/* App screenshot */}
              <img 
                src={src} 
                alt={alt}
                className="w-full h-full object-cover rounded-[2.2rem]"
              />
            </div>
          </div>
          
          {/* Home indicator */}
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-white rounded-full w-32 h-1"></div>
        </div>
      </motion.div>
    );
  }

  // Simple device frame for other types
  return (
    <motion.div 
      className={`relative ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="relative bg-gray-100 dark:bg-gray-800 rounded-2xl p-3 shadow-2xl">
        <img 
          src={src} 
          alt={alt}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </motion.div>
  );
}
