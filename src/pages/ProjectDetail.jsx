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
      <div className="w-full bg-ink min-h-screen flex flex-col items-center justify-center text-ivory gap-4">
        <p>Projet introuvable.</p>
        <Link to="/#projects" className="text-brass hover:underline">
          ← Retour aux projets
        </Link>
      </div>
    );
  }

  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="w-full bg-ink min-h-screen">
      <article className="max-w-3xl mx-auto px-4 py-16 text-ivory">
        <Link
          to="/#projects"
          className="text-sm text-muted hover:text-brass transition-colors mb-8 inline-block"
        >
          ← Retour aux projets
        </Link>

        <div className="w-full h-84 bg-ink-soft border border-hairline mb-8 overflow-hidden">
          <img
            src={project.image}
            alt={`Aperçu du projet ${project.titre}`}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-xs text-brass mb-2">{project.filtre}</p>
        <h1 className="font-serif text-3xl mb-2">{project.titre}</h1>
        <p className="text-muted text-sm mb-8">{project.descriptif}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 border border-hairline text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-sm text-muted leading-relaxed mb-10 whitespace-pre-line">
          {project.explications}
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 border border-hairline hover:border-brass hover:text-brass transition-colors text-sm"
            >
              <FaGithub /> Code source
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 border border-hairline hover:border-brass hover:text-brass transition-colors text-sm"
            >
              <FiExternalLink /> Voir le site
            </a>
          )}
        </div>

        <nav className="flex items-center justify-between border-t border-hairline pt-6">
          <button
            onClick={() => navigate(`/projects/${prevProject.id}`)}
            className="flex items-center gap-2 text-sm text-muted hover:text-brass transition-colors"
          >
            <FiArrowLeft /> Précédent
          </button>
          <button
            onClick={() => navigate(`/projects/${nextProject.id}`)}
            className="flex items-center gap-2 text-sm text-muted hover:text-brass transition-colors"
          >
            Suivant <FiArrowRight />
          </button>
        </nav>
      </article>
    </div>
  );
}
