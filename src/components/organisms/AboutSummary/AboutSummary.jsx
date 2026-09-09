import { Link } from "react-router-dom";
import { FEATURED_TECH_STACK } from "../../../data/skills.js";
import { Icon } from "../../atoms/Icon/Icon.jsx";

export function AboutSummary() {
  return (
    <section className="bg-surface-low py-24 border-y border-border-subtle">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-semibold text-on-surface mb-4">Sobre mí</h3>
            <p className="text-base leading-6 text-on-surface-variant mb-6">
              Con un enfoque en código limpio y arquitectura robusta, transformo ideas complejas en
              interfaces intuitivas.
            </p>
            <Link
              to="/about"
              className="text-accent hover:text-primary inline-flex items-center gap-2 text-sm font-medium transition-colors"
            >
              Leer más <Icon name="arrow_forward" size="16px" />
            </Link>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-6">
            {FEATURED_TECH_STACK.map((tech) => (
              <div
                key={tech.label}
                className="border border-border-subtle p-6 flex flex-col items-center justify-center gap-3 bg-bg-canvas hover:bg-surface-container-low hover:border-accent rounded-xl transition-colors duration-300"
              >
                <Icon name={tech.icon} size="36px" className="text-on-surface-variant" />
                <span className="text-sm font-medium text-on-surface">{tech.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-right">
          <Link to="/skills" className="text-on-surface-variant hover:text-accent text-sm transition-colors">
            Ver stack completo →
          </Link>
        </div>
      </div>
    </section>
  );
}
