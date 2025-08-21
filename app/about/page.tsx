import { ArrowLeft, User, Briefcase, Code, Mail } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
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
              <User className="h-5 w-5 text-primary" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              About Me
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {/* Background - Medium */}
            <div className="col-span-1 md:col-span-2 row-span-1 md:row-span-2">
              <Link href="/about/background" className="block h-full">
                <div className="h-full bg-card border-2 border-border rounded-2xl p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <User className="h-5 w-5" />
                    </div>
                  </div>
                  <h2 className="text-lg font-semibold mb-2">Background</h2>
                  <p className="text-sm text-muted-foreground flex-grow">
                    My journey from education to professional development and continuous learning.
                  </p>
                </div>
              </Link>
            </div>

            {/* Experience - Large */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3 row-span-1 md:row-span-2 lg:row-span-3">
              <Link href="/about/experience" className="block h-full">
                <div className="h-full bg-card border-2 border-border rounded-2xl p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Briefcase className="h-5 w-5" />
                    </div>
                  </div>
                  <h2 className="text-lg font-semibold mb-2">Experience</h2>
                  <p className="text-sm text-muted-foreground flex-grow">
                    Professional experience across different companies and technologies.
                  </p>
                </div>
              </Link>
            </div>

            {/* Interests - Medium */}
            <div className="col-span-1 md:col-span-2 row-span-1 md:row-span-2">
              <Link href="/about/interests" className="block h-full">
                <div className="h-full bg-card border-2 border-border rounded-2xl p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Code className="h-5 w-5" />
                    </div>
                  </div>
                  <h2 className="text-lg font-semibold mb-2">Interests</h2>
                  <p className="text-sm text-muted-foreground flex-grow">
                    What I&apos;m passionate about beyond coding - hobbies, learning, and personal growth.
                  </p>
                </div>
              </Link>
            </div>

            {/* Values - Small */}
            <div className="col-span-1 row-span-1">
              <Link href="/about/values" className="block h-full">
                <div className="h-full bg-card border-2 border-border rounded-2xl p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5" />
                    </div>
                  </div>
                  <h2 className="text-lg font-semibold mb-2">Values</h2>
                  <p className="text-sm text-muted-foreground flex-grow">
                    The principles that guide my work and collaboration approach.
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
            Learn more about my journey and experience
          </p>
        </div>
      </footer>
    </div>
  )
}
