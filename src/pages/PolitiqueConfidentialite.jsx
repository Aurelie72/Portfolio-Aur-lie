export default function PolitiqueConfidentialite() {
  return (
    <div className="w-full bg-black min-h-screen">
      <section className="max-w-2xl mx-auto px-6 py-14 text-white">
        <h1 className="text-3xl font-bold text-white mb-8">Politique de confidentialité</h1>

        <div className="space-y-8 text-sm text-gray-300 leading-relaxed">

          <div>
            <h2 className="text-lg font-bold text-emerald-400 mb-2">Données collectées</h2>
            <p>
              Ce site collecte des données personnelles uniquement lorsque vous
              remplissez volontairement le formulaire de contact : nom, adresse email,
              numéro de téléphone (facultatif) et le contenu de votre message.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-emerald-400 mb-2">Finalité</h2>
            <p>
              Ces données sont utilisées exclusivement pour répondre à votre demande de
              contact et échanger avec vous au sujet d'un projet potentiel. Elles ne
              sont ni vendues, ni cédées, ni utilisées à des fins commerciales tierces.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-emerald-400 mb-2">Base légale</h2>
            <p>
              Le traitement repose sur votre consentement explicite, recueilli via la
              case à cocher du formulaire de contact, conformément au Règlement Général
              sur la Protection des Données (RGPD).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-emerald-400 mb-2">Destinataire et sous-traitant</h2>
            <p>
              Les messages envoyés via le formulaire de contact sont transmis grâce au
              service tiers EmailJS, qui agit en tant que sous-traitant pour
              l'acheminement technique de l'email. Aucune autre donnée n'est partagée
              avec des tiers.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-emerald-400 mb-2">Durée de conservation</h2>
            <p>
              Vos données sont conservées le temps nécessaire au traitement de votre
              demande, puis supprimées dans un délai maximum de 12 mois en l'absence de
              suite donnée.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-emerald-400 mb-2">Cookies</h2>
            <p>
              Ce site n'utilise actuellement aucun cookie de suivi, de mesure d'audience
              ou de publicité.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-emerald-400 mb-2">Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez d'un droit d'accès, de rectification,
              d'effacement et de portabilité de vos données, ainsi que du droit de
              retirer votre consentement à tout moment. Pour exercer ces droits,
              contactez-moi à l'adresse aurelie72beaufils@gmail.com.
            </p>
            <p className="mt-2">
              Vous disposez également du droit d'introduire une réclamation auprès de
              la{" "}
              
               <a href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline"
              >
                CNIL
              </a>.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}