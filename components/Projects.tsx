"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Brain,
  CloudRain,
  Database,
  ExternalLink,
  MessageSquare,
  X,
  Zap,
} from "lucide-react";
import Reveal from "@/components/Reveal";

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  icon: typeof Brain;
  featured?: boolean;
  demoType: "agro" | "llm" | "rag" | "jarvis";
};

const projects: Project[] = [
  {
    number: "01",
    title: "AgroReliefNet",
    category: "AI + IoT",
    description:
      "An AI-IoT based smart disaster and subsidy response system designed to support marginal farmers during floods, heavy rain and agricultural emergencies.",
    technologies: [
      "Python",
      "AI / ML",
      "IoT",
      "ESP32",
      "Firebase",
    ],
    icon: CloudRain,
    featured: true,
    demoType: "agro",
  },
  {
    number: "02",
    title: "AI / LLM Applications",
    category: "Generative AI",
    description:
      "Exploring intelligent applications powered by large language models, prompt engineering and modern Generative AI techniques.",
    technologies: [
      "Python",
      "LLMs",
      "Generative AI",
      "Prompt Engineering",
    ],
    icon: Brain,
    demoType: "llm",
  },
  {
    number: "03",
    title: "RAG Application",
    category: "AI Engineering",
    description:
      "A retrieval-augmented generation system that combines document retrieval with language models to create context-aware responses.",
    technologies: [
      "Python",
      "RAG",
      "Embeddings",
      "Vector DB",
    ],
    icon: Database,
    demoType: "rag",
  },
  {
    number: "04",
    title: "JARVIS",
    category: "AI Assistant",
    description:
      "A personal AI assistant concept combining conversational AI, memory, automation and device interaction.",
    technologies: [
      "Python",
      "AI",
      "Automation",
      "APIs",
    ],
    icon: Zap,
    demoType: "jarvis",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  return (
    <>
      <section
        id="projects"
        className="relative overflow-hidden px-6 py-28"
      >
        {/* Background glow */}
        <div className="pointer-events-none absolute left-[-200px] top-1/3 h-[500px] w-[500px] rounded-full bg-violet-600/[0.07] blur-[160px]" />

        <div className="pointer-events-none absolute right-[-200px] bottom-0 h-[500px] w-[500px] rounded-full bg-violet-500/[0.04] blur-[160px]" />

        <div className="relative mx-auto max-w-7xl">

          {/* =================================================
              SECTION HEADER
          ================================================= */}

          <Reveal>
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
                Projects
              </p>

              <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                Ideas turned into
                <span className="block text-zinc-500">
                  working experiences.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg">
                A collection of projects exploring artificial intelligence,
                software engineering, IoT and modern application development.
              </p>
            </div>
          </Reveal>

          {/* =================================================
              FEATURED PROJECT — AGRORELIEFNET
          ================================================= */}

          <Reveal delay={0.15}>
            <FeaturedProject
              project={projects[0]}
              onOpen={() => setSelectedProject(projects[0])}
            />
          </Reveal>

          {/* =================================================
              PROJECTS 02 / 03 / 04
          ================================================= */}

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {projects.slice(1).map((project, index) => (
              <Reveal
                key={project.title}
                delay={0.1 + index * 0.08}
              >
                <ProjectCard
                  project={project}
                  onOpen={() => setSelectedProject(project)}
                />
              </Reveal>
            ))}
          </div>

          {/* =================================================
              BOTTOM CTA
          ================================================= */}

          <Reveal delay={0.3}>
            <div className="mt-20 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-2xl text-sm leading-7 text-zinc-600">
                These projects represent my current learning and building
                journey. More production-ready projects will be added as
                they evolve.
              </p>

              <a
                href="#contact"
                className="group inline-flex w-fit shrink-0 items-center gap-2 text-sm font-medium text-zinc-400 transition-all duration-300 hover:text-white"
              >
                Let&apos;s build something

                <ArrowUpRight
                  size={16}
                  className="transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-violet-400"
                />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =================================================
          PROJECT MODAL
      ================================================= */}

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}


/* =========================================================
   FEATURED PROJECT
========================================================= */

function FeaturedProject({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const Icon = project.icon;

  return (
    <article className="group relative mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] transition-all duration-700 hover:-translate-y-2 hover:border-violet-400/50 hover:bg-violet-500/[0.035] hover:shadow-[0_30px_100px_rgba(139,92,246,0.16)]">

      {/* Glow */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[400px] w-[400px] rounded-full bg-violet-500/[0.12] blur-[120px] transition-all duration-700 group-hover:scale-125 group-hover:bg-violet-500/[0.2]" />

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-violet-500 via-violet-300 to-transparent transition-all duration-1000 group-hover:w-full" />

      <div className="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">

        {/* LEFT */}
        <div>

          {/* Meta */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-violet-400 transition-transform duration-300 group-hover:translate-x-1">
              {project.number}
            </span>

            <span className="h-1 w-1 rounded-full bg-zinc-700" />

            <span className="text-sm text-zinc-600 transition-colors duration-300 group-hover:text-zinc-400">
              {project.category}
            </span>
          </div>

          {/* Icon */}
          <div className="mt-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.045] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:border-violet-400/60 group-hover:bg-violet-500/[0.1] group-hover:shadow-[0_0_40px_rgba(139,92,246,0.3)]">
            <Icon
              size={28}
              strokeWidth={1.5}
              className="text-violet-400 transition-all duration-500 group-hover:scale-110 group-hover:text-violet-300"
            />
          </div>

          {/* Title */}
          <h3 className="mt-7 text-3xl font-semibold tracking-tight text-white transition-all duration-500 group-hover:translate-x-1 group-hover:text-violet-100 sm:text-4xl">
            {project.title}
          </h3>

          {/* Description */}
          <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-500 transition-colors duration-500 group-hover:text-zinc-300">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mt-7 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/[0.025] px-3.5 py-2 text-xs text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/60 hover:bg-violet-500/[0.1] hover:text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]"
              >
                {technology}
              </span>
            ))}
          </div>

          {/* Button */}
          <button
            onClick={onOpen}
            className="group/button mt-9 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-5 py-3 text-sm font-medium text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:bg-violet-500/[0.1] hover:text-white hover:shadow-[0_10px_30px_rgba(139,92,246,0.15)]"
          >
            Explore project

            <ArrowUpRight
              size={17}
              className="transition-all duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1 group-hover/button:text-violet-300"
            />
          </button>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/40">

          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
              backgroundSize: "45px 45px",
            }}
          />

          <div className="absolute h-48 w-48 rounded-full bg-violet-500/20 blur-[90px] transition-all duration-700 group-hover:scale-150 group-hover:bg-violet-500/30" />

          <div className="relative">
            <div className="flex h-28 w-28 items-center justify-center rounded-[2rem] border border-violet-400/30 bg-violet-500/[0.08] shadow-[0_0_60px_rgba(139,92,246,0.2)] transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 group-hover:border-violet-300/60 group-hover:shadow-[0_0_90px_rgba(139,92,246,0.4)]">
              <Icon
                size={48}
                strokeWidth={1}
                className="text-violet-300 transition-all duration-700 group-hover:scale-110"
              />
            </div>
          </div>

          <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-xs text-zinc-500 backdrop-blur-md transition-all duration-300 group-hover:border-violet-400/30 group-hover:text-violet-300">
            Featured Project
          </div>
        </div>
      </div>
    </article>
  );
}


