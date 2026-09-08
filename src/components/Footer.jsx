import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-gray-300 py-4 text-center text-gray-500 text-sm">
      <p>&copy; 2026 Aurélie — Portfolio — Tous droits réservés</p>
      <div className="flex justify-center gap-4 mt-2">
        <Link to="/mentions-legales" className="hover:text-gray-300 transition-colors">
          Mentions légales
        </Link>
        <span aria-hidden="true">·</span>
        <Link to="/politique-confidentialite" className="hover:text-gray-300 transition-colors">
          Politique de confidentialité
        </Link>
      </div>
    </footer>
  );
}