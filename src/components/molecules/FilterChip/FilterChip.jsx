export function FilterChip({ label, isActive, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${isActive ? "border-accent text-accent light:text-inverse-primary bg-[rgba(99,102,241,0.1)]" : "border-outline-variant text-on-surface-variant hover:border-accent hover:text-accent light:hover:text-inverse-primary"}`}
    >
      {label}
    </button>
  );
}
