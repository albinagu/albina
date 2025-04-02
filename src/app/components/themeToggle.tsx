import { useState, useEffect } from "react"
import { BsSunFill, BsMoonFill } from "react-icons/bs"

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")

    if (storedTheme) {
      setTheme(storedTheme)
      document.documentElement.classList.toggle("dark", storedTheme === "dark")
    } else {
      setTheme("dark")
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

    localStorage.setItem("theme", newTheme)
  }

  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer p-2 rounded-lg border border-gray-400"
    >
      {theme === "light" ? (
        <BsMoonFill className="w-4 h-4 text-yellow-500 dark:text-yellow-200" />
      ) : (
        <BsSunFill className="w-4 h-4 text-yellow-500 dark:text-yellow-200" />
      )}
    </button>
  )
}
