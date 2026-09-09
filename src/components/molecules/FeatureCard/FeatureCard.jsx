import { Icon } from "../../atoms/Icon/Icon.jsx";

export function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-surface-container-low border border-border-subtle rounded-lg p-6 flex flex-col gap-4 hover:border-accent transition-colors group shadow-theme-card">
      <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
        <Icon name={icon} filled />
      </div>
      <h3 className="text-lg font-semibold text-on-surface">{title}</h3>
      <p className="text-sm leading-6 text-on-surface-variant">{description}</p>
    </div>
  );
}
