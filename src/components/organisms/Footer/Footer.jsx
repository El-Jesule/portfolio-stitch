import { SOCIAL_LINKS, SITE_META } from "../../../constants/navigation.js";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-outline-variant mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full px-6 md:px-8 py-8 max-w-[1200px] mx-auto">
        <div className="text-xl font-bold text-on-surface">{SITE_META.ownerName}</div>

        <div className="text-sm text-on-surface-variant text-center">{SITE_META.copyright}</div>

        <nav className="flex gap-6" aria-label="Social links">
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
      </div>
    </footer>
  );
}
