import { projects } from "../data/projectsData.js";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Projects() {
  return (
    <div className="w-full bg-ink border-t border-hairline">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="font-serif text-3xl sm:text-4xl text-ivory mb-10">
          Projets
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}