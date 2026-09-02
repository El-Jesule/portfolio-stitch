import { COMPETENCIES } from "../../../data/about.js";
import { FeatureCard } from "../../molecules/FeatureCard/FeatureCard.jsx";

export function CompetencyGrid() {
  return (
    <div className="mt-32">
      <h2 className="text-2xl md:text-[32px] font-semibold text-[#e4e1e5] mb-8 border-l-2 border-[#6366f1] pl-4">
        Áreas de Enfoque
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {COMPETENCIES.map((competency) => (
          <FeatureCard
            key={competency.id}
            icon={competency.icon}
            title={competency.title}
            description={competency.description}
          />
        ))}
      </div>
    </div>
  );
}
