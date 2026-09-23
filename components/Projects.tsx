"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Brain,
  Cpu,
  Database,
  ExternalLink,
  Thermometer,
  Droplets,
  CloudRain,
  ShieldCheck,
  X,
} from "lucide-react";
import { useState } from "react";

import Reveal from "@/components/Reveal";

const projects = [
  {
    number: "01",
    title: "AgroReliefNet",
    category: "AI + IoT",
    description:
      "An AI-IoT smart disaster and subsidy response system designed to assist marginal farmers during floods, heavy rain and other agricultural emergencies.",
    technologies: [
      "Python",
      "AI / ML",
      "IoT",
      "ESP32",
      "Firebase",
    ],
    icon: Brain,
    featured: true,
  },
  {
    number: "02",
    title: "AI / LLM Applications",
    category: "Generative AI",
    description:
      "Exploring intelligent applications powered by large language models, prompt engineering and modern AI application development.",
    technologies: [
      "Python",
      "LLMs",
      "Generative AI",
      "APIs",
    ],
    icon: Brain,
    featured: false,
  },
  {
    number: "03",
    title: "RAG Application",
    category: "AI Engineering",
    description:
      "A retrieval-augmented generation application focused on connecting language models with external knowledge and documents.",
    technologies: [
      "Python",
      "LLM",
      "RAG",
      "Vector Database",
    ],
    icon: Database,
    featured: false,
  },
  {
    number: "04",
    title: "JARVIS",
    category: "AI Assistant",
    description:
      "A personal AI assistant project designed to combine conversational AI with device interaction and useful automation capabilities.",
    technologies: [
      "Python",
      "AI",
      "APIs",
      "Automation",
    ],
    icon: Cpu,
    featured: false,
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<string | null>(
    null
  );

  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <>
      <section
        id="projects"
        className="relative overflow-hidden px-6 py-28"
      >
        <div className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl">
          {/* Header */}
          <Reveal>
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
                  Selected Work
                </p>

                <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  Ideas turned into
                  <span className="block text-zinc-500">
                    working systems.
                  </span>
                </h2>
              </div>

              <p className="max-w-md text-base leading-7 text-zinc-500">
                A collection of projects exploring artificial
                intelligence, software engineering, IoT and
                modern application development.
              </p>
            </div>
          </Reveal>

          {/* Featured project */}
          <Reveal delay={0.15}>
            <article className="group relative mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025]">
              <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                {/* Visual */}
                <div className="relative min-h-[420px] overflow-hidden border-b border-white/10 lg:border-b-0 lg:border-r">
                  <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                      backgroundSize: "50px 50px",
                    }}
                  />

                  <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[100px]" />

                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      rotate: 2,
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute left-1/2 top-1/2 flex h-56 w-56 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] border border-violet-400/20 bg-black/50 shadow-[0_0_100px_rgba(139,92,246,0.15)] backdrop-blur-xl"
                  >
                    <div className="absolute inset-5 rounded-[1.5rem] border border-white/10" />

                    <div className="absolute inset-10 rounded-full bg-violet-500/10 blur-2xl" />

                    <div className="relative text-center">
                      <Brain
                        size={48}
                        strokeWidth={1.2}
                        className="mx-auto text-violet-400"
                      />

                      <p className="mt-4 text-sm font-semibold tracking-wide text-white">
                        AI + IoT
                      </p>
                    </div>
                  </motion.div>

                  <div className="absolute left-10 top-10 h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.8)]" />

                  <div className="absolute bottom-16 right-16 h-2 w-2 rounded-full bg-white/70" />

                  <div className="absolute right-12 top-20 h-20 w-20 rounded-full border border-white/5" />

                  <div className="absolute bottom-10 left-16 h-24 w-24 rounded-full border border-violet-500/10" />

                  <div className="absolute left-8 top-8 text-sm font-medium text-zinc-600">
                    {featuredProject.number}
                  </div>

                  <div className="absolute bottom-8 left-8 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs text-zinc-400 backdrop-blur-md">
                    {featuredProject.category}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.25em] text-violet-400">
                        Featured Project
                      </span>

                      <span className="text-sm text-zinc-700">
                        {featuredProject.number}
                      </span>
                    </div>

                    <h3 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl">
                      {featuredProject.title}
                    </h3>

                    <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400">
                      {featuredProject.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {featuredProject.technologies.map(
                        (technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs text-zinc-400 transition hover:border-violet-500/30 hover:text-white"
                          >
                            {technology}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-7">
                    <span className="text-sm text-zinc-600">
                      AI-powered disaster response
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        setActiveProject(featuredProject.title)
                      }
                      className="group/link flex items-center gap-2 text-sm font-medium text-white transition hover:text-violet-400"
                    >
                      Explore
                      <ArrowUpRight
                        size={17}
                        className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Other projects */}
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {otherProjects.map((project, index) => {
              const Icon = project.icon;

              return (
                <Reveal
                  key={project.title}
                  delay={0.25 + index * 0.1}
                >
                  <article className="group flex h-full flex-col border-t border-white/10 pt-7">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-zinc-700 transition group-hover:text-violet-400">
                        {project.number}
                      </span>

                      <Icon
                        size={19}
                        strokeWidth={1.5}
                        className="text-zinc-600 transition group-hover:text-violet-400"
                      />
                    </div>

                    <div className="mt-6">
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-violet-400">
                        {project.category}
                      </p>

                      <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                        {project.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-zinc-500">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="text-xs text-zinc-600 transition group-hover:text-zinc-400"
                        >
                          #{technology}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-8">
                      <button
                        type="button"
                        onClick={() =>
                          setActiveProject(project.title)
                        }
                        className="flex items-center gap-2 text-sm font-medium text-zinc-500 transition group-hover:text-white"
                      >
                        View project
                        <ExternalLink size={15} />
                      </button>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          {/* Footer */}
          <Reveal delay={0.45}>
            <div className="mt-16 border-t border-white/10 pt-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-zinc-600">
                  More experiments and projects are continuously
                  being built.
                </p>

                <a
                  href="#contact"
                  className="flex items-center gap-2 text-sm font-medium text-zinc-400 transition hover:text-white"
                >
                  Start a project
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Project demo modal */}
      <AnimatePresence>
        {activeProject && (
          <ProjectDemo
            projectName={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* Project Demo                                                                */
/* -------------------------------------------------------------------------- */

function ProjectDemo({
  projectName,
  onClose,
}: {
  projectName: string;
  onClose: () => void;
}) {
  const isAgroRelief = projectName === "AgroReliefNet";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md sm:p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.94,
          y: 30,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.94,
          y: 30,
        }}
        transition={{
          duration: 0.3,
        }}
        onClick={(event) => event.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-5xl overflow-auto rounded-[2rem] border border-white/10 bg-[#090909] shadow-[0_0_100px_rgba(139,92,246,0.15)]"
      >
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-[#090909]/90 px-6 py-5 backdrop-blur-xl sm:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-violet-400">
              Interactive Demo
            </p>

            <h3 className="mt-1 text-xl font-semibold">
              {projectName}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project demo"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 transition hover:bg-white/[0.08] hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        {/* Demo content */}
        <div className="p-6 sm:p-8">
          {isAgroRelief ? (
            <AgroReliefDemo />
          ) : (
            <GenericProjectDemo projectName={projectName} />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* AgroReliefNet Demo                                                          */
/* -------------------------------------------------------------------------- */

function AgroReliefDemo() {
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <DemoMetric
          icon={Droplets}
          label="Soil Moisture"
          value="34%"
          status="Normal"
        />

        <DemoMetric
          icon={CloudRain}
          label="Rain Detection"
          value="72%"
          status="Monitoring"
        />

        <DemoMetric
          icon={Thermometer}
          label="Temperature"
          value="31°C"
          status="Normal"
        />

        <DemoMetric
          icon={ShieldCheck}
          label="Risk Level"
          value="LOW"
          status="System Stable"
        />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        {/* Monitoring panel */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-white">
                Environmental Monitoring
              </p>

              <p className="mt-1 text-xs text-zinc-600">
                Simulated sensor data
              </p>
            </div>

            <span className="flex items-center gap-2 text-xs text-zinc-500">
              <span className="h-2 w-2 animate-pulse rounded-full bg-violet-400" />
              Live Demo
            </span>
          </div>

          <div className="mt-8 h-44 rounded-xl border border-white/5 bg-black/30 p-5">
            <div className="flex h-full items-end gap-2">
              {[35, 42, 38, 55, 48, 65, 58, 72, 64, 76, 69, 80].map(
                (height, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.04,
                    }}
                    className="flex-1 rounded-t-sm bg-violet-500/40"
                  />
                )
              )}
            </div>
          </div>
        </div>

        {/* AI status */}
        <div className="rounded-2xl border border-violet-500/20 bg-violet-500/[0.05] p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10">
              <Brain
                size={18}
                className="text-violet-400"
              />
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                AI Analysis
              </p>

              <p className="text-xs text-zinc-600">
                Demonstration
              </p>
            </div>
          </div>

          <div className="mt-7">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
              Current assessment
            </p>

            <p className="mt-3 text-lg font-semibold text-white">
              Conditions currently stable
            </p>

            <p className="mt-3 text-sm leading-6 text-zinc-500">
              The simulated monitoring system is observing
              environmental conditions and waiting for abnormal
              patterns.
            </p>
          </div>

          <div className="mt-7 flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-4 py-3">
            <span className="h-2 w-2 rounded-full bg-violet-400" />

            <span className="text-xs text-zinc-400">
              Monitoring active
            </span>
          </div>
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-zinc-700">
        Demo interface — values shown here are simulated and do
        not represent live sensor data.
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Generic Demo                                                                */
/* -------------------------------------------------------------------------- */

function GenericProjectDemo({
  projectName,
}: {
  projectName: string;
}) {
  if (projectName === "AI / LLM Applications") {
    return <LLMDemo />;
  }

  if (projectName === "RAG Application") {
    return <RAGDemo />;
  }

  if (projectName === "JARVIS") {
    return <JarvisDemo />;
  }

  return null;
}

/* -------------------------------------------------------------------------- */
/* AI / LLM Demo                                                              */
/* -------------------------------------------------------------------------- */

function LLMDemo() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Hello! I'm an AI assistant demo. Ask me something.",
    },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;

    const userMessage = message.trim();

    setMessages((previous) => [
      ...previous,
      {
        role: "user",
        text: userMessage,
      },
      {
        role: "ai",
        text: "This is a simulated AI response for the portfolio demo. A real LLM can be connected here later.",
      },
    ]);

    setMessage("");
  };

  return (
    <div>
      <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
        {/* AI info */}
        <div className="rounded-2xl border border-violet-500/20 bg-violet-500/[0.05] p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10">
            <Brain
              size={22}
              className="text-violet-400"
            />
          </div>

          <p className="mt-6 text-xs uppercase tracking-[0.25em] text-violet-400">
            Generative AI
          </p>

          <h4 className="mt-3 text-2xl font-semibold">
            AI Assistant
          </h4>

          <p className="mt-4 text-sm leading-7 text-zinc-500">
            A demonstration of how an application can interact
            with a large language model through a conversational
            interface.
          </p>

          <div className="mt-7 space-y-2">
            {[
              "Natural language interaction",
              "Prompt-based responses",
              "LLM API integration",
              "Context-aware applications",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/5 bg-black/20 px-4 py-3"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />

                <span className="text-xs text-zinc-500">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Chat */}
        <div className="flex min-h-[440px] flex-col rounded-2xl border border-white/10 bg-black/30">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div>
              <p className="text-sm font-medium text-white">
                AI Assistant
              </p>

              <p className="mt-1 text-xs text-zinc-600">
                Demo conversation
              </p>
            </div>

            <span className="flex items-center gap-2 text-xs text-zinc-600">
              <span className="h-2 w-2 rounded-full bg-violet-400" />
              Online
            </span>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto p-5">
            {messages.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className={`flex ${
                  item.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                    item.role === "user"
                      ? "bg-violet-500/20 text-violet-100"
                      : "border border-white/10 bg-white/[0.03] text-zinc-400"
                  }`}
                >
                  {item.text}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="border-t border-white/10 p-4">
            <div className="flex gap-2 rounded-xl border border-white/10 bg-white/[0.02] p-2">
              <input
                value={message}
                onChange={(event) =>
                  setMessage(event.target.value)
                }
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleSend();
                  }
                }}
                placeholder="Ask something..."
                className="min-w-0 flex-1 bg-transparent px-3 text-sm text-white outline-none placeholder:text-zinc-700"
              />

              <button
                type="button"
                onClick={handleSend}
                className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-zinc-700">
        Portfolio demonstration — AI responses are simulated.
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* RAG Demo                                                                    */
/* -------------------------------------------------------------------------- */

function RAGDemo() {
  const [searched, setSearched] = useState(false);

  return (
    <div>
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Documents */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
          <p className="text-xs uppercase tracking-[0.25em] text-violet-400">
            Knowledge Base
          </p>

          <h4 className="mt-3 text-2xl font-semibold">
            Your Documents
          </h4>

          <p className="mt-3 text-sm leading-6 text-zinc-500">
            A demonstration of how external documents can be
            connected to an AI application.
          </p>

          <div className="mt-7 space-y-3">
            {[
              "project_document.pdf",
              "technical_notes.txt",
              "knowledge_base.md",
            ].map((file, index) => (
              <motion.div
                key={file}
                whileHover={{ x: 3 }}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 p-4"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                  <span className="text-xs text-violet-400">
                    {index === 0 ? "PDF" : "TXT"}
                  </span>
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm text-zinc-300">
                    {file}
                  </p>

                  <p className="mt-1 text-xs text-zinc-700">
                    Indexed document
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RAG pipeline */}
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-white">
                Knowledge Assistant
              </p>

              <p className="mt-1 text-xs text-zinc-600">
                Retrieval-Augmented Generation
              </p>
            </div>

            <span className="rounded-full border border-violet-500/20 bg-violet-500/[0.06] px-3 py-1 text-[10px] uppercase tracking-wider text-violet-400">
              Demo
            </span>
          </div>

          {/* Pipeline */}
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              ["01", "Retrieve"],
              ["02", "Context"],
              ["03", "Generate"],
            ].map(([number, label]) => (
              <div
                key={number}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
              >
                <p className="text-xs text-violet-400">
                  {number}
                </p>

                <p className="mt-2 text-sm font-medium text-white">
                  {label}
                </p>
              </div>
            ))}
          </div>

          {/* Search */}
          <div className="mt-7 rounded-xl border border-white/10 bg-white/[0.02] p-4">
            <p className="text-xs text-zinc-600">
              Ask your knowledge base
            </p>

            <div className="mt-3 flex gap-2">
              <input
                defaultValue="What information is available?"
                className="min-w-0 flex-1 rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-zinc-300 outline-none focus:border-violet-500/40"
              />

              <button
                type="button"
                onClick={() => setSearched(true)}
                className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                Search
              </button>
            </div>
          </div>

          {/* Retrieved context */}
          <AnimatePresence mode="wait">
            {searched && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                className="mt-4 overflow-hidden"
              >
                <div className="rounded-xl border border-violet-500/20 bg-violet-500/[0.04] p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-violet-400">
                    Retrieved Context
                  </p>

                  <div className="mt-4 space-y-2">
                    <div className="h-2 w-full rounded-full bg-white/10" />
                    <div className="h-2 w-4/5 rounded-full bg-white/10" />
                    <div className="h-2 w-3/5 rounded-full bg-white/10" />
                  </div>

                  <p className="mt-5 text-sm leading-6 text-zinc-400">
                    Relevant information was retrieved from the
                    connected knowledge base and supplied to the
                    generation step.
                  </p>

                  <div className="mt-5 border-t border-white/10 pt-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                      AI Answer
                    </p>

                    <p className="mt-2 text-sm leading-6 text-zinc-300">
                      The answer would be generated using the
                      retrieved document context.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-zinc-700">
        Portfolio demonstration — document retrieval and answers
        are simulated.
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* JARVIS Demo                                                                 */
/* -------------------------------------------------------------------------- */

function JarvisDemo() {
  const [status, setStatus] = useState("System ready");

  const commands = [
    {
      label: "System Status",
      response: "All demonstration systems are operating normally.",
    },
    {
      label: "Open Apps",
      response: "Application control module ready.",
    },
    {
      label: "Run Search",
      response: "Search module initialized.",
    },
    {
      label: "Automation",
      response: "Automation engine ready for commands.",
    },
  ];

  return (
    <div>
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        {/* JARVIS identity */}
        <div className="flex min-h-[430px] flex-col items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/[0.04] p-8 text-center">
          <motion.div
            animate={{
              scale: [1, 1.04, 1],
              boxShadow: [
                "0 0 30px rgba(139,92,246,0.08)",
                "0 0 70px rgba(139,92,246,0.2)",
                "0 0 30px rgba(139,92,246,0.08)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="flex h-36 w-36 items-center justify-center rounded-full border border-violet-400/20 bg-violet-500/[0.06]"
          >
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-violet-400/20 bg-black/40">
              <span className="text-3xl font-bold tracking-tight text-white">
                J
              </span>
            </div>
          </motion.div>

          <p className="mt-8 text-xs uppercase tracking-[0.35em] text-violet-400">
            Personal AI Assistant
          </p>

          <h4 className="mt-3 text-3xl font-semibold">
            JARVIS
          </h4>

          <div className="mt-4 flex items-center gap-2 text-sm text-zinc-500">
            <span className="h-2 w-2 animate-pulse rounded-full bg-violet-400" />
            {status}
          </div>
        </div>

        {/* Controls */}
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="border-b border-white/10 pb-5">
            <p className="text-sm font-medium text-white">
              Command Center
            </p>

            <p className="mt-1 text-xs text-zinc-600">
              Interactive assistant demonstration
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {commands.map((command) => (
              <button
                key={command.label}
                type="button"
                onClick={() => setStatus(command.response)}
                className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 text-left transition duration-300 hover:border-violet-500/30 hover:bg-violet-500/[0.04]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-zinc-300">
                    {command.label}
                  </span>

                  <span className="text-zinc-700 transition group-hover:text-violet-400">
                    →
                  </span>
                </div>

                <p className="mt-2 text-xs leading-5 text-zinc-600">
                  Execute demonstration command
                </p>
              </button>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
              Assistant Response
            </p>

            <motion.p
              key={status}
              initial={{
                opacity: 0,
                y: 5,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="mt-3 text-sm leading-7 text-zinc-300"
            >
              {status}
            </motion.p>
          </div>

          <div className="mt-6 flex items-center gap-3 rounded-xl border border-violet-500/10 bg-violet-500/[0.03] px-4 py-3">
            <span className="h-2 w-2 rounded-full bg-violet-400" />

            <span className="text-xs text-zinc-500">
              Automation interface ready
            </span>
          </div>
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-zinc-700">
        Portfolio demonstration — device actions and automation
        are simulated.
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Metric Card                                                                 */
/* -------------------------------------------------------------------------- */

function DemoMetric({
  icon: Icon,
  label,
  value,
  status,
}: {
  icon: typeof Droplets;
  label: string;
  value: string;
  status: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="rounded-2xl border border-white/10 bg-white/[0.025] p-5"
    >
      <div className="flex items-center justify-between">
        <Icon
          size={19}
          className="text-violet-400"
        />

        <span className="text-[10px] uppercase tracking-wider text-zinc-700">
          {status}
        </span>
      </div>

      <p className="mt-6 text-xs text-zinc-600">
        {label}
      </p>

      <p className="mt-1 text-2xl font-semibold text-white">
        {value}
      </p>
    </motion.div>
  );
}