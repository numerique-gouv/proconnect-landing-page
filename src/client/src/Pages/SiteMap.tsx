import { useTitle } from "../lib/useTitle";

function SiteMap() {
  useTitle("Plan du site");

  return (
    <div className="fr-container fr-mt-2w fr-mb-4w">
      <h1 className="fr-h3">Plan du site</h1>
      <ul>
        <li>
          <a href="/">Accueil</a>
        </li>
        <li>
          <a href="/services">Annuaire des services</a>
        </li>
        <li>
          <a href="/eligibilite">Testez votre éligibilité</a>
        </li>
        <li>
          <a href="/feuille-de-route">Feuille de route</a>
        </li>
        <li>
          <a href="/plan-du-site">Plan du site</a>
        </li>
        <li>
          <a href="/accessibilite">Accessibilité</a>
        </li>
        <li>
          <a href="/mentions-legales">Mentions légales</a>
        </li>
        <li>
          <a href="/cgu#url-anchor-dp">Données personnelles</a>
        </li>
        <li>
          <a href="/cgu#url-anchor-gdc">Gestion des cookies</a>
        </li>
        <li>
          <a href="/stats">Statistiques d'utilisation</a>
        </li>
        <li>
          <a href="/cgu">Condition générale d'utilisation</a>
        </li>
      </ul>
    </div>
  );
}

export default SiteMap;
