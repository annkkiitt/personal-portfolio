import type { Metadata, Viewport } from "next";
import { Instrument_Serif, JetBrains_Mono, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import RevealObserver from "@/components/reveal-observer";

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Display serif for headlines; the grotesk carries body copy and the mono the labels.
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Ankit Rawat, Full-stack & Cloud Developer",
  description:
    "Portfolio of Ankit Rawat, a full-stack and cloud developer building product front ends, serverless backends and GenAI systems on AWS.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ECEAE3" },
    { media: "(prefers-color-scheme: dark)", color: "#1D1C17" },
  ],
};

// Runs before first paint: applies a saved theme choice so an explicit
// preference never flashes the other theme. No choice saved = follow the OS.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <noscript>
          {/* Reveal animations are JS-driven; keep everything visible without it. */}
          <style>{`[data-reveal]{opacity:1;transform:none}`}</style>
        </noscript>
      </head>
      <body
        className={`${schibsted.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
