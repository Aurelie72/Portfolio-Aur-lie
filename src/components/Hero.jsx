import { Link } from "react-router-dom";

export default function Hero({
  name = "Aurélie Beaufils",
  title = "Développeuse web indépendante",
  image = "/assets/pictureofme.webp",
}) {
  return (
    <div className="w-full bg-ink text-ivory px-6 pt-20 pb-24">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">

        <div>
          <p className="text-sm text-brass mb-4">{title}</p>
          <h1 className="font-serif text-4xl sm:text-5xl leading-tight mb-6">
            Je conçois des sites web sur mesure : rapides, modernes, et pensés
            pour convertir vos visiteurs en clients.
          </h1>
          <p className="max-w-md text-muted mb-8 leading-relaxed">
            Site vitrine, formulaire de contact, espace administrateur —
            chaque projet est développé sur mesure, de la première idée à la
            mise en ligne.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/#contact"
              className="px-6 py-3 bg-brass hover:bg-brass-deep transition-colors text-ink font-semibold"
            >
              Discutons de votre projet
            </Link>
            <Link
              to="/#projects"
              className="px-6 py-3 border border-hairline hover:border-brass hover:text-brass transition-colors"
            >
              Voir mes projets
            </Link>
          </div>
        </div>

        <div className="relative hidden md:block justify-self-end">
          <div
            className="absolute -inset-3 border border-brass/40"
            aria-hidden="true"
          />
          <img
            src={image}
            alt={name}
            fetchPriority="high"
            className="relative w-56 h-72 sm:w-64 sm:h-80 object-cover"
          />
        </div>

      </div>
    </div>
  );
}
