import { Header as DsfrHeader } from "@codegouvfr/react-dsfr/Header";
import NameChangeNotice from "./NameChangeNotice";

function Header() {
  const currentURL = window.location.pathname;
  return (
    <>
      <NameChangeNotice />
      <DsfrHeader
        brandTop={
          <>
            République
            <br />
            Française
          </>
        }
        homeLinkProps={{
          to: "/",
          title: "Accueil - ProConnect",
        }}
        id="fr-header-header-with-quick-access-items-nav-items"
        navigation={[
          {
            isActive: currentURL === "/",
            linkProps: {
              to: "/",
              target: "_self",
            },
            text: "Accueil",
          },
          {
            isActive: currentURL === "/services",
            linkProps: {
              to: "/services",
              target: "_self",
            },
            text: "Annuaire des services",
          },
        ]}
        quickAccessItems={[
          {
            iconId: "fr-icon-code-s-slash-line",
            linkProps: {
              to: "https://github.com/numerique-gouv/agentconnect-documentation/blob/main/README.md#-agentconnect---documentation",
            },
            text: "Intégrer ProConnect sur votre site",
          },
          {
            iconId: "fr-icon-timer-line",
            linkProps: {
              to: "/feuille-de-route",
            },
            text: "Feuille de route",
          },
        ]}
        serviceTagline="la solution officielle qui vous identifie en tant que professionnel"
        serviceTitle="ProConnect"
      />
    </>
  );
}

export default Header;
