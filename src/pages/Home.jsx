import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import FloatingTarget from "../components/FloatingTarget.jsx";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
      <div id="home">
        <FloatingTarget />
        <div className="w-full bg-black text-white text-center pb-16 px-6">
          <p className="max-w-xl mx-auto text-base sm:text-lg text-gray-300 mb-6">
            Développeuse web en reconversion, passionnée par la création d'interfaces modernes et la résolution de problèmes concrets.
          </p>

          <p className="text-sm text-gray-500 mb-4">Pour en voir plus :</p>

          <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link
              to="/#skills"
              className="px-4 py-2 rounded bg-purple-500 hover:bg-purple-400 transition-colors font-semibold text-sm uppercase tracking-wide"
            >

  
              Compétences
            </Link>
            <Link
              to="/#projects"
              className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-400 transition-colors font-semibold text-sm uppercase tracking-wide"
            >
              Projets
            </Link>

          </div>
        </div>
      </div>

      <div id="about">
        <About />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
