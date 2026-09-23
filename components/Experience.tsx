"use client";

import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const journey = [
  {
    number: "01",
    type: "Foundation",
    title: "Engineering Foundations",
    description:
      "Building a strong foundation in programming, problem solving and software engineering fundamentals.",
    technologies: [
      "Programming",
      "Problem Solving",
      "Software Engineering",
    ],
  },
  {
    number: "02",
    type: "Development",
    title: "Full-Stack Development",
    description:
      "Learning to build complete web applications across frontend, backend, databases and APIs.",
    technologies: [
      "React",
      "Next.js",
      "Java",
      "Spring Boot",
      "SQL",
    ],
  },
  {
    number: "03",
    type: "AI Engineering",
    title: "Artificial Intelligence",
    description:
      "Exploring machine learning, Generative AI, LLMs and RAG while building practical AI applications.",
    technologies: [
      "Machine Learning",
      "LLMs",
      "RAG",
      "Generative AI",
    ],
  },
  {
    number: "04",
    type: "Building",
    title: "Real-World Projects",
    description:
      "Applying what I learn to practical projects that combine software engineering, AI and IoT.",
    technologies: [
      "AgroReliefNet",
      "JARVIS",
      "AI Applications",
      "IoT",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-200px] top-1/3 h-[400px] w-[400px] rounded-full bg-violet-600/[0.035] blur-[140px]" />

      <div className="pointer-events-none absolute bottom-0 right-[-200px] h-[400px] w-[400px] rounded-full bg-violet-500/[0.025] blur-[140px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <Reveal>
          <div className="max-w-3xl">

            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
              Journey
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              How I&apos;m
              <span className="text-zinc-500"> evolving.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg">
              From software engineering fundamentals to artificial
              intelligence and real-world projects.
            </p>

          </div>
        </Reveal>


        {/* =====================================================
            JOURNEY TIMELINE
        ===================================================== */}

        <div className="relative mt-20">

          {/* Central timeline */}
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block" />

          <div className="space-y-10 lg:space-y-16">

            {journey.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <Reveal
                  key={item.number}
                  delay={index * 0.08}
                >
                  <div className="relative lg:grid lg:grid-cols-2">

                    {/* =================================================
                        LEFT CARD
                    ================================================= */}

                    {isLeft ? (
                      <div className="pr-10">

                        <JourneyCard
                          item={item}
                          align="left"
                        />

                      </div>
                    ) : (
                      <div className="hidden lg:block" />
                    )}


                    {/* =================================================
                        CENTER NODE
                    ================================================= */}

                    <div className="absolute left-1/2 top-12 z-20 hidden -translate-x-1/2 lg:flex">

                      <div className="flex h-4 w-4 items-center justify-center rounded-full border border-violet-400/50 bg-[#050505] shadow-[0_0_20px_rgba(139,92,246,0.2)]">

                        <div className="h-1.5 w-1.5 rounded-full bg-violet-400" />

                      </div>

                    </div>


                    {/* =================================================
                        RIGHT CARD
                    ================================================= */}

                    {!isLeft ? (
                      <div className="pl-10">

                        <JourneyCard
                          item={item}
                          align="right"
                        />

                      </div>
                    ) : (
                      <div className="hidden lg:block" />
                    )}

                  </div>
                </Reveal>
              );
            })}

          </div>
        </div>


        {/* =====================================================
            CURRENT FOCUS
        ===================================================== */}

        <Reveal delay={0.3}>
          <div className="mt-20 rounded-2xl border border-white/10 bg-white/[0.035] px-6 py-6 sm:px-8">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <div>

                <p className="text-xs font-medium uppercase tracking-[0.2em] text-violet-400">
                  Current Focus
                </p>

                <p className="mt-2 text-sm text-zinc-400 sm:text-base">
                  AI Engineering · LLMs · RAG · Full-Stack Development
                </p>

              </div>

              <div className="flex items-center gap-2 text-xs text-zinc-600">

                <span className="relative flex h-2 w-2">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-violet-400 opacity-60" />
                  <span className="relative h-2 w-2 rounded-full bg-violet-400" />
                </span>

                Currently learning

              </div>

            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}


/* =========================================================
   JOURNEY CARD
========================================================= */

function JourneyCard({
  item,
  align,
}: {
  item: (typeof journey)[number];
  align: "left" | "right";
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/30 hover:bg-violet-500/[0.025] hover:shadow-[0_20px_60px_rgba(139,92,246,0.08)] sm:p-8 ${
        align === "right" ? "text-left" : ""
      }`}
    >
      {/* Top animated line */}
      <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-violet-500 to-transparent transition-all duration-700 group-hover:w-full" />

      {/* Glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-violet-500/10 opacity-0 blur-[70px] transition-all duration-500 group-hover:scale-125 group-hover:opacity-100" />

      <div className="relative">
        <div className="flex items-start justify-between">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-violet-400">
              {item.type}
            </span>

            <p className="mt-3 text-4xl font-semibold tracking-tight text-zinc-800 transition-colors duration-300 group-hover:text-violet-400/40">
              {item.number}
            </p>
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition-all duration-500 group-hover:rotate-6 group-hover:border-violet-400/40 group-hover:bg-violet-500/[0.08]">
            <ArrowUpRight
              size={18}
              className="text-zinc-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-400"
            />
          </div>
        </div>

        <h3 className="mt-7 text-2xl font-semibold tracking-tight text-white transition-all duration-300 group-hover:translate-x-1 group-hover:text-violet-100">
          {item.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-zinc-500 transition-colors duration-300 group-hover:text-zinc-300">
          {item.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {item.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[11px] text-zinc-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/40 hover:bg-violet-500/[0.08] hover:text-white"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}