import Image from "next/image"
import { projects } from "../utils"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const handleToggle = () => {
    setShowAll(!showAll)
  }

  return (
    <section className="flex flex-col sm:gap-20 gap-12 sm:mt-0 mt-12">
      <div>
        <h2 className="text-2xl font-semibold text-purple-300">
          Recent projects
        </h2>
        <p className="text-sm text-gray-500 mb-5">Digital Iceland</p>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-7">
          {/* initial 6 items */}
          {projects.slice(0, 6).map((project, index) => (
            <div key={index} className="border-1 rounded-xl p-5 bg-gray-950">
              <div className="text-purple-300 font-semibold">{index + 1}</div>
              <div className="flex justify-center">
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
              className="grid sm:grid-cols-3 grid-cols-1 gap-7 pt-5"
            >
              {projects.slice(6).map((project, index) => (
                <div key={6 + index} className="border-1 rounded-lg p-5">
                  <div className="text-purple-300 font-semibold">
                    {6 + index + 1}
                  </div>
                  <div className="flex justify-center">
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
            className="sm:mt-10 mt-5 text-purple-300 hover:text-purple-500 transition-colors"
          >
            {showAll ? "See less" : "See more"}
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-purple-300">
          Other projects
        </h2>
        <p className="text-sm text-gray-500 mb-5">Kosmos&Kaos and Novomatic</p>
        <p className="sm:text-lg">
          My previous projects @Júní include various frontend work for different
          clients, such as Kringlan (building both their website and app),
          Herjólfur, Aðaltorg, Alþingi and others.
        </p>
        <p className="sm:text-lg pt-5">
          My projects @Novomatic included various frontend / fullstack work for
          implementing solutions used to service lottery games and
          administration around it.
        </p>
      </div>
    </section>
  )
}
