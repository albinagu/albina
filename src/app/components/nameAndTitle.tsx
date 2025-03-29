import { HiOutlineMapPin } from "react-icons/hi2"

export default function NameAndTitle() {
  return (
    <section>
      <h1 className="text-6xl font-extrabold mb-5">Albina Guseynova</h1>
      <p className="text-2xl mb-1">Web Developer</p>
      <div className="flex align-items-baseline">
        <HiOutlineMapPin className="text-yellow-200" />
        <p className="text-sm pl-1 align-text-bottom text-gray-500">
          Based in Reykjavík, Iceland
        </p>
      </div>
    </section>
  )
}
