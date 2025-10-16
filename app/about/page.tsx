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
                <div className="h-full bg-card border-2 border-border rounded-2xl p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <User className="h-5 w-5" />
                    </div>
                  </div>
                  <h2 className="text-lg font-semibold mb-2">Background</h2>
                  <p className="text-sm text-muted-foreground flex-grow">
                    Completed Bachelor&apos;s in Computer Science from <Link href="https://www.gehu.ac.in/" target="_blank" rel="noopener noreferrer" className="text-primary underline">Graphic Era Hill University, Dehradun</Link> in 2024.
                  </p>
                </div>
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
                  When I&apos;m not buried in code, you&apos;ll probably find me at a tech event, vibing to some hip-hop, or on the cricket field trying my best not to bowl another wide - spoiler: I usually do.
                  </p>
                </div>
              </Link>
            </div>

            {/* Experience - Large */}
            <div className="col-span-1 md:col-span-2 lg:col-span-4 row-span-1 md:row-span-2 lg:row-span-3">
              <div className="h-full bg-card border-2 border-border rounded-2xl p-6 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                        Experience
                      </h2>
                      <p className="text-sm text-muted-foreground">Building cloud-native solutions</p>
                    </div>
                  </div>
                </div>
                
                {/* Current Role - Cloud Developer */}
                <div className="mb-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                        <h3 className="text-lg font-bold">
                          <a 
                            href="https://www.cloud202.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary underline hover:text-primary/80 transition-colors"
                          >
                            Cloud202
                          </a>
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">AWS Advanced Tier Partner - London, UK</p>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <span className="flex items-center space-x-1">
            
                          <span>May 2024 — Present</span>
                        </span>
                        <span className="flex items-center space-x-1">
                     
                          <span>Remote</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-4 mb-4">
                    <h4 className="text-base font-semibold text-primary mb-3">Cloud Developer</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <p className="text-sm">
                            <span className="font-medium">AWS Amplify Gen 2</span> with Next.js • <span className="text-primary font-semibold">30% faster</span> deployments
                          </p>
                        </div>
                        
                        <div className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <p className="text-sm">
                            <span className="font-medium">RAG Pipeline</span> & chatbot • <span className="text-primary font-semibold">50% faster</span> query resolution
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <p className="text-sm">
                            <span className="font-medium">Serverless solutions</span> • <span className="text-primary font-semibold">99.9% uptime</span>
                          </p>
                        </div>
                        
                        <div className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <p className="text-sm">
                            <span className="font-medium">AWS WAFR</span> • <span className="text-primary font-semibold">15% cost savings</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Previous Role - Full Stack Web Developer Intern */}
                <div className="mb-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                        <h3 className="text-lg font-bold">
                          <a 
                            href="https://www.cloud202.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary underline hover:text-primary/80 transition-colors"
                          >
                            Cloud202
                          </a>
                        </h3>
                      </div>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <span className="flex items-center space-x-1">
                          <span>Aug 2023 — Nov 2023</span>
                        </span>
                        <span className="flex items-center space-x-1">
                     
                          <span>Remote</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-4 mb-4">
                    <h4 className="text-base font-semibold text-primary mb-3">Full Stack Web Developer Intern</h4>
                                      
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <p className="text-sm">
                          <span className="font-medium">React + Chakra UI</span> • Redux toolkit
                        </p>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <p className="text-sm">
                          <span className="font-medium">Lazy-Loading</span> • <span className="text-primary font-semibold">25% faster</span> page loads
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <p className="text-sm">
                          <span className="font-medium">AWS Cognito</span> • S3 integration
                        </p>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <p className="text-sm">
                          <span className="font-medium">REST APIs</span> • Node.js + Express
                        </p>
                      </div>
                    </div>
                  </div>
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
