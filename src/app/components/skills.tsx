import { skills } from "../utils"

export default function Skills() {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-purple-300 mb-4">
        Main skills
      </h2>
      <ul className="text-white grid sm:grid-cols-3 grid-cols-2 sm:text-lg">
        {skills.map((skill, index) => (
          <li key={index} className="pb-2">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}
