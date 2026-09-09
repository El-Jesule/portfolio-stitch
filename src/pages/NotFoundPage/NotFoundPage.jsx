import { Link } from "react-router-dom";
import { Button } from "../../components/atoms/Button/Button.jsx";

export function NotFoundPage() {
  return (
    <div className="flex flex-col items-start gap-4 py-16">
      <p className="font-mono text-sm text-accent light:text-inverse-primary">Error 404</p>
      <h1 className="text-4xl md:text-5xl font-bold text-on-surface">Página no encontrada</h1>
      <p className="text-lg leading-6 text-on-surface-variant max-w-xl">
        La página que buscas no existe o ha cambiado de dirección.
      </p>
      <Button as={Link} to="/" className="mt-4">
        Volver al inicio
      </Button>
    </div>
  );
}
