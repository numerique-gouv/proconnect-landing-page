import { useEffect, useState } from "react";
import { getUserInfos } from "../../lib/authentication";

export function DropDownLogout() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { lastName, firstName } = getUserInfos();
  return (
    <>
      {width >= 991 ? (
        <nav role="navigation" className="fr-translate fr-nav">
          <div className="fr-nav__item">
            <button
              className="fr-btn--icon-left fr-icon-account-circle-line fr-btn fr-btn--tertiary"
              aria-controls="name-account"
              aria-expanded="false"
              title="Nom de la personne connectée"
            >
              {`${firstName} ${lastName}`}
            </button>
            <div
              className="fr-collapse fr-translate__menu fr-menu"
              id="name-account"
            >
              <ul className="fr-menu__list">
                <li>
                  <a
                    className="fr-translate__language fr-nav__link"
                    href="/mon-compte"
                    aria-current={
                      window.location.pathname === "/mon-compte" ? true : false
                    }
                  >
                    Mon compte
                  </a>
                </li>
                <li>
                  <a
                    className="fr-translate__language fr-nav__link"
                    href="/openid/logout"
                  >
                    Se déconnecter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      ) : (
        <>
          <a
            href="/mon-compte"
            rel="noreferrer"
            className="fr-btn fr-icon-account-line"
          >
            Mon compte {`(${firstName} ${lastName})`}
          </a>
          <a className="fr-btn fr-icon-logout-box-r-line" href="/openid/logout">
            Se déconnecter
          </a>
        </>
      )}
    </>
  );
}
