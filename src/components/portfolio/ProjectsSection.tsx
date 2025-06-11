"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    title: "MessageMind",
    subtitle: "A full customer service team, powered by AI.",
    description:
      "Experience the future of customer interactions with our effortless AI-powered solution, designed for intuitive and humanized customer experiences.",
    features: [
      "AI-powered customer service with human-like interactions",
      "Handles a broad range of customer needs (support, sales, etc.)",
      "Integrates with WhatsApp, Instagram, Messenger, and business websites",
      "Offers WhatsApp Business API inbox, Instagram inbox, and Messenger inbox",
      "Supports omni-channel customer engagement",
      "Enhances customer interactions with data-driven decisions",
      "Focuses on seamless, platform-agnostic communication",
    ],
    deliverables: [
      "Custom AI Training Module - A system to fine-tune the AI with business-specific data for personalized responses.",
      "Sentiment Analysis Engine - Real-time emotion detection to adjust chatbot tone and escalate urgent issues.",
      "Seamless Human Handoff - Smooth transition from AI to live agents when complex support is needed.",
      "Compliance & Security Suite - GDPR/CCPA-ready data protection, encryption, and privacy controls.",
      "Performance Analytics & Reports - Detailed metrics (response time, resolution rate, customer satisfaction).",
    ],
    tech: [
      "Next.js",
      "Tailwind CSS",
      "DnDKit",
      "Express.js",
      "Redis",
      "Socket.io",
      "PostgreSQL",
      "Prisma",
      "JWT Authentication",
      "Stripe API",
      "Facebook Graph API",
    ],
    github: "https://github.com/devhasibulislam?tab=repositories",
    live: "https://messagemind.ai/",
    gradient: "from-purple-500 to-pink-500",
    status: "Live",
    category: "Web Application",
    highlight: "Featured",
    timeline: "1.5 years",
    clientType: "SaaS Platform",
  },
  {
    title: "FoorWeb",
    subtitle: "An eCommerce solution that helps create store in seconds.",
    description:
      "An advanced RAG-based AI chatbot that revolutionizes document interaction through multilingual translation and intelligent conversation capabilities. Features cutting-edge OpenAI multimodal technology for screenshot analysis and real-time text translation.",
    features: [
      "Multi-Platform Store Management - Control your store and customer orders from anywhere via mobile or desktop.",
      "Diverse Payment Options - Supports Baridi Mob, CIB, Gold Card, Visa, MasterCard, and more.",
      "Discounted Shipping Solutions - Integrated with ZR Express, Maystro, Ecotrack, and other Algerian shipping providers.",
      "Partner Services Marketplace - Access to discounted services (graphic design, photography, marketing, etc.).",
      "Quick Store Setup - Launch a professional online store in minutes at a low cost.",
      "Unlimited Product Listings - Manage and showcase products without restrictions.",
      "Customizable Store Design - Professional templates and CSS customization (higher-tier plans).",
      "Marketing & Analytics - Built-in Facebook Pixel, TikTok Pixel, and abandoned cart recovery.",
    ],
    deliverables: [
      "White-Label E-Commerce Platform - A fully branded solution for businesses to scale without third-party branding.",
      "AI-Powered Sales Optimization - Smart recommendations, dynamic pricing, and automated upselling.",
      "Multi-Vendor Marketplace Support - Enable businesses to host other sellers (like Shopify or Etsy).",
      "Dedicated Merchant Success Team - Onboarding, training, and growth consulting for store owners.",
      "API & Third-Party Integrations - Seamless connections with ERP, CRM, and accounting software.",
      "Advanced Fraud & Security Suite - Real-time transaction monitoring and chargeback protection.",
    ],
    tech: [
      "Next.js",
      "React-PDF",
      "MongoDB",
      "LangChain",
      "OpenAI GPT-4",
      "Pinecone",
      "Stripe",
      "Tesseract.js",
      "GCP",
    ],
    github: "https://github.com/devhasibulislam?tab=repositories",
    live: "https://foorweb.net/",
    gradient: "from-blue-500 to-cyan-500",
    status: "Live",
    category: "AI Platform",
    highlight: "Featured",
    timeline: "11 months",
    clientType: "EdTech & Enterprise",
  },
];

