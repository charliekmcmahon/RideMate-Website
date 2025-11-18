"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Map, Shield, History, Smartphone, Navigation, BarChart3 } from 'lucide-react';
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
    <div ref={containerRef} className="bg-white dark:bg-black overflow-x-hidden">
      
      {/* Hero Section */}
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
          <source src="https://r2.getridemate.app/RideMateRide.mp4" type="video/mp4" />
          <source src="https://r2.getridemate.app/RideMateRide.mp4" type="video/quicktime" />
        </video>

        {/* Video Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

        {/* Video Controls */}
        <motion.div 
          className="absolute bottom-6 right-6 z-20 bg-black/50 backdrop-blur-md rounded-full px-3 py-2 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2, ease: [0.25, 0.1, 0.25, 1] }}
        >
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
          className="relative z-10 text-center max-w-5xl mx-auto"
        >
          <motion.div
            className="flex flex-col items-center justify-center gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <AppIcon size="lg" />
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-6xl font-bold tracking-tight text-white leading-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Like Strava, but for <br/> your motorbike or car
            </motion.h1>
          </motion.div>

          <motion.p 
            className="text-xl md:text-2xl font-medium tracking-tight text-gray-300 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            The privacy-conscious motorbike & car tracker. Document your journeys, capture every detail, and own your history.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.a 
              href="https://apps.apple.com/au/app/ridemate-ride-tracking/id6744748216?itscg=30200&itsct=apps_box_link&mttnsubad=6744748216" 
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <img 
                className="h-14 w-auto" 
                src="/AppStoreBadge-Light.svg" 
                alt="Download on the App Store" 
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Features Grid */}
      <section className="py-32 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              Privacy-First Exploration
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              RideMate empowers you to instantly start tracking and revisit your history with visual maps and insightful statistics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-blue-500" />}
              title="Privacy First"
              delay={0}
            >
              No third-party tracking. Your data stays on your device or personal iCloud.
            </FeatureCard>
            <FeatureCard
              icon={<BarChart3 className="w-8 h-8 text-purple-500" />}
              title="Detailed Stats"
              delay={0.1}
            >
              Capture distance, speed, elevation changes, and more with precision.
            </FeatureCard>
            <FeatureCard
              icon={<Map className="w-8 h-8 text-green-500" />}
              title="Visual Maps"
              delay={0.2}
            >
              Revisit your history with beautiful, interactive visual maps of every route.
            </FeatureCard>
            <FeatureCard
              icon={<Smartphone className="w-8 h-8 text-orange-500" />}
              title="Secure Storage"
              delay={0.3}
            >
              Robust security of your iPhone ensures your ride history is yours alone.
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* App Showcase - Alternating Sections */}
      <section className="py-20 bg-white dark:bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          
          {/* Feature 1: Start Tracking */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="flex-1 space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                <Navigation className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Effortless Tracking
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Start your adventure with a single tap. Whether you're on a motorbike or in a car, RideMate is ready to capture every moment of your journey.
              </p>
            </motion.div>
            <motion.div 
              className="flex-1 relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
              <img 
                src="/screenshots-mockups/ridemate-initial-view.png" 
                alt="RideMate Initial View" 
                className="relative z-10 w-full max-w-sm mx-auto drop-shadow-2xl"
              />
            </motion.div>
          </div>

          {/* Feature 2: Ride or Drive */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <motion.div 
              className="flex-1 space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center justify-center p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                <Smartphone className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Ride or Drive
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Tailored for both motorbike rides and car drives. Choose your mode and let RideMate handle the rest, optimizing tracking for your vehicle type.
              </p>
            </motion.div>
            <motion.div 
              className="flex-1 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
              <img 
                src="/screenshots-mockups/choose-trip-type-rideordrive.png" 
                alt="Choose Trip Type" 
                className="relative z-10 w-full max-w-sm mx-auto drop-shadow-2xl"
              />
            </motion.div>
          </div>

          {/* Feature 3: Live Stats */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="flex-1 space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center justify-center p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                <BarChart3 className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Live Insights
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Monitor your progress in real-time. See your speed, distance, and duration at a glance, keeping you informed without distraction.
              </p>
            </motion.div>
            <motion.div 
              className="flex-1 relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
              <img 
                src="/screenshots-mockups/en-route-tracking.png" 
                alt="En Route Tracking" 
                className="relative z-10 w-full max-w-sm mx-auto drop-shadow-2xl"
              />
            </motion.div>
          </div>

           {/* Feature 4: History */}
           <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <motion.div 
              className="flex-1 space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center justify-center p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl">
                <History className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Your Personal Archive
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Curate a precise archive of every road you conquer. Revisit your history with detailed maps and statistics for every trip.
              </p>
            </motion.div>
            <motion.div 
              className="flex-1 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-bl from-orange-500/20 to-red-500/20 rounded-full blur-3xl"></div>
              <img 
                src="/screenshots-mockups/ride-history-view.png" 
                alt="Ride History" 
                className="relative z-10 w-full max-w-sm mx-auto drop-shadow-2xl"
              />
            </motion.div>
          </div>

        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-32 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="/screenshots-mockups/your-data-your-choice.png" 
                alt="Privacy Settings" 
                className="w-full max-w-md mx-auto drop-shadow-2xl"
              />
            </motion.div>
            <motion.div 
              className="flex-1 space-y-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
                Your Data, Your Choice.
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                We believe your location data is sensitive and personal. That's why RideMate is built with a privacy-first architecture.
              </p>
              <ul className="space-y-4">
                {[
                  "No account required to start",
                  "Data stored locally on your device",
                  "Optional personal iCloud Sync",
                  "No third-party tracking or analytics",
                  "Export your data anytime"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <Shield className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-white dark:bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/50 dark:to-blue-900/10"></div>
        <motion.div 
          className="max-w-4xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">
            Ready to Ride?
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
             Join the multitude of riders and drivers who trust RideMate to record their adventures. Download now and start recording your trips.
          </p>
          
          <motion.a 
            href="https://apps.apple.com/au/app/ridemate-ride-tracking/id6744748216?itscg=30200&itsct=apps_box_link&mttnsubad=6744748216" 
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
