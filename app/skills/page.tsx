import { ArrowLeft, Code, Briefcase, User } from "lucide-react"
import Link from "next/link"

export default function SkillsPage() {
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
              <Code className="h-5 w-5 text-primary" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Skills & Tech
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {/* Frontend - Medium */}
            <div className="col-span-1 md:col-span-2 row-span-1 md:row-span-2">
              <Link href="/skills/frontend" className="block h-full">
                <div className="h-full bg-card border-2 border-border rounded-2xl p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Code className="h-5 w-5" />
                    </div>
                  </div>
                  <h2 className="text-lg font-semibold mb-2">Frontend</h2>
                  <p className="text-sm text-muted-foreground flex-grow">
                    React, Next.js, TypeScript, Tailwind CSS, and modern web technologies.
                  </p>
                </div>
              </Link>
            </div>

            {/* Backend - Medium */}
            <div className="col-span-1 md:col-span-2 row-span-1 md:row-span-2">
              <Link href="/skills/backend" className="block h-full">
                <div className="h-full bg-card border-2 border-border rounded-2xl p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Briefcase className="h-5 w-5" />
                    </div>
                  </div>
                  <h2 className="text-lg font-semibold mb-2">Backend</h2>
                  <p className="text-sm text-muted-foreground flex-grow">
                    Node.js, Python, databases, APIs, and server-side development.
                  </p>
                </div>
              </Link>
            </div>

            {/* DevOps - Small */}
            <div className="col-span-1 row-span-1">
              <Link href="/skills/devops" className="block h-full">
                <div className="h-full bg-card border-2 border-border rounded-2xl p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Code className="h-5 w-5" />
                    </div>
                  </div>
                  <h2 className="text-lg font-semibold mb-2">DevOps</h2>
                  <p className="text-sm text-muted-foreground flex-grow">
                    Docker, AWS, CI/CD, monitoring, and infrastructure management.
                  </p>
                </div>
              </Link>
            </div>

            {/* Soft Skills - Small */}
            <div className="col-span-1 row-span-1">
              <Link href="/skills/soft-skills" className="block h-full">
                <div className="h-full bg-card border-2 border-border rounded-2xl p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <User className="h-5 w-5" />
                    </div>
                  </div>
                  <h2 className="text-lg font-semibold mb-2">Soft Skills</h2>
                  <p className="text-sm text-muted-foreground flex-grow">
                    Leadership, communication, problem-solving, and team collaboration.
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
            Discover my technical expertise and capabilities
          </p>
        </div>
      </footer>
    </div>
  )
}
