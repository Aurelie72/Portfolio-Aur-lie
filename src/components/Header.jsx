import { NavLink } from "react-router-dom";
import { navLinks } from "../data/navLinks";

export default function Header() {
  return (
    <header className="fixed top-2 right-2 z-50 flex flex-wrap items-center justify-end gap-2">
      {navLinks.map((link, i) => (
        <NavLink
          key={link.to}
          to={link.to}
          end={link.to === "/"}
          className={({ isActive }) =>
            `px-4 py-2 font-bold font-sans uppercase tracking-wide text-sm leading-none rounded ${link.bg} ${link.color}
             ${i % 2 === 1 ? "translate-y-1" : ""}
             ${isActive ? "opacity-100" : "opacity-50"}
             hover:opacity-100 hover:scale-105 hover:-translate-y-0.5 transition-transform duration-200`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </header>
  );
}
