import { projects } from "../data"
import { useState, useRef, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  MdAlternateEmail,
  MdExpandMore,
  MdExpandLess,
  MdClose,
} from "react-icons/md"
import { FaCode, FaUserAlt, FaCalendarAlt } from "react-icons/fa"
import Image from "next/image"
import island from "../assets/projects/island.svg"

type Project = {
  name: string
  shortDesc: string
  description: string
  technologies: string[]
  role: string
  year: string
  link: string
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  const toggleSeeMore = () => {
    setShowAll(!showAll)
  }

  const toggleProjectModal = useCallback(
    (index: number | null) => {
      if (index === null || index === selectedProject) {
        setSelectedProject(null)
        document.body.style.overflow = "auto"
      } else {
        setSelectedProject(index)
        document.body.style.overflow = "hidden"
      }
    },
    [selectedProject],
  )

  useEffect(() => {
    if (selectedProject !== null) {
      // close on click outside
      const handleClickOutside = (event: MouseEvent) => {
        if (
          modalRef.current &&
          !modalRef.current.contains(event.target as Node)
        ) {
          toggleProjectModal(null)
        }
      }

      // close on press escape
      const handleEscapeKey = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          toggleProjectModal(null)
        }
      }

      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleEscapeKey)

      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
        document.removeEventListener("keydown", handleEscapeKey)
      }
    }
  }, [selectedProject, toggleProjectModal])

  const ProjectCard = ({
    project,
    index,
  }: {
    project: Project
    index: number
  }) => {
    return (
      <motion.div
        layout
        key={index}
        className="border border-gray-400/50 rounded-lg p-5 transition-all duration-300 hover:shadow-md"
        onClick={() => toggleProjectModal(index)}
        style={{ cursor: "pointer" }}
        whileHover={{ y: -5, transition: { duration: 0.1 } }}
      >
        <div className="text-3xl text-purple-700 dark:text-purple-300 font-semibold mb-5">
          {index + 1}
        </div>

        <div className="mt-2">
          <p className="sm:text-lg font-semibold">{project.name}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {project.shortDesc}
          </p>
        </div>
      </motion.div>
    )
  }

  const ProjectModal = () => {
    if (selectedProject === null) return null
    const project = projects[selectedProject]

    return (
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 z-50 flex items-start sm:items-center justify-center pt-10 sm:pt-0"
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            ref={modalRef}
            className="bg-white/90 dark:bg-black dark:border-gray-400/50 backdrop-blur-lg rounded-xl max-w-3xl w-[95%] sm:w-full max-h-[85vh] mt-4 sm:mt-0 overflow-y-auto shadow-xl border border-white/20"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="p-5 sm:p-10 pb-10 sm:pb-15 relative">
              <button
                onClick={() => toggleProjectModal(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 p-1 bg-gray-100/50 dark:bg-gray-800/50 rounded-full"
                aria-label="Close modal"
              >
                <MdClose size={25} />
              </button>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                <div className="flex-grow">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100">
                    {project.name}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
                    {project.shortDesc}
                  </p>
                </div>
                <div className="flex-shrink-0 self-center sm:self-start sm:ml-4">
                  <Image
                    src={island}
                    alt={project.name}
                    width={90}
                    height={90}
                    className="sm:w-[120px] sm:h-[120px] w-[90px] h-[90px]"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-lg p-4 sm:p-5 text-gray-700 dark:text-gray-300 shadow-sm border border-white/20 dark:border-gray-700/30">
                  <p className="text-sm sm:text-base">{project.description}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/30 dark:bg-gray-700/30 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-white/20 dark:border-gray-700/20">
                    <div className="flex items-center gap-2 mb-2">
                      <FaUserAlt className="text-purple-600 dark:text-purple-400" />
                      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Role
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      {project.role}
                    </p>
                  </div>

                  <div className="bg-white/30 dark:bg-gray-700/30 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-white/20 dark:border-gray-700/20">
                    <div className="flex items-center gap-2 mb-2">
                      <FaCalendarAlt className="text-purple-600 dark:text-purple-400" />
                      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Year
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      {project.year}
                    </p>
                  </div>
                </div>

                <div className="bg-white/30 dark:bg-gray-700/30 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-white/20 dark:border-gray-700/20">
                  <div className="flex items-center gap-2 mb-3">
                    <FaCode className="text-purple-600 dark:text-purple-400" />
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Technologies
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-sm bg-purple-100/70 dark:bg-purple-900/40 backdrop-blur-sm text-purple-700 dark:text-purple-300 rounded-full border border-purple-200/30 dark:border-purple-800/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    )
  }

  return (
    <section className="flex flex-col sm:gap-30 gap-15 sm:mt-0 mt-15">
      {/* Render the project modal */}
      {selectedProject !== null && <ProjectModal />}

      <div>
        <h2 className="text-2xl font-semibold text-purple-700 dark:text-purple-300">
          Recent projects
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
          Digital Iceland
        </p>
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7"
        >
          {/* initial 6 items */}
          {projects.slice(0, 6).map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>
        <AnimatePresence>
          {/* the rest of the items */}
          {showAll && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 pt-5"
            >
              {projects.slice(6).map((project, index) => (
                <ProjectCard
                  key={6 + index}
                  project={project}
                  index={6 + index}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex justify-center">
          <button
            onClick={toggleSeeMore}
            className="sm:mt-10 mt-5 text-purple-700 dark:text-purple-300 hover:text-purple-400 transition-colors cursor-pointer flex items-center gap-1"
          >
            {showAll ? (
              <>
                <MdExpandLess /> See less
              </>
            ) : (
              <>
                <MdExpandMore /> See more
              </>
            )}
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-purple-700 dark:text-purple-300">
          Other projects
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
          Kosmos & Kaos and Novomatic
        </p>
        <p className="sm:text-lg">
          My previous projects{" "}
          <MdAlternateEmail className="inline-block text-xs" />
          Kosmos & Kaos include various frontend work for different clients,
          such as Kringlan (building both their website and app), Herjólfur,
          Aðaltorg, Alþingi and others.
        </p>
        <p className="sm:text-lg pt-5">
          My projects <MdAlternateEmail className="inline-block text-xs" />
          Novomatic included various frontend / fullstack work for implementing
          solutions used to service lottery games and administration around it.
        </p>
      </div>
    </section>
  )
}
