import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Offer from "./Offer.jsx"
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
        <Hero />
      </section>
 
      <section id="about">
        <About />
      </section>
           <section id="offre">
        <Offer />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>



      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
