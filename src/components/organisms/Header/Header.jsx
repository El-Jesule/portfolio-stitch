import { useState } from "react";
import { Link } from "react-router-dom";
import { NAVIGATION_ITEMS } from "../../../constants/navigation.js";
import { NavLink } from "../../molecules/NavLink/NavLink.jsx";
import { Button } from "../../atoms/Button/Button.jsx";
import { Icon } from "../../atoms/Icon/Icon.jsx";
import { useTheme } from "../../../hooks/useTheme.js";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isLight, toggleTheme } = useTheme();

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="bg-surface border-b border-outline-variant sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-6 md:px-8 py-4 max-w-[1200px] mx-auto">
        <Link
          to="/"
          className="text-xl font-bold text-on-surface tracking-tight hover:opacity-80 transition-opacity"
        >
          Jesús
        </Link>

        <nav className="hidden md:flex gap-6 items-center" aria-label="Primary navigation">
          {NAVIGATION_ITEMS.map((item) => (
            <NavLink key={item.id} to={item.path}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isLight ? "Cambiar a modo oscuro" : "Cambiar a modo claro"}
            title={isLight ? "Cambiar a modo oscuro" : "Cambiar a modo claro"}
            className="inline-flex items-center justify-center w-9 h-9 rounded border border-border-subtle text-on-surface-variant hover:text-primary hover:border-accent transition-colors"
          >
            <Icon name={isLight ? "dark_mode" : "light_mode"} size="20px" />
          </button>
          <Button as={Link} to="/contact" size="sm">
            Contactar
          </Button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isLight ? "Cambiar a modo oscuro" : "Cambiar a modo claro"}
            className="inline-flex items-center justify-center w-9 h-9 rounded border border-border-subtle text-on-surface-variant hover:text-primary hover:border-accent transition-colors"
          >
            <Icon name={isLight ? "dark_mode" : "light_mode"} size="20px" />
          </button>
          <button
            type="button"
            className="text-on-surface p-2"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <Icon name={isMobileMenuOpen ? "close" : "menu"} />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-outline-variant bg-surface px-6 py-4">
          <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
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
