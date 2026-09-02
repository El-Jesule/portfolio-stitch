import { Timeline } from "../../components/organisms/Timeline/Timeline.jsx";
import { LearningGrid } from "../../components/organisms/LearningGrid/LearningGrid.jsx";

export function EducationPage() {
  return (
    <div className="flex flex-col gap-24">
      <header className="flex flex-col gap-4">
        <h1 className="text-4xl md:text-5xl font-bold text-[#e4e1e5]">Formación Académica</h1>
        <p className="text-lg leading-6 text-[#c7c4d7] max-w-2xl">
          Un recorrido continuo de aprendizaje y especialización en desarrollo de software moderno,
          centrado en arquitecturas robustas y código limpio.
        </p>
      </header>

      <Timeline />
      <LearningGrid />
    </div>
  );
}
