import { Link, useLocation } from "react-router-dom";
import { Button } from "../../components/atoms/Button/Button.jsx";
import { Card } from "../../components/atoms/Card/Card.jsx";
import { Icon } from "../../components/atoms/Icon/Icon.jsx";

export function NotFoundPage() {
  const { pathname } = useLocation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center py-16 md:py-24">
      <div className="md:col-span-7 flex flex-col gap-8">
        <div>
          <p className="font-mono text-sm text-accent light:text-inverse-primary mb-4">
            {"// Error 404 — route not found"}
          </p>
          <p className="font-display text-7xl md:text-8xl font-bold text-on-surface tracking-tight leading-none">
            404
          </p>
          <div className="h-1 w-20 bg-accent rounded mt-6" />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-2xl md:text-[32px] font-semibold text-on-surface">
            Esta ruta no existe
          </h1>
          <p className="text-base leading-6 text-on-surface-variant max-w-lg">
            La página que buscas no existe o ha cambiado de dirección. Revisa la URL o vuelve a un
            lugar seguro.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pt-2">
          <Button as={Link} to="/">
            Volver al inicio
          </Button>
          <Button as={Link} to="/projects" variant="secondary">
            Ver proyectos
          </Button>
        </div>
      </div>

      <div className="md:col-span-5 relative group">
        <div className="absolute inset-0 bg-[rgba(99,102,241,0.1)] blur-2xl rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
        <Card className="relative z-10 rounded-xl overflow-hidden">
          <div className="flex items-center gap-2 px-5 py-3 border-b border-border-subtle">
            <span className="w-2.5 h-2.5 rounded-full bg-border-subtle" />
            <span className="w-2.5 h-2.5 rounded-full bg-border-subtle" />
            <span className="w-2.5 h-2.5 rounded-full bg-accent" />
            <span className="ml-2 font-mono text-xs text-outline">terminal</span>
          </div>
          <div className="p-5 flex flex-col gap-3 font-mono text-sm leading-6">
            <p className="text-on-surface-variant">
              <span className="text-accent light:text-inverse-primary">$</span> cd {pathname}
            </p>
            <p className="text-red-400 light:text-red-600">error: route not found (404)</p>
            <p className="text-on-surface-variant">
              <span className="text-accent light:text-inverse-primary">$</span> cd /{" "}
              <span className="opacity-50">— pulsa «Volver al inicio»</span>
            </p>
          </div>
        </Card>
        <div className="absolute -right-4 top-10 bottom-10 w-[2px] bg-outline-variant z-0 hidden md:block" />
        <div className="absolute -bottom-4 left-10 right-10 h-[2px] bg-outline-variant z-0 hidden md:block" />
      </div>

      <div className="md:col-span-12 mt-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
        >
          <Icon name="arrow_back" size="18px" />
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
