import { Footer as DsfrFooter } from "@codegouvfr/react-dsfr/Footer";

function Footer() {
  return (
    <DsfrFooter
      termsLinkProps={{
        to: "/mentions-legales",
      }}
      websiteMapLinkProps={{
        to: "/plan-du-site",
      }}
      bottomItems={[
        <a href="/accessibility" className="fr-footer__bottom-link">
          Accessibilité : non conforme
        </a>,
        <a href="/cgu#url-anchor-dp" className="fr-footer__bottom-link">
          Données personnelles
        </a>,
        <a href="/cgu#url-anchor-gdc" className="fr-footer__bottom-link">
          Gestion des cookies
        </a>,
        <a href="/cgu" className="fr-footer__bottom-link">
          Conditions générales d'utilisation
        </a>,
        <a href="/stats" className="fr-footer__bottom-link">
          Statistiques d'utilisation
        </a>,
        <a
          href="https://status.agentconnect.gouv.fr/"
          className="fr-footer__bottom-link"
        >
          Statuts des services
        </a>,
      ]}
    />
  );
}

export default Footer;
