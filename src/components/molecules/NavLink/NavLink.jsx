import { NavLink as RouterNavLink } from "react-router-dom";

export function NavLink({ to, children }) {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        `text-sm font-medium tracking-wide transition-colors duration-200 ${isActive ? "text-primary border-b-2 border-primary pb-1" : "text-on-surface-variant hover:text-primary"}`
      }
    >
      {children}
    </RouterNavLink>
  );
}
