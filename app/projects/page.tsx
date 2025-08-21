import { ArrowLeft, Briefcase, Code, User } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm">Back to Home</span>
            </div>
          </Link>
          
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <Briefcase className="h-5 w-5 text-primary" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Projects
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {/* Web Applications - Large */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3 row-span-1 md:row-span-2 lg:row-span-3">
              <Link href="/projects/web-apps" className="block h-full">
                <div className="h-full bg-card border-2 border-border rounded-2xl p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Code className="h-5 w-5" />
                    </div>
                  </div>
                  <h2 className="text-lg font-semibold mb-2">Web Applications</h2>
                  <p className="text-sm text-muted-foreground flex-grow">
                    Full-stack web applications built with modern frameworks and best practices.
                  </p>
                </div>
              </Link>
            </div>

            {/* Mobile Apps - Medium */}
            <div className="col-span-1 md:col-span-2 row-span-1 md:row-span-2">
              <Link href="/projects/mobile-apps" className="block h-full">
                <div className="h-full bg-card border-2 border-border rounded-2xl p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Briefcase className="h-5 w-5" />
                    </div>
                  </div>
                  <h2 className="text-lg font-semibold mb-2">Mobile Apps</h2>
                  <p className="text-sm text-muted-foreground flex-grow">
                    Cross-platform mobile applications using React Native and Flutter.
                  </p>
                </div>
              </Link>
            </div>

            {/* Developer Tools - Medium */}
            <div className="col-span-1 md:col-span-2 row-span-1 md:row-span-2">
              <Link href="/projects/tools" className="block h-full">
                <div className="h-full bg-card border-2 border-border rounded-2xl p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Code className="h-5 w-5" />
                    </div>
                  </div>
                  <h2 className="text-lg font-semibold mb-2">Developer Tools</h2>
                  <p className="text-sm text-muted-foreground flex-grow">
                    Open-source tools and utilities to improve developer productivity.
                  </p>
                </div>
              </Link>
            </div>

            {/* Experiments - Small */}
            <div className="col-span-1 row-span-1">
              <Link href="/projects/experiments" className="block h-full">
                <div className="h-full bg-card border-2 border-border rounded-2xl p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <User className="h-5 w-5" />
                    </div>
                  </div>
                  <h2 className="text-lg font-semibold mb-2">Experiments</h2>
                  <p className="text-sm text-muted-foreground flex-grow">
                    Creative coding experiments, prototypes, and innovative solutions.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 p-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs text-muted-foreground">
            Explore my portfolio of creative solutions
          </p>
        </div>
      </footer>
    </div>
  )
}
