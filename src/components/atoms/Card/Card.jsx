export function Card({ children, className = "", as: Component = "div", ...props }) {
  return (
    <Component
      className={`bg-surface-container-low border border-border-subtle shadow-theme-card ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}
