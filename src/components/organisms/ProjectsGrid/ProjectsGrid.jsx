import { ProjectCard } from "../../molecules/ProjectCard/ProjectCard.jsx";

export function ProjectsGrid({ projects }) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-16 border border-dashed border-border-subtle rounded-lg bg-surface-container-low">
        <p className="text-on-surface-variant">No se encontraron proyectos para esta categoría.</p>
      </div>
    );
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} variant="detailed" />
      ))}
    </section>
  );
}
