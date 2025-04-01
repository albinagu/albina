import Image from "next/image"
import { projects } from "../utils"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MdAlternateEmail } from "react-icons/md"

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const handleToggle = () => {
    setShowAll(!showAll)
  }

  return (
    <section className="flex flex-col sm:gap-30 gap-15 sm:mt-0 mt-15">
      <div>
        <h2 className="text-2xl font-semibold text-purple-300">
          Recent projects
        </h2>
        <p className="text-sm text-gray-400 mb-5">Digital Iceland</p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {/* initial 6 items */}
          {projects.slice(0, 6).map((project, index) => (
            <div key={index} className="border-1 rounded-xl p-5">
              <div className="flex justify-between">
                <div className="text-4xl text-purple-300 font-semibold">
                  {index + 1}
                </div>

                <Image src={project.image} alt="island" width={120} />
              </div>
              <p className="sm:text-lg font-semi-bold">{project.name}</p>
            </div>
          ))}
        </div>
        <AnimatePresence>
          {/* the rest of the items */}
          {showAll && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 pt-5"
            >
              {projects.slice(6).map((project, index) => (
                <div key={6 + index} className="border-1 rounded-lg p-5">
                  <div className="flex justify-between">
                    <div className="text-4xl text-purple-300 font-semibold">
                      {6 + index + 1}
                    </div>

                    <Image src={project.image} alt="island" width={120} />
                  </div>
                  <p className="sm:text-lg font-semi-bold">{project.name}</p>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex justify-center">
          <button
            onClick={handleToggle}
            className="sm:mt-10 mt-5 text-purple-300 hover:text-purple-400 transition-colors"
          >
            {showAll ? "See less" : "See more"}
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-purple-300">
          Other projects
        </h2>
        <p className="text-sm text-gray-400 mb-5">
          Kosmos & Kaos and Novomatic
        </p>
        <p className="sm:text-lg">
          My previous projects{" "}
          <MdAlternateEmail className="inline-block text-xs text-white" />
          Kosmos & Kaos include various frontend work for different clients,
          such as Kringlan (building both their website and app), Herjólfur,
          Aðaltorg, Alþingi and others.
        </p>
        <p className="sm:text-lg pt-5">
          My projects{" "}
          <MdAlternateEmail className="inline-block text-xs text-white" />
          Novomatic included various frontend / fullstack work for implementing
          solutions used to service lottery games and administration around it.
        </p>
      </div>
    </section>
  )
}
