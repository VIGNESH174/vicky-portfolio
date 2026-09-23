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
    description:
      "Building intelligent applications and exploring AI systems.",
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
      <div className="pointer-events-none absolute left-[-180px] top-1/3 h-[420px] w-[420px] rounded-full bg-violet-500/[0.05] blur-[150px]" />

      <div className="pointer-events-none absolute right-[-150px] bottom-0 h-[400px] w-[400px] rounded-full bg-violet-500/[0.06] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <Reveal>
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
              Skills
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
              Tools I use to
              <span className="block text-zinc-500">
                build intelligent products.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg">
              A growing technical toolkit across software engineering,
              artificial intelligence, frontend development, backend systems
              and modern developer tools.
            </p>
          </div>
        </Reveal>

        {/* Skills */}
        <div className="mt-16 border-t border-white/10">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <Reveal
                key={group.title}
                delay={index * 0.08}
              >
                <div className="group relative overflow-hidden border-b border-white/10 py-8 transition-all duration-500 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-violet-500/[0.04]">
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-20 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-violet-500/20 opacity-0 blur-[70px] transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Bottom animated line */}
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-violet-400 transition-all duration-700 group-hover:w-full" />

                  {/* Content */}
                  <div className="relative grid gap-6 lg:grid-cols-[80px_0.8fr_1fr] lg:items-center">
                    {/* Number */}
                    <div className="text-sm font-medium text-zinc-700 transition-all duration-300 group-hover:translate-x-1 group-hover:text-violet-400">
                      {group.number}
                    </div>

                    {/* Title */}
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:border-violet-400/60 group-hover:bg-violet-500/[0.12] group-hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                        <Icon
                          size={21}
                          className="text-violet-400 transition-all duration-300 group-hover:scale-110 group-hover:text-violet-300"
                        />
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold tracking-tight text-white transition-all duration-300 group-hover:translate-x-1 group-hover:text-violet-100">
                          {group.title}
                        </h3>

                        <p className="mt-1 text-sm text-zinc-600 transition-colors duration-300 group-hover:text-zinc-400">
                          {group.description}
                        </p>
                      </div>
                    </div>

                    {/* Skill pills */}
                    <div className="flex flex-wrap gap-2 lg:justify-end">
                      {group.skills.map((skill, skillIndex) => (
                        <span
                          key={skill}
                          className="cursor-default rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-violet-400/60 hover:bg-violet-500/[0.12] hover:text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.25)]"
                          style={{
                            transitionDelay: `${skillIndex * 20}ms`,
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Currently learning */}
        <Reveal delay={0.3}>
          <div className="group relative mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/40 hover:bg-violet-500/[0.04] hover:shadow-[0_20px_60px_rgba(139,92,246,0.12)]">
            <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-violet-500/20 opacity-0 blur-[70px] transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-violet-400">
                  Currently Learning
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-white">
                  AI Engineering
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">
                  Deepening my knowledge in LLMs, RAG, machine learning,
                  AI agents and production-ready AI applications.
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                {["LLM", "RAG", "ML", "AI Agents"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-violet-500/20 bg-violet-500/[0.06] px-3 py-1.5 text-xs text-violet-300 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:bg-violet-500/[0.12]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}