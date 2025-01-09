import { Header as DsfrHeader } from "@codegouvfr/react-dsfr/Header";
import NameChangeNotice from "./NameChangeNotice";
import { getUserInfo } from "../../lib/authentication";
import { DropDownLogout } from "../DropDownLogout/DropDownLogout";

function Header() {
  const userInfo = getUserInfo();
  const isConnected = !!userInfo;
  const quickAccessItems = [
    {
      iconId: "fr-icon-question-line" as const,
      linkProps: {
        to: "https://agentconnect.crisp.help/fr/",
      },
      text: "Aide",
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
              target: "_self",
              to: `${window.location.origin}/openid/authorize`,
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
