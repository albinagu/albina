import { FaLinkedinIn, FaInstagram, FaRegEnvelope } from "react-icons/fa"

import Link from "next/link"

export default function Footer() {
  const icons = [
    {
      icon: <FaLinkedinIn className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/albina-guseynova-74104b137/",
    },
    {
      icon: <FaRegEnvelope className="w-5 h-5" />,
      url: "mailto:gsnvalbina@gmail.com",
    },
    {
      icon: <FaInstagram className="w-5 h-5" />,
      url: "https://www.instagram.com/albinaguseynova",
    },
  ]

  return (
    <footer className="bg-gray-900 py-5 mt-15">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h2 className="font-semibold text-purple-500 dark:text-purple-300">Let&apos;s connect!</h2>
        <div className="flex justify-between items-center">
          {icons.map(({ icon, url }, index) => (
            <Link
              key={index}
              href={url}
              target="_blank"
              className="mr-3 p-2 rounded-full text-purple-500 dark:text-purple-300 border-1 hover:bg-gray-200 hover:text-purple-400 transition-all"
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
