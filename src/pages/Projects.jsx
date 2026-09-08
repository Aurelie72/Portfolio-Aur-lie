import { projects } from "../data/projectsData.js";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Projects() {
  return (
    <div className="w-full bg-black min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-10 text-white">
        <h2 className="text-5xl font-bold text-blue-500 mb-6">Projets</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
