import { Link } from "react-router-dom";
import {
  FiMessageCircle,
  FiFileText,
  FiCode,
  FiCheckCircle,
  FiLayout,
  FiLock,
  FiRefreshCw,
  FiTool,
} from "react-icons/fi";

const steps = [
  {
    icon: FiMessageCircle,
    title: "Échange initial",
    description: "Gratuit et sans engagement, pour cerner votre besoin, votre budget et vos délais.",
  },
  {
    icon: FiFileText,
    title: "Proposition",
    description: "Un devis clair et détaillé, avec un délai de réalisation précis.",
  },
  {
    icon: FiCode,
    title: "Développement",
    description: "Votre site prend forme, avec des points d'étape réguliers et vos retours pris en compte.",
  },
  {
    icon: FiCheckCircle,
    title: "Livraison & suivi",
    description: "Mise en ligne, prise en main de votre site, et disponibilité après livraison.",
  },
];

const formulas = [
  {
    icon: FiLayout,
    title: "Site vitrine simple",
    description: "Une ou plusieurs pages pour présenter votre activité, avec formulaire de contact.",
  },
  {
    icon: FiLock,
    title: "Site avec espace admin",
    description: "Vous gérez vous-même votre contenu (textes, photos, réalisations) sans toucher au code.",
  },
  {
    icon: FiRefreshCw,
    title: "Refonte d'un site existant",
    description: "Modernisation du design, amélioration des performances et de l'accessibilité.",
  },
  {
    icon: FiTool,
    title: "Maintenance & évolutions",
    description: "Suivi mensuel, mises à jour et nouvelles fonctionnalités après la mise en ligne.",
  },
];

export default function Offer() {
  return (
    <div className="w-full bg-ink border-t border-hairline">
      <div className="max-w-5xl mx-auto px-6 py-20">

        <h2 className="font-serif text-3xl sm:text-4xl text-ivory mb-3">
          Comment je travaille
        </h2>
        <p className="text-muted mb-12 max-w-md">
          Un processus simple et transparent, du premier échange à la mise en ligne.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="border-t border-brass/50 pt-4">
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="text-brass" size={20} />
                  <span className="text-xs text-muted">0{i + 1}</span>
                </div>
                <h3 className="font-serif text-lg text-ivory mb-2">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl text-ivory mb-3">
          Ce que je propose
        </h2>
        <p className="text-muted mb-12 max-w-md">
          Chaque projet étant différent, un devis gratuit et sur mesure est établi après notre échange.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {formulas.map((formula) => {
            const Icon = formula.icon;
            return (
              <div
                key={formula.title}
                className="border border-hairline hover:border-brass/60 transition-colors p-6"
              >
                <Icon className="text-brass mb-4" size={24} />
                <h3 className="font-serif text-lg text-ivory mb-2">{formula.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{formula.description}</p>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-hairline pt-8">
  
          <Link
            to="/#contact"
            className="px-6 py-3 bg-brass hover:bg-brass-deep transition-colors text-ink font-semibold text-sm whitespace-nowrap"
          >
            Discutons de votre projet
          </Link>
        </div>

      </div>
    </div>
  );
}
