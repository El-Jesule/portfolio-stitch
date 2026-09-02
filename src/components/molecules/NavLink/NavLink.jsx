import { NavLink as RouterNavLink } from "react-router-dom";

export function NavLink({ to, children }) {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        `text-sm font-medium tracking-wide transition-colors duration-200 ${isActive ? "text-[#c0c1ff] border-b-2 border-[#c0c1ff] pb-1" : "text-[#c7c4d7] hover:text-[#c0c1ff]"}`
      }
    >
      {children}
    </RouterNavLink>
  );
}
