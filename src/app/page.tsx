import Experience from "./components/experience";
import Education from "./components/education";
import Skills from "./components/skills";
import NameAndTitle from "./components/nameAndTitle";
import Footer from "./components/footer";
import TopPageDecoration from "./components/topPageDecoration";
import AboutMe from "./components/aboutMe";
import Languages from "./components/languages";
import Projects from "./components/projects";

export default function Home() {
  return (
    <>
      <main>
        <TopPageDecoration />
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 gap-10 pt-20 sm:pt-55">
            <NameAndTitle />
            <AboutMe />
          </div>
          <div className="grid sm:grid-cols-2 gap-10">
            <div>
              <Experience />
              <Education />
              <Languages />
              <Skills />
            </div>
            <div>
              <Projects />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
