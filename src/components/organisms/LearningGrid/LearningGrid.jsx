import { CURRENT_LEARNING } from "../../../data/education.js";
import { Card } from "../../atoms/Card/Card.jsx";
import { Icon } from "../../atoms/Icon/Icon.jsx";

export function LearningGrid() {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-xl font-semibold text-on-surface border-b border-border-subtle pb-4">
        Actualmente aprendiendo
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {CURRENT_LEARNING.map((item) => (
          <Card
            key={item.label}
            className="p-6 rounded-lg flex flex-col items-center justify-center gap-4 group hover:border-accent transition-colors"
          >
            <Icon
              name={item.icon}
              size="36px"
              className="text-on-surface-variant group-hover:text-accent transition-colors"
            />
            <span className="text-sm font-medium text-on-surface">{item.label}</span>
          </Card>
        ))}
      </div>
    </section>
  );
}
