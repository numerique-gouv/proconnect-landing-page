import { SkipLinks as DsfrSkipLinks } from "@codegouvfr/react-dsfr/SkipLinks";

function SkipLinks() {
  return (
    <DsfrSkipLinks
      links={[
        {
          anchor: "#content",
          label: "Contenu",
        },
        {
          anchor:
            "#header-menu-modal-fr-header-header-with-quick-access-items-nav-items",
          label: "Menu",
        },
        {
          anchor: "#footer",
          label: "Pied de page",
        },
      ]}
    />
  );
}

export default SkipLinks;
