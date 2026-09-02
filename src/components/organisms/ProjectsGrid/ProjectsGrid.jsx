import { ProjectCard } from "../../molecules/ProjectCard/ProjectCard.jsx";

export function ProjectsGrid({ projects }) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-16 border border-dashed border-[#27272a] rounded-lg">
        <p className="text-[#c7c4d7]">No se encontraron proyectos para esta categoría.</p>
      </div>
    );
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} variant="detailed" />
      ))}
    </section>
  );
}
