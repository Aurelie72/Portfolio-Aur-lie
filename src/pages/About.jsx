export default function About() {
  return (
    <section
      className="max-w-5xl mx-auto px-6 py-3 bg-black text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(234,179,8,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(234,179,8,0.15) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <h1 className="text-base font-bold text-yellow-500 mb-4">À propos</h1>

          <h2 className="text-[8px] font-semibold text-yellow-700 -mt-2">
            « Il faut avoir l'audace d'être optimiste. »
          </h2>
  
      <div className="grid grid-cols-2 gap-6 text-[4px] text-gray-300 leading-relaxed mt-2">

        <div className="space-y-2">

          <p>
            L'optimisme est une force. C'est la capacité à avancer malgré les doutes,
            à voir des possibilités là où d'autres voient des obstacles, et à continuer
            à apprendre, progresser et créer. C'est exactement cet état d'esprit qui a
            guidé ma reconversion.
          </p>

          <p>
            Après un parcours réussi dans l'hôtellerie où j'occupais depuis 2022 un poste
            de Directrice dans le groupe Accor, j'ai fait le choix d'un nouveau challenge :
            me reconvertir au développement web. J'ai découvert un univers passionnant,
            en constante évolution, riche en créativité et en possibilités.
          </p>

          <p>
            Ma formation chez OpenClassrooms m'a permis de mobiliser mes compétences
            transversales :
          </p>

          <ul className="list-disc list-inside space-y-0.5">
            <li>Organisation & gestion de projet</li>
            <li>Rigueur & sens des responsabilités</li>
            <li>Communication & relation client</li>
            <li>Adaptabilité & gestion du stress</li>
          </ul>
        </div>

        <div className="space-y-2">
          <p>
            Motivation, dynamisme, logique sont les qualités humaines qu'on me reconnaît.
            Ces qualités, essentielles dans mon ancien métier, sont aujourd'hui au cœur
            de ma pratique du développement.
          </p>

          <p>
            Je vous invite à découvrir mes projets, qui illustrent mes compétences,
            ma progression et ma capacité à mener un projet de A à Z. J'accorde une
            attention particulière à la performance, à l'accessibilité et à l'expérience
            utilisateur. Mon approche client est exigeante voire perfectionniste.
          </p>

          <div className="space-y-0.5">
            <a href="/skills" className="text-yellow-700 font-semibold underline block">
            Lien vers mes compétences
            </a>
            <a href="/projects" className="text-yellow-700 font-semibold underline block">
            Lien vers mes projets
            </a>
          </div>

          <p>
            Aujourd'hui, mon objectif est de continuer à progresser dans ce domaine en
            rejoignant une équipe dynamique et innovante, où je pourrai contribuer à des
            projets modernes qui respectent les bonnes pratiques du développement web.
          </p>
        </div>

      </div>
    </section>
  );
}