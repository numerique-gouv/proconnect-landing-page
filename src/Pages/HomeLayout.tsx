import React from "react";
import welcome from "../assets/welcome.svg";
import "./layout.css";
import { fr } from "@codegouvfr/react-dsfr";
import Button from "@codegouvfr/react-dsfr/Button";
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
              <a className="fr-raw-link" href="/eligibilite">
                <Button>
                  <i className={fr.cx("ri-user-star-line") + " fr-pr-2w"} />
                  Êtes-vous éligible ?
                </Button>
              </a>
            </div>
            <div className="fr-col-6 fr-hidden fr-unhidden-md centered-content">
              <img src={welcome} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="fr-container">
        <HowDoesItWork tiles={tilesData}></HowDoesItWork>
        <div
          className="fr-container--fluid"
          id="agentconnect-devient-proconnect-container"
        >
          <div className="fr-container fr-py-4w fr-py-md-8w">
            <div className="fr-grid-row fr-grid-row--gutters">
              <div className="fr-col-12 fr-col-md-7 fr-pt-0">
                <h2 className="fr-h2">AgentConnect devient ProConnect !</h2>
                <h3 className="fr-h3">Pourquoi ce changement ?</h3>
                <p>
                  Les services de connexion pour les pros évoluent !
                  MonComptePro, InclusionConnect et AgentConnect fusionnent pour
                  devenir ProConnect.
                </p>
                <h3 className="fr-h3">Qu'est-ce que ça change pour vous ?</h3>
                <ul>
                  <li>Vous continuez à vous connecter de la même manière.</li>
                  <li>
                    Vous pouvez désormais accéder à encore plus de sites et
                    d'outils de l'administration !
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
                <h3 className="fr-h3">
                  Comment repérer le bouton ProConnect ?
                </h3>
                <p>
                  Facile ! Vous verrez la Marianne avec la mention "pro" en
                  jaune.
                </p>
              </div>
              <div className="fr-col-4 fr-p-4w centered-content">
                <img src={news} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HomeLayout;
