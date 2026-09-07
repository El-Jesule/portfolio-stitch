import { Link } from "react-router-dom";
import { Button } from "../../atoms/Button/Button.jsx";

const HERO_IMAGE = "/images/myPhoto.png";

export function HeroSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-8 relative z-10">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#e4e1e5] tracking-tight">Jesús</h1>
          <h2 className="text-2xl md:text-[32px] font-semibold text-[#c0c1ff] leading-tight">
            Full-Stack Developer
          </h2>
        </div>

        <p className="text-lg leading-6 text-[#c7c4d7] max-w-lg">
          Desarrollador Full-Stack Junior apasionado por crear aplicaciones web funcionales, modernas
          y bien estructuradas.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <Button as={Link} to="/projects">
            Ver proyectos
          </Button>
          <Button as={Link} to="/contact" variant="secondary">
            Contactar
          </Button>
        </div>
      </div>

      <div className="relative flex justify-center md:justify-end">
        <div className="relative w-full max-w-md aspect-[3/4] border border-[#27272a] bg-[#161618] rounded-xl overflow-hidden group hover:border-[#6366f1] transition-colors duration-300">
          <img
            src={HERO_IMAGE}
            alt="Jesús — Full-Stack Developer portrait"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#161618] to-transparent opacity-60" />
        </div>
      </div>
    </section>
  );
}
