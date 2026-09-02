import { SkillsGrid } from "../../components/organisms/SkillsGrid/SkillsGrid.jsx";

export function SkillsPage() {
  return (
    <div className="flex flex-col gap-12">
      <header className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-[#e4e1e5] mb-4">Technical Arsenal</h1>
        <p className="text-lg leading-6 text-[#c7c4d7]">
          A curated overview of the tools, languages, and frameworks I use to engineer robust and
          scalable solutions. Emphasizing a modern stack with a focus on clean architecture and
          performance.
        </p>
      </header>

      <SkillsGrid />
    </div>
  );
}