/* =========================================================
   PROJECTS 02 / 03 / 04
========================================================= */

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const Icon = project.icon;

  return (
    <article className="group relative flex min-h-[470px] flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-7 transition-all duration-500 hover:-translate-y-3 hover:border-violet-400/50 hover:bg-violet-500/[0.045] hover:shadow-[0_25px_70px_rgba(139,92,246,0.15)] sm:p-8">

      {/* Top glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-violet-500/20 opacity-0 blur-[80px] transition-all duration-500 group-hover:scale-125 group-hover:opacity-100" />

      {/* Bottom glow */}
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-violet-500/[0.05] opacity-0 blur-[70px] transition-opacity duration-500 group-hover:opacity-100" />

      {/* Animated border line */}
      <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-violet-500 to-violet-300 transition-all duration-700 group-hover:w-full" />

      <div className="relative flex h-full flex-col">

        {/* TOP */}
        <div className="flex items-start justify-between">

          {/* Number */}
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-700 transition-all duration-300 group-hover:text-violet-400">
              Project
            </span>

            <div className="mt-1 text-4xl font-semibold tracking-tight text-zinc-800 transition-all duration-500 group-hover:text-violet-400/40">
              {project.number}
            </div>
          </div>

          {/* Icon */}
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:border-violet-400/60 group-hover:bg-violet-500/[0.12] group-hover:shadow-[0_0_35px_rgba(139,92,246,0.3)]">
            <Icon
              size={24}
              strokeWidth={1.5}
              className="text-zinc-500 transition-all duration-500 group-hover:scale-110 group-hover:text-violet-300"
            />
          </div>
        </div>

        {/* Category */}
        <div className="mt-10">
          <span className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/[0.04] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-violet-400 transition-all duration-300 group-hover:border-violet-400/40 group-hover:bg-violet-500/[0.12] group-hover:text-violet-300">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white transition-all duration-300 group-hover:translate-x-1 group-hover:text-violet-100 sm:text-[1.7rem]">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-4 text-sm leading-7 text-zinc-500 transition-colors duration-300 group-hover:text-zinc-300">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[11px] text-zinc-500 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:bg-violet-500/[0.1] hover:text-white"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-auto pt-8">

          <div className="mb-5 h-px w-full bg-white/10 transition-colors duration-500 group-hover:bg-violet-400/20" />

          <button
            onClick={onOpen}
            className="group/button flex items-center gap-2 text-sm font-medium text-zinc-500 transition-all duration-300 hover:text-white"
          >
            <span className="transition-transform duration-300 group-hover/button:translate-x-1">
              View project
            </span>

            <ExternalLink
              size={15}
              className="transition-all duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1 group-hover/button:text-violet-400"
            />
          </button>
        </div>
      </div>
    </article>
  );
}


