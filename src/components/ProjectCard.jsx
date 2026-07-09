import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden flex flex-col">
      <img
        src={project.image}
        alt={`Aperçu du projet ${project.titre}`}
        className="w-full h-40 object-center"
      />
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-bold mb-2">{project.titre}</h3>
        <p className="text-sm text-gray-400 flex-1">{project.descriptif}</p>
        <Link
          to={`/projects/${project.id}`}
          className="mt-4 inline-block text-center px-3 py-2 rounded bg-blue-400 hover:bg-blue-300 transition-colors text-black font-semibold text-sm"
        >
          Détails
        </Link>
      </div>
    </div>
  );
}