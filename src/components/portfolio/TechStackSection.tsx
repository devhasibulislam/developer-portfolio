"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

interface TechItem {
  name: string;
  icon: string;
  level: "Beginner" | "Intermediate" | "Expert";
  category: string;
  description: string;
  yearsUsed?: number;
}

const techStackData: Record<string, TechItem[]> = {
  Backend: [
    {
      name: "Node.js",
      icon: "devicon:nodejs",
      level: "Expert",
      category: "Backend",
      description: "JavaScript runtime for server-side applications",
      yearsUsed: 5,
    },
    {
      name: "Nest.js",
      icon: "devicon:nestjs",
      level: "Expert",
      category: "Backend",
      description: "Node.js framework for server-side applications",
      yearsUsed: 4,
    },
    {
      name: "Express",
      icon: "skill-icons:expressjs-dark",
      level: "Expert",
      category: "Backend",
      description: "Fast, minimalist web framework for Node.js",
      yearsUsed: 5,
    },
    {
      name: "GraphQL",
      icon: "logos:graphql",
      level: "Intermediate",
      category: "Backend",
      description: "Query language for APIs",
      yearsUsed: 3,
    },
    {
      name: "Socket.io",
      icon: "simple-icons:socketdotio",
      level: "Intermediate",
      category: "Backend",
      description: "Real-time bidirectional event-based communication",
      yearsUsed: 3,
    },
  ],
  Frontend: [
    {
      name: "React",
      icon: "skill-icons:react-dark",
      level: "Expert",
      category: "Frontend",
      description: "Building modern, interactive user interfaces",
      yearsUsed: 4,
    },
    {
      name: "Next.js",
      icon: "devicon:nextjs",
      level: "Expert",
      category: "Frontend",
      description: "Full-stack React framework for production apps",
      yearsUsed: 3,
    },
    {
      name: "TypeScript",
      icon: "devicon:typescript",
      level: "Expert",
      category: "Frontend",
      description: "Type-safe JavaScript for scalable applications",
      yearsUsed: 4,
    },
    {
      name: "JavaScript",
      icon: "devicon:javascript",
      level: "Expert",
      category: "Frontend",
      description: "Core language for web development",
      yearsUsed: 5,
    },
    {
      name: "Tailwind CSS",
      icon: "logos:tailwindcss-icon",
      level: "Expert",
      category: "Frontend",
      description: "Utility-first CSS framework for rapid UI development",
      yearsUsed: 3,
    },
  ],
  Database: [
    {
      name: "PostgreSQL",
      icon: "logos:postgresql",
      level: "Expert",
      category: "Database",
      description: "Advanced open-source relational database",
      yearsUsed: 3,
    },
    {
      name: "MongoDB",
      icon: "devicon:mongodb",
      level: "Expert",
      category: "Database",
      description: "NoSQL document database",
      yearsUsed: 3,
    },
    {
      name: "MySQL",
      icon: "logos:mysql",
      level: "Intermediate",
      category: "Database",
      description: "Popular open-source relational database",
      yearsUsed: 3,
    },
    {
      name: "Redis",
      icon: "devicon:redis",
      level: "Intermediate",
      category: "Database",
      description: "In-memory data structure store",
      yearsUsed: 2,
    },
    {
      name: "Prisma",
      icon: "skill-icons:prisma",
      level: "Expert",
      category: "Database",
      description: "Next-generation ORM for Node.js and TypeScript",
      yearsUsed: 2,
    },
  ],
  "Cloud & DevOps": [
    {
      name: "AWS",
      icon: "skill-icons:aws-light",
      level: "Intermediate",
      category: "Cloud & DevOps",
      description: "Amazon Web Services cloud platform",
      yearsUsed: 2,
    },
    {
      name: "GCP",
      icon: "skill-icons:gcp-light",
      level: "Intermediate",
      category: "Cloud & DevOps",
      description: "Google Cloud Platform services",
      yearsUsed: 2,
    },
    {
      name: "Firebase",
      icon: "vscode-icons:file-type-firebase",
      level: "Expert",
      category: "Cloud & DevOps",
      description: "Google's app development platform",
      yearsUsed: 3,
    },
    {
      name: "Docker",
      icon: "devicon:docker",
      level: "Intermediate",
      category: "Cloud & DevOps",
      description: "Containerization platform",
      yearsUsed: 2,
    },
    {
      name: "Git",
      icon: "devicon:git",
      level: "Expert",
      category: "Cloud & DevOps",
      description: "Version control system",
      yearsUsed: 5,
    },
  ],
  "AI & Integration": [
    {
      name: "OpenAI",
      icon: "simple-icons:openai",
      level: "Expert",
      category: "AI & Integration",
      description: "AI-powered applications and chatbots",
      yearsUsed: 2,
    },
    {
      name: "LangChain",
      icon: "simple-icons:langchain",
      level: "Expert",
      category: "AI & Integration",
      description: "Framework for developing LLM applications",
      yearsUsed: 1,
    },
    {
      name: "Vercel AI SDK",
      icon: "skill-icons:vercel-light",
      level: "Expert",
      category: "AI & Integration",
      description: "Building AI-powered streaming UIs",
      yearsUsed: 1,
    },
    {
      name: "Stripe",
      icon: "logos:stripe",
      level: "Intermediate",
      category: "AI & Integration",
      description: "Payment processing integration",
      yearsUsed: 2,
    },
    {
      // vector database
      name: "Vector Database",
      icon: "ph:vector-three-duotone",
      level: "Intermediate",
      category: "AI & Integration",
      description: "Vector database for storing and querying embeddings",
      yearsUsed: 1,
    },
  ],
};

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...Object.keys(techStackData)];

  const filteredTech =
    activeCategory === "All"
      ? Object.values(techStackData).flat()
      : techStackData[activeCategory] || [];

  return (
    <motion.section
      id="stack"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <SectionHeader
        tagText="Tech Arsenal"
        tagIcon="solar:settings-bold"
        heading="Technology Stack"
        description="Technologies I use to bring ideas to life"
        showUnderline={false}
        centered={true}
      />
      <div className="mb-8">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {activeCategory === "All" ? (
        // Categorized view
        <div className="space-y-8">
          {Object.entries(techStackData).map(([categoryName, techs]) => (
            <motion.div
              key={categoryName}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                {categoryName}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {techs.map((tech, index) => (
                  <TechCard key={tech.name} tech={tech} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        // Filtered view
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filteredTech.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} index={index} />
          ))}
        </div>
      )}
    </motion.section>
  );
}

function TechCard({ tech, index }: { tech: TechItem; index: number }) {
  const getLevelGradient = (level: string) => {
    switch (level) {
      case "Expert":
        return "from-emerald-500 to-teal-600";
      case "Intermediate":
        return "from-blue-500 to-indigo-600";
      case "Beginner":
        return "from-amber-500 to-orange-600";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  const getLevelBadgeStyle = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-gradient-to-r from-emerald-500/10 to-teal-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800";
      case "Intermediate":
        return "bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800";
      case "Beginner":
        return "bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getExperienceColor = (years: number) => {
    if (years >= 4) return "text-emerald-600 dark:text-emerald-400";
    if (years >= 2) return "text-blue-600 dark:text-blue-400";
    return "text-amber-600 dark:text-amber-400";
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.05,
        type: "spring",
        stiffness: 100,
      }}
      viewport={{ once: true }}
      className="group relative"
    >
      {/* Card Background with Gradient Border */}
      <div className="relative">
        {/* Subtle Gradient Glow Effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${getLevelGradient(
            tech.level
          )} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl scale-105`}
        />

        {/* Main Card */}
        <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl border border-gray-200/60 dark:border-gray-700/60 group-hover:border-gray-300/80 dark:group-hover:border-gray-600/80 transition-all duration-300 shadow-lg group-hover:shadow-2xl group-hover:shadow-black/5 dark:group-hover:shadow-black/40 overflow-hidden">
          {/* Subtle Top Accent - Much More Refined */}
          <div className="relative h-0.5 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent">
            <div
              className={`absolute inset-0 bg-gradient-to-r ${getLevelGradient(
                tech.level
              )} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            />
          </div>

          {/* Floating Particles Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
            <div
              className="absolute top-4 right-4 w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse"
              style={{ animationDelay: "0s" }}
            />
            <div
              className="absolute top-8 left-6 w-0.5 h-0.5 bg-gray-400 dark:bg-gray-500 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute bottom-6 right-8 w-0.5 h-0.5 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse"
              style={{ animationDelay: "2s" }}
            />
          </div>

          <div className="p-4 relative">
            {/* Icon Container with Enhanced Design */}
            <div className="flex justify-center mb-3">
              <div className="relative group/icon">
                {/* Icon Background with Subtle Pattern */}
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-3 rounded-xl border border-gray-200/50 dark:border-gray-600/50 group-hover:border-gray-300/70 dark:group-hover:border-gray-500/70 transition-all duration-300">
                  <Icon
                    icon={tech.icon}
                    className="group-hover/icon:scale-110 group-hover/icon:rotate-3 transition-all duration-300"
                    width={36}
                    height={36}
                  />

                  {/* Subtle Icon Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${getLevelGradient(
                      tech.level
                    )} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                </div>
              </div>
            </div>

            {/* Technology Name with Better Typography */}
            <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 text-center mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors tracking-tight">
              {tech.name}
            </h3>

            {/* Skill Level Badge */}
            <div className="flex justify-center mb-2">
              <span
                className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold border ${getLevelBadgeStyle(
                  tech.level
                )} transition-all duration-300`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${getLevelGradient(
                    tech.level
                  )} mr-1.5`}
                />
                {tech.level}
              </span>
            </div>

            {/* Experience Years with Enhanced Styling */}
            {tech.yearsUsed && (
              <div className="text-center">
                <div className="inline-flex items-center gap-1">
                  <div
                    className={`w-1 h-1 rounded-full ${getExperienceColor(
                      tech.yearsUsed
                    ).replace("text-", "bg-")}`}
                  />
                  <span
                    className={`text-xs font-medium ${getExperienceColor(
                      tech.yearsUsed
                    )}`}
                  >
                    {tech.yearsUsed} year{tech.yearsUsed > 1 ? "s" : ""} exp
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Subtle Mesh Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
              backgroundSize: "20px 20px",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
