import { useTitle } from "../lib/useTitle";

function SiteMap() {
  useTitle("Plan du site");

  return (
    <div className="fr-container fr-mt-2w fr-mb-4w">
      <h1 className="fr-h3">Plan du site</h1>
      <ul>
        <li>
          <a className="fr-raw-link" href="/">
            Accueil
          </a>
        </li>
        <li>
          <a className="fr-raw-link" href="/services">
            Annuaire des services
          </a>
        </li>
        <li>
          <a className="fr-raw-link" href="/eligibilite">
            Testez votre éligibilité
          </a>
        </li>
        <li>
          <a className="fr-raw-link" href="/feuille-de-route">
            Feuille de route
          </a>
        </li>
        <li>
          <a className="fr-raw-link" href="/plan-du-site">
            Plan du site
          </a>
        </li>
        <li>
          <a className="fr-raw-link" href="/accessibilite">
            Accessibilité
          </a>
        </li>
        <li>
          <a className="fr-raw-link" href="/mentions-legales">
            Mentions légales
          </a>
        </li>
        <li>
          <a className="fr-raw-link" href="/cgu#url-anchor-dp">
            Données personnelles
          </a>
        </li>
        <li>
          <a className="fr-raw-link" href="/cgu#url-anchor-gdc">
            Gestion des cookies
          </a>
        </li>
        <li>
          <a className="fr-raw-link" href="/stats">
            Statistiques d'utilisation
          </a>
        </li>
        <li>
          <a className="fr-raw-link" href="/cgu">
            Condition générale d'utilisation
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SiteMap;
