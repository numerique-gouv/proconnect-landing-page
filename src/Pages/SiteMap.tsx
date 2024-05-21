import React from "react"

function SiteMap() {
    return(
        <React.Fragment>
            <h1 className="fr-h3"></h1>
            <ul>
                <li>
                    <a className="fr-raw-link" href="/">Accueil</a>
                </li>
                <li>
                    <a className="fr-raw-link" href="/annuaire">Annuaire des services</a>
                </li>
                <li>
                    <a className="fr-raw-link" href="/partenaires">Liste des partenaires</a>
                </li>
                <li>
                    <a className="fr-raw-link" href="/feuille-de-route">Feuille de route</a>
                </li>
                <li>
                    <a className="fr-raw-link" href="/aide">Aide</a>
                </li>
                <li>
                    <a className="fr-raw-link" href="/plan-du-site">Plan du site</a>
                </li>
                <li>
                    <a className="fr-raw-link" href="/accessibilite">Accessibilité</a>
                </li>
                <li>
                    <a className="fr-raw-link" href="/mentions-legales">Mentions légales</a>
                </li>
                <li>
                    <a className="fr-raw-link" href="/cgu#url-anchor-dp">Données personnelles</a>
                </li>
                <li>
                    <a className="fr-raw-link" href="/cgu#url-anchor-gdc">Gestion des cookies</a>
                </li>
                <li>
                    <a className="fr-raw-link" href="/statistiques">Statistiques d'utilisation</a>
                </li>
                <li>
                    <a className="fr-raw-link" href="/cgu">Condition générale d'utilisation</a>
                </li>
            </ul>
        </React.Fragment>
    )
}

export default SiteMap