/* =========================================================
   PROJECT MODAL
========================================================= */

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-md"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#09090b] shadow-[0_30px_100px_rgba(0,0,0,0.7)]">

        <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-violet-500/[0.05] blur-[100px]" />

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close project"
          className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-500 transition-all duration-300 hover:scale-110 hover:border-violet-400/40 hover:bg-violet-500/[0.05] hover:text-white"
        >
          <X size={18} />
        </button>

        <div className="relative p-7 sm:p-10">

          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-violet-400">
              {project.number}
            </span>

            <span className="h-1 w-1 rounded-full bg-zinc-700" />

            <span className="text-sm text-zinc-600">
              {project.category}
            </span>
          </div>

          <h3 className="mt-5 pr-12 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {project.title}
          </h3>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
            {project.description}
          </p>

          <div className="mt-8">
            <DemoContent type={project.demoType} />
          </div>

          <div className="mt-8">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
              Technologies
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-xs text-zinc-400"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


/* =========================================================
   DEMO ROUTER
========================================================= */

function DemoContent({
  type,
}: {
  type: Project["demoType"];
}) {
  if (type === "agro") {
    return <AgroDemo />;
  }

  if (type === "llm") {
    return <LLMDemo />;
  }

  if (type === "rag") {
    return <RAGDemo />;
  }

  return <JarvisDemo />;
}


/* =========================================================
   AGRORELIEFNET DEMO
========================================================= */

