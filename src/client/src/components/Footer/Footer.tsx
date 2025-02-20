import { Footer as DsfrFooter } from "@codegouvfr/react-dsfr/Footer";

function Footer() {
  return (
    <DsfrFooter
      accessibility="non compliant"
      termsLinkProps={{
        to: "/mentions-legales",
      }}
      accessibilityLinkProps={{ to: "/accessibilite" }}
      websiteMapLinkProps={{
        to: "/plan-du-site",
      }}
      bottomItems={[
        <a href="/cgu#url-anchor-dp" className="fr-footer__bottom-link">
          Données personnelles
        </a>,
        <a
          href="https://github.com/numerique-gouv/proconnect-documentation?tab=readme-ov-file#-proconnect---documentation"
          className="fr-footer__bottom-link"
        >
          Intégrer ProConnect
        </a>,
        <a href="/cgu" className="fr-footer__bottom-link">
          Conditions générales d'utilisation
        </a>,
        <a href="/stats" className="fr-footer__bottom-link">
          Statistiques d'utilisation
        </a>,
        <a
          href="https://status.proconnect.gouv.fr/"
          className="fr-footer__bottom-link"
        >
          Statuts des services
        </a>,
      ]}
    />
  );
}

export default Footer;
