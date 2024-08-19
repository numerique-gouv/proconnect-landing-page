import React from "react";
import welcome from "../assets/welcome.svg";
// import PrivateProfessional from './PrivateProfessional';
import "./layout.css";
import { fr } from "@codegouvfr/react-dsfr";
import Button from "@codegouvfr/react-dsfr/Button";
import whatService from "../assets/quelService.svg";
import HowDoesItWork from "../components/HowDoesItWork/HowDoesItWork";
import { tilesData } from "../Datas";

// type ComponentType = 'publicMember' | 'privateProfessional';

function HomeLayout() {
  return (
    <React.Fragment>
      <div className="fr-container--fluid background-welcome-page">
        <div className="fr-container fr-py-4w fr-py-md-8w">
          <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle">
            <div className="fr-col-12 fr-col-md-6">
              <h1 className="fr-h2">
                Avec le bouton
                <span className="blue-france">AgentConnect</span>
                ,
                <br />
                nous vous identifions <br />
                sur les sites de l'administration.
              </h1>
              {/* <p>Vous êtes :</p> */}
              <a className="fr-raw-link" href="/eligibilite">
                <Button
                // isSelected={selectedComponent === 'publicMember'}
                >
                  <i className={fr.cx("ri-user-star-line") + " fr-pr-2w"} />
                  Testez votre éligibilité
                </Button>
              </a>
              {/* <ButtonRadius
                                onClick={() => handleButtonClick('privateProfessional')}
                                isSelected={selectedComponent === 'privateProfessional'}
                            >
                                Professionnel du privé
                            </ButtonRadius> */}
            </div>
            <div className="fr-col-6 fr-hidden fr-unhidden-md centered-content">
              <img src={welcome} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="fr-container">
        <HowDoesItWork tiles={tilesData}></HowDoesItWork>
        <div className="fr-container--fluid">
          <div className="fr-container fr-py-4w fr-py-md-8w">
            <div className="fr-grid-row fr-grid-row--gutters">
              <div className="fr-col-12 fr-col-md-7 fr-pt-0">
                <h1 className="fr-h3">
                  A quels services en ligne pouvez-vous vous connecter ?
                </h1>
                <p>
                  Grâce au bouton AgentConnect, accédez à tous les outils de la
                  DINUM,
                  <br />à la Suite Numérique et à tous les services
                  interministériels de nos partenaires.
                </p>
                <a href="/services" className="blue-france fr-mb-5w">
                  Découvrez l’annuaire des services&nbsp;
                  <span
                    className="fr-icon-arrow-right-line"
                    aria-hidden="true"
                  ></span>
                </a>
              </div>
              <div className="fr-col-4 fr-col-offset-1 fr-p-4w fr-hidden fr-unhidden-md centered-content card-radius">
                <div className="display-column">
                  <img src={whatService} className="fr-mb-2w" alt="" />

                  <h3 className="fr-text--lead centered-text">
                    Êtes-vous éligible <br />à AgentConnect ?
                  </h3>
                  <a className="fr-raw-link" href="/eligibilite">
                    <Button>
                      <i className="ri-user-star-line fr-pr-1w"></i>
                      Testez votre éligibilité
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Element name="componentStart">
                {selectedComponent === 'publicMember' && <AgentPublic />}
                {selectedComponent === 'privateProfessional' && <PrivateProfessional />}
            </Element> */}
    </React.Fragment>
  );
}

export default HomeLayout;