function AgroDemo() {
  const sensors = [
    {
      name: "Soil Moisture",
      value: "68%",
      status: "Healthy",
    },
    {
      name: "Temperature",
      value: "29°C",
      status: "Normal",
    },
    {
      name: "Humidity",
      value: "74%",
      status: "Normal",
    },
    {
      name: "Rain Detection",
      value: "Detected",
      status: "Monitor",
    },
  ];

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">

      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
            Smart Field Monitor
          </p>

          <h4 className="mt-2 text-lg font-semibold text-white">
            Farm Status
          </h4>
        </div>

        <span className="rounded-full border border-violet-500/20 bg-violet-500/[0.08] px-3 py-1 text-xs text-violet-300">
          Demo
        </span>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {sensors.map((sensor) => (
          <div
            key={sensor.name}
            className="rounded-2xl border border-white/10 bg-black/30 p-4 transition-all duration-300 hover:border-violet-400/30 hover:bg-violet-500/[0.04]"
          >
            <p className="text-xs text-zinc-600">
              {sensor.name}
            </p>

            <p className="mt-2 text-xl font-semibold text-white">
              {sensor.value}
            </p>

            <p className="mt-1 text-xs text-violet-400">
              {sensor.status}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-2xl border border-violet-500/20 bg-violet-500/[0.05] p-4">
        <p className="text-xs uppercase tracking-[0.15em] text-violet-400">
          AI Alert
        </p>

        <p className="mt-2 text-sm leading-6 text-zinc-300">
          Rain detected. The system can monitor field conditions and generate
          an emergency notification when configured thresholds are reached.
        </p>
      </div>

      <p className="mt-4 text-xs text-zinc-700">
        Demo values are simulated and are not live sensor readings.
      </p>
    </div>
  );
}


/* =========================================================
   LLM DEMO
========================================================= */

function LLMDemo() {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/40">

      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
        <MessageSquare
          size={17}
          className="text-violet-400"
        />

        <span className="text-sm font-medium text-zinc-300">
          AI Assistant
        </span>

        <span className="ml-auto h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
      </div>

      <div className="space-y-4 p-5">

        <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md border border-white/10 bg-white/[0.04] p-4">
          <p className="text-xs text-zinc-600">
            You
          </p>

          <p className="mt-1 text-sm leading-6 text-zinc-300">
            Explain how RAG improves an LLM application.
          </p>
        </div>

        <div className="max-w-[90%] rounded-2xl rounded-bl-md border border-violet-500/20 bg-violet-500/[0.04] p-4">
          <p className="text-xs text-violet-400">
            AI
          </p>

          <p className="mt-1 text-sm leading-6 text-zinc-300">
            RAG allows a language model to retrieve relevant information
            from external sources before generating a response. This can
            improve contextual accuracy and allow applications to work with
            domain-specific information.
          </p>
        </div>

      </div>

      <div className="border-t border-white/10 p-4">
        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3">
          <span className="text-xs text-zinc-600">
            Ask something...
          </span>

          <ArrowUpRight
            size={15}
            className="text-zinc-600"
          />
        </div>
      </div>
    </div>
  );
}


/* =========================================================
   RAG DEMO
========================================================= */

function RAGDemo() {
  const documents = [
    "company_handbook.pdf",
    "project_documentation.txt",
    "knowledge_base.md",
  ];

  return (
    <div className="rounded-3xl border border-white/10 bg-black/30 p-5 sm:p-6">

      <div className="grid gap-5 md:grid-cols-[0.8fr_1.2fr]">

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
            Retrieved Sources
          </p>

          <div className="mt-4 space-y-2">
            {documents.map((document, index) => (
              <div
                key={document}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-3 py-3 transition-all duration-300 hover:border-violet-400/30 hover:bg-violet-500/[0.04]"
              >
                <Database
                  size={15}
                  className="text-violet-400"
                />

                <span className="min-w-0 flex-1 truncate text-xs text-zinc-400">
                  {document}
                </span>

                <span className="text-[10px] text-zinc-700">
                  {(index + 1) * 92}%
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
            Generated Response
          </p>

          <div className="mt-4 rounded-2xl border border-violet-500/20 bg-violet-500/[0.05] p-5">

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(139,92,246,0.8)]" />

              <span className="text-xs text-violet-300">
                Context retrieved
              </span>
            </div>

            <p className="mt-4 text-sm leading-7 text-zinc-300">
              Relevant information was retrieved from the connected knowledge
              sources and supplied as context to the language model before
              generating the answer.
            </p>

          </div>
        </div>
      </div>

      <p className="mt-5 text-xs text-zinc-700">
        Retrieval results shown here are simulated for portfolio demonstration.
      </p>
    </div>
  );
}


/* =========================================================
   JARVIS DEMO
========================================================= */

function JarvisDemo() {
  const actions = [
    "Open Calculator",
    "Search Web",
    "Remember Information",
  ];

  return (
    <div className="rounded-3xl border border-white/10 bg-black/40 p-5 sm:p-6">

      <div className="flex items-center gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-500/[0.08] shadow-[0_0_25px_rgba(139,92,246,0.2)]">
          <Zap
            size={21}
            className="text-violet-300"
          />
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
            Personal Assistant
          </p>

          <h4 className="mt-1 text-lg font-semibold text-white">
            JARVIS
          </h4>
        </div>

        <span className="ml-auto rounded-full border border-violet-500/20 bg-violet-500/[0.08] px-3 py-1 text-xs text-violet-300">
          Online
        </span>
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.035] p-4">

        <p className="text-xs text-zinc-600">
          Command
        </p>

        <p className="mt-2 text-sm text-zinc-300">
          &quot;Open calculator and remember that Python is my favorite
          programming language.&quot;
        </p>

      </div>

      <div className="mt-4 grid gap-2">

        {actions.map((action) => (
          <div
            key={action}
            className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 transition-all duration-300 hover:border-violet-400/30 hover:bg-violet-500/[0.04]"
          >
            <span className="text-xs text-zinc-400">
              {action}
            </span>

            <span className="text-[10px] uppercase tracking-wider text-violet-400">
              Ready
            </span>
          </div>
        ))}

      </div>

      <div className="mt-4 rounded-2xl border border-violet-500/20 bg-violet-500/[0.05] p-4">

        <p className="text-xs text-violet-400">
          JARVIS
        </p>

        <p className="mt-2 text-sm leading-6 text-zinc-300">
          Command understood. Automation and memory actions are ready.
        </p>

      </div>

      <p className="mt-4 text-xs text-zinc-700">
        This portfolio demo simulates the assistant workflow.
      </p>
    </div>
  );
}