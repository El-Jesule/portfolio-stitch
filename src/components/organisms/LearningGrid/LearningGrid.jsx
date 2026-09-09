import { CURRENT_LEARNING } from "../../../data/education.js";
import { Icon } from "../../atoms/Icon/Icon.jsx";

export function LearningGrid() {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-xl font-semibold text-on-surface border-b border-border-subtle pb-4">
        Actualmente aprendiendo
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {CURRENT_LEARNING.map((item) => (
          <div
            key={item.label}
            className="bg-surface-container-low border border-border-subtle p-6 rounded-lg flex flex-col items-center justify-center gap-4 group hover:border-accent transition-colors shadow-theme-card"
          >
            <Icon
              name={item.icon}
              size="36px"
              className="text-on-surface-variant group-hover:text-accent transition-colors"
            />
            <span className="text-sm font-medium text-on-surface">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
