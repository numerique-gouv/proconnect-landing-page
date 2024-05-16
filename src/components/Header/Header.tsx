import { Header as DsfrHeader } from "@codegouvfr/react-dsfr/Header";

function Header() {
    return(
        <DsfrHeader
            brandTop={<>République<br />Française</>}
            homeLinkProps={{
                href: '/',
                title: 'Accueil - ProConnect'
            }}
            id="fr-header-header-with-quick-access-items-nav-items"
            navigation={[
                {
                linkProps: {
                    href: '#',
                    target: '_self'
                },
                text: 'Accueil'
                },
                {
                isActive: true,
                linkProps: {
                    href: '#',
                    target: '_self'
                },
                text: 'Annuaire des services'
                },
                {
                linkProps: {
                    href: '#',
                    target: '_self'
                },
                text: 'Liste des partenaires'
                },
            ]}
            quickAccessItems={[
                {
                iconId: 'fr-icon-code-s-slash-line',
                linkProps: {
                    href: '#'
                },
                text: 'Intégrer ProConnect sur votre site'
                },
                {
                iconId: 'fr-icon-timer-line',
                linkProps: {
                    href: '#'
                },
                text: 'Feuille de route'
                },
                {
                iconId: 'fr-icon-question-line',
                linkProps: {
                    href: '#'
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
