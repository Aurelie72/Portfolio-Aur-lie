import { useParams, Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaPlayCircle } from "react-icons/fa";
import { projects } from "../data/projectsData.js";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="w-full bg-black min-h-screen text-white">
        <section className="max-w-3xl mx-auto px-4 py-10 text-center">
          <p className="mb-4">Projet introuvable.</p>
          <Link to="/projects" className="text-emerald-400 underline">
            Retour aux projets
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className="w-full bg-black min-h-screen">
      <section className="max-w-3xl mx-auto px-4 py-10 text-white">
        <Link
          to="/projects"
          className="text-sm text-gray-400 hover:text-blue-400 transition-colors mb-6 inline-block"
        >
          ← Retour aux projets
        </Link>

        <img
          src={project.image}
          alt={project.titre}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <h1 className="text-2xl font-bold text-blue-500 mb-2">{project.titre}</h1>
        <p className="text-gray-400 text-sm mb-6">{project.descriptif}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 rounded bg-gray-800 border border-gray-700 text-xs text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Explications détaillées */}
        <p className="text-sm text-gray-300 leading-relaxed mb-8 whitespace-pre-line">
          {project.explications}
        </p>

        {/* Liens (GitHub / Démo / Vidéo), affichés uniquement s'ils existent */}
        <div className="flex flex-wrap gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded bg-gray-800 hover:bg-gray-700 transition-colors text-sm"
            >
              <FaGithub /> Code source
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded bg-emerald-500 hover:bg-emerald-600 transition-colors text-sm text-black font-semibold"
            >
              <FaExternalLinkAlt /> Voir la démo
            </a>
          )}
          {project.video && (
            <a
              href={project.video}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded bg-gray-800 hover:bg-gray-700 transition-colors text-sm"
            >
              <FaPlayCircle /> Vidéo de démonstration
            </a>
          )}
        </div>
      </section>
    </div>
  );
}
