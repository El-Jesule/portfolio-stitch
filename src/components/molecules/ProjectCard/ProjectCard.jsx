import { Link } from "react-router-dom";
import { Button } from "../../atoms/Button/Button.jsx";
import { TechTag } from "../TechTag/TechTag.jsx";
import { Icon } from "../../atoms/Icon/Icon.jsx";

export function ProjectCard({ project, variant = "featured" }) {
  const isDetailed = variant === "detailed";

  return (
    <article className="bg-surface-container-low border border-border-subtle rounded-xl overflow-hidden flex flex-col h-full group hover:border-accent transition-colors duration-300 shadow-theme-card">
      <div className="aspect-video w-full overflow-hidden relative border-b border-border-subtle bg-surface-low flex items-center justify-center">
        {project.image ? (
          <img
            src={project.image}
            alt={project.alt ?? project.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            loading="lazy"
          />
        ) : (
          <>
            <Icon name={project.icon ?? "hub"} size="48px" className="text-outline opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[rgba(99,102,241,0.05)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </>
        )}
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-[18px] font-semibold text-on-surface mb-2 font-display leading-tight">{project.title}</h3>
        <p className="text-[13px] leading-5 text-on-surface-variant mb-5 flex-grow line-clamp-6">
          {project.shortDescription ?? project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <TechTag key={tag}>{tag}</TechTag>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          <Button as={Link} to={`/projects/${project.id}`} size="sm" className="flex-1 text-center">
            Ver proyecto
          </Button>
          {isDetailed && (
            <Button
              variant="secondary"
              size="sm"
              className="flex-1"
              as="a"
              href={project.githubUrl ?? "https://github.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="code" size="16px" className="mr-2" />
              GitHub
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
