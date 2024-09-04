import React from "react";
import "./roadmap.css";

function Roadmap() {
  return (
    <React.Fragment>
      <div className="fr-container fr-my-5w">
        <h1>Feuille de route</h1>
        <div className="fr-grid-row fr-grid-row--gutters">
          <div className="fr-col-12">
            <nav className="navmenu fr-col-12">
              <ul>
                <li>
                  <div className="bubble fr-py-5v">
                    <h2 className="fr-h6 fr-mb-1w">S2 2023</h2>
                    <p className="fr-mb-0">
                      • Fusion avec MonComptePro : tous les agents de la
                      fonction publique peuvent se connecter à AgentConnect.
                    </p>
                    <p className="fr-mb-0">
                      • Parcours utilisateur amélioré avec la connexion par
                      adresse email.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="bubble">
                    <h2 className="fr-h6 fr-mb-1w">S1 2024</h2>
                    <p className="fr-mb-0">
                      • Migration de l'infrastructure cloud de MonComptePro.
                    </p>
                    <p className="fr-mb-0">
                      • Outillage interne : nouvelle interface de modération.
                    </p>
                    <p className="fr-mb-0">
                      • Nouveau fournisseur de service :{" "}
                      <a href="https://annuaire-entreprises.data.gouv.fr/">
                        Annuaire des entreprises
                      </a>
                      .
                    </p>
                    <p className="fr-mb-0">
                      • Premier fournisseur de service à destination du secteur
                      privé :{" "}
                      <a href="https://egapro.travail.gouv.fr/">Egapro</a>.
                    </p>
                    <p className="fr-mb-0">
                      • la DGCCRF a rejoint la fédération d'identité
                    </p>
                    <p className="fr-mb-0">• Refonte graphique</p>
                    <p className="fr-mb-0">
                      • MonComptePro permet la connexion en Authentification
                      Double Facteur
                    </p>
                    <p className="fr-mb-0">
                      • Outillage AgentConnect (monitoring et segmentation)
                    </p>
                  </div>
                </li>
                <li className="active">
                  <div className="bubble">
                    <h2 className="fr-h6 fr-mb-1w">T3 2024</h2>
                    <p className="fr-mb-0">
                      • France Travail rejoint la fédération d'identité.
                    </p>
                    <p className="fr-mb-0">
                      • AgentConnect est disponible pour les professionnels du
                      secteur privé et devient ProConnect.
                    </p>
                    <p className="fr-mb-0">
                      • Intégration de la Fédération Éducation-Recherche
                      (RENATER)
                    </p>
                    <p className="fr-mb-0">
                      • Le ministère de la Justice rejoint la fédération
                      d’identité
                    </p>
                  </div>
                </li>
                <li>
                  <div className="bubble">
                    <h2 className="fr-h6 fr-mb-1w">T4 2024</h2>
                    <p className="fr-mb-0">
                      • InclusionConnect fusionne avec ProConnect
                    </p>
                    <p className="fr-mb-0">
                      • Réconciliation d’identité avec MonComptePro
                    </p>
                    <p className="fr-mb-0">
                      • Multi Factor Authentication dans ProConnect
                    </p>
                    <p className="fr-mb-0">
                      • Le Ministère de l'Agriculture et de la Souveraineté
                      Alimentaire rejoint la fédération d’identité
                    </p>
                    <p className="fr-mb-0">
                      • Nouveau fournisseur de service :{" "}
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.tchap.gouv.fr/"
                      >
                        Tchap
                      </a>
                      .
                    </p>
                  </div>
                </li>
                <li>
                  <div className="bubble">
                    <h2 className="fr-h6 fr-mb-1w">T1 2025</h2>
                    <p className="fr-mb-0">• Certification dirigeants</p>
                    <p className="fr-mb-0">• Espace Partenaires ProConnect</p>
                    <p className="fr-mb-0">
                      • Migration de l’infrastructure cloud de ProConnect.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="bubble">
                    <h2 className="fr-h6 fr-mb-1w">T2 2025</h2>
                    <p className="fr-mb-0">• Délégation dirigeants</p>
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
