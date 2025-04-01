import { skills } from "../utils"
import { FaRegLightbulb } from "react-icons/fa"

export default function Skills() {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-purple-700 dark:text-purple-300 mb-4">
        Main skills
      </h2>
      <ul className="grid sm:grid-cols-3 grid-cols-2 sm:text-lg">
        {skills.map((skill, index) => (
          <li key={index} className="pb-2">
            <div className="flex items-center">
              <FaRegLightbulb className="text-xs text-yellow-500 dark:text-yellow-200 mr-1" />
              {skill}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
