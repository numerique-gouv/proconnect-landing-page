type networkType = 'internet' | 'RIE';

type serviceType = {
    title: string;
    url: string;
    description?: string;
    isOpenToPrivate?: boolean;
    network: networkType;
};

export type { serviceType };

const SERVICES_LIST: Array<serviceType> = [
    {
        title: 'Resana',
        url: 'https://resana.numerique.gouv.fr/public/',
        description: 'Outil de travail collaboratif',
        isOpenToPrivate: true,
        network: 'internet',
    },
    {
        title: 'Pad',
        url: 'https://pad.numerique.gouv.fr/',
        description: 'Édition de documents textes collaborative',
        network: 'internet',
    },
    {
        title: 'Audioconf',
        url: 'https://audioconf.numerique.gouv.fr/',
        description: 'Outil de conférence audio',
        network: 'internet',
    },
    {
        title: 'Portail CISIRH RIE',
        url: 'https://portail.cisirh.rie.gouv.fr/',
        description: 'Portail des applications interministérielles RH',
        network: 'RIE',
    },
    {
        title: 'Webconférence de l’État',
        url: 'https://webconf.numerique.gouv.fr/',
        description: 'Outil de conférence à distance',
        network: 'internet',
    },
    {
        title: 'Osmose',
        url: 'https://osmose.numerique.gouv.fr/plugins/DINUMThemePlugin/jsp/front/privateLoginOsmose.jsp?redirect=https%3A%2F%2Fosmose.numerique.gouv.fr%2Fjcms%2F',
        description: 'Outil de travail collaboratif',
        network: 'internet',
    },
    {
        title: 'Annuaire des Entreprises',
        url: 'https://annuaire-entreprises.data.gouv.fr/',
        description:
            'Vérification des informations légales publiques des entreprises, associations et services publics en France',
        network: 'internet',
    },
    {
        title: 'Démarches Simplifiées',
        url: 'https://www.demarches-simplifiees.fr/',
        description: 'Outil pour réaliser des démarches administratives en ligne',
        isOpenToPrivate: true,
        network: 'internet',
    },
    {
        title: 'Webinaire',
        url: 'https://webinaire.numerique.gouv.fr/welcome',
        description: 'Outil de conférence à distance',
        network: 'internet',
    },
    {
        title: 'Rizomo',
        url: 'https://rizomo.numerique.gouv.fr/',
        description: 'Portail / raccourci vers des applications collaboratives interministérielles',
        network: 'internet',
    },
    {
        title: 'Socle interministériel de logiciels libres',
        url: 'https://sill.code.gouv.fr/',
        description: 'Catalogue de référence des logiciels libres au sein de l’État',
        network: 'internet',
    },
    {
        title: 'France Transfert',
        url: 'https://francetransfert.numerique.gouv.fr/connect',
        description:
            'Envoi de fichiers volumineux non sensibles de manière sécurisée à un agent de l’État ou entre agent',
        network: 'internet',
    },
    {
        title: 'Mobilic',
        url: 'https://mobilic.beta.gouv.fr/',
        description:
            'Plateforme numérique gouvernementale de suivi du temps de travail dans le transport routier léger',
        network: 'internet',
    },
    {
        title: 'Datalab SSP Cloud',
        url: 'https://datalab.sspcloud.fr/home)',
        description:
            'Plateforme mutualisée de services de traitement des données statistiques et de datascience',
        network: 'internet',
    },
    {
        title: 'Orion du CEREMA Internet',
        url: 'https://orion.cerema.fr/auth/realms/CeremaApps/account/#/',
        description:
            'Services du CEREMA (centre d’études et d’expertise sur les risques, l’environnement, la mobilité et l’aménagement)',
        network: 'internet',
    },
    {
        title: 'Orion du CEREMA RIE',
        url: 'https://orion.cerema.e2.rie.gouv.fr/auth/realms/CeremaApps/account/#/',
        description:
            'Services du CEREMA (centre d’études et d’expertise sur les risques, l’environnement, la mobilité et l’aménagement)',
        network: 'RIE',
    },
    {
        title: 'Expertises Territoires',
        url: 'https://www.expertises-territoires.fr/',
        description:
            'Services du CEREMA (centre d’études et d’expertise sur les risques, l’environnement, la mobilité et l’aménagement)',
        network: 'internet',
    },
    {
        title: 'Contrats Territoires Internet et RIE',
        url: 'https://contrats-territoires.interieur.gouv.fr/accounts/login',
        description: 'Service pour élaborer les Contrats Plan État-Région (CPER)',
        isOpenToPrivate: true,
        network: 'RIE',
    },
    {
        title: 'DataPass',
        url: 'https://datapass.api.gouv.fr/',
        description:
            'Cet outil s’adresse aux ayants droits qui souhaiteraient exploiter des données à caractère personnel.',
        isOpenToPrivate: true,
        network: 'internet',
    },
    {
        title: 'Mentor',
        url: 'https://mentor.gouv.fr/login/index.php',
        description: 'Plateforme interministérielle de formation professionnelle',
        network: 'internet',
    },
    {
        title: 'VigiEau',
        url: 'https://admin.vigieau.beta.gouv.fr',
        network: 'internet',
    },
    {
        title: 'RIGA',
        url: 'https://riga.cisirh.gouv.fr',
        network: 'internet',
    },
    {
        title: 'Plus Fraîche Ma Ville',
        url: 'https://plusfraichemaville.fr',
        network: 'internet',
    },
    {
        title: "Hub d'Échange de l'État",
        url: 'https://demarches.hubee.numerique.gouv.fr/',
        network: 'internet',
    },
    { title: 'e-Campus', url: 'https://e-campus.interieur.gouv.fr', network: 'internet' },
    { title: 'SPOTE', url: 'https://spote.developpement-durable.gouv.fr/', network: 'internet' },
];

export { SERVICES_LIST };
