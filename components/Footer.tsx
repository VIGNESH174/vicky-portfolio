import { ArrowUp, Mail } from "lucide-react";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto max-w-7xl">

        {/* TOP ROW */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* BRAND */}
          <div>
            <a
              href="#home"
              className="text-xl font-bold tracking-tight"
            >
              VICKY<span className="text-violet-500">.</span>
            </a>

            <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-500">
              AI Engineer and Full-Stack Developer building intelligent
              digital experiences.
            </p>
          </div>

          {/* LINKS */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-6 gap-y-3"
          >
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-zinc-500 transition hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* DIVIDER */}
        <div className="my-8 h-px bg-white/10" />

        {/* BOTTOM ROW */}
        <div className="flex flex-col gap-5 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} Vicky. All rights reserved.
          </p>

         




<div className="flex items-center gap-4">
  {/* Email */}
  <a
    href="mailto:vignesh44470@gmail.com"
    aria-label="Email"
    className="text-zinc-500 transition-all duration-300 hover:scale-125 hover:text-white hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]"
  >
    <Mail size={18} />
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/VIGNESH174"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    className="text-zinc-500 transition hover:scale-110 hover:text-white"
  >
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.942.359.31.678.921.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z" />
    </svg>
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/vignesh-m-78b582348?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="text-zinc-500 transition hover:scale-110 hover:text-white"
  >
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.287ZM5.337 7.433a2.062 2.062 0 1 1 0-4.123 2.062 2.062 0 0 1 0 4.123ZM3.555 20.452h3.558V8.999H3.555v11.453Z" />
    </svg>
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/?hl=en"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="text-zinc-500 transition hover:scale-110 hover:text-white"
  >
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  </a>

  {/* Back to top */}
  <a
    href="#home"
    aria-label="Back to top"
    className="ml-2 flex items-center gap-2 text-zinc-500 transition hover:text-white"
  >
    Back to top
    <ArrowUp size={16} />
  </a>
</div>
        </div>

      </div>
    </footer>
  );
}