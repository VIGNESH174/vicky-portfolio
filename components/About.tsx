import {
  Brain,
  Code2,
  Lightbulb,
  Rocket,
} from "lucide-react";

import Reveal from "@/components/Reveal";

const strengths = [
  {
    icon: Code2,
    title: "Software Engineering",
    description:
      "Building modern, maintainable applications with strong programming and software engineering fundamentals.",
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description:
      "Learning and building with machine learning, generative AI, LLMs and retrieval-augmented generation.",
  },
  {
    icon: Rocket,
    title: "Project Building",
    description:
      "Turning ideas into practical applications by combining different technologies into working solutions.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Constantly exploring new technologies and improving my ability to solve real-world problems.",
  },
];

const stats = [
  {
    value: "AI",
    label: "Engineering",
  },
  {
    value: "Full",
    label: "Stack Development",
  },
  {
    value: "IoT",
    label: "Projects",
  },
  {
    value: "∞",
    label: "Learning Mindset",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
              About Me
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Building technology with
              <span className="text-zinc-500">
                {" "}
                curiosity and purpose.
              </span>
            </h2>
          </div>
        </Reveal>

        {/* MAIN CONTENT */}
        <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">

          {/* LEFT */}
          <Reveal>
            <div>
              <p className="text-lg leading-8 text-zinc-300">
                I&apos;m a developer passionate about the intersection of
                software engineering and artificial intelligence. I enjoy
                understanding how technologies work and turning that knowledge
                into useful applications.
              </p>

              <p className="mt-6 leading-8 text-zinc-400">
                My current learning journey focuses on AI engineering,
                generative AI, large language models, RAG systems and modern
                full-stack development. I also enjoy experimenting with
                hardware, IoT and automation to solve practical problems.
              </p>

              <p className="mt-6 leading-8 text-zinc-400">
                Rather than focusing on a single technology, I&apos;m interested
                in understanding the complete journey — from an idea and
                architecture to implementation, deployment and continuous
                improvement.
              </p>

              {/* STATS */}
              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((stat, index) => (
                  <Reveal
                    key={stat.label}
                    delay={index * 0.08}
                  >
                    <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <p className="text-2xl font-bold text-white">
                        {stat.value}
                      </p>

                      <p className="mt-1 text-xs leading-5 text-zinc-500">
                        {stat.label}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          {/* RIGHT */}
          <Reveal delay={0.15}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">

              <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                What I Focus On
              </p>

              <div className="mt-7 space-y-7">
                {strengths.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <Reveal
                      key={item.title}
                      delay={0.15 + index * 0.08}
                    >
                      <div className="flex gap-4">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                          <Icon
                            size={20}
                            className="text-violet-400"
                          />
                        </div>

                        <div>
                          <h3 className="font-semibold">
                            {item.title}
                          </h3>

                          <p className="mt-1 text-sm leading-6 text-zinc-500">
                            {item.description}
                          </p>
                        </div>

                      </div>
                    </Reveal>
                  );
                })}
              </div>

            </div>
          </Reveal>

        </div>

        {/* BOTTOM STATEMENT */}
        <Reveal delay={0.2}>
          <div className="mt-16 rounded-3xl border border-violet-500/20 bg-violet-500/[0.05] p-8 text-center">
            <p className="mx-auto max-w-3xl text-xl font-medium leading-8 text-zinc-200 sm:text-2xl">
              &quot;The goal isn&apos;t just to learn technology —
              it&apos;s to use technology to build something meaningful.&quot;
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}