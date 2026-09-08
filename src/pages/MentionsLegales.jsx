export default function MentionsLegales() {
  return (
    <div className="w-full bg-black min-h-screen">
      <section className="max-w-2xl mx-auto px-6 py-14 text-white">
        <h1 className="text-3xl font-bold text-white mb-8">Mentions légales</h1>

        <div className="space-y-8 text-sm text-gray-300 leading-relaxed">

          <div>
            <h2 className="text-lg font-bold text-blue-400 mb-2">Éditrice du site</h2>
            <p>
              Ce site est édité à titre non professionnel par Aurélie Beaufils,
              actuellement en cours d'immatriculation en tant que micro-entrepreneuse.
            </p>
            <p className="mt-2">
              Email : aurelie72beaufils@gmail.com
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-blue-400 mb-2">Responsable de publication</h2>
            <p>Aurélie Beaufils</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-blue-400 mb-2">Hébergement</h2>
            <p>
              Ce site est hébergé par Vercel Inc.<br />
              340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis<br />
              
               <a href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                vercel.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-blue-400 mb-2">Propriété intellectuelle</h2>
            <p>
              L'ensemble des contenus présents sur ce site (textes, images, code, design)
              est la propriété d'Aurélie Beaufils, sauf mention contraire. Toute
              reproduction, représentation ou réutilisation, totale ou partielle, est
              interdite sans autorisation préalable écrite.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-blue-400 mb-2">Limitation de responsabilité</h2>
            <p>
              Aurélie Beaufils s'efforce d'assurer l'exactitude des informations
              diffusées sur ce site, mais ne peut garantir l'absence d'erreurs ou
              d'omissions. L'utilisation des informations du site se fait sous la seule
              responsabilité de l'utilisateur.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-blue-400 mb-2">Contact</h2>
            <p>
              Pour toute question relative à ce site, vous pouvez me contacter via le{" "}
              <a href="/#contact" className="text-blue-400 hover:underline">
                formulaire de contact
              </a>{" "}
              ou à l'adresse aurelie72beaufils@gmail.com.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}