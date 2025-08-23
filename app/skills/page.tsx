import { IconCloudDemo } from "@/components/icon-cloud"
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text"
import { OrbitingCircles } from "@/components/magicui/orbiting-circles"
import { OrbitingCirclesDemo } from "@/components/orbiting-circle-demo"
import { cn } from "@/lib/utils"
import { ArrowLeft, Code, Briefcase, User, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function SkillsPage() {
  return (
    <div className="min-h-screen">
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
              <Link href="/skills" className="block h-full">
                <div className="h-full bg-card border-2 border-border rounded-2xl p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Code className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="mb-2 sm:mb-4 lg:mb-6">

                  <h2 className="text-lg font-semibold flex flex-row gap-4">AWS Cloud
                  <div className="group mb-2 relative w-fit flex items-center justify-center rounded-full px-4 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] ">
                      <span
                        className={cn(
                          "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]",
                        )}
                        style={{
                          WebkitMask:
                            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                          WebkitMaskComposite: "destination-out",
                          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                          maskComposite: "subtract",
                          WebkitClipPath: "padding-box",
                        }}
                      />
                      🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
                      <AnimatedGradientText className="text-xs font-medium">
                        3x AWS Certified
                      </AnimatedGradientText>
                    </div>
                  </h2>
                  <p className="text-sm text-muted-foreground flex-grow">
                    Amplify Gen2, Lambda, S3, DynamoDB, API Gateway, Bedrock, and more.
                  </p>
                  </div>

                  <div className="mb-2 sm:mb-4 lg:mb-6">
                  <h2 className="text-lg font-semibold mb-1">Frontend</h2>
                  <p className="text-sm text-muted-foreground flex-grow">
                    React, Next.js, TypeScript, Tailwind CSS, Shadcn UI, and modern web technologies.
                  </p>
                  </div>

                  <div className="mb-2 sm:mb-4 lg:mb-6">
                  <h2 className="text-lg font-semibold mb-1">Backend</h2>
                  <p className="text-sm text-muted-foreground flex-grow">
                    Node.js, Express, MongoDB, and more.
                  </p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Backend - Medium */}
            <div className="col-span-1 md:col-span-2 row-span-1 md:row-span-2">
              <Link href="/skills/backend" className="block h-full">
                <div className="h-full border-2 bg-[#379777]/80 border-border rounded-2xl p-6 flex flex-col">
                <OrbitingCirclesDemo/>
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
            <div className="col-span-1 lg:col-span-3 row-span-3 lg:row-span-1">
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

    </div>
  )
}
