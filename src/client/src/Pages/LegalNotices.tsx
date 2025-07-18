import { useTitle } from "../lib/useTitle";

function LegalNotices() {
  useTitle("Mentions légales");

  return (
    <div className="fr-container fr-my-5w">
      <h1 className="fr-h3">Mentions légales</h1>
      <h2 className="fr-h4">Éditeur</h2>
      <p>
        Ce site est édité par le programme ProConnect de la direction
        interministérielle du numérique (DINUM), un service du Premier
        ministre.{" "}
      </p>
      <p>
        <address>
          <p className="fr-mb-0">ProConnect/DINUM</p>
          <p className="fr-mb-0">20 avenue de Ségur</p>
          <p className="fr-mb-0">75007 Paris</p>
          <p className="fr-mb-0">Tel. accueil : 01.71.21.01.70</p>
        </address>
      </p>
      <p className="fr-mb-0">
        SIRET : 12000101100010 (secrétariat général du gouvernement)
      </p>
      <p>SIREN : 120 001 011</p>
      <h2 className="fr-h4">Directeur de publication</h2>
      <p>
        Stéphanie Schaer : Directrice du programme FranceConnect - Cheffe de
        mission DINUM chez direction interministérielle du numérique (DINUM).
      </p>
      <h2 className="fr-h4">Conception et gestion du site</h2>
      <p>
        Ce site est développé en mode agile, selon un principe d’amélioration
        continue. Le suivi éditorial et graphique est assuré au quotidien par
        ProConnect.
      </p>
      <h2 className="fr-h4">
        Propriété intellectuelle et liens vers proconnect.gouv.fr
      </h2>
      <p>
        Tout site public ou privé est autorisé à établir, sans autorisation
        préalable, un lien (y compris profond) vers les informations diffusées
        sur proconnect.gouv.fr. Sauf mention de propriété intellectuelle détenue
        par des tiers (notamment un crédit sur certaines images), les contenus
        de ce site sont proposés sous licence ouverte. La mise en place de liens
        vers nos contenus et documents est cependant à privilégier par rapport à
        la reproduction sur un site tiers. La mention explicite du site source
        proconnect.gouv.fr est recommandée.
      </p>
      <h2 className="fr-h4">Hébergement</h2>
      <p className="fr-mb-0">Outscale SAS</p>
      <p className="fr-mb-0">RCS: 527 594 493</p>
      <p className="fr-mb-0">
        Siège social : 1 rue Royale, 92210 Saint Cloud, France
      </p>
    </div>
  );
}

export default LegalNotices;
