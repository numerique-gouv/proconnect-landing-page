import { getUserInfos } from "../../lib/authentication";

export function DropDownLogout() {
  const { lastName, firstName } = getUserInfos();
  return (
    <nav role="navigation" className="fr-translate fr-nav">
      <div className="fr-nav__item">
        <button
          className="fr-btn--icon-left fr-icon-account-circle-line fr-btn fr-btn--tertiary"
          aria-controls="translate-1177"
          aria-expanded="false"
          title="Sélectionner une langue"
        >
          {`${firstName} ${lastName}`}
        </button>
        <div
          className="fr-collapse fr-translate__menu fr-menu"
          id="translate-1177"
        >
          <ul className="fr-menu__list">
            <li>
              <a
                className="fr-translate__language fr-nav__link"
                lang="fr"
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
                lang="en"
                href="/openid/logout"
              >
                Se déconnecter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
