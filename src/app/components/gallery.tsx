import Image from "next/image"
import photo1 from "../assets/personal/photo1.jpeg"
import photo2 from "../assets/personal/photo2.jpeg"
import photo3 from "../assets/personal/photo3.jpeg"
import photo4 from "../assets/personal/photo4.jpeg"

export default function Gallery() {
  const photos = [photo3, photo2, photo1, photo4]

  return (
    <section>
      <h2 className="text-2xl font-semibold text-purple-700 dark:text-purple-300">
        Gallery
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
        Just for fun
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {photos.map((photo, index) => {
          return (
            <div key={index} className="border border-gray-400 rounded-lg overflow-hidden">
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
