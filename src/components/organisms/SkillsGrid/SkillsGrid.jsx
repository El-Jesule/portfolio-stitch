import { SKILL_CATEGORIES } from "../../../data/skills.js";
import { SkillBadge } from "../../molecules/SkillBadge/SkillBadge.jsx";
import { Icon } from "../../atoms/Icon/Icon.jsx";

export function SkillsGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
      {SKILL_CATEGORIES.map((category) => (
        <div
          key={category.id}
          className={`${category.gridSpan} bg-surface-container border border-outline-variant rounded-xl p-6 flex flex-col gap-6 group hover:border-[rgba(99,102,241,0.5)] transition-colors duration-300 relative overflow-hidden shadow-theme-card`}
        >
          <div className="absolute -inset-4 bg-[rgba(99,102,241,0.05)] light:bg-[rgba(99,102,241,0.06)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none" />
          <div className="flex items-center gap-3 relative z-10">
            <Icon name={category.icon} className="text-outline" />
            <h2 className="text-xl font-semibold text-on-surface">{category.title}</h2>
          </div>
          <div className="flex flex-wrap gap-3 relative z-10">
            {category.skills.map((skill) => (
              <SkillBadge key={skill.label} label={skill.label} highlighted={skill.highlighted} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
