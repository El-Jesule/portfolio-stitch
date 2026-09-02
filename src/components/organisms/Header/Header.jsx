import { useState } from "react";
import { Link } from "react-router-dom";
import { NAVIGATION_ITEMS } from "../../../constants/navigation.js";
import { NavLink } from "../../molecules/NavLink/NavLink.jsx";
import { Button } from "../../atoms/Button/Button.jsx";
import { Icon } from "../../atoms/Icon/Icon.jsx";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="bg-[#131316] border-b border-[#464554] sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-6 md:px-8 py-4 max-w-[1200px] mx-auto">
        <Link
          to="/"
          className="text-xl font-bold text-[#e4e1e5] tracking-tight hover:opacity-80 transition-opacity"
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

        <div className="hidden md:inline-flex">
          <Button as={Link} to="/contact" size="sm">
            Contactar
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden text-[#e4e1e5] p-2"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          <Icon name={isMobileMenuOpen ? "close" : "menu"} />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[#464554] bg-[#131316] px-6 py-4">
          <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={closeMobileMenu}
                className="text-[#c7c4d7] hover:text-[#c0c1ff] text-sm font-medium"
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
