import Image from "next/image"
import photo1 from "../assets/personal/photo1.png"
import photo2 from "../assets/personal/photo2.png"
import photo3 from "../assets/personal/photo3.png"

export default function Gallery() {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-purple-300 mb-5">
        My gallery
      </h2>
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-7">
        <div className="border-1 rounded-xl overflow-hidden bg-cover bg-center">
          <Image src={photo3} alt="me" />
        </div>
        <div className="border-1 rounded-xl overflow-hidden bg-cover bg-center">
          <Image src={photo2} alt="me" />
        </div>

        <div className="border-1 rounded-xl overflow-hidden bg-cover bg-center">
          <Image src={photo1} alt="me" />
        </div>
      </div>
    </section>
  )
}
