import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projectsData.js";

function normalize(str) {
  return str.toLowerCase().replace(/\s+/g, "-");
}

const categories = ["Tous", "Front-end", "Back-end", "Qualité", "Gestion de projet", "Projets Perso"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  

  const filteredProjects =
    activeFilter === "Tous"
      ? projects
      : projects.filter((p) => normalize(p.filtre) === normalize(activeFilter));

  return (
    <div className="w-full bg-black min-h-screen">
      <section className="max-w-5xl mx-auto px-6 py-10 text-white">
        <h1 className="text-5xl font-bold text-blue-500 mb-6">Projets</h1>

        {/* Filtres */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide transition-colors ${
                activeFilter === cat
                  ? "bg-blue-500 text-black"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grille de cartes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden flex flex-col"
            >
              <img
                src={project.image}
                alt={project.titre}
                className="w-full h-40 object-object-contain"
              />
              <div className="p-4 flex flex-col flex-1">
                <h2 className="text-lg font-bold mb-2">{project.titre}</h2>
                <p className="text-sm text-gray-400 flex-1">{project.descriptif}</p>
                <Link
                  to={`/projects/${project.id}`}
                  className="mt-4 inline-block text-center px-3 py-2 rounded bg-blue-400 hover:bg-blue-300 transition-colors text-black font-semibold text-sm"
                >
                  Détails
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-gray-500 text-center mt-10">
            Aucun projet dans cette catégorie pour le moment.
          </p>
        )}
      </section>
    </div>
  );
}