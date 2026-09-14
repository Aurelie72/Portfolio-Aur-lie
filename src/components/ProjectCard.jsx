import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group block border border-hairline hover:border-brass/60 active:border-brass active:scale-[0.99] transition-all"
    >
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={`Aperçu du projet ${project.titre}`}
          loading="lazy"
          className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <p className="text-xs text-brass mb-2">{project.filtre}</p>
        <h3 className="font-serif text-lg text-ivory mb-2">{project.titre}</h3>
        <p className="text-sm text-muted mb-4">{project.descriptif}</p>
        <span className="flex items-center gap-1.5 text-sm text-brass">
          Voir le projet
          <FiArrowUpRight size={16} />
        </span>
      </div>
    </Link>
  );
}
