import { CURRENT_LEARNING } from "../../../data/education.js";
import { Icon } from "../../atoms/Icon/Icon.jsx";

export function LearningGrid() {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-xl font-semibold text-[#e4e1e5] border-b border-[#27272a] pb-4">
        Actualmente aprendiendo
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {CURRENT_LEARNING.map((item) => (
          <div
            key={item.label}
            className="bg-[#161618] border border-[#27272a] p-6 rounded-lg flex flex-col items-center justify-center gap-4 group hover:border-[#6366f1] transition-colors"
          >
            <Icon
              name={item.icon}
              size="36px"
              className="text-[#c7c4d7] group-hover:text-[#6366f1] transition-colors"
            />
            <span className="text-sm font-medium text-[#e4e1e5]">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
