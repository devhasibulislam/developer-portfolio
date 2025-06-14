"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeader from "./SectionHeader";

type Certificate = {
  title: string;
  provider: string;
  platform: string;
  issued: string;
  credentialId: string;
  credentialUrl: string;
  skills: string[];
  providerIcon: string;
  platformIcon: string;
  color: string;
  providerIconSize: number;
  platformIconSize: number;
};

const certifications: Certificate[] = [
  {
    title: "API Orchestration - Associate",
    provider: "Apollo Odyssey",
    platform: "Apollo GraphQL",
    issued: "Jun 13, 2025",
    credentialId: "93e83ca0-865e-4...",
    credentialUrl:
      "https://www.apollographql.com/tutorials/certifications/93e83ca0-865e-4b6b-87a3-ec411ec1c1d6",
    skills: ["API", "Testing", "Scripting", "GraphQL", "WebSocket"],
    providerIcon: "simple-icons:apollographql",
    platformIcon: "logos:apollostack",
    color: "from-blue-500 to-blue-600",
    providerIconSize: 64,
    platformIconSize: 64,
  },
  {
    title: "Postman API Fundamentals Student Expert",
    provider: "Postman Academy",
    platform: "Postman",
    issued: "Jun 11, 2025",
    credentialId: "66d570e3f3a8cf6c...",
    credentialUrl:
      "https://api.badgr.io/public/assertions/p2N8_01PS36rWCLXbLH3Sg?identity__email=devhasibulislam%40gmail.com",
    skills: ["API", "Testing", "Scripting", "Postman", "Student"],
    providerIcon: "lineicons:postman",
    platformIcon: "logos:postman",
    color: "from-blue-500 to-blue-600",
    providerIconSize: 64,
    platformIconSize: 88,
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    provider: "freeCodeCamp",
    platform: "freeCodeCamp",
    issued: "March 20, 2023",
    credentialId: "HASIBULISLAM999",
    credentialUrl:
      "https://freecodecamp.org/certification/hasibulislam999/javascript-algorithms-and-data-structures",
    skills: ["JavaScript", "Algorithms", "TypeScript", "Data Structures"],
    providerIcon: "fa6-brands:free-code-camp",
    platformIcon: "logos:typescript",
    color: "from-blue-500 to-blue-600",
    providerIconSize: 64,
    platformIconSize: 88,
  },
  {
    title: "Complete Web Development of MERN Stack",
    provider: "Programming Hero",
    platform: "Programming Hero",
    issued: "December 28, 2022",
    credentialId: "WEB5-3489",
    credentialUrl:
      "https://drive.google.com/file/d/1JXxzs6CqPP61TrMn_C9PczUcb8qwHLI1/view?usp=sharing",
    skills: ["JavaScript", "Database", "Deployment", "Full Stack Development"],
    providerIcon: "lineicons:monitor-code",
    platformIcon: "logos:web-dev",
    color: "from-blue-500 to-blue-600",
    providerIconSize: 64,
    platformIconSize: 88,
  },
  {
    title: "Communication Foundation",
    provider: "LinkedIn Learning",
    platform: "LinkedIn",
    issued: "July 30, 2022",
    credentialId: "323b245dd5c9a48...",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/323b245dd5c9a485271a8caa70fe5ad4234530a8c081870cd59a410f3e9f33eb?trk=share_certificate",
    skills: [
      "Communication",
      "Lead Generation",
      "English",
      "Social Media",
      "LinkedIn",
    ],
    providerIcon: "lineicons:linkedin",
    platformIcon: "logos:linkedin",
    color: "from-blue-500 to-blue-600",
    providerIconSize: 64,
    platformIconSize: 88,
  },
  {
    title: "Effective Listening",
    provider: "LinkedIn Learning",
    platform: "LinkedIn",
    issued: "July 30, 2022",
    credentialId: "2cf7e31871d89f3...",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/2cf7e31871d89f34c0057014e7b1e531a76067dbd3c347372a2d795ae1419882?trk=share_certificate",
    skills: ["Marketing", "LinkedIn", "Listening", "Speaking", "English"],
    providerIcon: "lineicons:linkedin",
    platformIcon: "logos:linkedin",
    color: "from-blue-500 to-blue-600",
    providerIconSize: 64,
    platformIconSize: 88,
  },
  {
    title: "Responsive Web Design",
    provider: "freeCodeCamp",
    platform: "freeCodeCamp",
    issued: "December 25, 2021",
    credentialId: "HASIBULISLAM999",
    credentialUrl:
      "https://freecodecamp.org/certification/hasibulislam999/responsive-web-design",
    skills: ["HTML", "CSS", "JavaScript", "Design", "Accessibility"],
    providerIcon: "fa6-brands:free-code-camp",
    platformIcon: "logos:typescript",
    color: "from-blue-500 to-blue-600",
    providerIconSize: 64,
    platformIconSize: 88,
  },
];

