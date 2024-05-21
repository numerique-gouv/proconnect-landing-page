import { Header as DsfrHeader } from "@codegouvfr/react-dsfr/Header";

function Header() {
    const currentURL = window.location.pathname;
    return(
        <DsfrHeader
            brandTop={<>République<br />Française</>}
            homeLinkProps={{
                to: '/',
                title: 'Accueil - ProConnect'
            }}
            id="fr-header-header-with-quick-access-items-nav-items"
            navigation={[
                {
                isActive: currentURL === '/',
                linkProps: {
                    to: '/',
                    target: '_self'
                },
                text: 'Accueil'
                },
                {
                isActive: currentURL === '/annuaire',
                linkProps: {
                    to: '/annuaire',
                    target: '_self'
                },
                text: 'Annuaire des services'
                },
                {
                isActive: currentURL === '/partenaires',
                linkProps: {
                    to: '/partenaires',
                    target: '_self'
                },
                text: 'Liste des partenaires'
                },
            ]}
            quickAccessItems={[
                // {
                // iconId: 'fr-icon-code-s-slash-line',
                // linkProps: {
                //     to: '#'
                // },
                // text: 'Intégrer ProConnect sur votre site'
                // },
                {
                iconId: 'fr-icon-timer-line',
                linkProps: {
                    to: '/feuille-de-route'
                },
                text: 'Feuille de route'
                },
                {
                iconId: 'fr-icon-question-line',
                linkProps: {
                    to: '/aide'
                },
                text: 'Aide'
                }
            ]}
            serviceTagline="Identifie les professionnels sur les sites de l'administation"
            serviceTitle="ProConnect"
        />
    )
}

export default Header
