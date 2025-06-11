"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <h2 className="text-2xl font-bold mb-6">About</h2>
      <div className="max-w-none">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Hello, World! I am Hasibul Islam — a passionate Full Stack Developer & UI/UX enthusiast
          dedicated to creating high-performance, user-centric software solutions with intuitive and engaging designs.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          With 5+ years of experience, I specialize in building scalable web and mobile applications using
          React, Next.js, TypeScript, and modern development technologies. I thrive on turning complex problems
          into elegant solutions that users love.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Beyond work, I love exploring emerging technologies, contributing to open-source projects, and
          mentoring aspiring developers. I believe in continuous learning and staying at the forefront of
          technological innovation.
        </p>
      </div>
    </motion.section>
  );
} 