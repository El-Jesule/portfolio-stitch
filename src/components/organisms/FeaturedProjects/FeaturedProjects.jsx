import { Link } from "react-router-dom";
import { FEATURED_PROJECTS } from "../../../data/projects.js";
import { ProjectCard } from "../../molecules/ProjectCard/ProjectCard.jsx";

export function FeaturedProjects() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24" id="featured-projects">
      <div className="flex justify-between items-end mb-12">
        <h3 className="text-2xl md:text-[32px] font-semibold text-[#e4e1e5]">Proyectos Destacados</h3>
        <Link
          to="/projects"
          className="text-[#c7c4d7] hover:text-[#6366f1] text-sm font-medium hidden md:inline-block transition-colors"
        >
          Ver todos los proyectos →
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {FEATURED_PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} variant="featured" />
        ))}
      </div>

      <div className="text-center mt-8 md:hidden">
        <Link to="/projects" className="text-[#c7c4d7] hover:text-[#6366f1] text-sm transition-colors">
          Ver todos los proyectos →
        </Link>
      </div>
    </section>
  );
}
