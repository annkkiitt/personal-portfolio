import { ArrowLeft, Briefcase, Code, ExternalLink, Github, Globe } from "lucide-react"
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
            
            {/* Learning Management System - Large */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3 row-span-1 md:row-span-2 lg:row-span-3">
              <div className="h-full bg-card border-2 border-border rounded-2xl p-6 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                        Learning Management System
                      </h2>
                      <p className="text-sm text-muted-foreground">Next.js, Prisma, MySQL, Clerk, Stripe</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 mb-6">
                  <a 
                    href="https://learning-management-system-peach-eight.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Globe className="h-4 w-4" />
                    <span className="text-sm font-medium">Live Demo</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  <a 
                    href="https://github.com/annkkiitt/Learning-Management-System-" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    <span className="text-sm font-medium">GitHub</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-sm">
                      Built and deployed Learning Management System using <strong>Next.js</strong> & <strong>TypeScript</strong> to deliver a seamless learning experience for both students and educators, where students can purchase courses and educators can upload courses with separate chapters.
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-sm">
                      Integrated <strong>Stripe</strong> payment processing to enable students to purchase courses effortlessly.
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-sm">
                      Leveraged <strong>Prisma&apos;s</strong> ORM and <strong>MySQL</strong> for efficient data management and seamless database interactions.
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-sm">
                      Secure Authentication with <strong>Clerk</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Real Time Web Chat Application - Large */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3 row-span-1 md:row-span-2 lg:row-span-3">
              <div className="h-full bg-card border-2 border-border rounded-2xl p-6 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/10">
                      <Code className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-500/70 bg-clip-text text-transparent">
                        Real Time Web Chat Application
                      </h2>
                      <p className="text-sm text-muted-foreground">React.js, Node.js, Express.js, MongoDB, Socket.io</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 mb-6">
                  <a 
                    href="https://github.com/annkkiitt/MERN_Chat" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    <span className="text-sm font-medium">GitHub</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-sm">
                      Developed a Full stack chatting app which uses <strong>socket.io</strong> for real time communication where users can chat individually, join group.
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-sm">
                      User details are stored in encrypted format in <strong>MongoDB</strong>
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-sm">
                      Implemented the real-time chatting feature using <strong>Socket.io</strong>, enhancing user engagement and reducing response time by <strong>20%</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}
