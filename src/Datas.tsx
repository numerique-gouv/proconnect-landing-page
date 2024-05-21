import ButtonProCo from "./assets/proConnect.svg"
import EnterEmail from './assets/enterEmail.svg'
import Identity from './assets/checkIdentity.svg'
import EnjoyServices from "./assets/enjoyServices.svg"

export const tilesData = [
    { illu: ButtonProCo, content: "Cliquez sur le bouton ProConnect" },
    { illu: EnterEmail, content: "Entrez votre adresse email professionnelle." },
    { illu: Identity, content: "Nous vérifions votre identité auprès d’une source officielle et votre éligibilité." },
    { illu: EnjoyServices, content: "Accédez à tous les services partenaires en un clic tout au long de la journée !" }
]

export const stepsInfosPublic = [
    { question: "Êtes-vous éligible ?", response: "Oui ! Tous les membres de la Fonction Publique peuvent utiliser nos boutons de connexion ProConnect et AgentConnect." },
    { question: "Que se passe-t-il si votre administration n’est pas partenaire ?", response: `Aucun problème, vous pouvez utiliser ProConnnect ! 
    Nous nous assurons nous-même que vous faites partie de la Fonction Publique en vérifiant votre email professionnel et le SIRET de votre organisation.` },
    { question: "À quels services en ligne pouvez-vous vous connecter ?", response: "Grâce aux boutons ProConnect et AgentConnect, accédez à tous les outils de la DINUM, à la Suite Numérique et à tous les services interministériels de nos partenaires." },
    { question: "Quelle est la différence entre AgentConnect et ProConnect ?", response: `Il n’y a aucune différence ! AgentConnect est l’ancien nom de ProConnect. Ces deux boutons fonctionnent exactement pareil pour vous.` }
]

export const stepsInfosPrivate = [
    { question: "Êtes-vous éligible ?", response: "Toute les personnes qui font partie d’une organisation possédant un SIRET peuvent créer un compte sur ProConnect." },
    { question: "A quels sites en ligne pouvez-vous accéder ?", response: `Grâce au bouton ProConnect, vous avez accès aux sites partenaires qui acceptent les utilisateurs du privé et à ceux pour lesquels vous avez reçus une invitation.` },
    { question: "Pouvons-vous être certifié en tant que dirigeant.e d’une entreprise ?", response: "Pas encore ! ProConnect est également le nom de l’outil de certification des entreprises développé par l’INSEE." }
]

export const offres_fi = [
    {
      title: "Osmose",
      url: "https://osmose.numerique.gouv.fr/plugins/DINUMThemePlugin/jsp/front/privateLoginOsmose.jsp?redirect=https%3A%2F%2Fosmose.numerique.gouv.fr%2Fjcms%2F",
      description: "Outil de travail collaboratif",
    },
    {
      title: "Resana",
      url: "https://resana.numerique.gouv.fr/public/",
      description: "Outil de travail collaboratif",
      openPrivate: true
    },
    {
      title: "Webconférence de l’État",
      url: "https://webconf.numerique.gouv.fr/",
      description: "Outil de conférence à distance",
    },
    {
      title: "Webinaire",
      url: "https://webinaire.numerique.gouv.fr/welcome",
      description: "Outil de conférence à distance",
    },
    {
      title: "Démarches Simplifiées",
      url: "https://www.demarches-simplifiees.fr/",
      description: "Outil pour réaliser des démarches administratives en ligne",
      openPrivate: true
    },
    {
      title: "Rizomo",
      url: "https://rizomo.numerique.gouv.fr/",
      description:
        "Portail / raccourci vers des applications collaboratives interministérielles",
    },
    {
      title: "Socle interministériel de logiciels libres",
      url: "https://sill.code.gouv.fr/",
      description:
        "Catalogue de référence des logiciels libres au sein de l’État",
    },
    {
      title: "France Transfert",
      url: "https://francetransfert.numerique.gouv.fr/connect",
      description:
        "Envoi de fichiers volumineux non sensibles de manière sécurisée à un agent de l’État ou entre agent",
    },
    {
      title: "Mobilic",
      url: "https://mobilic.beta.gouv.fr/",
      description:
        "Plateforme numérique gouvernementale de suivi du temps de travail dans le transport routier léger",
    },
    {
      title: "Datalab SSP Cloud",
      url: "https://datalab.sspcloud.fr/home)",
      description:
        "Plateforme mutualisée de services de traitement des données statistiques et de datascience",
    },
    {
      title: "Orion du CEREMA Internet",
      url: "https://orion.cerema.fr/auth/realms/CeremaApps/account/#/",
      description:
        "Services du CEREMA (centre d’études et d’expertise sur les risques, l’environnement, la mobilité et l’aménagement)",
    },
    {
      title: "Orion du CEREMA RIE",
      url: "https://orion.cerema.e2.rie.gouv.fr/auth/realms/CeremaApps/account/#/",
      description:
        "Services du CEREMA (centre d’études et d’expertise sur les risques, l’environnement, la mobilité et l’aménagement)",
    },
    {
      title: "Expertises Territoires",
      url: "https://www.expertises-territoires.fr/",
      description:
        "Services du CEREMA (centre d’études et d’expertise sur les risques, l’environnement, la mobilité et l’aménagement)",
    },
    {
      title: "Mentor",
      url: "https://mentor.gouv.fr/login/index.php",
      description: "Plateforme interministérielle de formation professionnelle",
    },
    {
      title: "Portail CISIRH RIE",
      url: "https://portail.cisirh.rie.gouv.fr/",
      description: "Portail des applications interministérielles RH",
    },
    {
      title: "Annuaire des Entreprises",
      url: "https://annuaire-entreprises.data.gouv.fr/",
      description: "Vérification des informations légales publiques des entreprises, associations et services publics en France",
    },
    {
      title: "Contrats Territoires Internet et RIE",
      url: "https://contrats-territoires.interieur.gouv.fr/accounts/login",
      description: "Service pour élaborer les Contrats Plan État-Région (CPER)",
      openPrivate: true
    },
    {
      title: "DataPass",
      url: "https://beta.gouv.fr/startups/datapass.html",
      description: "Cet outil s’adresse aux ayants droits qui souhaiteraient exploiter des données à caractère personnel.",
      openPrivate: true
    },
  ];