import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Accueil", bg: "bg-pink-200", color: "text-red-500" },
  { to: "/about", label: "A Propos", bg: "bg-yellow-300", color: "text-black-300" },
  { to: "/skills", label: "Compétences", bg: "bg-purple-500", color: "text-white" },
  { to: "/projects", label: "Projets", bg: "bg-blue-500", color: "text-white" },
  { to: "/contact", label: "Contact", bg: "bg-emerald-800", color: "text-emerald-300" },
];

export default function Header() {
  return (
    <header className="fixed top-0.5 right-0 z-50 origin-top-right scale-35 flex items-center gap-1 p-0 whitespace-nowrap">
      {links.map((link, i) => (
        <NavLink
          key={link.to}
          to={link.to}
          end={link.to === "/"}
          className={({ isActive }) =>
            `px-2 py-1 font-bold uppercase tracking-wide text-xs leading-none ${link.bg} ${link.color}
             ${i % 2 === 1 ? "translate-y-1" : ""}
             ${isActive ? "opacity-100" : "opacity-90 hover:opacity-100"}`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </header>
  );
}