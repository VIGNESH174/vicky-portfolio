"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  GraduationCap,
  Rocket,
} from "lucide-react";

import Reveal from "@/components/Reveal";

const journey = [
  {
    year: "NOW",
    type: "AI ENGINEERING",
    title: "Building with Artificial Intelligence",
    organization: "Self-Directed Learning",
    description:
      "Exploring AI engineering through generative AI, LLM applications, RAG systems, machine learning and practical AI projects.",
    icon: Brain,
    side: "left",
  },
  {
    year: "NOW",
    type: "DEVELOPMENT",
    title: "Full-Stack Development",
    organization: "Software Engineering",
    description:
      "Building modern web applications while strengthening frontend, backend, databases, APIs and software engineering fundamentals.",
    icon: Code2,
    side: "right",
  },
  {
    year: "PROJECT",
    type: "AI + IoT",
    title: "AgroReliefNet",
    organization: "AI-IoT Project",
    description:
      "Developing an AI-IoT system focused on disaster response and support for marginal farmers.",
    icon: Rocket,
    side: "left",
  },
  {
    year: "EDUCATION",
    type: "ENGINEERING",
    title: "Bachelor of Engineering",
    organization: "Engineering Education",
    description:
      "Building a foundation in programming, computer science concepts, engineering principles and problem solving.",
    icon: GraduationCap,
    side: "right",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/[0.06] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
                Journey
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Learning.
                <span className="block text-zinc-500">
                  Building. Evolving.
                </span>
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-zinc-400 lg:justify-self-end">
              My journey is driven by curiosity — learning new
              technologies, turning knowledge into projects and
              continuously expanding what I can build.
            </p>
          </div>
        </Reveal>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Central line - desktop */}
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent md:block" />

          <div className="space-y-12 md:space-y-20">
            {journey.map((item, index) => {
              const Icon = item.icon;
              const isLeft = item.side === "left";

              return (
                <Reveal
                  key={item.title}
                  delay={index * 0.12}
                >
                  <div className="relative md:grid md:grid-cols-2">
                    {/* Timeline node */}
                    <div className="absolute left-1/2 top-10 z-10 hidden h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-violet-500/30 bg-black md:flex">
                      <motion.div
                        animate={{
                          scale: [1, 1.15, 1],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          delay: index * 0.4,
                        }}
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-500/10"
                      >
                        <Icon
                          size={14}
                          className="text-violet-400"
                        />
                      </motion.div>
                    </div>

                    {/* Left side */}
                    <div
                      className={
                        isLeft
                          ? "md:pr-16"
                          : "md:col-start-2 md:pl-16"
                      }
                    >
                      <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 transition duration-500 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-white/[0.04] sm:p-9">
                        {/* Hover glow */}
                        <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-violet-600/10 blur-3xl transition duration-500 group-hover:bg-violet-600/20" />

                        <div className="relative">
                          {/* Top */}
                          <div className="flex items-start justify-between gap-5">
                            <div>
                              <p className="text-xs font-medium uppercase tracking-[0.25em] text-violet-400">
                                {item.type}
                              </p>

                              <p className="mt-2 text-sm font-medium text-zinc-600">
                                {item.year}
                              </p>
                            </div>

                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] md:hidden">
                              <Icon
                                size={19}
                                className="text-violet-400"
                              />
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="mt-7 text-2xl font-semibold tracking-tight sm:text-3xl">
                            {item.title}
                          </h3>

                          <p className="mt-2 text-sm text-zinc-600">
                            {item.organization}
                          </p>

                          {/* Description */}
                          <p className="mt-6 leading-7 text-zinc-400">
                            {item.description}
                          </p>

                          {/* Bottom */}
                          <div className="mt-8 flex items-center gap-3">
                            <span className="h-px w-8 bg-violet-500/40 transition-all duration-300 group-hover:w-14" />

                            <span className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                              {index === 0
                                ? "Current focus"
                                : "Part of the journey"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* What's next */}
        <Reveal delay={0.4}>
          <div className="relative mt-20 overflow-hidden rounded-[2rem] border border-violet-500/20 bg-violet-500/[0.04] p-8 sm:p-10">
            <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-violet-600/10 blur-[100px]" />

            <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-violet-400">
                  What&apos;s next?
                </p>

                <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                  More things to learn.
                  <span className="text-zinc-500">
                    {" "}
                    More things to build.
                  </span>
                </h3>

                <p className="mt-4 max-w-2xl leading-7 text-zinc-500">
                  The journey doesn&apos;t stop here. I&apos;m
                  continuing to explore AI engineering, machine
                  learning, full-stack development and new ways
                  to turn ideas into useful products.
                </p>
              </div>

              <div className="shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
                  <span className="text-2xl text-violet-400">
                    →
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}