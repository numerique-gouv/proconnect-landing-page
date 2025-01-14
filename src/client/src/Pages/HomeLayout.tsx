import React from "react";
import welcome from "../assets/welcome.svg";
import "./layout.css";
import { fr } from "@codegouvfr/react-dsfr";
import news from "../assets/news.svg";
import HowDoesItWork from "../components/HowDoesItWork/HowDoesItWork";
import { tilesData } from "../data";

function HomeLayout() {
  return (
    <React.Fragment>
      <div className="fr-container--fluid background-welcome-page">
        <div className="fr-container fr-py-4w fr-py-md-8w">
          <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle">
            <div className="fr-col-12 fr-col-md-6">
              <h1 className="fr-h2">
                <span className="blue-france">ProConnect</span>
                ,
                <br />
                la solution officielle qui vous identifie <br />
                en tant que professionnel.
              </h1>
              <a className="fr-raw-link fr-btn" href="/eligibilite">
                <i className={fr.cx("ri-user-star-line") + " fr-pr-2w"} />
                Êtes-vous éligible&nbsp;?
              </a>
            </div>
            <div className="fr-col-6 fr-hidden fr-unhidden-md centered-content">
              <img src={welcome} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="fr-container fr-py-4w fr-py-md-8w">
        <HowDoesItWork tiles={tilesData} />
        <div
          className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle fr-mt-2w"
          id="agentconnect-devient-proconnect"
        >
          <div className="fr-col-12 fr-col-md-6 fr-pt-0">
            <h2 className="fr-h3">AgentConnect devient ProConnect&nbsp;!</h2>
            <h3 className="fr-h4">Pourquoi ce changement&nbsp;?</h3>
            <p>
              Les services de connexion pour les pros évoluent&nbsp;!
              MonComptePro, InclusionConnect et AgentConnect fusionnent pour
              devenir ProConnect.
            </p>
            <h3 className="fr-h4">Qu'est-ce que ça change pour vous&nbsp;?</h3>
            <ul>
              <li>Vous continuez à vous connecter de la même manière.</li>
              <li>
                Vous pouvez désormais accéder à encore plus de sites et d'outils
                de l'administration&nbsp;!
              </li>
            </ul>
            <p>
              <a href="/services" className="blue-france fr-mb-5w">
                Découvrez l’annuaire des services&nbsp;
                <span
                  className="fr-icon-arrow-right-line"
                  aria-hidden="true"
                ></span>
              </a>
            </p>
            <h3 className="fr-h4">
              Comment repérer le bouton ProConnect&nbsp;?
            </h3>
            <p>
              Facile&nbsp;! Vous verrez la Marianne avec la mention "pro" en
              jaune.
            </p>
            <h3 className="fr-h4">Comment certifiez-vous les dirigeants ?</h3>
            <p>
              La certification des dirigeants évolue et rejoint bientôt
              l'identification ProConnect !
            </p>
            <a className="fr-raw-link fr-btn" href="https://proconnect.gouv.fr">
              En savoir plus sur la certification Insee
            </a>
          </div>
          <div className="fr-col-6 fr-hidden fr-unhidden-md centered-content">
            <img src={news} alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HomeLayout;
