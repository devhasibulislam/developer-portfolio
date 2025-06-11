"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TypewriterRole() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Full Stack Developer",
    "Software Engineer",
    "Systems Designer",
    "AI Enthusiast"
  ];

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 120);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  return (
    <motion.div
      className="relative text-xl md:text-2xl mb-6 h-16 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      {/* Floating Orbital Elements */}
      <motion.div
        className="absolute top-0 right-16 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"
        animate={{
          rotate: 360,
          scale: [1, 1.3, 1],
        }}
        transition={{
          rotate: { duration: 10, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity }
        }}
        style={{
          transformOrigin: "-60px 30px"
        }}
      />

      <motion.div
        className="absolute bottom-2 left-12 w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg"
        animate={{
          rotate: -360,
          scale: [1, 1.4, 1],
        }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity, delay: 1 }
        }}
        style={{
          transformOrigin: "80px -20px"
        }}
      />

      {/* Enhanced Role Text Container */}
      <motion.div
        className="relative overflow-hidden rounded-2xl px-6 py-3 min-w-[280px]"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
      >
        {/* Animated Background Layers */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          animate={{
            background: [
              "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)",
              "linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #f59e0b 100%)",
              "linear-gradient(135deg, #ec4899 0%, #f59e0b 50%, #3b82f6 100%)",
              "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* Shimmer Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-2xl"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Geometric Pattern Overlay */}
        <motion.div
          className="absolute inset-0 opacity-20 rounded-2xl"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-1 left-2 w-1 h-1 bg-white rounded-full" />
          <div className="absolute top-3 right-3 w-0.5 h-0.5 bg-white rounded-full" />
          <div className="absolute bottom-2 left-4 w-1 h-1 bg-white rounded-full" />
          <div className="absolute bottom-1 right-1 w-0.5 h-0.5 bg-white rounded-full" />
        </motion.div>

        {/* Role Text */}
        <div className="relative z-10 text-center">
          <motion.span
            className="text-white font-semibold text-left inline-block min-w-[200px]"
            animate={{
              textShadow: [
                "0 0 10px rgba(255,255,255,0.3)",
                "0 0 20px rgba(255,255,255,0.6)",
                "0 0 10px rgba(255,255,255,0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {displayText}
            <motion.span
              className="inline-block w-0.5 h-6 bg-white/80 ml-1"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.span>
        </div>

        {/* Pulse Border Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl border border-white/20"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </motion.div>
  );
} 