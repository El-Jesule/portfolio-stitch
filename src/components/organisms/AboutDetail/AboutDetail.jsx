import { Link } from "react-router-dom";
import { ABOUT_CONTENT } from "../../../data/about.js";
import { Button } from "../../atoms/Button/Button.jsx";

export function AboutDetail() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
      <div className="md:col-span-5 relative group">
        <div className="absolute inset-0 bg-[rgba(99,102,241,0.1)] blur-2xl rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
        <img
          src={ABOUT_CONTENT.image}
          alt="Jesús — Desarrollador Full-Stack"
          className="relative z-10 w-full h-auto object-cover rounded-xl border border-[#464554] grayscale group-hover:grayscale-0 transition-all duration-700 aspect-[3/4] object-top"
          loading="lazy"
        />
        <div className="absolute -left-4 top-10 bottom-10 w-[2px] bg-[#464554] z-0 hidden md:block" />
        <div className="absolute -bottom-4 left-10 right-10 h-[2px] bg-[#464554] z-0 hidden md:block" />
      </div>

      <div className="md:col-span-7 flex flex-col gap-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#e4e1e5] mb-4 leading-tight">
            Desarrollador Full-Stack
          </h1>
          <div className="h-1 w-20 bg-[#6366f1] rounded" />
        </div>

        <div className="flex flex-col gap-4 leading-relaxed text-[#c7c4d7]">
          {ABOUT_CONTENT.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 20)}>{paragraph}</p>
          ))}
        </div>

        <div className="flex gap-4 pt-4">
          <Button as={Link} to="/projects">
            Ver Proyectos
          </Button>
          <Button variant="secondary" as="a" href="#" download>
            Descargar CV
          </Button>
        </div>
      </div>
    </div>
  );
}
