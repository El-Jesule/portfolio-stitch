import { Link } from "react-router-dom";
import { FEATURED_TECH_STACK } from "../../../data/skills.js";
import { Icon } from "../../atoms/Icon/Icon.jsx";

export function AboutSummary() {
  return (
    <section className="bg-[#1b1b1e] py-24 border-y border-[#27272a]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-semibold text-[#e4e1e5] mb-4">Sobre mí</h3>
            <p className="text-base leading-6 text-[#c7c4d7] mb-6">
              Con un enfoque en código limpio y arquitectura robusta, transformo ideas complejas en
              interfaces intuitivas.
            </p>
            <Link
              to="/about"
              className="text-[#6366f1] hover:text-[#c0c1ff] inline-flex items-center gap-2 text-sm font-medium transition-colors"
            >
              Leer más <Icon name="arrow_forward" size="16px" />
            </Link>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-6">
            {FEATURED_TECH_STACK.map((tech) => (
              <div
                key={tech.label}
                className="border border-[#27272a] p-6 flex flex-col items-center justify-center gap-3 bg-[#0a0a0c] hover:bg-[#161618] hover:border-[#6366f1] rounded-xl transition-colors duration-300"
              >
                <Icon name={tech.icon} size="36px" className="text-[#c7c4d7]" />
                <span className="text-sm font-medium text-[#e4e1e5]">{tech.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-right">
          <Link to="/skills" className="text-[#c7c4d7] hover:text-[#6366f1] text-sm transition-colors">
            Ver stack completo →
          </Link>
        </div>
      </div>
    </section>
  );
}