export default function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
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
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="mb-16 md:mb-24 lg:mb-32 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          variants={floatVariants}
          animate="animate"
          className="absolute top-5 md:top-20 right-2 md:right-16 w-12 sm:w-16 md:w-32 h-12 sm:h-16 md:h-32 bg-gradient-to-br from-purple-400/15 md:from-purple-400/20 to-pink-400/15 md:to-pink-400/20 rounded-full blur-xl md:blur-4xl"
        />
        <motion.div
          variants={floatVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
          className="absolute bottom-5 md:bottom-20 left-2 md:left-16 w-16 sm:w-20 md:w-40 h-16 sm:h-20 md:h-40 bg-gradient-to-br from-blue-400/10 md:from-blue-400/15 to-cyan-400/10 md:to-cyan-400/15 rounded-full blur-xl md:blur-2xl"
        />
        <motion.div
          variants={floatVariants}
          animate="animate"
          style={{ animationDelay: "4s" }}
          className="hidden lg:block absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10"
      >
        {/* Section Header */}
        <SectionHeader
          tagText="Portfolio Showcase"
          tagIcon="solar:code-square-bold"
          heading="Featured Projects"
          description="Discover my latest work in web development, AI integration, and digital innovation"
          showUnderline={true}
          centered={true}
        />

        {/* Full-Width Stacked Projects */}
        <div className="max-w-7xl mx-auto px-3 md:px-4 space-y-8 md:space-y-12 lg:space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group"
            >
              <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/30 dark:border-gray-700/40 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-500 overflow-hidden shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl">
                {/* Project Header with Gradient */}
                <div
                  className={`relative bg-gradient-to-br ${project.gradient} p-4 sm:p-6 md:p-8 lg:p-10`}
                >
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[length:20px_20px] md:bg-[length:30px_30px]" />
                  </div>

                  {/* Floating tech icons - hidden on mobile */}
                  <div className="hidden md:block absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                    {[
                      { icon: "logos:react", pos: { top: "15%", left: "80%" } },
                      {
                        icon: "logos:nextjs-icon",
                        pos: { top: "60%", right: "4%" },
                      },
                      {
                        icon: "logos:typescript-icon",
                        pos: { bottom: "20%", left: "75%" },
                      },
                      {
                        icon: "logos:nodejs-icon",
                        pos: { top: "25%", right: "15%" },
                      },
                      {
                        icon: "logos:tailwindcss-icon",
                        pos: { bottom: "30%", left: "85%" },
                      },
                      {
                        icon: "logos:postgresql",
                        pos: { top: "40%", right: "20%" },
                      },
                      {
                        icon: "simple-icons:langchain",
                        pos: { bottom: "10%", left: "70%" },
                      },
                      {
                        icon: "logos:redis",
                        pos: { top: "20%", right: "25%" },
                      },
                      {
                        icon: "logos:socket-io",
                        pos: { bottom: "25%", left: "90%" },
                      },
                      {
                        icon: "logos:stripe",
                        pos: { top: "30%", right: "30%" },
                      },
                      {
                        icon: "logos:vercel-icon",
                        pos: { bottom: "15%", left: "65%" },
                      },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        className="absolute text-white text-2xl md:text-3xl"
                        style={item.pos}
                        animate={{
                          y: [0, -8, 0],
                          rotate: [0, 5, 0],
                        }}
                        transition={{
                          duration: 4 + i * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Icon
                          icon={item.icon}
                          width={24}
                          height={24}
                          className="md:w-8 md:h-8"
                        />
                      </motion.div>
                    ))}
                  </div>

                  <div className="relative z-10">
                    {/* Project Meta Info */}
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4 md:mb-6">
                      <motion.span
                        className="px-2.5 py-1.5 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-xs md:text-sm font-semibold"
                        whileHover={{ scale: 1.05 }}
                      >
                        {project.category}
                      </motion.span>

                      {project.highlight && (
                        <motion.span
                          className="px-2.5 py-1.5 md:px-4 md:py-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-400/30 text-yellow-200 rounded-full text-xs md:text-sm font-semibold flex items-center gap-1 md:gap-2"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Icon
                            icon="solar:star-bold"
                            width={12}
                            height={12}
                            className="md:w-4 md:h-4"
                          />
                          <span className="hidden sm:inline">
                            {project.highlight}
                          </span>
                        </motion.span>
                      )}

                      <motion.span
                        className={`px-2.5 py-1.5 md:px-4 md:py-2 backdrop-blur-sm rounded-full text-xs md:text-sm font-semibold flex items-center gap-1 md:gap-2 ${
                          project.status === "Live"
                            ? "bg-green-500/20 text-green-200 border border-green-400/30"
                            : "bg-orange-500/20 text-orange-200 border border-orange-400/30"
                        }`}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div
                          className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${
                            project.status === "Live"
                              ? "bg-green-400"
                              : "bg-orange-400"
                          } animate-pulse`}
                        />
                        {project.status}
                      </motion.span>

                      <span className="px-2.5 py-1.5 md:px-4 md:py-2 bg-black/20 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs md:text-sm font-medium">
                        {project.timeline}
                      </span>

                      <span className="hidden sm:inline-block px-2.5 py-1.5 md:px-4 md:py-2 bg-black/20 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs md:text-sm font-medium">
                        {project.clientType}
                      </span>
                    </div>

                    {/* Project Title & Description */}
                    <div className="mb-6 md:mb-8">
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 font-medium mb-3 md:mb-4">
                        {project.subtitle}
                      </p>
                      <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl">
                        {project.description}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                      <Link
                        href={project.github}
                        className="flex items-center justify-center gap-2 md:gap-3 px-4 py-2.5 md:px-6 md:py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-lg md:rounded-xl hover:bg-white/30 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl active:scale-95"
                      >
                        <Icon
                          icon="solar:code-bold"
                          width={18}
                          height={18}
                          className="md:w-5 md:h-5"
                        />
                        <span>View Repository</span>
                      </Link>

                      <Link
                        href={project.live}
                        className="flex items-center justify-center gap-2 md:gap-3 px-4 py-2.5 md:px-6 md:py-3 bg-white text-gray-900 rounded-lg md:rounded-xl hover:bg-gray-100 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl active:scale-95"
                        target="_blank"
                      >
                        <Icon
                          icon="solar:arrow-up-outline"
                          width={18}
                          height={18}
                          className="md:w-5 md:h-5"
                        />
                        <span>Live Demo</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Project Details Content */}
                <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                  <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
                    {/* Features Section */}
                    <div>
                      <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                        <div className="p-1.5 md:p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg md:rounded-xl">
                          <Icon
                            icon="solar:settings-bold"
                            className="text-white w-[18px] h-[18px] md:w-6 md:h-6"
                          />
                        </div>
                        <span>Key Features</span>
                      </h4>
                      <ul className="space-y-2.5 md:space-y-3">
                        {project.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIndex * 0.1 }}
                            className="flex items-start gap-2.5 md:gap-3 text-gray-700 dark:text-gray-300"
                          >
                            <Icon
                              icon="solar:check-circle-bold"
                              className="text-green-500 mt-0.5 flex-shrink-0 w-4 h-4 md:w-5 md:h-5"
                            />
                            <span className="text-sm md:text-base leading-relaxed">
                              {feature}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables Section */}
                    <div className="mt-6 lg:mt-0">
                      <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                        <div className="p-1.5 md:p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg md:rounded-xl">
                          <Icon
                            icon="solar:delivery-bold"
                            className="text-white w-[18px] h-[18px] md:w-6 md:h-6"
                          />
                        </div>
                        <span>Deliverables</span>
                      </h4>
                      <ul className="space-y-2.5 md:space-y-3">
                        {project.deliverables.map(
                          (deliverable, deliverableIndex) => (
                            <motion.li
                              key={deliverableIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: deliverableIndex * 0.1 }}
                              className="flex items-start gap-2.5 md:gap-3 text-gray-700 dark:text-gray-300"
                            >
                              <Icon
                                icon="solar:box-bold"
                                className="text-blue-500 mt-0.5 flex-shrink-0 w-4 h-4 md:w-5 md:h-5"
                              />
                              <span className="text-sm md:text-base leading-relaxed">
                                {deliverable}
                              </span>
                            </motion.li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* Tech Stack Section */}
                  <div className="mt-6 md:mt-8 lg:mt-12 pt-6 md:pt-8 border-t border-gray-200/50 dark:border-gray-700/50">
                    <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                      <div className="p-1.5 md:p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg md:rounded-xl">
                        <Icon
                          icon="solar:code-bold"
                          className="text-white w-[18px] h-[18px] md:w-6 md:h-6"
                        />
                      </div>
                      <span>Technology Stack</span>
                    </h4>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-2.5 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 rounded-lg md:rounded-xl text-xs md:text-sm font-medium border border-gray-200 dark:border-gray-600 hover:shadow-md md:hover:shadow-lg transition-all duration-200"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}

        <motion.div
          variants={itemVariants}
          className="text-center mt-12 md:mt-16 lg:mt-20 px-4 mb-12"
        >
          <Link href="#contact">
            <motion.div
              className="inline-flex items-center gap-2 md:gap-3 px-4 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 dark:border-purple-500/20 rounded-xl md:rounded-2xl"
              whileHover={{ scale: 1.05 }}
            >
              <Icon
                icon="solar:programming-bold"
                className="text-blue-500 dark:text-purple-400 w-5 h-5 md:w-6 md:h-6"
              />
              <span className="text-gray-700 dark:text-gray-300 font-medium text-sm md:text-base text-center">
                Interested in working together? Let&apos;s create something
                amazing!
              </span>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
