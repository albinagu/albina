export default function NameAndTitle() {
  return (
    <section className="mb-0 sm:mb-20">
      <h1 className="text-6xl font-extrabold mb-5 font-grotesk">Albina Guseynova</h1>
      <p className="text-2xl mb-2">Web Developer</p>
      <div className="flex align-items-baseline">
        <svg
          className="w-4 h-4 text-purple-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
          />
        </svg>
        <p className="text-sm pl-2 align-text-bottom text-gray-500">
          Based in Reykjavík, Iceland
        </p>
      </div>
    </section>
  );
}
