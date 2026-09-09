import { SOCIAL_LINKS, SITE_META } from "../../../constants/navigation.js";
import { Container } from "../../atoms/Container/Container.jsx";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-outline-variant mt-auto">
      <Container className="flex flex-col md:flex-row justify-between items-center gap-4 py-8">
        <div className="text-xl font-bold text-on-surface">{SITE_META.ownerName}</div>

        <div className="text-sm text-on-surface-variant text-center">{SITE_META.copyright}</div>

        <nav className="flex gap-6" aria-label="Enlaces sociales">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
