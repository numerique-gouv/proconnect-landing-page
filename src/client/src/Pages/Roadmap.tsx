import React from "react";
import "./roadmap.css";
import { useTitle } from "../lib/useTitle";

function Roadmap() {
  useTitle("Feuille de route");

  return (
    <React.Fragment>
      <div className="fr-container fr-my-5w">
        <h1>Feuille de route</h1>
        <div className="fr-grid-row fr-grid-row--gutters">
          <div className="fr-col-12">
            <nav className="navmenu fr-col-12">
              <ul className="roadmap-list">
                <li className="roadmap-item">
                  <div className="bubble fr-py-5v">
                    <h2 className="fr-h6 fr-mb-1w">S2 2023</h2>
                    <ul className="roadmap-event-list">
                      <li>
                        Fusion avec MonComptePro : tous les agents de la
                        fonction publique peuvent se connecter à AgentConnect.
                      </li>
                      <li>
                        Parcours utilisateur amélioré avec la connexion par
                        adresse email.
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="roadmap-item">
                  <div className="bubble">
                    <h2 className="fr-h6 fr-mb-1w">S1 2024</h2>
                    <ul className="roadmap-event-list">
                      <li>
                        Migration de l'infrastructure cloud de MonComptePro.
                      </li>
                      <li>
                        Outillage interne : nouvelle interface de modération.
                      </li>
                      <li>
                        Premier fournisseur de service à destination du secteur
                        privé :{" "}
                        <a href="https://egapro.travail.gouv.fr/">Egapro</a>.
                      </li>
                      <li>Refonte graphique</li>
                      <li>
                        MonComptePro permet la connexion en Authentification
                        Double Facteur
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="roadmap-item">
                  <div className="bubble">
                    <h2 className="fr-h6 fr-mb-1w">S2 2024</h2>
                    <ul className="roadmap-event-list">
                      <li>France Travail rejoint la fédération d'identité.</li>
                      <li>
                        AgentConnect est disponible pour les professionnels du
                        secteur privé et devient ProConnect.
                      </li>
                      <li>
                        Le ministère de la Justice rejoint la fédération
                        d’identité
                      </li>
                      <li>
                        La Gendarmerie Nationale et la Police Nationale
                        rejoignent la Fédération d'Identité
                      </li>
                      <li>InclusionConnect fusionne avec ProConnect</li>
                      <li>
                        Le Ministère de l'Agriculture et de la Souveraineté
                        Alimentaire rejoint la fédération d’identité
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="roadmap-item active">
                  <div className="bubble">
                    <h2 className="fr-h6 fr-mb-1w">T1 2025</h2>
                    <ul className="roadmap-event-list">
                      <li>Certification dirigeants pour les indépendants</li>
                      <li>
                        Nouveau fournisseur de service :{" "}
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href="https://www.tchap.gouv.fr/"
                        >
                          Tchap
                        </a>
                        .
                      </li>
                      <li>
                        Les Services du Premier Ministre rejoignent la
                        fédération d'identité
                      </li>
                      <li>
                        Ouverture de l&rsquo;
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href="https://partenaires.proconnect.gouv.fr/"
                        >
                          Espace Partenaires
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="roadmap-item">
                  <div className="bubble">
                    <h2 className="fr-h6 fr-mb-1w">T2 2025</h2>
                    <ul className="roadmap-event-list">
                      <li>Authentification multifacteur dans ProConnect</li>
                      <li>Certification dirigeants pour toutes et tous</li>
                      <li>Migration de l’infrastructure cloud de ProConnect</li>
                      <li>Support de la carte agent</li>
                    </ul>
                  </div>
                </li>
                <li className="roadmap-item">
                  <div className="bubble">
                    <h2 className="fr-h6 fr-mb-1w">S2 2025</h2>
                    <ul className="roadmap-event-list">
                      <li>
                        Réconciliation d’identité entre Fournisseurs d'identité
                      </li>
                      <li>Délégation Dirigeants</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Roadmap;
