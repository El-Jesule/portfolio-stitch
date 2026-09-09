import { Link, useParams } from "react-router-dom";
import { PROJECTS, PROJECT_DETAILS, PROJECT_DETAIL_MOCK } from "../../../data/projects.js";
import { Button } from "../../atoms/Button/Button.jsx";
import { Icon } from "../../atoms/Icon/Icon.jsx";
import { Badge } from "../../atoms/Badge/Badge.jsx";

export function ProjectDetailContent() {
  const { projectId } = useParams();
  const baseProject = projectId ? PROJECTS.find((p) => p.id === projectId) : null;
  const detail = projectId ? PROJECT_DETAILS[projectId] : null;
  const project = detail ?? PROJECT_DETAIL_MOCK;
  const githubUrl = baseProject?.githubUrl ?? project.githubUrl ?? "https://github.com";
  const liveUrl = baseProject?.liveUrl ?? project.liveUrl ?? "#";

  return (
    <div className="w-full">
      <nav className="mb-8 flex items-center gap-2 font-mono text-sm text-on-surface-variant">
        <Link to="/" className="hover:text-accent transition-colors">
          Inicio
        </Link>
        <Icon name="chevron_right" size="16px" />
        <Link to="/projects" className="hover:text-accent transition-colors">
          Proyectos
        </Link>
        <Icon name="chevron_right" size="16px" />
        <span className="text-on-surface truncate">{project.title.slice(0, 30)}…</span>
      </nav>

      <header className="mb-16">
        <h1 className="text-3xl md:text-5xl font-bold text-on-surface mb-6 max-w-4xl leading-tight">
          {project.title}
        </h1>
        <p className="text-lg leading-6 text-on-surface-variant max-w-2xl mb-12">{project.summary}</p>
        <div className="relative w-full aspect-video rounded-xl border border-outline-variant overflow-hidden bg-surface-low group shadow-theme-card">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
          />
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
        <div className="md:col-span-8 space-y-16">
          <section>
            <h2 className="text-2xl font-semibold text-on-surface mb-6">Descripción General</h2>
            <div className="space-y-4 text-on-surface-variant leading-6">
              {project.descriptionParagraphs.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-on-surface mb-6">Problema &amp; Solución</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-surface-low border border-outline-variant rounded-lg p-6 relative overflow-hidden shadow-theme-card">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#93000a] light:bg-red-600" />
                <h3 className="font-semibold text-on-surface mb-3 flex items-center gap-2">
                  <Icon name="warning" className="text-[#ffb4ab] light:text-red-600" />
                  El Problema
                </h3>
                <p className="text-sm leading-6 text-on-surface-variant">{project.problem}</p>
              </div>
              <div className="bg-surface-low border border-outline-variant rounded-lg p-6 relative overflow-hidden shadow-theme-card">
                <div className="absolute top-0 left-0 w-1 h-full bg-inverse-primary" />
                <h3 className="font-semibold text-on-surface mb-3 flex items-center gap-2">
                  <Icon name="lightbulb" className="text-primary" />
                  La Solución
                </h3>
                <p className="text-sm leading-6 text-on-surface-variant">{project.solution}</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-on-surface mb-6">Proceso y Desafíos</h2>
            <div className="relative pl-6 border-l-2 border-outline-variant space-y-8">
              {project.timeline.map((item) => (
                <div key={item.label} className="relative">
                  <div className="absolute -left-[31px] top-1 w-3 h-3 bg-bg-canvas border-2 border-inverse-primary rounded-full" />
                  <span className="font-mono text-sm text-on-surface-variant mb-2 block">{item.label}</span>
                  <p className="text-sm leading-6 text-on-surface-variant">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="md:col-span-4">
          <div className="sticky top-24 flex flex-col gap-8">
            <div className="bg-surface-low border border-outline-variant rounded-lg p-6 flex flex-col gap-4 shadow-theme-card">
              <Button as="a" href={liveUrl} target="_blank" rel="noopener noreferrer" fullWidth>
                Ver proyecto en vivo
                <Icon name="open_in_new" size="18px" className="ml-2" />
              </Button>
              <Button variant="secondary" as="a" href={githubUrl} target="_blank" rel="noopener noreferrer" fullWidth>
                <Icon name="code" size="18px" className="mr-2" />
                Repositorio GitHub
              </Button>
            </div>

            <div className="bg-surface-low border border-outline-variant rounded-lg p-6 shadow-theme-card">
              <h3 className="font-semibold text-on-surface mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="subtle">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="bg-surface-low border border-outline-variant rounded-lg p-6 shadow-theme-card">
              <h3 className="font-semibold text-on-surface mb-4">Features Clave</h3>
              <ul className="space-y-3">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Icon name="check_circle" size="20px" className="text-inverse-primary mt-0.5" />
                    <span className="text-sm leading-5 text-on-surface-variant">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-8 pb-8 border-t border-outline-variant mt-4">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-on-surface hover:text-inverse-primary transition-colors"
        >
          <Icon name="arrow_back" size="18px" />
          Volver a proyectos
        </Link>
      </div>
    </div>
  );
}
