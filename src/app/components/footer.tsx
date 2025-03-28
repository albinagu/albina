import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa"

export default function Footer() {
  const icons = [
    {
      icon: <FaInstagram className="w-5 h-5" />,
      url: "https://www.instagram.com/albinaguseynova",
    },
    {
      icon: <FaLinkedinIn className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/albina-guseynova-74104b137/",
    },
    {
      icon: <FaFacebookF className="w-5 h-5" />,
      url: "https://www.facebook.com/albina.guseynova",
    },
  ]

  return (
    <footer className="bg-gray-900 text-white py-5 mt-50">
      <div className="container mx-auto px-4 flex justify-start items-center">
        {icons.map(({ icon, url }, index) => (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-3 p-2 rounded-full bg-black text-purple-300 border-1 hover:bg-gray-200 hover:text-purple-500 transition-all"
          >
            {icon}
          </a>
        ))}
      </div>
    </footer>
  )
}
