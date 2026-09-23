import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Vicky | AI Engineer & Full-Stack Developer",
    template: "%s | Vicky",
  },

  description:
    "Portfolio of Vicky — AI Engineer and Full-Stack Developer building intelligent applications, AI systems and modern digital experiences.",

  keywords: [
    "Vicky",
    "AI Engineer",
    "AI Developer",
    "Full-Stack Developer",
    "Generative AI",
    "LLM",
    "RAG",
    "Machine Learning",
    "Next.js",
    "React",
    "Python",
  ],

  authors: [
    {
      name: "Vicky",
    },
  ],

  creator: "Vicky",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Vicky | AI Engineer & Full-Stack Developer",
    description:
      "AI Engineer and Full-Stack Developer building intelligent applications and modern digital experiences.",
    type: "website",
    siteName: "Vicky Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vicky | AI Engineer & Full-Stack Developer",
    description:
      "AI Engineer and Full-Stack Developer building intelligent applications and modern digital experiences.",
  },
  icons: {
  icon: "/favicon.svg",
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}