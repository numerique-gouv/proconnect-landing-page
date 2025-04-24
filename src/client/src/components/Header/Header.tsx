import { Header as DsfrHeader } from "@codegouvfr/react-dsfr/Header";
import "./header.css";
import { getUserInfo } from "../../lib/authentication";
import logo from "../../assets/logo_centered.svg";

import { DropDownLogout } from "../DropDownLogout/DropDownLogout";

function Header() {
  const userInfo = getUserInfo();
  const isConnected = !!userInfo;
  const quickAccessItems = [
    {
      iconId: "fr-icon-timer-line" as const,
      linkProps: {
        to: "/feuille-de-route",
      },
      text: "Feuille de route",
    },
    ...(isConnected
      ? [<DropDownLogout key="dropDownLogout" />]
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

  return (
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
      quickAccessItems={quickAccessItems}
      serviceTagline={
        <span id="logo" className="fr-h5 blue-france">
          <img src={logo} width={"32px"} className="fr-mr-1w" />
          ProConnect
        </span>
      }
      serviceTitle=""
    />
  );
}

export default Header;
