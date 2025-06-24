import { useTitle } from "../lib/useTitle";

function Accessibility() {
  useTitle("Accessibilité");

  return (
    <div className="fr-container fr-my-5w">
      <div className="fr-grid-row">
        <h1>Accessibilité</h1>
        <p className="fr-mb-0">
          Le site ProConnect n'est actuellement pas en conformité avec le RGAA
          (Référentiel Général d'Amélioration de l'Accessibilité).
        </p>
        <p>
          Nous n'avons pas encore réalisé d'audit d'accessibilité qui nous
          permettrait d'identifier précisément les non-conformités.
        </p>
        <h2>Résultats des tests</h2>
        <p>
          Aucun test d'accessibilité n'a été réalisé à ce jour. Nous prévoyons
          de mener un audit complet afin d'identifier les points d'amélioration.
        </p>
        <h2>Contenus non accessibles</h2>
        <p>
          En l'absence d'audit, nous ne pouvons pas détailler précisément les
          contenus non conformes. Nous sommes conscients que certains éléments
          du site peuvent présenter des difficultés d'accès pour les
          utilisateurs en situation de handicap.
        </p>

        <h2>Établissement de cette déclaration d'accessibilité</h2>
        <p>
          Cette déclaration a été établie le 13 janvier 2025 par{" "}
          <strong>
            la Brigade d'Intervention du Numérique (BIN) de la Direction
            Interministérielle du numérique
          </strong>
          . Elle n'est pas basée sur une analyse de conformité car aucun audit
          n'a été réalisé.
        </p>
        <h2>Retour d'information et contact</h2>
        <p>
          Si vous n’arrivez pas à accéder à un contenu ou à un service, vous
          pouvez nous contacter pour être orienté vers une alternative
          accessible ou obtenir le contenu sous une autre forme :
          <ul>
            <li>
              Email :
              <a href="mailto:support+federation@proconnect.gouv.fr">
                support+federation@proconnect.gouv.fr
              </a>
            </li>
            <li>
              <p className="fr-mb-0">Adresse postale :</p>
              <address>
                <p className="fr-mb-0">ProConnect/DINUM</p>
                <p className="fr-mb-0">20 avenue de Ségur</p>
                <p className="fr-mb-0">75007 Paris</p>
                <p className="fr-mb-0">Tel. accueil : 01.71.21.01.70</p>
              </address>
            </li>
          </ul>
          Nous tâcherons de vous répondre dans les meilleurs délais.
        </p>
        <h2>Voies de recours</h2>
        <p>
          Si vous constatez un défaut d'accessibilité vous empêchant d'accéder à
          un contenu ou une fonctionnalité du site, et que vous nous en informez
          mais n'obtenez pas de réponse satisfaisante, vous êtes en droit de
          faire remonter le problème ou déposer une plainte auprès du Défenseur
          des droits.
        </p>
        <p>
          Plusieurs moyens sont à votre disposition :
          <ul>
            <li>
              Formulaire de contact :{" "}
              <a
                href="https://formulaire.defenseurdesdroits.fr/"
                target="_blank"
                rel="noreferrer noopener"
                title="Écrire un message au Défenseur des droits - nouvelle fenêtre"
              >
                Écrire un message au Défenseur des droits
              </a>
            </li>
            <li>
              <a
                href="https://www.defenseurdesdroits.fr/saisir/delegues"
                target="_blank"
                rel="noreferrer noopener"
                title="Contacter le délégué du Défenseur des droits dans votre région - nouvelle fenêtre"
              >
                Contacter le délégué du Défenseur des droits dans votre région
              </a>
            </li>
            <li>
              <p className="fr-mb-0">
                Envoyer un courrier postal (gratuit, ne pas mettre de timbre) :
              </p>
              <address>
                <p className="fr-mb-0">Défenseur des droits</p>
                <p className="fr-mb-0">Libre réponse 71120</p>
                <p className="fr-mb-0">75342 Paris CEDEX 07</p>
              </address>
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export { Accessibility };
