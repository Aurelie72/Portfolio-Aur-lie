import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Accueil", bg: "bg-pink-200", color: "text-red-500" },
  { to: "/about", label: "A Propos", bg: "bg-yellow-300", color: "text-black" },
  { to: "/skills", label: "Compétences", bg: "bg-purple-500", color: "text-white" },
  { to: "/projects", label: "Projets", bg: "bg-blue-500", color: "text-white" },
  { to: "/contact", label: "Contact", bg: "bg-emerald-800", color: "text-emerald-300" },
];

export default function Header() {
  return (
    <header className="fixed top-2 right-2 z-50 flex items-center gap-2 whitespace-nowrap">
      {links.map((link, i) => (
        <NavLink
          key={link.to}
          to={link.to}
          end={link.to === "/"}
          className={({ isActive }) =>
            `px-4 py-2 font-bold font-sans uppercase tracking-wide text-sm leading-none rounded ${link.bg} ${link.color}
             ${i % 2 === 1 ? "translate-y-1" : ""}
             ${isActive ? "opacity-100" : "opacity-90"}
             hover:opacity-100 hover:scale-105 hover:-translate-y-0.5 transition-transform duration-200`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </header>
  );
}