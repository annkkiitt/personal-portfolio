"use client"

import { Moon, Sun } from "lucide-react"

/**
 * Stateless on purpose: the icon shown is decided in CSS from the root
 * `data-theme` attribute (see globals.css), so there is nothing to hydrate and
 * no flash of the wrong icon. The click handler reads whatever the page is
 * currently showing and writes the opposite.
 */
export default function ThemeToggle() {
  function toggle() {
    const root = document.documentElement
    const current = root.dataset.theme
    const isDark =
      current === "dark" ||
      (!current && window.matchMedia("(prefers-color-scheme: dark)").matches)
    const next = isDark ? "light" : "dark"

    root.dataset.theme = next
    try {
      localStorage.setItem("theme", next)
    } catch {
      // private mode / storage disabled, so the choice just will not persist
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className="-mr-1 flex size-7 cursor-pointer items-center justify-center transition-opacity hover:opacity-60"
    >
      <Moon className="theme-icon-to-dark size-4" strokeWidth={1.5} aria-hidden="true" />
      <Sun className="theme-icon-to-light size-4" strokeWidth={1.5} aria-hidden="true" />
    </button>
  )
}
