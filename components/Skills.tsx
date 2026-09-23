import {
  Brain,
  Code2,
  Database,
  Globe,
  Layers3,
  Wrench,
} from "lucide-react";

import Reveal from "@/components/Reveal";

const skillGroups = [
  {
    number: "01",
    title: "Programming",
    icon: Code2,
    description: "Core languages I use to build software.",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    number: "02",
    title: "AI & Machine Learning",
    icon: Brain,
    description: "Building intelligent applications and exploring AI systems.",
    skills: [
      "Machine Learning",
      "Generative AI",
      "LLMs",
      "RAG",
      "Prompt Engineering",
    ],
  },
  {
    number: "03",
    title: "Frontend",
    icon: Globe,
    description: "Creating modern and responsive interfaces.",
    skills: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    number: "04",
    title: "Backend",
    icon: Layers3,
    description: "APIs, application logic and server-side systems.",
    skills: ["Spring Boot", "Node.js", "Express.js", "REST APIs"],
  },
  {
    number: "05",
    title: "Databases",
    icon: Database,
    description: "Managing application and structured data.",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Supabase"],
  },
  {
    number: "06",
    title: "Tools",
    icon: Wrench,
    description: "Tools that support my development workflow.",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Firebase"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
                Technical Stack
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Tools I use to
                <span className="block text-zinc-500">
                  turn ideas into systems.
                </span>
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-zinc-400 lg:justify-self-end">
              My toolkit spans software engineering, artificial
              intelligence and modern web development. I&apos;m
              continuously expanding it as I build new projects and
              explore emerging technologies.
            </p>
          </div>
        </Reveal>

        {/* Main skill list */}
        <div className="mt-16 border-t border-white/10">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <Reveal
                key={group.title}
                delay={index * 0.08}
              >
                <div className="group border-b border-white/10 py-8 transition duration-300 hover:bg-white/[0.02]">
                  <div className="grid gap-6 lg:grid-cols-[80px_0.8fr_1fr] lg:items-center">
                    {/* Number */}
                    <div className="text-sm font-medium text-zinc-700 transition group-hover:text-violet-400">
                      {group.number}
                    </div>

                    {/* Category */}
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 group-hover:border-violet-500/30 group-hover:bg-violet-500/[0.06]">
                        <Icon
                          size={21}
                          className="text-violet-400"
                        />
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold tracking-tight">
                          {group.title}
                        </h3>

                        <p className="mt-1 text-sm text-zinc-600">
                          {group.description}
                        </p>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 lg:justify-end">
                      {group.skills.map((skill, skillIndex) => (
                        <Skillpill
                          key={skill}
                          skill={skill}
                          index={skillIndex}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Learning status */}
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col gap-5 rounded-3xl border border-violet-500/20 bg-violet-500/[0.04] p-7 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-violet-500/30">
                <span className="absolute h-2.5 w-2.5 animate-pulse rounded-full bg-violet-400" />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Currently learning
                </p>

                <p className="mt-1 text-sm text-zinc-500">
                  AI Engineering · LLMs · RAG · Machine Learning
                </p>
              </div>
            </div>

            <div className="text-sm text-zinc-600">
              Always evolving →
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* Small animated skill pill */
function Skillpill({
  skill,
  index,
}: {
  skill: string;
  index: number;
}) {
  return (
    <span
      className="rounded-full border border-white/10 bg-white/[0.025] px-3.5 py-2 text-xs text-zinc-400 transition duration-300 hover:border-violet-500/30 hover:bg-violet-500/[0.06] hover:text-white"
      style={{
        transitionDelay: `${index * 20}ms`,
      }}
    >
      {skill}
    </span>
  );
}