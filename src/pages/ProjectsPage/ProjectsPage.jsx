import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { PROJECTS, PROJECT_CATEGORIES } from "../../data/projects.js";
import { ProjectsGrid } from "../../components/organisms/ProjectsGrid/ProjectsGrid.jsx";
import { FilterChip } from "../../components/molecules/FilterChip/FilterChip.jsx";
import { Button } from "../../components/atoms/Button/Button.jsx";

export function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return PROJECTS;
    return PROJECTS.filter((project) =>
      project.tags.some((tag) => tag.toLowerCase().includes(activeFilter.toLowerCase()))
    );
  }, [activeFilter]);

  return (
    <div className="flex flex-col gap-16">
      <header>
        <h1 className="text-4xl md:text-5xl font-bold text-[#e4e1e5] mb-6">Proyectos</h1>
        <p className="text-lg leading-6 text-[#c7c4d7] max-w-2xl">
          Una selección de trabajos recientes enfocados en desarrollo full-stack, arquitecturas escalables
          y experiencias de usuario refinadas. Explorando tecnologías modernas para resolver problemas
          complejos.
        </p>

        <div className="mt-12 flex flex-wrap gap-3">
          {PROJECT_CATEGORIES.map((category) => (
            <FilterChip
              key={category.value}
              label={category.label}
              isActive={activeFilter === category.value}
              onClick={() => setActiveFilter(category.value)}
            />
          ))}
        </div>
      </header>

      <ProjectsGrid projects={filteredProjects} />

      <section className="border border-[#27272a] rounded-lg p-12 bg-[#161618] text-center max-w-3xl mx-auto w-full">
        <h2 className="text-2xl font-semibold text-[#e4e1e5] mb-4">¿Interesado en colaborar?</h2>
        <p className="text-base leading-6 text-[#c7c4d7] mb-8 max-w-lg mx-auto">
          Siempre estoy abierto a discutir nuevos proyectos, ideas de arquitectura de software u
          oportunidades para crear soluciones técnicas robustas.
        </p>
        <Button as={Link} to="/contact">
          Contactar ahora
        </Button>
      </section>
    </div>
  );
}
