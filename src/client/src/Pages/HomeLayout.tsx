import React from "react";
import welcome from "../assets/illu_hero.webp";
import profiling_transparent from "../assets/illu_profiling_transparent.webp";
import suite from "../assets/illu_suite.webp";
import illu_partners from "../assets/illu_partners.webp";
import "./layout.css";
import logo from "../assets/logo_centered.svg";
import { useTitle } from "../lib/useTitle";
import { Chip } from "../components/Chip/Chip";

function HomeLayout() {
  useTitle("Accueil");

  return (
    <React.Fragment>
      <div className="fr-container--fluid ">
        <div className="fr-container fr-py-4w fr-py-md-8w">
          <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle">
            <div className="fr-col-12 fr-col-md-6 fr-grid-row--center fr-grid-row ">
              <div className="fr-col-10 fr-grid-row--center fr-grid-row centered-text">
                <img className="fr-mb-2w" src={logo} alt="" />
                <h1 className="fr-h1 ">
                  ProConnect, l'accès pour les pros, validé par l'État
                </h1>
                <h2 className="fr-h4 ">
                  Votre identité professionnelle est la meilleure clé pour une
                  connexion simple et sécurisée.
                </h2>
              </div>
            </div>
            <div className="fr-col-6 fr-hidden fr-unhidden-md centered-content">
              <img width="80%" src={welcome} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="fr-container fr-mb-10w">
        <h2 className="fr-h2">Êtes-vous éligible ?</h2>
        <p>
          <span className="bold">
            Oui ! ProConnect peut être utilisé par tous les professionnels du
            public comme du privé.
          </span>
          <br />
          Certains sites peuvent être réservés à des publics spécifiques : vos
          droits d’accès dépendent de votre adresse e-mail professionnelle et de
          votre organisation.
          <br />
          Dites-nous qui est votre employeur et découvrez une sélection de sites
          faits pour vous !
          <br />
          <br />
          <a className="fr-raw-link fr-btn" href="/recommandation-test">
            Quels sites sont faits pour vous ?
          </a>
        </p>
      </div>
      <div className="fr-container fr-mb-10w">
        <div className="fr-grid-row fr-grid-row--gutters fr-col-12 ">
          <img className="fr-col-7" src={profiling_transparent} width="100%" />
          <div className="fr-col-5 fr-pl-6w">
            <Chip className="fr-mb-2w" text="Connexion unique" />
            <h2 className="fr-h2 fr-mb-1w">Votre identité professionnelle</h2>
            <p>
              ProConnect vous fait entrer là où vous avez droit ! Connectez-vous
              une fois le matin et accédez toute la journée à tous vos sites
              partenaires autorisés, grâce à votre adresse email
              professionnelle.
            </p>
          </div>
        </div>
      </div>
      <div className="fr-container fr-mb-10w">
        <div className="fr-grid-row fr-grid-row--gutters fr-col-12">
          <div className="fr-col-5 fr-pr-6w">
            <Chip className="fr-mb-2w" text="Diversité de partenaires" />
            <h2 className="fr-h2 fr-mb-1w">Toujours plus de partenaires</h2>
            <p>
              Plus de 120 partenaires intègrent déjà le bouton ProConnect pour
              simplifier l'accès à un service, des démarches ou encore des
              données.
              <br />
              Certains sites sont réservés à des publics spécifiques (ex.:
              agents du Ministère de la Justice, du Ministère de l'Intérieur,
              etc.)
              <br />
              D'autres sont ouverts à tous les professionnels, y compris ceux du
              privé.
              <br />
              <br />
              <a className="fr-link" href="/services">
                Consulter l'annuaire des sites
              </a>
            </p>
          </div>
          <img className="fr-col-7" src={illu_partners} width="100%" />
        </div>
      </div>
      <div className="fr-container fr-mb-10w">
        <div className="fr-grid-row fr-grid-row--gutters fr-col-12 ">
          <img className="fr-col-7" src={suite} width="100%" />

          <div className="fr-col-5 fr-pl-6w">
            <Chip className="fr-mb-2w" text="Professionnels du public" />
            <h2 className="fr-h2 fr-mb-1w">Zoom sur la Suite Numérique</h2>
            <p>
              En tant que membre de l'administration publique, ProConnect vous
              donne accès à de nombreux outils pour créer, organiser et
              collaborer.
              <br />
              Resana, Webinaire, Webconf, Audioconf... Autant d'outils puissants
              à portée de main.
              <br />
              <br />
              <a
                className="fr-link"
                target="_blank"
                rel="noopener external"
                href="https://lasuite.numerique.gouv.fr"
              >
                Découvrir la Suite Numérique
              </a>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HomeLayout;
