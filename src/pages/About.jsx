export default function About() {
  return (
    <div
      className="w-full bg-black"
      style={{
        backgroundImage:
          "linear-gradient(rgba(234,179,8,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(234,179,8,0.15) 1px, transparent 1px)",
        backgroundSize: "50px 50px",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-5xl font-bold text-yellow-500 mb-4">À propos</h2>

        <h3 className="text-xl font-semibold text-yellow-700 mb-6">
          Un site web bien pensé, ça change tout pour une activité.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-base text-gray-400 leading-relaxed">

          <div className="space-y-2">
            <p>
 Après un parcours réussi dans l'hôtellerie où j'occupais un poste
              de Directrice chez Accor, un métier où l'exigence, le sens
              du service et la satisfaction client ne sont jamais négociables. J'ai
              choisi d'appliquer cette même rigueur au développement web.
            </p>

            <p>
              Je me suis formée en profondeur pour être capable de concevoir un site de A à Z : de la première idée à la mise en ligne, en passant par le design, le développement et l'accompagnement technique.
            </p>

            <p>
              Ce que mon parcours précédent m'apporte concrètement dans mes projets :
            </p>

            <ul className="list-disc list-inside space-y-1">
              <li>Une vraie capacité d'écoute pour comprendre votre besoin réel</li>
              <li>Une gestion de projet organisée, avec des délais tenus</li>
              <li>Une communication claire à chaque étape, sans jargon inutile</li>
              <li>Le sens du détail et de la qualité, jusqu'à la mise en ligne</li>
            </ul>
          </div>

          <div className="space-y-2">
            <p>
              J'accorde une attention particulière à la performance, à l'accessibilité
              et à l'expérience utilisateur de chaque site que je conçois — parce qu'un
              site rapide et agréable à utiliser, c'est aussi un site qui convertit mieux
              vos visiteurs en clients.
            </p>

            <p>
              Je travaille en toute transparence : un premier échange pour cerner votre
              projet, une proposition claire, puis un développement suivi d'étapes
              régulières pour que vous restiez toujours informé(e) de l'avancement.
            </p>

            <p>
              Je vous invite à découvrir mes réalisations ci-dessous, qui illustrent ma
              façon de travailler et ma capacité à mener un projet jusqu'au bout. Vous
              avez un projet de site en tête ?{" "}
              <a href="/#contact" className="text-yellow-500 hover:underline">
                Parlons-en.
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}