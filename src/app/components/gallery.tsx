import Image from "next/image"
import photo1 from "../assets/personal/photo1.jpeg"
import photo2 from "../assets/personal/photo2.jpeg"
import photo3 from "../assets/personal/photo3.jpeg"
import photo4 from "../assets/personal/photo4.jpeg"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Gallery() {
  const photos = [photo3, photo2, photo1, photo4]
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  return (
    <section>
      <h2 className="text-2xl font-semibold text-purple-700 dark:text-purple-300">
        Gallery
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
        Just for fun
      </p>
      <motion.div
        ref={ref}
        className="grid grid-cols-2 lg:grid-cols-4 gap-5"
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {photos.map((photo, index) => {
          return (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: {
                  opacity: 1,
                  y: 0,
                },
              }}
              className="border border-gray-400/50 rounded-lg overflow-hidden"
            >
              <Image
                src={photo}
                className="w-full h-full object-cover object-center"
                alt="Image"
              />
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
