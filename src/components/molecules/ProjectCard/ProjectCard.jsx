import { Link } from "react-router-dom";
import { Button } from "../../atoms/Button/Button.jsx";
import { TechTag } from "../TechTag/TechTag.jsx";
import { Icon } from "../../atoms/Icon/Icon.jsx";

export function ProjectCard({ project, variant = "featured" }) {
  const isDetailed = variant === "detailed";

  return (
    <article className="bg-[#161618] border border-[#27272a] rounded-xl overflow-hidden flex flex-col h-full group hover:border-[#6366f1] transition-colors duration-300">
      <div className="aspect-video w-full overflow-hidden relative border-b border-[#27272a] bg-[#1b1b1e] flex items-center justify-center">
        {project.image ? (
          <img
            src={project.image}
            alt={project.alt ?? project.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            loading="lazy"
          />
        ) : (
          <>
            <Icon name={project.icon ?? "hub"} size="48px" className="text-[#908fa0] opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[rgba(99,102,241,0.05)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-[20px] font-semibold text-[#e4e1e5] mb-2 font-[Geist]">{project.title}</h3>
        <p className="text-[15px] leading-6 text-[#c7c4d7] mb-6 flex-grow">
          {isDetailed ? project.description : project.shortDescription}
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
          {isDetailed && project.id !== "microservices-toolkit" && (
            <Button
              variant="secondary"
              size="sm"
              className="flex-1"
              as="a"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="code" size="16px" className="mr-2" />
              GitHub
            </Button>
          )}
          {isDetailed && project.id === "microservices-toolkit" && (
            <Button
              variant="secondary"
              size="sm"
              fullWidth
              as="a"
              href="https://github.com"
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
