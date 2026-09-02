import { Badge } from "../../atoms/Badge/Badge.jsx";

export function TimelineItem({ period, title, description, tags }) {
  return (
    <div className="relative flex items-start group">
      <div className="absolute left-6 md:left-10 w-3 h-3 rounded-full border-2 border-[#6366f1] bg-[#0a0a0c] -translate-x-[5px] mt-2 group-hover:scale-125 transition-transform" />
      <div className="ml-16 md:ml-24 w-full">
        <span className="font-mono text-sm text-[#6366f1] block mb-2">{period}</span>
        <div className="bg-[#161618] border border-[#27272a] p-6 rounded-lg w-full max-w-3xl hover:border-[#6366f1] transition-colors duration-300">
          <h3 className="text-xl font-semibold text-[#e4e1e5] mb-2">{title}</h3>
          <p className="text-[15px] leading-6 text-[#c7c4d7] mb-6">{description}</p>
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
