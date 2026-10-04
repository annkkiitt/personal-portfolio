"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "@/components/theme-toggle";
import { profile } from "@/lib/content";

// Ordered to match the page: experience and credentials, then project work.
const nav = [
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // Transparent at the top so the hero reads uninterrupted; once the page
    // scrolls, a frosted pane keeps the nav legible over whatever passes under it.
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b text-ink transition-[background-color,border-color,backdrop-filter,box-shadow] duration-300 ${
        scrolled
          ? "border-ink/10 bg-paper/60 shadow-[inset_0_1px_0_rgb(255_255_255/0.25),0_8px_24px_-12px_rgb(0_0_0/0.12)] backdrop-blur-xl backdrop-saturate-150"
          : "border-transparent bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1500px] items-center justify-between gap-6 px-[clamp(20px,5vw,64px)] transition-[padding] duration-300 ${
          scrolled ? "py-[14px]" : "py-[22px]"
        }`}
      >
        <a href="#top" className="text-[16px] font-semibold tracking-[-0.01em]">
          {profile.name}
          {/* dropped below sm so the nav stays on one line on small phones */}
          <span className="hidden opacity-55 sm:inline">
            , {profile.shortRole}
          </span>
        </a>
        <nav className="flex items-center gap-[clamp(16px,3vw,40px)] font-mono text-[12.5px] tracking-[0.02em]">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-opacity hover:opacity-60"
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
