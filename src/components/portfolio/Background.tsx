"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Background() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reduce particle count on mobile
  const particleCount = isMobile ? 5 : 12;

  // Reduce animation complexity on mobile
  const animationConfig = isMobile
    ? { duration: 12, ease: "linear" }
    : { duration: 8, ease: "easeInOut" };

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-black" />

      {/* Animated gradient orbs - reduced blur on mobile */}
      <motion.div
        className={`absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-500/20 dark:from-blue-500/30 dark:to-purple-600/30 rounded-full -z-10 ${isMobile ? 'blur-xl' : 'blur-3xl'
          }`}
        animate={isMobile ? {
          x: [0, 50, 0],
          y: [0, -25, 0],
        } : {
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          ...animationConfig,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{ willChange: 'transform' }}
      />

      <motion.div
        className={`absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-300/15 to-blue-400/15 dark:from-cyan-400/25 dark:to-blue-500/25 rounded-full ${isMobile ? 'blur-lg' : 'blur-3xl'
          }`}
        animate={isMobile ? {
          x: [0, -40, 0],
          y: [0, 30, 0],
        } : {
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: animationConfig.duration + 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: animationConfig.ease,
        }}
        style={{ willChange: 'transform' }}
      />

      {!isMobile && (
        <motion.div
          className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-r from-purple-400/15 to-pink-400/15 dark:from-purple-500/20 dark:to-pink-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 120, 0],
            y: [0, -80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{ willChange: 'transform' }}
        />
      )}

      {/* Reduced floating particles */}
      {Array.from({ length: particleCount }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/60 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            willChange: 'transform, opacity',
          }}
          animate={{
            y: [0, isMobile ? -50 : -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 2 + 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "linear",
          }}
        />
      ))}

      {/* Simplified grid pattern overlay - only on desktop */}
      {!isMobile && (
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.015]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
        </div>
      )}

      {/* Simplified radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-white/20 dark:to-black/15" />

      {/* Remove noise texture on mobile for better performance */}
      {!isMobile && (
        <div
          className="absolute inset-0 opacity-[0.01] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      )}
    </div>
  );
} 