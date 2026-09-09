import { SkillsGrid } from "../../components/organisms/SkillsGrid/SkillsGrid.jsx";

export function SkillsPage() {
  return (
    <div className="flex flex-col gap-12">
      <header className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-on-surface mb-4">Arsenal Técnico</h1>
        <p className="text-lg leading-6 text-on-surface-variant">
          Una visión general de las herramientas, lenguajes y frameworks que utilizo para diseñar soluciones robustas y escalables. Enfatizando un stack moderno con un enfoque en la arquitectura limpia y el rendimiento.
        </p>
      </header>

      <SkillsGrid />
    </div>
  );
}
