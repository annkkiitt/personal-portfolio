"use client"

import { useEffect } from "react"

/**
 * Mounted once per page. Watches every [data-reveal] element and lets it fade
 * up as it enters the viewport, so sections can stay server components.
 */
export default function RevealObserver() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"))

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced || typeof IntersectionObserver === "undefined") {
      els.forEach((el) => el.classList.add("is-revealed"))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add("is-revealed")
          io.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return null
}
