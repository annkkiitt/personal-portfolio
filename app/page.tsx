import { User, Briefcase, Code, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import AboutMe from "@/public/images/About.png"
import Plasma from "@/components/Plasma/Plasma"
import MailIcon from "@/public/icons/3dicons-mail-iso-color.png"
import SkillIcon from "@/public/icons/3dicons-lab-dynamic-color.png"
import ProjectIcon from "@/public/icons/3dicons-computer-dynamic-color.png"

export default function HomePage() {
  return (
    <div className="h-screen bg-gradient-to-br from-background via-background to-muted/20 p-4 sm:p-8 md:p-12 lg:p-18 xl:p-24 relative z-10">
      {/* Main Content */}
      <main className="h-full relative z-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 p-2 sm:p-4 h-full">
          {/* About Me - Medium */}
          <div className="col-span-1 row-span-2 md:row-span-4">
            <Link href="/about" className="block h-full">
            
              <div className="h-full bg-[#FF6500] border-border rounded-3xl sm:rounded-4xl p-4 sm:p-6 flex flex-col hover:scale-102 transition-all duration-300">
                <h2 className="text-base sm:text-lg md:text-2xl lg:text-3xl text-black/80 font-semibold mb-2">About Me</h2>

                <div className="flex justify-center mb-3 sm:mb-4">
                  <Image 
                    src={AboutMe.src} 
                    alt="Ankit Rawat" 
                    width={300} 
                    height={300}
                    className="w-32 z-20 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 object-cover rounded-lg"
                  />
                </div>
                <p className="text-sm sm:text-base md:text-lg text-black/80">
                  Learn about my background, experience, and what drives me in technology.
                </p>          
              </div>
            </Link>
          </div>

          {/* Intro - Large */}
          <div className="col-span-1 relative sm:col-span-2 row-span-1 sm:row-span-2 md:row-span-2 lg:row-span-3">

            <div className="h-full relative z-10 p-4 sm:p-6 flex flex-col justify-center border rounded-2xl sm:rounded-4xl">
              <div className="absolute z-10 inset-0 w-full h-full rounded-2xl sm:rounded-4xl">
                <Plasma
                  color="#8B5DFF"
                  speed={0.3}
                  direction="reverse"
                  scale={2}
                  opacity={0.5}
                  mouseInteractive={true}
                />
              </div>
                <p className="text-xs sm:text-sm md:text-lg text-center sm:text-end text-muted-foreground">
                 Hi I&apos;m
                </p>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-center sm:text-end font-semibold mb-2">ANKIT RAWAT</h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-6xl text-center sm:text-end text-muted-foreground flex-grow">
                The Indian techie you can rely on.
                </p>
              </div>
          </div>

          {/* Projects - Large */}
          <div className="col-span-1 row-span-1 md:row-span-2 lg:row-span-3 h-[300px] w-full overflow-hidden rounded-2xl sm:rounded-4xl">
            
            {/* Content */}
            <Link href="/projects" className="block h-full relative z-10 bg-[#F05454]/80">
              <div className="h-full bg-transparent border-2 border-border group rounded-2xl sm:rounded-4xl p-4 sm:p-6 flex flex-col">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="p-1 rounded-lg bg-primary/10 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                    <Image src={ProjectIcon.src} alt="Projects" width={50} height={50} />
                  </div>
                </div>
                <h2 className="text-base sm:text-lg md:text-2xl font-semibold mb-2 text-black/80 uppercase">Projects</h2>
                <p className="text-xs sm:text-sm text-black/80 flex-grow">
                  Explore my portfolio of web applications, tools, and creative solutions.
                </p>
              </div>
            </Link>
          </div>
          {/* Skills - Medium */}
          <div className="col-span-1">
            <Link href="/skills" className="block h-full ">
              <div className="h-full bg-[#379777] border-2 border-border rounded-xl sm:rounded-3xl p-4 sm:p-6 flex flex-col group ">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="p-1 rounded-lg bg-primary/10 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                    <Image src={SkillIcon.src} alt="Mail" width={60} height={60} />
                  </div>
                </div>
                <h2 className="text-base sm:text-lg font-semibold mb-2">Skills & Tech</h2>
                <p className="text-xs sm:text-sm text-white/80 flex-grow">
                  Discover my technical expertise, programming languages, and frameworks.
                </p>
              </div>
            </Link>
          </div>

                    {/* Contact - Small */}
            <div className="col-span-2">
            <Link href="/contact" className="block h-full">
              <div className="h-full bg-card border-2 border-border rounded-xl sm:rounded-3xl p-4 sm:p-6 flex flex-col group ">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="p-1 rounded-lg bg-primary/5 group-hover:scale-105 group-hover:rotate-6 transition-all duration-300">
                    <Image src={MailIcon.src} alt="Mail" width={60} height={60} />
                  </div>
                </div>
                <h2 className="text-base sm:text-lg font-semibold mb-2">Get in Touch</h2>
                <p className="text-xs sm:text-sm text-muted-foreground flex-grow">
                  Ready to collaborate? Let&apos;s discuss your next project or opportunity.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
