import { useState } from "react";
import { projects } from "../data/projectsData.js";
import ProjectCard from "../components/ProjectCard.jsx";

function normalize(str) {
  return str.toLowerCase().replace(/\s+/g, "-");
}

const categories = ["Tous", ...new Set(projects.map((p) => p.filtre))];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filteredProjects =
    activeFilter === "Tous"
      ? projects
      : projects.filter((p) => normalize(p.filtre) === normalize(activeFilter));

  return (
    <div className="w-full bg-black min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-10 text-white">
        <h2 className="text-5xl font-bold text-blue-500 mb-6">Projets</h2>
 
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide transition-colors ${
                activeFilter === cat
                  ? "bg-blue-500 text-black"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-gray-500 text-center mt-10">
            Aucun projet dans cette catégorie pour le moment.
          </p>
        )}
      </div>
    </div>
  );
}