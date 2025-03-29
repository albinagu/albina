import Image from "next/image"
import photo1 from "../assets/personal/photo1.jpeg"
import photo2 from "../assets/personal/photo2.jpeg"
import photo3 from "../assets/personal/photo3.jpeg"
import photo4 from "../assets/personal/photo4.jpeg"

export default function Gallery() {
  const photos = [photo3, photo2, photo1, photo4]

  return (
    <section>
      <h2 className="text-2xl font-semibold text-purple-300 mb-5">
        My gallery
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {photos.map((photo, index) => {
          return (
            <div
              key={index}
              className="border-1 rounded-xl overflow-hidden"
            >
              <Image
                src={photo}
                className="w-full h-full object-cover object-center"
                alt="Image"
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}
