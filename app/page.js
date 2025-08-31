"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import FeatureCard from './components/FeatureCard';
import AppIcon from './components/AppIcon';

export default function HomePage() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);

      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);

      return () => {
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
      };
    }
  }, []);

  // Pause video when scrolling down
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((progress) => {
      if (progress > 0.1 && isPlaying) {
        const video = videoRef.current;
        if (video && !video.paused) {
          video.pause();
        }
      }
    });

    return unsubscribe;
  }, [scrollYProgress, isPlaying]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

  return (
    <div ref={containerRef} className="bg-white dark:bg-black">
      
      {/* Hero Section - Apple Style */}
      <motion.section 
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative min-h-screen flex items-center justify-center px-6 pt-16 overflow-hidden"
      >
        {/* Video Background */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/RideMateRide2.mov" type="video/mp4" />
          <source src="/RideMateRide2.mov" type="video/quicktime" />
        </video>

        {/* Video Overlay for darkening */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Video Controls */}
        <motion.div 
          className="absolute bottom-6 right-6 z-20 bg-black/50 backdrop-blur-md rounded-full px-3 py-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Play/Pause Button */}
          <motion.button
            className="w-8 h-8 flex items-center justify-center text-white hover:text-blue-400 transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={togglePlay}
          >
            {isPlaying ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </motion.button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          {/* Main headline with icon */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <AppIcon size="lg" />
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white leading-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            >
              RideMate
            </motion.h1>
          </motion.div>

          {/* Tagline */}
          <motion.p 
            className="text-2xl md:text-2xl lg:text-2xl font-medium tracking-tight text-gray-300 mb-8 "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Like Strava, but for your motorbike rides.
          </motion.p>

          {/* CTA buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.a 
              href="https://apps.apple.com/au/app/ridemate-ride-tracking/id6744748216?itscg=30200&itsct=apps_box_link&mttnsubad=6744748216" 
              target="_blank"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <img 
                className="h-12 w-auto mt-12" 
                src="/AppStoreBadge-Light.svg" 
                alt="Download on the App Store" 
              />
            </motion.a>
          </motion.div>

          {/* Disclaimer */}
          <motion.p 
            className="text-sm hidden text-gray-400 dark:text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            *STRAVA is a trademark of Strava Inc. RideMate is not affiliated with Strava.
          </motion.p>
        </motion.div>

        
      </motion.section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
              Everything you need.
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-normal">
              Simple, powerful, and built with your privacy in mind.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 text-blue-600 dark:text-blue-400">
                  <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                </svg>
              }
              title="Precision Tracking"
              delay={0}
            >
              Track every ride with military-grade GPS accuracy. Distance, speed, elevation, and route mapping.
            </FeatureCard>
            
            <FeatureCard
              icon={
                <svg className="size-8 text-green-600 dark:text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clipRule="evenodd" />
                </svg>
              }
              title="Privacy First"
              delay={0.1}
            >
              Your data stays yours. Local storage with optional iCloud sync. No tracking, no ads, no compromises.
            </FeatureCard>
            
            <FeatureCard
              icon={
                <svg className="size-8 text-purple-600 dark:text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.414A2 2 0 0 0 15.414 6L12 2.586A2 2 0 0 0 10.586 2H6Zm1 8a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H7Z" clipRule="evenodd" />
                </svg>
              }
              title="Ride History"
              delay={0.2}
            >
              Your personal riding archive. Relive every journey and track your progress over time.
            </FeatureCard>
          </div>

          {/* Screenshots section - clean Apple style */}
          <motion.div 
            className="mt-32"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Section header */}
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
                See it in action
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Experience the clean interface and powerful features that make RideMate the perfect companion for every ride.
              </p>
            </div>

            {/* Clean image showcase */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
              {/* First image - Ride History */}
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative group"
              >
                <img 
                  src="/ridehistory-portrait.png" 
                  alt="Ride history interface"
                  className="relative w-64 lg:w-72 drop-shadow-2xl"
                />
                
                {/* Caption */}
                <div className="text-center mt-6">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Ride History</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Track every mile, every moment</p>
                </div>
              </motion.div>
              
              {/* Second image - Privacy Controls */}
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                className="relative group"
              >
                <img 
                  src="/datachoice.png" 
                  alt="Privacy controls interface"
                  className="relative w-64 lg:w-72 drop-shadow-2xl"
                />
                
                {/* Caption */}
                <div className="text-center mt-6">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Privacy First</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Your data, your control</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* App Showcase Section */}
      <section className="py-32 px-6 bg-white dark:bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20 pb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
              Designed for riders.
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-normal">
              Every detail crafted to enhance your riding experience.
            </p>
          </motion.div>

          {/* Large hero showcase */}
          <motion.div 
            className="relative flex justify-center items-center mb-32"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-black dark:to-gray-900 rounded-3xl -m-20"></div>
            
            {/* Main device image */}
            <div className="relative z-10">
              <img 
                src="/ride.png" 
                alt="RideMate main interface"
                className="w-80 lg:w-96 drop-shadow-2xl"
              />
            </div>

            {/* Floating UI elements */}
            <motion.div 
              className="absolute top-20 left-10 lg:left-20"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">GPS Active</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="absolute bottom-20 right-10 lg:right-20"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Today's Ride</div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">47.2 km</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-white dark:bg-black">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 dark:text-white mb-8 tracking-tight">
            Ready to ride?
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-normal">
             Download RideMate to track your adventures with complete privacy.
          </p>
          
          <motion.a 
            href="https://apps.apple.com/au/app/ridemate-ride-tracking/id6744748216?itscg=30200&itsct=apps_box_link&mttnsubad=6744748216" 
            target="_blank"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <img 
              className="h-16 w-auto dark:hidden" 
              src="/AppStoreBadge-Dark.svg" 
              alt="Download on the App Store" 
            />
            <img 
              className="h-16 w-auto hidden dark:block" 
              src="/AppStoreBadge-Light.svg" 
              alt="Download on the App Store" 
            />
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
