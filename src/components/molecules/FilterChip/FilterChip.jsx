export function FilterChip({ label, isActive, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${isActive ? "border-[#6366f1] text-[#6366f1] bg-[rgba(99,102,241,0.1)]" : "border-[#464554] text-[#c7c4d7] hover:border-[#6366f1] hover:text-[#6366f1]"}`}
    >
      {label}
    </button>
  );
}
