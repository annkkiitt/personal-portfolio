"use client";

import { useEffect, useRef, useState } from "react";

type Renderer = {
  ready: Promise<void>;
  dispose: () => void;
  setPaused: (paused: boolean) => void;
  setTheme: (theme: "light" | "dark") => void;
};

/** Mirrors the theme selectors in globals.css: an explicit data-theme wins, otherwise the OS preference. */
function currentTheme(): "light" | "dark" {
  const explicit = document.documentElement.dataset.theme;
  if (explicit === "light" || explicit === "dark") return explicit;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/**
 * FFT ocean particle field behind the hero. Pulled from the vgpu `fft-ocean`
 * example (`npx vgpu examples pull fft-ocean`), MIT.
 *
 * Dark mode keeps the original look: white particles on black, screened onto
 * the dark ground. Light mode is drawn by the shader itself (see present.wgsl):
 * ink dots with white glints and sheen on a transparent canvas, because a CSS
 * inversion of the dark render can only darken the paper and loses the shine.
 * Blend rules live in globals.css next to the rest of the theme switching.
 *
 * Bails out silently and leaves the plain background when WebGPU is missing or
 * the visitor prefers reduced motion.
 */
export default function OceanBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (!("gpu" in navigator)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    let renderer: Renderer | undefined;
    let observer: IntersectionObserver | undefined;
    let themeObserver: MutationObserver | undefined;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const syncTheme = () => renderer?.setTheme(currentTheme());

    void (async () => {
      const { createRenderer } = await import("./renderer");
      if (cancelled) return;

      const instance = createRenderer({ canvas }) as Renderer;
      renderer = instance;

      try {
        await instance.ready;
      } catch {
        // No adapter, or the graph failed to build. The page is designed to
        // stand on its own without this, so stay quiet and leave it off.
        return;
      }
      if (cancelled) return;

      syncTheme();
      themeObserver = new MutationObserver(syncTheme);
      themeObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-theme"],
      });
      media.addEventListener("change", syncTheme);

      setVisible(true);

      // Half a million particles plus an IFFT and a bloom chain is not work to
      // keep doing while someone reads the About section.
      observer = new IntersectionObserver(
        ([entry]) => instance.setPaused(!entry.isIntersecting),
        { threshold: 0 },
      );
      observer.observe(canvas);
    })();

    return () => {
      cancelled = true;
      observer?.disconnect();
      themeObserver?.disconnect();
      media.removeEventListener("change", syncTheme);
      renderer?.dispose();
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Dark mode: opaque black stage screened onto the page, so black drops
          out and only the particles' light remains. Light mode: the stage goes
          transparent and the canvas composites normally (globals.css). */}
      <div className="ocean-stage absolute inset-0">
        <canvas
          ref={canvasRef}
          className={`ocean-canvas block h-full w-full transition-opacity duration-1000 ease-out ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      {/* Keeps the headline off the busiest part of the field without hiding it. */}
      <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/55 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-paper" />
    </div>
  );
}
