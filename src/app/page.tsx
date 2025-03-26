import Image from "next/image";
import staff from "./assets/staff.jpg";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Albina</title>
        <meta
          name="description"
          content="Check out my tiny cv!"
        />

        <meta property="og:title" content="Albina" />
        <meta
          property="og:description"
          content="Check out my tiny cv!"
        />
        <meta property="og:type" content="website" />
      </Head>
      <main>
        <div className="hidden md:block">
          <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1440 120">
            <defs>
              <linearGradient
                id="gradientWave"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#A78BFA", stopOpacity: 0 }}
                />
                <stop
                  offset="80%"
                  style={{ stopColor: "#A855F7", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <path
              fill="url(#gradientWave)"
              d="M1440,40 C1260,80 1080,0 900,60 C720,120 540,40 360,80 C180,120 0,60 0,60 L0,0 L1440,0 Z"
            ></path>
          </svg>
        </div>

        <div className="max-w-4xl mx-auto p-6 sm:pt-35 pt-10">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-extrabold text-purple-300">
              Albina Guseynova
            </h1>
            <p className="text-xl">Web Developer</p>
          </header>

          <section className="text-center mb-10">
            <Image
              src={staff}
              alt="albina"
              className="w-50 h-50 rounded-full mx-auto mb-4 object-cover transition-transform duration-700 ease-in-out transform hover:rotate-360"
              width={200}
              height={200}
            />
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">
              Experience
            </h2>
            <div className="space-y-4">
              <div className="p-4 pt-0 rounded-md">
                <h3 className="font-bold">Front-End Developer - Júní</h3>
                <p className="text-sm text-gray-500">February 2019 - Present</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 pt-0 rounded-md">
                <h3 className="font-bold">
                  Software Developer - Novomatic Lottery Solutions
                </h3>
                <p className="text-sm text-gray-500">May 2017 - Jan 2019</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">
              Education
            </h2>
            <div className="space-y-4">
              <div className="p-4 pt-0 rounded-md">
                <h3 className="font-bold">
                  Reykjavík University - Bachelor of Science (B.Sc.)
                </h3>
                <p className="text-sm text-gray-500">2014 - 2017</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 pt-0 rounded-md">
                <h3 className="font-bold">International Baccalaureate</h3>
                <p className="text-sm text-gray-500">2010 - 2014</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">
              Skills
            </h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-white">
              <li className="p-4 text-center transform hover:scale-110 transition-all">
                React
              </li>
              <li className="p-4 text-center transform hover:scale-105 transition-all">
                CSS
              </li>
              <li className="p-4 text-center transform hover:scale-105 transition-all">
                JavaScript
              </li>
              <li className="p-4 text-center transform hover:scale-105 transition-all">
                GrapgQL
              </li>
              <li className="p-4 text-center transform hover:scale-105 transition-all">
                Typescript
              </li>
              <li className="p-4 text-center transform hover:scale-105 transition-all">
                Contentful
              </li>
              <li className="p-4 text-center transform hover:scale-105 transition-all">
                Prismic
              </li>
              <li className="p-4 text-center transform hover:scale-105 transition-all">
                Figma
              </li>
              <li className="p-4 text-center transform hover:scale-105 transition-all">
                Next.js
              </li>
              <li className="p-4 text-center transform hover:scale-105 transition-all">
                Storybooks
              </li>
              <li className="p-4 text-center transform hover:scale-105 transition-all">
                Git
              </li>
              <li className="p-4 text-center transform hover:scale-105 transition-all">
                UI / UX
              </li>
              <li className="p-4 text-center transform hover:scale-105 transition-all">
                React Native
              </li>
              <li className="p-4 text-center transform hover:scale-105 transition-all">
                Agile Methodologies
              </li>
              <li className="p-4 text-center transform hover:scale-105 transition-all">
                Design Thinking
              </li>
            </ul>
          </section>

          <div className="flex justify-center items-center min-h-screen">
            <div className="flex space-x-2">
              <div className="w-4 h-4 bg-indigo-500 rounded-full animate-pulse"></div>
              <div className="w-4 h-4 bg-indigo-500 rounded-full animate-pulse animation-delay-200"></div>
              <div className="w-4 h-4 bg-indigo-500 rounded-full animate-pulse animation-delay-400"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
