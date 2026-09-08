import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group bg-gray-900 border border-gray-700 rounded-lg overflow-hidden flex flex-col hover:border-blue-400 transition-colors"
    >
      <article className="flex flex-col flex-1">
        <img
          src={project.image}
          alt={`Aperçu du projet ${project.titre}`}
          loading="lazy"
          className="w-full h-40 object-cover"
        />
        <div className="p-4 flex flex-col flex-1">
          <h3 className="text-lg font-bold mb-2">{project.titre}</h3>
          <h4 className="text-sm font-bold mb-1 text-gray-400">{project.filtre}</h4>
          <p className="text-sm text-gray-400 flex-1">{project.descriptif}</p>
          <span className="mt-4 inline-block text-center px-3 py-2 rounded bg-blue-400 group-hover:bg-blue-300 transition-colors text-black font-semibold text-sm">
            Détails
          </span>
        </div>
      </article>
    </Link>
  );
}