import { Header as DsfrHeader } from "@codegouvfr/react-dsfr/Header";
import NameChangeNotice from "./NameChangeNotice";
import { isUserConnected } from "../../lib/authentication";
import { DropDownLogout } from "../DropDownLogout/DropDownLogout";

function Header() {
  const isConnected = isUserConnected();
  const quickAccessItems = [
    {
      iconId: "fr-icon-code-s-slash-line" as const,
      linkProps: {
        to: "https://github.com/numerique-gouv/agentconnect-documentation/blob/main/README.md#-agentconnect---documentation",
      },
      text: "Intégrer ProConnect",
    },
    {
      iconId: "fr-icon-timer-line" as const,
      linkProps: {
        to: "/feuille-de-route",
      },
      text: "Feuille de route",
    },
    ...(isConnected
      ? [<DropDownLogout />]
      : [
          {
            iconId: "fr-icon-account-circle-line" as const,
            linkProps: {
              to: "http://localhost:3001/openid/authorize",
            },
            text: "Se connecter",
          },
        ]),
  ];

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
        quickAccessItems={quickAccessItems}
        serviceTagline="la solution officielle qui vous identifie en tant que professionnel"
        serviceTitle="ProConnect"
      />
    </>
  );
}

export default Header;
