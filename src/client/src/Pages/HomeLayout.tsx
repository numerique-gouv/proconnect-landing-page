import React from "react";
import welcome from "../assets/welcome.svg";
import "./layout.css";
import { fr } from "@codegouvfr/react-dsfr";
import news from "../assets/news.svg";
import HowDoesItWork from "../components/HowDoesItWork/HowDoesItWork";
import { tilesData } from "../data";
import { useTitle } from "../lib/useTitle";

function HomeLayout() {
  useTitle("Accueil");

  return (
    <React.Fragment>
      <div className="fr-container--fluid ">
        <div className="fr-container fr-py-4w fr-py-md-8w">
          <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle">
            <div className="fr-col-12 fr-col-md-6 fr-grid-row--center fr-grid-row ">
              <div className="fr-col-10 fr-grid-row--center fr-grid-row align-center">
                <h1 className="fr-h1">
                  ProConnect, l'accès pour les pros, validé par l'État
                </h1>
                <h2 className="fr-h4">
                  Votre identité professionnelle est la meilleure clé pour une
                  connexion simple et sécurisée.
                </h2>
              </div>
            </div>
            <div className="fr-col-6 fr-hidden fr-unhidden-md centered-content">
              <img src={welcome} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="fr-container">
        <h2>Êtes-vous éligible ?</h2>
        <p>
          <span className="bold">
            Oui ! ProConnect peut être utilisé par tous les professionnels du
            public comme du privé.
          </span>
          <br />
          Certains sites peuvent être réservés à des publics spécifiques : vos
          droits d’accès dépendent de votre adresse e-mail professionnelle et de
          votre organisation. Dites-nous qui est votre employeur et découvrez
          une sélection de sites faits pour vous !
        </p>
      </div>
      <div className="fr-container fr-py-4w fr-py-md-8w">
        <HowDoesItWork tiles={tilesData} />
        <div
          className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle fr-mt-2w"
          id="agentconnect-devient-proconnect"
        >
          <div className="fr-col-12 fr-col-md-6 fr-pt-0">
            <h2 className="fr-h3">AgentConnect devient ProConnect !</h2>
            <h3 className="fr-h4">Pourquoi ce changement ?</h3>
            <p>
              Les services de connexion pour les pros évoluent ! MonComptePro,
              InclusionConnect et AgentConnect fusionnent pour devenir
              ProConnect.
            </p>
            <h3 className="fr-h4">Qu'est-ce que ça change pour vous ?</h3>
            <ul>
              <li>Vous continuez à vous connecter de la même manière.</li>
              <li>
                Vous pouvez désormais accéder à encore plus de sites et d'outils
                de l'administration !
              </li>
            </ul>
            <p>
              <a href="/services" className="blue-france fr-mb-5w">
                Découvrez l’annuaire des services 
                <span
                  className="fr-icon-arrow-right-line"
                  aria-hidden="true"
                ></span>
              </a>
            </p>
            <h3 className="fr-h4">Comment repérer le bouton ProConnect ?</h3>
            <p>
              Facile ! Vous verrez la Marianne avec la mention "pro" en jaune.
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
