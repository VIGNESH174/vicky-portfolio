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

          <div className="flex items-center gap-5">

            <a
              href="mailto:your.email@example.com"
              className="flex items-center gap-2 transition hover:text-white"
            >
              <Mail size={16} />
              Email
            </a>

            <a
              href="#home"
              aria-label="Back to top"
              className="flex items-center gap-2 transition hover:text-white"
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