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
      className="cursor-pointer p-2.5 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/60 dark:to-blue-900/60 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-purple-200/50 dark:border-purple-700/30"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <div className="flex items-center justify-center">
        {theme === "light" ? (
          <BsMoonFill className="w-5 h-5 text-purple-600 dark:text-purple-300" />
        ) : (
          <BsSunFill className="w-5 h-5 text-yellow-500 dark:text-yellow-300" />
        )}
      </div>
    </button>
  )
}
