"use client";

import { FormEvent, useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  Send,
} from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    title: "Email",
    value: "vignesh44470@gmail.com",
    href: "mailto:vignesh44470@gmail.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "India",
    href: "#",
  },
];

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const form = event.currentTarget;

  setIsSending(true);
  setIsSent(false);

  // Simulate sending
  await new Promise((resolve) => setTimeout(resolve, 1500));

  form.reset();

  setIsSending(false);
  setIsSent(true);

  // Return everything to normal after 3 seconds
  setTimeout(() => {
    setIsSent(false);
  }, 3000);
};

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Let&apos;s build something
            <span className="text-zinc-500"> meaningful.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Have an idea, project or opportunity? Let&apos;s start a
            conversation and turn the idea into something useful.
          </p>
        </div>

        {/* Contact content */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left card */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Get in touch
            </p>

            <h3 className="mt-4 text-2xl font-semibold">
              Start a conversation.
            </h3>

            <p className="mt-4 leading-7 text-zinc-500">
              Whether it&apos;s a development project, AI idea,
              collaboration or simply a technical conversation,
              you can reach me through the channels below.
            </p>

            <div className="mt-8 space-y-4">
              {contactLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.title}
                    href={item.href}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-violet-500/[0.06] hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                      <Icon
                        size={19}
                        className="text-violet-400"
                      />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider text-zinc-600">
                        {item.title}
                      </p>

                      <p className="mt-1 truncate text-sm text-zinc-300">
                        {item.value}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="ml-auto text-zinc-600 transition group-hover:text-white"
                    />
                  </a>
                );
              })}
            </div>

            {/* Availability */}
            <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-7">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-50" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-violet-400" />
              </span>

              <p className="text-sm text-zinc-500">
                Open to interesting opportunities
              </p>
            </div>
          </div>

          {/* Form card */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                  Send a message
                </p>

                <h3 className="mt-2 text-2xl font-semibold">
                  Tell me about your idea.
                </h3>
              </div>

              <div className="hidden h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] sm:flex">
                <Send
                  size={19}
                  className="text-violet-400"
                />
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm text-zinc-400"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-violet-500/50"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm text-zinc-400"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-violet-500/50"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm text-zinc-400"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-violet-500/50"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSending || isSent}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-black transition hover:scale-[1.01] hover:bg-zinc-200 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSending ? (
                  <>
                    <Loader2
                      size={17}
                      className="animate-spin"
                    />
                    Sending...
                  </>
                ) : isSent ? (
                  <>
                    <CheckCircle2 size={17} />
                    Message Sent
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowUpRight size={17} />
                  </>
                )}
              </button>

              {/* Success message */}
              {isSent && (
                <div className="flex items-center gap-3 rounded-xl border border-violet-500/20 bg-violet-500/[0.06] px-4 py-3 text-sm text-violet-300">
                  <CheckCircle2 size={17} />

                  <span>
                    Thanks! Your message has been received.
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}