import { Link } from "react-router-dom";
import { Button } from "../../atoms/Button/Button.jsx";

export function CtaSection() {
  return (
    <section className="bg-[#1b1b1e] border-t border-[#27272a] py-24 text-center">
      <div className="max-w-2xl mx-auto px-6">
        <h3 className="text-4xl md:text-5xl font-bold text-[#e4e1e5] mb-6">¿Hablamos?</h3>
        <p className="text-lg leading-6 text-[#c7c4d7] mb-8">
          Siempre estoy abierto a discutir nuevos proyectos, ideas creativas o dar vida a tus visiones.
        </p>
        <Button as={Link} to="/contact" size="lg">
          Iniciar conversación
        </Button>
      </div>
    </section>
  );
}
