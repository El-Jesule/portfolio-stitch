import { Icon } from "../../atoms/Icon/Icon.jsx";
import { useTheme } from "../../../hooks/useTheme.js";

export function ThemeToggle({ className = "" }) {
  const { isLight, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isLight ? "Cambiar a modo oscuro" : "Cambiar a modo claro"}
      title={isLight ? "Cambiar a modo oscuro" : "Cambiar a modo claro"}
      className={`inline-flex items-center justify-center w-9 h-9 rounded border border-border-subtle text-on-surface-variant hover:text-primary hover:border-accent transition-colors ${className}`.trim()}
    >
      <Icon name={isLight ? "dark_mode" : "light_mode"} size="20px" />
    </button>
  );
}
