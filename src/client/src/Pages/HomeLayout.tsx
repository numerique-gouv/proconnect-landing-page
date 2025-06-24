import React from "react";
import welcome from "../assets/illu_hero.webp";
import profiling_transparent from "../assets/illu_profiling.webp";
import suite from "../assets/illu_suite.webp";
import illu_partners from "../assets/illu_partners.webp";
import "./layout.css";
import illu_certified from "../assets/illu_certified.webp";
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
                <p>
                  Votre identité professionnelle est la meilleure clé pour une
                  connexion simple et sécurisée.
                </p>
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
        <p className="bold fr-mb-0">
          Oui ! ProConnect peut être utilisé par tous les professionnels du
          public comme du privé.
        </p>
        <p className="fr-mb-0">
          Certains sites peuvent être réservés à des publics spécifiques : vos
          droits d’accès dépendent de votre adresse e-mail professionnelle et de
          votre organisation.
        </p>
        <p>
          Dites-nous qui est votre employeur et découvrez une sélection de sites
          faits pour vous !
        </p>
        <a
          className="fr-btn fr-btn--lg fr-btn--icon-left fr-icon-user-heart-line"
          href="/recommandation-test"
        >
          Quels sites sont faits pour vous ?
        </a>
      </div>
      <div className="fr-container fr-mb-16w">
        <div className="fr-grid-row fr-grid-row--gutters fr-col-12">
          <div className="fr-col-12 fr-col-md-6 display-column">
            <img src={profiling_transparent} width="100%" alt="" />
          </div>
          <div className="fr-col-12 fr-col-md-6 fr-pl-md-4w">
            <Chip className="fr-mb-2w" text="Connexion unique" />
            <h2 className="fr-h2 fr-mb-1w">Votre identité professionnelle</h2>
            <p className="fr-mb-0">
              ProConnect vous fait entrer là où vous avez droit !
            </p>
            <p>
              Connectez-vous une fois le matin et accédez toute la journée à
              tous vos sites partenaires autorisés, grâce à votre adresse email
              professionnelle.
            </p>
          </div>
        </div>
      </div>
      <div className="fr-container fr-mb-16w">
        <div className="fr-grid-row fr-grid-row--gutters fr-col-12 reverse-md">
          <div className="fr-col-12 fr-col-md-6 fr-pr-md-4w">
            <Chip className="fr-mb-2w" text="Diversité de partenaires" />
            <h2 className="fr-h2 fr-mb-1w">Toujours plus de partenaires</h2>
            <p className="fr-mb-0">
              Plus de 120 partenaires intègrent déjà le bouton ProConnect pour
              simplifier l'accès à un service, des démarches ou encore des
              données.
            </p>
            <p className="fr-mb-0">
              Certains sites sont réservés à des publics spécifiques (ex.:
              agents du Ministère de la Justice, du Ministère de l'Intérieur,
              etc.)
            </p>
            <p className="fr-mb-0">
              D'autres sont ouverts à tous les professionnels, y compris ceux du
              privé.
            </p>
            <a className="fr-link" href="/services">
              Consulter l'annuaire des sites
            </a>
          </div>
          <div className="fr-col-12 fr-col-md-6 display-column ">
            <img src={illu_partners} width="100%" alt="" />
          </div>
        </div>
      </div>
      <div className="fr-container fr-mb-16w">
        <div className="fr-grid-row fr-grid-row--gutters fr-col-12">
          <div className="fr-col-12 fr-col-md-6 display-column ">
            <img src={suite} width="100%" alt="" />
          </div>

          <div className="fr-col-12 fr-col-md-5 fr-pl-md-6w">
            <Chip className="fr-mb-2w" text="Professionnels du public" />
            <h2 className="fr-h2 fr-mb-1w">Zoom sur la Suite Numérique</h2>
            <p className="fr-mb-0">
              En tant que membre de l'administration publique, ProConnect vous
              donne accès à de nombreux outils pour créer, organiser et
              collaborer.
            </p>
            <p className="fr-mb-0">
              Resana, Webinaire, Webconf, Audioconf... Autant d'outils puissants
              à portée de main.
            </p>
            <a
              className="fr-link"
              target="_blank"
              rel="noopener external noreferrer"
              href="https://lasuite.numerique.gouv.fr"
              title="Découvrir la Suite Numérique - nouvelle fenêtre"
            >
              Découvrir la Suite Numérique
              <span className="visually-hidden"> - nouvelle fenêtre</span>
            </a>
          </div>
        </div>
      </div>
      <div className="fr-container fr-mb-16w">
        <div className="fr-grid-row fr-grid-row--gutters fr-col-12 reverse-md">
          <div className="fr-col-12 fr-col-md-6 fr-pr-md-4w">
            <Chip className="fr-mb-2w" text="En cours de construction" />
            <h2 className="fr-h2 fr-mb-1w">Certification Dirigeant</h2>
            <p>
              Pour les professionnels du secteur privé, nous vous certifions
              bientôt en tant que dirigeant de votre entreprise pour vos
              démarches sécurisées.
            </p>
          </div>
          <div className="fr-col-12 fr-col-md-6 display-column ">
            <img src={illu_certified} width="100%" alt="" />
          </div>
        </div>
      </div>
      <div className="fr-container fr-mb-2w">
        <h2 className="fr-h1">Questions fréquentes</h2>
        <div className="fr-accordions-group">
          <section className="fr-accordion">
            <h3 className="fr-accordion__title">
              <button
                className="fr-accordion__btn"
                aria-expanded="false"
                aria-controls="accordion-114"
              >
                Comment savoir à quels sites j'ai droit ?
              </button>
            </h3>
            <div className="fr-collapse" id="accordion-114">
              Vos droits d'accès dépendent de votre adresse e-mail
              professionnelle et de votre organisation. Dites-nous qui est votre
              employeur et&nbsp;
              <a className="fr-link" href="/recommandation-test">
                découvrez une sélection de sites faits pour vous
              </a>
              &nbsp;!
            </div>
          </section>
          <section className="fr-accordion">
            <h3 className="fr-accordion__title">
              <button
                className="fr-accordion__btn"
                aria-expanded="false"
                aria-controls="accordion-115"
              >
                Comment créer un compte sur ProConnect ?
              </button>
            </h3>
            <div className="fr-collapse" id="accordion-115">
              <p className="fr-mb-0">
                <strong>
                  Vous faites partie d'une administration ou structure
                  partenaire ?
                </strong>
              </p>
              <p className="fr-mb-0">
                Rentrez votre email professionnelle : vous serez automatiquement
                redirigé vers votre portail d'identification habituel (ex :
                Calypsso, Curasso, Cerbère etc.).
              </p>
              <p>👉 Pas besoin de créer un nouveau compte !</p>
              <p>
                <strong>
                  Votre adresse est rattachée à une autre structure ?
                </strong>
              </p>
              <p>Créez un compte en quelques étapes simples :</p>
              <ol>
                <li>
                  Confirmez votre adresse email à l’aide du code de validation
                  reçu
                </li>
                <li>Choisissez un mot de passe</li>
                <li>
                  Entrez le SIRET de votre organisation (disponible sur{" "}
                  <a
                    className="fr-link"
                    target="_blank"
                    rel="noopener external noreferrer"
                    href="https://annuaire-entreprises.data.gouv.fr/"
                    title="Annuaire des entreprises - nouvelle fenêtre"
                  >
                    l'Annuaire des Entreprises
                    <span className="visually-hidden"> - nouvelle fenêtre</span>
                  </a>
                  )
                </li>
                <li>Complétez vos informations personnelles</li>
                <li>Votre compte est créé !</li>
              </ol>
            </div>
          </section>
          <section className="fr-accordion">
            <h3 className="fr-accordion__title">
              <button
                className="fr-accordion__btn"
                aria-expanded="false"
                aria-controls="accordion-116"
              >
                Je ne reçois pas de code de confirmation
              </button>
            </h3>
            <div className="fr-collapse" id="accordion-116">
              <p>Vous êtes peut-être dans l’une de ces situations :</p>
              <ul>
                <li>
                  Vous avez fait une erreur de saisie dans votre adresse mail :
                  recréez un compte avec la bonne adresse
                </li>
                <li>
                  Le code est arrivé dans vos courriers indésirables : vérifiez
                  vos spams
                </li>
                <li>
                  Votre organisation utilise une protection contre les spams
                  (comme MailInBlack ou Altospam) : contactez votre fournisseur
                  de mail pour qu’il autorise les emails en provenance de
                  nepasrepondre@email.moncomptepro.beta.gouv.fr (adresse IP :
                  172.246.41.163). Puis, demandez-lui de paramétrer le filtre
                  anti-spam pour laisser passer nos emails.
                </li>
                <li>
                  Votre code a expiré ou vous avez perdu l’email qui contenait
                  le code : vous pouvez vous reconnecter en cliquant sur « me
                  renvoyer un code de confirmation » lorsqu'il vous sera demandé
                  de saisir le code (
                  <a
                    className="fr-link"
                    target="_blank"
                    rel="noopener external noreferrer"
                    href="https://proconnect.crisp.help/fr/article/comment-regler-les-problematiques-liees-au-code-de-confirmation-a-10-chiffres-jyepuz/?bust=1744729438909"
                    title="Aide ProConnect - nouvelle fenêtre"
                  >
                    en savoir plus
                    <span className="visually-hidden"> - nouvelle fenêtre</span>
                  </a>
                  )
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <div className="fr-container fr-mt-5w fr-mb-10w">
        <p>
          <a
            className="fr-link"
            target="_blank"
            rel="noopener external noreferrer"
            href="https://proconnect.crisp.help/fr/"
            title="Voir tous les articles du centre d'aide - nouvelle fenêtre"
          >
            Voir tous les articles du centre d'aide
            <span className="visually-hidden"> - nouvelle fenêtre</span>
          </a>
        </p>
      </div>
    </React.Fragment>
  );
}

export default HomeLayout;
