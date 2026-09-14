export default function About() {
  return (
    <div className="w-full bg-ink-soft border-t border-hairline">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="font-serif text-3xl sm:text-4xl text-ivory mb-3">
          À propos
        </h2>
        <p className="text-brass mb-10 max-w-md">
          Un site web bien pensé, ça change tout pour une activité.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-muted leading-relaxed">
          <div className="space-y-4">
            <p>
              Après un parcours réussi dans l'hôtellerie où j'occupais un
              poste de Directrice chez Accor, un métier où l'exigence, le
              sens du service et la satisfaction client ne sont jamais
              négociables, j'ai choisi d'appliquer cette même rigueur au
              développement web.
            </p>

            <p>
              Je me suis formée en profondeur (certification développeuse web,
              OpenClassrooms) pour être capable de concevoir un site de A à Z :
              de la première idée à la mise en ligne, en passant par le
              design, le développement et l'accompagnement technique.
            </p>

            <p className="text-ivory">
              Ce que mon parcours précédent m'apporte concrètement dans mes
              projets :
            </p>

            <ul className="space-y-3">
              <li className="pl-4 border-l border-brass/50">
                Une vraie capacité d'écoute pour comprendre votre besoin réel
              </li>
              <li className="pl-4 border-l border-brass/50">
                Une gestion de projet organisée, avec des délais tenus
              </li>
              <li className="pl-4 border-l border-brass/50">
                Une communication claire à chaque étape, sans jargon inutile
              </li>
              <li className="pl-4 border-l border-brass/50">
                Le sens du détail et de la qualité, jusqu'à la mise en ligne
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <p>
              J'accorde une attention particulière à la performance, à
              l'accessibilité et à l'expérience utilisateur de chaque site
              que je conçois — parce qu'un site rapide et agréable à
              utiliser, c'est aussi un site qui convertit mieux vos
              visiteurs en clients.
            </p>

            <p>
              Je travaille en toute transparence : un premier échange pour
              cerner votre projet, une proposition claire, puis un
              développement suivi d'étapes régulières pour que vous restiez
              toujours informé(e) de l'avancement.
            </p>

            <p>
              Je vous invite à découvrir mes réalisations ci-dessous, qui
              illustrent ma façon de travailler et ma capacité à mener un
              projet jusqu'au bout. Vous avez un projet de site en tête ?{" "}
              <a href="/#contact" className="text-brass underline underline-offset-2 decoration-brass/50 hover:decoration-brass">
                Parlons-en.
              </a>
            </p>

            <blockquote className="border-l border-brass/50 pl-4 text-sm italic text-muted mt-6">
              « Mon formateur souligne particulièrement mon autonomie, ma
              rigueur et ma méthode de travail structurée — analyser,
              organiser, puis exécuter avec sérieux. »
              <footer className="not-italic text-xs text-muted/70 mt-2">
                — Thomas T., mentor développeur web, OpenClassrooms
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}