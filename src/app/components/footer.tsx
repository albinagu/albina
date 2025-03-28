import Image from "next/image"
import me from "../assets/me.jpg"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-5 mt-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Image
          src={me}
          alt="me"
          className="rounded-full w-30 h-30 object-cover"
        ></Image>
        <div className="sm:flex sm:gap-15">
          <a href="https://www.instagram.com/albinaguseynova" target="_blank">
            <p className="text-white font-semibold">Instagram</p>
          </a>
          <span className="text-gray-400 hidden md:block">|</span>
          <a
            href="https://www.linkedin.com/in/albina-guseynova-74104b137/"
            target="_blank"
          >
            <p className="text-white font-semibold">LinkedIn</p>
          </a>
          <span className="text-gray-400 hidden md:block">|</span>
          <a href="https://www.facebook.com/albina.guseynova" target="_blank">
            <p className="text-white font-semibold">Facebook</p>
          </a>
        </div>
      </div>
    </footer>
  )
}
