"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { useEffect } from "react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 100,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 100,
    damping: 20,
  });

  const orbX = useTransform(smoothX, [-500, 500], [-25, 25]);
  const orbY = useTransform(smoothY, [-500, 500], [-25, 25]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX - window.innerWidth / 2);
      mouseY.set(event.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-16"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Ambient glow */}
      <motion.div
        style={{
          x: orbX,
          y: orbY,
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[140px]"
      />

      <div className="relative mx-auto grid w-full max-w-7xl gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Status */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-7 flex items-center gap-3"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-violet-400" />
            </span>

            <span className="text-sm font-medium tracking-wide text-zinc-400">
              Available for opportunities
            </span>
          </motion.div>

          {/* Main heading */}
          <h1 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-[6.5rem]">
            Building
            <span className="block text-zinc-500">
              intelligent
            </span>

            <span className="relative block">
              <span className="bg-gradient-to-r from-white via-zinc-200 to-violet-400 bg-clip-text text-transparent">
                experiences.
              </span>

              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  delay: 1,
                  duration: 1.2,
                  ease: "easeOut",
                }}
                className="absolute -bottom-2 left-0 h-px bg-violet-500/60"
              />
            </span>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-8 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8"
          >
            I&apos;m Vicky — an AI Engineer and Full-Stack Developer
            exploring the intersection of software engineering,
            artificial intelligence and modern digital experiences.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:scale-105"
            >
              Explore my work

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href="/resume.pdf"
              className="group flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
            >
              <Download size={16} />

              Resume
            </a>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-10 flex items-center gap-6"
          >
            <a
              href="https://github.com/VIGNESH174"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-600 transition hover:text-white"
            >
              GitHub
            </a>

            <span className="h-1 w-1 rounded-full bg-zinc-700" />

            <a
              href="https://www.linkedin.com/in/vignesh-m-78b582348?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-600 transition hover:text-white"
            >
              LinkedIn
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT — AI VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 1.1,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative hidden h-[520px] lg:flex lg:items-center lg:justify-center"
        >
          {/* Outer rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[420px] w-[420px] rounded-full border border-violet-500/10"
          />

          {/* Second ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[330px] w-[330px] rounded-full border border-white/10"
          />

          {/* Orbit dots */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[420px] w-[420px]"
          >
            <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-violet-400 shadow-[0_0_25px_rgba(139,92,246,0.8)]" />
          </motion.div>

          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[330px] w-[330px]"
          >
            <span className="absolute bottom-4 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.7)]" />
          </motion.div>

          {/* Central AI core */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative flex h-44 w-44 items-center justify-center rounded-full border border-violet-400/30 bg-violet-500/[0.08] shadow-[0_0_100px_rgba(139,92,246,0.18)] backdrop-blur-xl"
          >
            <div className="absolute inset-5 rounded-full border border-violet-400/20" />

            <div className="absolute inset-10 rounded-full bg-violet-500/10 blur-xl" />

            <span className="relative text-5xl font-bold tracking-tighter text-white">
              AI
            </span>
          </motion.div>

          {/* Floating labels */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-0 top-24 rounded-2xl border border-white/10 bg-black/60 px-4 py-3 backdrop-blur-xl"
          >
            <p className="text-xs text-zinc-500">
              Focus
            </p>
            <p className="mt-1 text-sm font-medium text-white">
              Artificial Intelligence
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-24 left-0 rounded-2xl border border-white/10 bg-black/60 px-4 py-3 backdrop-blur-xl"
          >
            <p className="text-xs text-zinc-500">
              Building
            </p>
            <p className="mt-1 text-sm font-medium text-white">
              Full-Stack Systems
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-zinc-600 transition hover:text-white"
        aria-label="Scroll to about"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>

        <ArrowDown
          size={18}
          className="animate-bounce"
        />
      </motion.a>
    </section>
  );
}