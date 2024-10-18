import { Header as DsfrHeader } from "@codegouvfr/react-dsfr/Header";
import NameChangeNotice from "./NameChangeNotice";
import { isUserConnected, getUserInfos } from "../../lib/authentication";

function Header() {
  const isConnected = isUserConnected();
  const { lastName, firstName } = getUserInfos();
  const quickAccessItems = [
    {
      iconId: "fr-icon-code-s-slash-line",
      linkProps: {
        to: "https://github.com/numerique-gouv/agentconnect-documentation/blob/main/README.md#-agentconnect---documentation",
      },
      text: "Intégrer ProConnect",
    },
    {
      iconId: "fr-icon-timer-line",
      linkProps: {
        to: "/feuille-de-route",
      },
      text: "Feuille de route",
    },
    ...(isConnected
      ? [
          {
            iconId: "fr-icon-account-circle-line",
            linkProps: {
              to: "http://localhost:5173/mon-compte",
            },
            text: `${firstName} ${lastName}`,
          },
          {
            iconId: "fr-icon-logout-box-r-line",
            linkProps: {
              to: "http://localhost:3001/openid/logout",
            },
            text: "Se déconnecter",
          },
        ]
      : [
          {
            iconId: "fr-icon-account-circle-line",
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