export default function CertificationsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const floatVariants = {
    animate: {
      y: [-10, 10, -10],
      x: [-5, 5, -5],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <motion.section
        id="certifications"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="mb-16 md:mb-24 lg:mb-32 relative overflow-hidden"
      >
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            variants={floatVariants}
            animate="animate"
            className="absolute top-20 right-16 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-2xl"
          />
          <motion.div
            variants={floatVariants}
            animate="animate"
            style={{ animationDelay: "3s" }}
            className="absolute bottom-16 left-16 w-48 h-48 bg-gradient-to-br from-green-400/25 to-cyan-400/25 rounded-full blur-2xl"
          />
          <motion.div
            variants={floatVariants}
            animate="animate"
            style={{ animationDelay: "6s" }}
            className="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-br from-pink-400/30 to-orange-400/30 rounded-full blur-xl"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          <SectionHeader
            tagText="Professional Credentials"
            tagIcon="solar:verified-check-bold"
            heading="Certifications"
            description="As a self-learner I've only few certificates that I've completed so far. Most of the things I learned from talking with seniors, YouTube & search engines"
            showUnderline={false}
            centered={true}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="group h-full"
              >
                <div className="h-full bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-300 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 overflow-hidden">
                  {/* Header with gradient - keeping this as requested */}
                  <div
                    className={`h-20 flex items-center justify-between bg-slate-100 dark:bg-slate-900 px-4 ${cert.color} relative overflow-hidden`}
                  >
                    <div className="flex items-center justify-end mr-4 gap-1">
                      <Icon
                        icon={cert.providerIcon}
                        className=""
                        width={cert.providerIconSize}
                        height={cert.providerIconSize}
                      />
                      <span className="text-black dark:text-white text-sm font-bold">
                        ×
                      </span>
                      <Icon
                        icon={cert.platformIcon}
                        className=""
                        width={cert.platformIconSize}
                        height={cert.platformIconSize}
                      />
                    </div>
                    <div className="flex items-center justify-start gap-0">
                      <div className="relative w-8 h-8 rounded-lg flex items-center justify-center">
                        <div className="absolute top-1/5 left-1/4 w-1/2 h-1/2 bg-white rounded-lg -z-0"></div>
                        <Icon
                          icon="solar:verified-check-bold"
                          className="text-blue-500 z-10"
                          width={26}
                          height={26}
                        />
                      </div>
                      <span className="text-blue-500 text-sm font-medium">
                        Verified
                      </span>
                    </div>
                  </div>

                  <div className="p-6 relative">
                    {/* Subtle decorative elements */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"></div>
                    <div className="absolute top-6 right-8 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse delay-500"></div>

                    {/* Certificate Title */}
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-gray-700 dark:group-hover:text-gray-100 transition-colors line-clamp-1">
                      {cert.title}
                    </h3>

                    {/* Provider Info */}
                    <div className="space-y-3 mb-6 bg-gray-50/50 dark:bg-gray-800/30 rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/30">
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-md flex items-center justify-center">
                          <Icon
                            icon="solar:buildings-2-bold"
                            className="text-white"
                            width={12}
                            height={12}
                          />
                        </div>
                        <span className="text-gray-600 dark:text-gray-400 font-medium">
                          Provider:
                        </span>
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {cert.provider}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-purple-600 rounded-md flex items-center justify-center">
                          <Icon
                            icon="solar:monitor-smartphone-bold"
                            className="text-white"
                            width={12}
                            height={12}
                          />
                        </div>
                        <span className="text-gray-600 dark:text-gray-400 font-medium">
                          Platform:
                        </span>
                        <span className="font-semibold text-blue-600 dark:text-blue-400">
                          {cert.platform}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-green-600 rounded-md flex items-center justify-center">
                          <Icon
                            icon="solar:calendar-bold"
                            className="text-white"
                            width={12}
                            height={12}
                          />
                        </div>
                        <span className="text-gray-600 dark:text-gray-400 font-medium">
                          Issued:
                        </span>
                        <span className="font-semibold text-gray-700 dark:text-gray-300">
                          {cert.issued}
                        </span>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-4 h-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-md flex items-center justify-center">
                          <Icon
                            icon="solar:star-bold"
                            className="text-white"
                            width={10}
                            height={10}
                          />
                        </div>
                        <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                          Skills Validated
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-200/80 dark:from-gray-700/50 dark:to-gray-800/50 text-gray-800 dark:text-gray-200 rounded-lg text-xs font-medium border border-gray-300/60 dark:border-gray-600/50 hover:from-blue-50 hover:to-blue-100 dark:hover:from-blue-900/20 dark:hover:to-blue-800/20 hover:border-blue-300/60 dark:hover:border-blue-600/50 hover:text-blue-800 dark:hover:text-blue-200 transition-all duration-300 cursor-default shadow-sm hover:shadow-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Credential ID */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200/60 dark:border-gray-700/50">
                      <div className="flex items-center gap-2">
                        <span>
                          <Icon
                            icon="solar:arrow-right-up-bold"
                            className="text-green-500"
                            width={14}
                            height={14}
                          />
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium line-clamp-1 w-40">
                          ID:{" "}
                          <span className="text-gray-700 dark:text-gray-300 font-mono">
                            {cert.credentialId}
                          </span>
                        </span>
                      </div>
                      <Link
                        href={cert.credentialUrl ? cert.credentialUrl : "#"}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 rounded-lg border border-blue-200/60 dark:border-blue-700/50 hover:border-blue-300/80 dark:hover:border-blue-600/70 hover:from-blue-100 hover:to-blue-200 dark:hover:from-blue-800/30 dark:hover:to-blue-700/30 transition-all duration-300 text-xs font-medium shadow-sm hover:shadow-md"
                      >
                        <Icon icon="solar:eye-bold" width={12} height={12} />
                        <span>View</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12 md:mt-16 px-4 mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              className="inline-flex items-center gap-6 px-8 py-4 bg-gradient-to-r from-blue-50/90 to-purple-50/90 dark:from-blue-900/30 dark:to-purple-900/30 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50 hover:border-blue-300/70 dark:hover:border-blue-600/70 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-md">
                  <Icon
                    icon="solar:star-outline"
                    className="text-white"
                    width={18}
                    height={18}
                  />
                </div>
                <span className="text-blue-700 dark:text-blue-300 text-sm md:text-base font-semibold">
                  06 Professional Certifications
                </span>
              </div>
              <div className="w-px h-6 bg-gradient-to-b from-blue-300/50 via-purple-300/50 to-blue-300/50"></div>
              <div className="flex items-center gap-3">
                <Icon
                  icon="solar:verified-check-bold"
                  className="text-blue-500"
                  width={22}
                  height={22}
                />
                <span className="text-gray-600 dark:text-gray-400 text-sm md:text-base font-medium">
                  Verified by Industry Leaders
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
