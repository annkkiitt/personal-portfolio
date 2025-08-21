
import { ArrowLeft, Globe, ExternalLink, Github, Star } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const webAppProjects = [
  {
    id: "ecommerce",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and Stripe",
    icon: <Globe className="h-5 w-5" />,
    content: "A modern e-commerce platform with real-time inventory, payment processing, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    stars: 45
  },
  {
    id: "dashboard",
    title: "Analytics Dashboard",
    description: "Real-time data visualization dashboard with interactive charts",
    icon: <Globe className="h-5 w-5" />,
    content: "Comprehensive analytics dashboard with real-time data visualization and custom reporting.",
    tech: ["Next.js", "TypeScript", "D3.js", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    stars: 32
  },
  {
    id: "social-app",
    title: "Social Media App",
    description: "Social networking platform with real-time messaging",
    icon: <Globe className="h-5 w-5" />,
    content: "A social media application with user profiles, posts, comments, and real-time messaging.",
    tech: ["React", "Socket.io", "Express", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    stars: 28
  },
  {
    id: "task-manager",
    title: "Task Management System",
    description: "Collaborative task management with team features",
    icon: <Globe className="h-5 w-5" />,
    content: "Team collaboration tool with task management, project tracking, and team communication.",
    tech: ["Vue.js", "Laravel", "MySQL", "WebSockets"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    stars: 19
  }
]

export default function WebAppsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/projects" className="flex items-center space-x-2 group">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm">Back to Projects</span>
            </div>
          </Link>
          
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <Globe className="h-5 w-5 text-primary" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Web Applications
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {webAppProjects.map((project, index) => (
              <div
                key={project.id}
                className="group"
              >
                <Card className="h-full border-2 border-border bg-card">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2 rounded-lg bg-primary/10">
                        {project.icon}
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span>{project.stars}</span>
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-lg font-semibold">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {project.content}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center space-x-3 pt-2">
                                             <Link
                         href={project.liveUrl}
                         className="flex items-center space-x-1 text-xs text-primary"
                       >
                         <ExternalLink className="h-3 w-3" />
                         <span>Live Demo</span>
                       </Link>
                       <Link
                         href={project.githubUrl}
                         className="flex items-center space-x-1 text-xs text-muted-foreground"
                       >
                        <Github className="h-3 w-3" />
                        <span>Code</span>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
                      </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="absolute bottom-0 left-0 right-0 p-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs text-muted-foreground">
            Full-stack web applications built with modern technologies
          </p>
                  </div>
        </footer>
    </div>
  )
}
