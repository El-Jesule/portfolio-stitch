const VARIANT_STYLES = {
  primary:
    "bg-accent text-white hover:bg-accent-hover hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] light:hover:shadow-none border border-transparent",
  secondary:
    "bg-transparent border border-border-subtle text-on-surface hover:border-accent hover:text-primary",
  ghost:
    "bg-transparent border border-transparent text-on-surface hover:border-border-subtle",
};

const SIZE_STYLES = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  as: Component = "button",
  ...props
}) {
  const variantClass = VARIANT_STYLES[variant] ?? VARIANT_STYLES.primary;
  const sizeClass = SIZE_STYLES[size] ?? SIZE_STYLES.md;

  return (
    <Component
      className={`inline-flex items-center justify-center rounded font-medium tracking-wide transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${variantClass} ${sizeClass} ${fullWidth ? "w-full" : ""} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}
