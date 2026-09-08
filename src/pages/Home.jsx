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
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
}, [location]);

  return (
    <div>
      <section id="home">
        <FloatingTarget />
        <div className="w-full bg-black text-white text-center pb-16 px-6">
          <p className="max-w-xl mx-auto text-base sm:text-lg text-gray-300 mb-2">
            Je conçois des sites web sur mesure : rapides, modernes, et pensés pour convertir vos
            visiteurs en clients.
          </p>

          <p className="max-w-xl mx-auto text-sm text-gray-500 mb-8">
            Site vitrine, formulaire de contact, espace administrateur —
            chaque projet est développé sur mesure, de la première idée à la
            mise en ligne.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <Link
              to="/#contact"
              className="px-6 py-3 rounded bg-emerald-500 hover:bg-emerald-400 transition-colors font-bold text-sm uppercase tracking-wide text-black"
            >
              Discutons de votre projet
            </Link>
          </div>

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
      </section>

      <section id="about">
        <About />
      </section>
      {/* <section id="parcours">
        <Parcours />
      </section> */}
      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
