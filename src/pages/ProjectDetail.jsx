import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { projects } from "../data/projectsData.js";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentIndex = projects.findIndex((p) => p.id === id);
  const project = projects[currentIndex];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  if (!project) {
    return (
      <div className="w-full bg-black min-h-screen flex flex-col items-center justify-center text-white gap-4">
        <p>Projet introuvable.</p>
        <Link to="/#projects" className="text-blue-400 hover:underline">
          ← Retour aux projets
        </Link>
      </div>
    );
  }

  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="w-full bg-black min-h-screen">
      <article className="max-w-3xl mx-auto px-4 py-10 text-white">
        <Link
          to="/#projects"
          className="text-sm text-gray-400 hover:text-blue-400 transition-colors mb-6 inline-block"
        >
          ← Retour aux projets
        </Link>

        <div className="w-full h-84 bg-gray-900 rounded-lg mb-6 overflow-hidden">
          <img
            src={project.image}
            alt={`Aperçu du projet ${project.titre}`}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-2xl font-bold text-blue-500 mb-2">{project.titre}</h1>
        <p className="text-gray-400 text-sm mb-6">{project.descriptif}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 rounded bg-gray-800 border border-gray-700 text-xs text-gray-400"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-sm text-gray-300 leading-relaxed mb-8 whitespace-pre-line">
          {project.explications}
        </p>

 <div className="flex flex-wrap gap-4 mb-10">
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
      className="flex items-center gap-2 px-3 py-2 rounded bg-gray-800 hover:bg-gray-700 transition-colors text-sm"
    >
      <FiExternalLink /> Voir le site
    </a>
  )}
</div>

        <nav className="flex items-center justify-between border-t border-gray-800 pt-6">
          <button
            onClick={() => navigate(`/projects/${prevProject.id}`)}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors"
          >
            <FiArrowLeft /> Précédent
          </button>
          <button
            onClick={() => navigate(`/projects/${nextProject.id}`)}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors"
          >
            Suivant <FiArrowRight />
          </button>
        </nav>
      </article>
    </div>
  );
}