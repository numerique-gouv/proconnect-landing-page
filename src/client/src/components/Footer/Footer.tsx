import { Footer as DsfrFooter } from "@codegouvfr/react-dsfr/Footer";
import { headerFooterDisplayItem } from "@codegouvfr/react-dsfr/Display";

function Footer() {
  return (
    <DsfrFooter
      id="footer"
      accessibility="non compliant"
      termsLinkProps={{
        to: "/mentions-legales",
      }}
      accessibilityLinkProps={{ to: "/accessibilite" }}
      websiteMapLinkProps={{
        to: "/plan-du-site",
      }}
      bottomItems={[
        <a key="cgu" href="/cgu" className="fr-footer__bottom-link">
          Conditions générales d'utilisation
        </a>,
        <a key="statistiques" href="/stats" className="fr-footer__bottom-link">
          Statistiques d'utilisation
        </a>,
        <a
          key="statut"
          href="https://status.proconnect.gouv.fr/"
          className="fr-footer__bottom-link"
          target="_blank"
          rel="noreferrer noopener"
          title="Statuts des services - nouvelle fenêtre"
        >
          Statuts des services
          <span className="visually-hidden"> - nouvelle fenêtre</span>
        </a>,
        <a
          key="partenaire"
          href="https://partenaires.proconnect.gouv.fr/"
          className="fr-footer__bottom-link"
          target="_blank"
          rel="noreferrer noopener"
          title="Devenez un FI ou FS partenaire - nouvelle fenêtre"
        >
          Devenez un FI ou FS partenaire
          <span className="visually-hidden"> - nouvelle fenêtre</span>
        </a>,
        headerFooterDisplayItem,
      ]}
    />
  );
}

export default Footer;
