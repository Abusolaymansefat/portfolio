
import { projects, primaryColor, secondaryColor } from "../data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="bg-gray-950 py-20 min-h-screen px-4">
      <h2 className="text-7xl font-bold text-center mb-12" style={{ color: primaryColor }}>
        My Projects
      </h2>

      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;