const VARIANT_STYLES = {
  subtle: "bg-[#27272a] text-[#a1a1aa] border border-transparent",
  highlighted:
    "bg-[#1f1f22] text-[#c0c1ff] border border-[#6366f1] shadow-[0_0_12px_rgba(99,102,241,0.08)]",
  code: "bg-[#27272a] text-[#a1a1aa] font-mono text-xs",
};

export function Badge({ children, variant = "subtle", withDot = false, className = "" }) {
  const style = VARIANT_STYLES[variant] ?? VARIANT_STYLES.subtle;

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded text-sm font-medium ${style} ${className}`.trim()}
    >
      {withDot && <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1]" />}
      {children}
    </span>
  );
}
