const VARIANT_STYLES = {
  subtle: "bg-surface-container-high text-on-surface-variant border border-transparent",
  highlighted:
    "bg-surface-container text-primary border border-accent shadow-[0_0_12px_rgba(99,102,241,0.08)] light:shadow-none",
  code: "bg-surface-container-high text-on-surface-variant font-mono text-xs",
};

export function Badge({ children, variant = "subtle", withDot = false, className = "" }) {
  const style = VARIANT_STYLES[variant] ?? VARIANT_STYLES.subtle;

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded text-sm font-medium ${style} ${className}`.trim()}
    >
      {withDot && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
      {children}
    </span>
  );
}
