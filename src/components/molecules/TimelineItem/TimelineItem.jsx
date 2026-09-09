import { Badge } from "../../atoms/Badge/Badge.jsx";

export function TimelineItem({ period, title, description, tags }) {
  return (
    <div className="relative flex items-start group">
      <div className="absolute left-6 md:left-10 w-3 h-3 rounded-full border-2 border-accent bg-bg-canvas -translate-x-[5px] mt-2 group-hover:scale-125 transition-transform" />
      <div className="ml-16 md:ml-24 w-full">
        <span className="font-mono text-sm text-accent light:text-inverse-primary block mb-2">{period}</span>
        <div className="bg-surface-container-low border border-border-subtle p-6 rounded-lg w-full max-w-3xl hover:border-accent transition-colors duration-300 shadow-theme-card">
          <h3 className="text-xl font-semibold text-on-surface mb-2">{title}</h3>
          <p className="text-[15px] leading-6 text-on-surface-variant mb-6">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="subtle">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
