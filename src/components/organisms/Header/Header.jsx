import { useState } from "react";
import { Link } from "react-router-dom";
import { NAVIGATION_ITEMS } from "../../../constants/navigation.js";
import { NavLink } from "../../molecules/NavLink/NavLink.jsx";
import { ThemeToggle } from "../../molecules/ThemeToggle/ThemeToggle.jsx";
import { Button } from "../../atoms/Button/Button.jsx";
import { Container } from "../../atoms/Container/Container.jsx";
import { Icon } from "../../atoms/Icon/Icon.jsx";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="bg-surface border-b border-outline-variant sticky top-0 z-50">
      <Container className="flex justify-between items-center py-4">
        <Link
          to="/"
          className="text-xl font-bold text-on-surface tracking-tight hover:opacity-80 transition-opacity"
        >
          Jesús
        </Link>

        <nav className="hidden md:flex gap-6 items-center" aria-label="Navegación principal">
          {NAVIGATION_ITEMS.map((item) => (
            <NavLink key={item.id} to={item.path}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button as={Link} to="/contact" size="sm">
            Contactar
          </Button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="text-on-surface p-2"
            aria-label="Abrir o cerrar el menú de navegación"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <Icon name={isMobileMenuOpen ? "close" : "menu"} />
          </button>
        </div>
      </Container>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-outline-variant bg-surface px-6 py-4">
          <nav className="flex flex-col gap-4" aria-label="Navegación móvil">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={closeMobileMenu}
                className="text-on-surface-variant hover:text-primary text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Button as={Link} to="/contact" size="sm" className="mt-2" onClick={closeMobileMenu}>
              Contactar
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
