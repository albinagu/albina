"use client"
import Experience from "./components/experience"
import Education from "./components/education"
import Skills from "./components/skills"
import NameAndTitle from "./components/nameAndTitle"
import Footer from "./components/footer"
import Decoration from "./components/decoration"
import AboutMe from "./components/aboutMe"
import Languages from "./components/languages"
import Projects from "./components/projects"
import { motion } from "framer-motion"
import Gallery from "./components/gallery"

export default function Home() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      >
        <Decoration />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="container mx-auto px-4"
      >
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-15 sm:mb-30 mb-15 sm:pt-20 pt-5">
          <NameAndTitle />
          <div className="sm:col-span-2">
            <AboutMe />
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-3 gap-15">
          <div className="flex flex-col sm:gap-30 gap-15">
            <Experience />
            <Education />
            <Languages />
          </div>
          <div className="col-span-2 flex flex-col sm:gap-30 gap-15">
            <Projects />
            <Skills />
            <Gallery />
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  )
}
