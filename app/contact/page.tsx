import { ArrowLeft, Mail, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
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
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Get in Touch
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {/* Email - Medium */}
            <div className="col-span-1 md:col-span-2 row-span-1 md:row-span-2">
              <Link href="mailto:hello@example.com" className="block h-full">
                <div className="h-full bg-card border-2 border-border rounded-2xl p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5" />
                    </div>
                  </div>
                  <h2 className="text-lg font-semibold mb-2">Email</h2>
                  <p className="text-sm text-muted-foreground flex-grow">
                    Send me a direct message for project inquiries or collaboration.
                  </p>
                </div>
              </Link>
            </div>

            {/* GitHub - Medium */}
            <div className="col-span-1 md:col-span-2 row-span-1 md:row-span-2">
              <Link href="https://github.com/yourusername" className="block h-full">
                <div className="h-full bg-card border-2 border-border rounded-2xl p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Github className="h-5 w-5" />
                    </div>
                  </div>
                  <h2 className="text-lg font-semibold mb-2">GitHub</h2>
                  <p className="text-sm text-muted-foreground flex-grow">
                    Check out my open-source contributions and personal projects.
                  </p>
                </div>
              </Link>
            </div>

            {/* LinkedIn - Small */}
            <div className="col-span-1 row-span-1">
              <Link href="https://linkedin.com/in/yourusername" className="block h-full">
                <div className="h-full bg-card border-2 border-border rounded-2xl p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Linkedin className="h-5 w-5" />
                    </div>
                  </div>
                  <h2 className="text-lg font-semibold mb-2">LinkedIn</h2>
                  <p className="text-sm text-muted-foreground flex-grow">
                    Connect with me professionally and view my work experience.
                  </p>
                </div>
              </Link>
            </div>

            {/* Twitter - Small */}
            <div className="col-span-1 row-span-1">
              <Link href="https://twitter.com/yourusername" className="block h-full">
                <div className="h-full bg-card border-2 border-border rounded-2xl p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Twitter className="h-5 w-5" />
                    </div>
                  </div>
                  <h2 className="text-lg font-semibold mb-2">Twitter</h2>
                  <p className="text-sm text-muted-foreground flex-grow">
                    Follow me for tech insights, updates, and industry thoughts.
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
            Ready to collaborate? Let&apos;s discuss your next project
          </p>
        </div>
      </footer>
    </div>
  )
}
