// import ButtonProCo from './assets/proConnect.svg';
import AgentConnect from './assets/AgentConnect.svg';
import EnterEmail from './assets/enterEmail.svg';
import Identity from './assets/checkIdentity.svg';
import EnjoyServices from './assets/enjoyServices.svg';

export const tilesData = [
    { illu: AgentConnect, content: 'Cliquez sur le bouton Agentconnect.' },
    { illu: EnterEmail, content: 'Entrez votre adresse email professionnelle.' },
    {
        illu: Identity,
        content:
            'Nous vérifions votre identité auprès d’une source officielle et votre éligibilité.',
    },
    {
        illu: EnjoyServices,
        content: 'Accédez à tous les services partenaires en un clic tout au long de la journée !',
    },
];

export const stepsInfosPublic = [
    {
        question: 'Êtes-vous éligible ?',
        response:
            'Oui ! Tous les membres de la Fonction Publique peuvent utiliser notre bouton de connexion AgentConnect.',
    },
    {
        question: 'Que se passe-t-il si votre administration n’est pas partenaire ?',
        response: `Aucun problème, vous pouvez utiliser ProConnnect ! 
    Nous nous assurons nous-même que vous faites partie de la Fonction Publique en vérifiant votre email professionnel et le SIRET de votre organisation.`,
        link: '/partenaires',
        descriptionLink: 'Découvrez la liste des partenaires',
    },
    {
        question: 'À quels services en ligne pouvez-vous vous connecter ?',
        response:
            'Grâce au AgentConnect, accédez à tous les outils de la DINUM, à la Suite Numérique et à tous les services interministériels de nos partenaires.',
        link: '/services',
        descriptionLink: `Découvrez l'annuaire des services`,
    },
    // {
    //     question: 'Quelle est la différence entre AgentConnect et ProConnect ?',
    //     response: `Il n’y a aucune différence ! AgentConnect est l’ancien nom de ProConnect. Ces deux boutons fonctionnent exactement pareil pour vous.`,
    // },
];

export const stepsInfosPrivate = [
    {
        question: 'Êtes-vous éligible ?',
        response:
            'Toute les personnes qui font partie d’une organisation possédant un SIRET peuvent créer un compte sur ProConnect.',
    },
    {
        question: 'A quels sites en ligne pouvez-vous accéder ?',
        response: `Grâce au bouton ProConnect, vous avez accès aux sites partenaires qui acceptent les utilisateurs du privé et à ceux pour lesquels vous avez reçus une invitation.`,
    },
    {
        question: 'Pouvons-vous être certifié en tant que dirigeant.e d’une entreprise ?',
        response:
            'Pas encore ! ProConnect est également le nom de l’outil de certification des entreprises développé par l’INSEE.',
    },
];

export const offres_fs = [
    {
        title: 'Resana',
        url: 'https://resana.numerique.gouv.fr/public/',
        description: 'Outil de travail collaboratif',
        openPrivate: true,
        internet: true,
    },
    {
        title: 'Portail CISIRH RIE',
        url: 'https://portail.cisirh.rie.gouv.fr/',
        description: 'Portail des applications interministérielles RH',
        internet: false,
    },
    {
        title: 'Webconférence de l’État',
        url: 'https://webconf.numerique.gouv.fr/',
        description: 'Outil de conférence à distance',
        internet: true,
    },
    {
        title: 'Osmose',
        url: 'https://osmose.numerique.gouv.fr/plugins/DINUMThemePlugin/jsp/front/privateLoginOsmose.jsp?redirect=https%3A%2F%2Fosmose.numerique.gouv.fr%2Fjcms%2F',
        description: 'Outil de travail collaboratif',
        internet: true,
    },
    {
        title: 'Annuaire des Entreprises',
        url: 'https://annuaire-entreprises.data.gouv.fr/',
        description:
            'Vérification des informations légales publiques des entreprises, associations et services publics en France',
        internet: true,
    },
    {
        title: 'Démarches Simplifiées',
        url: 'https://www.demarches-simplifiees.fr/',
        description: 'Outil pour réaliser des démarches administratives en ligne',
        openPrivate: true,
        internet: true,
    },
    {
        title: 'Webinaire',
        url: 'https://webinaire.numerique.gouv.fr/welcome',
        description: 'Outil de conférence à distance',
        internet: true,
    },
    {
        title: 'Rizomo',
        url: 'https://rizomo.numerique.gouv.fr/',
        description: 'Portail / raccourci vers des applications collaboratives interministérielles',
        internet: true,
    },
    {
        title: 'Socle interministériel de logiciels libres',
        url: 'https://sill.code.gouv.fr/',
        description: 'Catalogue de référence des logiciels libres au sein de l’État',
        internet: true,
    },
    {
        title: 'France Transfert',
        url: 'https://francetransfert.numerique.gouv.fr/connect',
        description:
            'Envoi de fichiers volumineux non sensibles de manière sécurisée à un agent de l’État ou entre agent',
        internet: true,
    },
    {
        title: 'Mobilic',
        url: 'https://mobilic.beta.gouv.fr/',
        description:
            'Plateforme numérique gouvernementale de suivi du temps de travail dans le transport routier léger',
        internet: true,
    },
    {
        title: 'Datalab SSP Cloud',
        url: 'https://datalab.sspcloud.fr/home)',
        description:
            'Plateforme mutualisée de services de traitement des données statistiques et de datascience',
        internet: true,
    },
    {
        title: 'Orion du CEREMA Internet',
        url: 'https://orion.cerema.fr/auth/realms/CeremaApps/account/#/',
        description:
            'Services du CEREMA (centre d’études et d’expertise sur les risques, l’environnement, la mobilité et l’aménagement)',
        internet: true,
    },
    {
        title: 'Orion du CEREMA RIE',
        url: 'https://orion.cerema.e2.rie.gouv.fr/auth/realms/CeremaApps/account/#/',
        description:
            'Services du CEREMA (centre d’études et d’expertise sur les risques, l’environnement, la mobilité et l’aménagement)',
        internet: false,
    },
    {
        title: 'Expertises Territoires',
        url: 'https://www.expertises-territoires.fr/',
        description:
            'Services du CEREMA (centre d’études et d’expertise sur les risques, l’environnement, la mobilité et l’aménagement)',
        internet: true,
    },
    {
        title: 'Contrats Territoires Internet et RIE',
        url: 'https://contrats-territoires.interieur.gouv.fr/accounts/login',
        description: 'Service pour élaborer les Contrats Plan État-Région (CPER)',
        openPrivate: true,
        internet: false,
    },
    {
        title: 'DataPass',
        url: 'https://datapass.api.gouv.fr/',
        description:
            'Cet outil s’adresse aux ayants droits qui souhaiteraient exploiter des données à caractère personnel.',
        openPrivate: true,
        internet: true,
    },
    {
        title: 'Mentor',
        url: 'https://mentor.gouv.fr/login/index.php',
        description: 'Plateforme interministérielle de formation professionnelle',
        internet: true,
    },
];
