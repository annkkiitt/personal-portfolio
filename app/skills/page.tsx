import { IconCloudDemo } from "@/components/icon-cloud"
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text"
import { OrbitingCircles } from "@/components/magicui/orbiting-circles"
import { OrbitingCirclesDemo } from "@/components/orbiting-circle-demo"
import { cn } from "@/lib/utils"
import { ArrowLeft, Code, Briefcase, User, ChevronRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import AWSLogo from "@/public/icons/aws-logo.svg"
import Image from "next/image"

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
                <div className="h-full bg-card border-2 border-border rounded-4xl p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Code className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="mb-2 sm:mb-4 lg:mb-6">

                  <h2 className="text-lg font-semibold flex flex-row gap-4">AWS Cloud
                  <Link href="#certifications" className="group mb-2 relative w-fit flex items-center justify-center rounded-full px-4 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] cursor-pointer">
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
                    </Link>
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
                <div className="h-full border-2 bg-[#379777]/80 border-border rounded-4xl p-6 flex flex-col">
                <OrbitingCirclesDemo/>
                </div>
              </Link>
            </div>

            {/* DevOps - Small */}
            <div className="col-span-1 row-span-1">
              <Link href="/skills/devops" className="block h-full">
                <div className="h-full bg-card border-2 border-border rounded-4xl p-6 flex flex-col">
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

            {/* Certifications */}
            <div className="col-span-1 lg:col-span-3 row-span-3 lg:row-span-1" id="certifications">
              <div className="h-full bg-card border-2 border-border rounded-4xl p-6 flex flex-col">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full">
                                     {/* AWS Certified AI Practitioner */}
                   <div className="bg-[#F05454]/90 border rounded-lg p-4 flex flex-col">
                     <div className="flex items-start space-x-3 mb-3">
                       <div className="flex-shrink-0">
                       <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                           <Image src={AWSLogo} alt="AWS" width={16} height={16} />
                         </div>
                       </div>
                       <div className="flex-1 min-w-0">
                         <h3 className="font-semibold text-sm text-white/80">
                           AWS Certified AI Practitioner
                         </h3>
                       </div>
                     </div>
                     
                     <div className="flex-1 flex flex-col">
                       <p className="text-xs text-gray-800 mb-1">Amazon Web Services (AWS)</p>
                       <p className="text-xs text-gray-800 mb-4">Issued May 2025 · Expires May 2028</p>
                       
                       <div className="mt-auto">
                         <Link 
                           href="https://www.credly.com/badges/8eceb932-b46c-48bc-9fb5-552d1372e697/linked_in_profile"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex w-fit items-center space-x-1 text-xs text-gray-700 border border-gray-300 rounded px-3 py-1 bg-gray-50 transition-colors hover:bg-gray-100"
                         >
                           <span>Show credential</span>
                           <ExternalLink className="h-3 w-3" />
                         </Link>
                       </div>
                     </div>
                   </div>

                                     {/* AWS Certified Developer – Associate */}
                   <div className="bg-[#F05454]/90 border rounded-lg p-4 flex flex-col">
                     <div className="flex items-start space-x-3 mb-3">
                       <div className="flex-shrink-0">
                         <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                           <Image src={AWSLogo} alt="AWS" width={16} height={16} />
                         </div>
                       </div>
                       <div className="flex-1 min-w-0">
                         <h3 className="font-semibold text-sm text-white/80">
                           AWS Certified Developer – Associate
                         </h3>
                       </div>
                     </div>
                     
                     <div className="flex-1 flex flex-col">
                       <p className="text-xs text-gray-800 mb-1">Amazon Web Services (AWS)</p>
                       <p className="text-xs text-gray-800 mb-1">Issued Mar 2025 · Expires Mar 2028</p>
                       
                       <div className="mt-auto">
                         <Link 
                           href="https://www.credly.com/earner/earned/badge/a22bed59-b1ca-41ed-bae3-d1185eea6a8f"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex w-fit items-center space-x-1 text-xs text-gray-700 border border-gray-300 rounded px-3 py-1 bg-gray-50 transition-colors hover:bg-gray-100"
                         >
                           <span>Show credential</span>
                           <ExternalLink className="h-3 w-3" />
                         </Link>
                       </div>
                     </div>
                   </div>

                                     {/* AWS Certified Cloud Practitioner */}
                   <div className="bg-[#F05454]/90 border rounded-lg p-4 flex flex-col">
                     <div className="flex items-start space-x-3 mb-3">
                       <div className="flex-shrink-0">
                       <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                           <Image src={AWSLogo} alt="AWS" width={16} height={16} />
                         </div>
                       </div>
                       <div className="flex-1 min-w-0">
                         <h3 className="font-semibold text-sm text-white/80">
                           AWS Certified Cloud Practitioner
                         </h3>
                       </div>
                     </div>
                     
                     <div className="flex-1 flex flex-col">
                       <p className="text-xs text-gray-800 mb-1">Amazon Web Services (AWS)</p>
                       <p className="text-xs text-gray-800 mb-4">Issued Dec 2023 · Expires Dec 2026</p>
                       
                       <div className="mt-auto">
                         <Link 
                           href="https://www.credly.com/badges/e923aceb-591b-4138-9045-4ed906a995bf/linked_in_profile"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex w-fit items-center space-x-1 text-xs text-gray-700 border border-gray-300 rounded px-3 py-1 bg-gray-50 transition-colors hover:bg-gray-100"
                         >
                           <span>Show credential</span>
                           <ExternalLink className="h-3 w-3" />
                         </Link>
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
