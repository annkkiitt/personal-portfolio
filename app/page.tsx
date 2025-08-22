"use client"

import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import AboutMe from "@/public/images/About.png"
import Plasma from "@/components/Plasma/Plasma"
import MailIcon from "@/public/icons/3dicons-mail-iso-color.png"
import SkillIcon from "@/public/icons/3dicons-lab-dynamic-color.png"
import ProjectIcon from "@/public/icons/3dicons-computer-dynamic-color.png"
import AboutMeIcon from "@/public/icons/3dicons-boy-dynamic-color.png"

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,

    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,

    },
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-between sm:justify-center  p-2 relative z-10">
      {/* Main Content */}
      <main className="relative z-10">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-2 sm:gap-4 md:gap-8 p-1 sm:p-2 md:p-4 h-full max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* About Me - Medium */}
          <motion.div
            className="col-span-2 row-span-1 sm:col-span-1 sm:row-span-3 md:row-span-4"
            variants={itemVariants}
          >
            <Link href="/about" className="block h-full">
              <div className="h-full bg-[#FF6500]/90 border-border rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl p-3 sm:p-4 flex flex-col group">
                <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4">
                  <div className="block sm:hidden w-fit p-1 rounded-lg bg-primary/10 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                    <Image
                      src={AboutMeIcon.src || "/placeholder.svg"}
                      alt="About Me"
                      width={50}
                      height={50}
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                </div>

                <h2 className="text-sm flex flex-row sm:text-base md:text-lg lg:text-2xl xl:text-3xl text-black/70 font-semibold mb-0 sm:mb-2 md:mb-4 uppercase">
                  About Me
                  <ArrowUpRight className="w-10 text-white/80 h-6 opacity-0 group-hover:opacity-70 transition-opacity duration-300 ml-auto" />
                </h2>



                <div className="hidden sm:block justify-center mb-2 sm:mb-3 md:mb-4">
                  <Image
                    src={AboutMe.src || "/placeholder.svg"}
                    alt="Ankit Rawat"
                    width={300}
                    height={300}
                    className=" md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 2xl:w-64 2xl:h-64 object-contain rounded-lg group-hover:scale-105 transition-all duration-300"
                  />
                </div>

                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-black/70 mt-0 sm:mt-2 md:mt-4">
                  Learn about my background, experience, and what drives me in technology.
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Intro - Large */}
          <motion.div
            className="col-span-2 row-span-2 sm:col-span-2 sm:row-span-2 md:row-span-2 lg:row-span-3 relative"
          >
            <div className="h-full z-10 p-3 sm:p-4 md:p-6 flex flex-col justify-center border rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl">
              <div className="absolute z-10 inset-0 w-full h-full rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl">
                <Plasma
                  color="#8B5DFF"
                  speed={0.3}
                  direction="reverse"
                  scale={2}
                  opacity={0.5}
                  mouseInteractive={true}
                />
              </div>
              <p className="text-sm md:text-lg text-center sm:text-end text-muted-foreground">Hi I&apos;m</p>
              <h2 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl text-center sm:text-end font-semibold mb-2">
                ANKIT RAWAT
              </h2>
              <p className="text-xl xl:text-3xl 2xl:text-5xl text-center sm:text-end text-muted-foreground flex-grow">
                The Indian techie you can rely on.
              </p>
              <ArrowUpRight className="w-10 h-6 opacity-0 group-hover:opacity-70 transition-opacity duration-300 ml-auto mt-2" />
            </div>
          </motion.div>

          {/* Projects - Large */}
          <motion.div
            className="col-span-1 row-span-1 sm:row-span-2 md:row-span-2 lg:row-span-3 w-full overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl"
            variants={itemVariants}
          >
            {/* Content */}
            <Link href="/projects" className="block h-full relative z-10 bg-[#F05454]/80">
              <div className="h-full bg-transparent border-2 border-border group rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl p-3 sm:p-4 md:p-6 flex flex-col">
                <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4">
                  <div className="p-1 rounded-lg bg-primary/10 group-hover:scale-110  transition-all duration-300">
                    <Image
                      src={ProjectIcon.src || "/placeholder.svg"}
                      alt="Projects"
                      width={50}
                      height={50}
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                    />
                  </div>
                  <ArrowUpRight className="w-10 h-6 opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                </div>
                <h2 className="text-sm sm:text-base md:text-lg lg:text-2xl font-semibold mb-2 text-black/80 uppercase">
                  Projects
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-black/80 flex-grow">
                  Explore my portfolio of web applications, tools, and creative solutions.
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Skills - Medium */}
          <motion.div className="col-span-1 row-span-1" variants={itemVariants}>
            <Link href="/skills" className="block h-full">
              <div className="h-full bg-[#379777] border-2 border-border rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-6 flex flex-col group">
                <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4">
                  <div className="p-1 rounded-lg bg-primary/10 group-hover:scale-110  transition-all duration-300">
                    <Image
                      src={SkillIcon.src || "/placeholder.svg"}
                      alt="Skills"
                      width={60}
                      height={60}
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                    />
                  </div>
                  <ArrowUpRight className="w-10 h-6 opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                </div>
                <h2 className="text-sm sm:text-base md:text-lg font-semibold mb-2">Skills & Tech</h2>
                <p className="text-xs sm:text-sm md:text-base text-white/80 flex-grow">
                  Discover my technical expertise, programming languages, and frameworks.
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Contact - Small */}
          <motion.div className="col-span-2 row-span-1" variants={itemVariants}>
            <Link href="/contact" className="block h-full">
              <div className="h-full bg-card border-2 border-border rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-6 flex flex-col group">
                <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4">
                  <div className="p-1 rounded-lg bg-primary/5 group-hover:scale-110 transition-all duration-300">
                    <Image
                      src={MailIcon.src || "/placeholder.svg"}
                      alt="Mail"
                      width={60}
                      height={60}
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                    />
                  </div>
                  <ArrowUpRight className="w-10 h-6 opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                </div>
                <h2 className="text-sm sm:text-base md:text-lg font-semibold mb-2">Get in Touch</h2>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground flex-grow">
                  Ready to collaborate? Let&apos;s discuss your next project or opportunity.
                </p>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}
