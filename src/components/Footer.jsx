import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-ink-soft border-t border-hairline py-10 text-center text-sm text-muted">
      <p className="font-serif italic text-ivory mb-1">Aurélie Beaufils</p>
      <p className="mb-6">Développeuse web indépendante</p>
      <div className="flex justify-center gap-4">
        <Link to="/mentions-legales" className="underline underline-offset-2 decoration-muted/50 hover:text-brass hover:decoration-brass transition-colors">
          Mentions légales
        </Link>
        <span aria-hidden="true">·</span>
        <Link to="/politique-confidentialite" className="underline underline-offset-2 decoration-muted/50 hover:text-brass hover:decoration-brass transition-colors">
          Politique de confidentialité
        </Link>
      </div>
    </footer>
  );
}
