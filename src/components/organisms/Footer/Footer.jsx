import { SOCIAL_LINKS, SITE_META } from "../../../constants/navigation.js";

export function Footer() {
  return (
    <footer className="bg-[#1f1f22] border-t border-[#464554] mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full px-6 md:px-8 py-8 max-w-[1200px] mx-auto">
        <div className="text-xl font-bold text-[#e4e1e5]">{SITE_META.ownerName}</div>

        <div className="text-sm text-[#c7c4d7] text-center">{SITE_META.copyright}</div>

        <nav className="flex gap-6" aria-label="Social links">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#c7c4d7] hover:text-[#c0c1ff] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
