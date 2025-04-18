import { Header as DsfrHeader } from "@codegouvfr/react-dsfr/Header";
import NameChangeNotice from "./NameChangeNotice";
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
        quickAccessItems={quickAccessItems}
        serviceTagline={
          <p id="logo">
            <img src={logo} width={"32px"} />
            <h5 className="fr-ml-1w">ProConnect</h5>
          </p>
        }
        serviceTitle=""
      />
    </>
  );
}

export default Header;
