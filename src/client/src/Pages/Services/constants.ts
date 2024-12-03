type networkType = "internet" | "RIE";

type categoryType = "inclusion" | "suiteNumerique";

type serviceType = {
  title: string;
  url: string;
  description: string;
  category?: categoryType;
  isOpenToPrivate?: boolean;
  network: networkType;
};

export type { serviceType };

const SERVICES_LIST: Array<serviceType> = [
  {
    title: "Resana",
    url: "https://resana.numerique.gouv.fr/public/",
    description: "Outil de travail collaboratif",
    isOpenToPrivate: true,
    network: "internet",
    category: "suiteNumerique",
  },
  {
    title: "Pad",
    url: "https://pad.numerique.gouv.fr/",
    description: "Editer des documents et des textes de manière collaborative",
    network: "internet",
    category: "suiteNumerique",
  },
  {
    title: "Audioconf",
    url: "https://audioconf.numerique.gouv.fr/",
    description: "Organiser des conférences audio",
    network: "internet",
    category: "suiteNumerique",
  },
  {
    title: "Portail CISIRH RIE",
    url: "https://portail.cisirh.rie.gouv.fr/",
    description: "Répertorier les applications interministérielles RH",
    network: "RIE",
  },
  {
    title: "Webconférence de l’État",
    url: "https://webconf.numerique.gouv.fr/",
    description:
      "Collaborer en temps réel avec vos équipes via des réunions à distance.",
    network: "internet",
    category: "suiteNumerique",
  },
  {
    title: "Osmose",
    url: "https://osmose.numerique.gouv.fr/plugins/DINUMThemePlugin/jsp/front/privateLoginOsmose.jsp?redirect=https%3A%2F%2Fosmose.numerique.gouv.fr%2Fjcms%2F",
    description: "Travailler avec des outils collaboratifs",
    network: "internet",
    category: "suiteNumerique",
  },
  {
    title: "Annuaire des Entreprises",
    url: "https://annuaire-entreprises.data.gouv.fr/",
    description:
      "Vérifier des informations légales publiques des entreprises, associations et services publics en France",
    network: "internet",
  },
  {
    title: "Démarches Simplifiées",
    url: "https://www.demarches-simplifiees.fr/",
    description: "Réaliser des démarches administratives en ligne",
    isOpenToPrivate: true,
    network: "internet",
  },
  {
    title: "Webinaire",
    url: "https://webinaire.numerique.gouv.fr/welcome",
    description:
      "Animer des présentations interactives avec un public à distance.",
    network: "internet",
    category: "suiteNumerique",
  },
  {
    title: "Rizomo",
    url: "https://rizomo.numerique.gouv.fr/",
    description:
      "Accéder au portail des applications collaboratives interministérielles",
    network: "internet",
    category: "suiteNumerique",
  },
  {
    title: "Socle interministériel de logiciels libres",
    url: "https://sill.code.gouv.fr/",
    description: "Cataloguer les logiciels libres au sein de l’État",
    network: "internet",
  },
  {
    title: "France Transfert",
    url: "https://francetransfert.numerique.gouv.fr/connect",
    description:
      "Envoyer des fichiers volumineux non sensibles de manière sécurisée à un agent de l’État ou entre agents",
    network: "internet",
    category: "suiteNumerique",
  },
  {
    title: "RDV Service Public",
    url: "https://rdv.anct.gouv.fr",
    description:
      "Faciliter la prise des rendez-vous entre le service public et les usagers",
    network: "internet",
  },
  {
    title: "Mobilic",
    url: "https://mobilic.beta.gouv.fr/",
    description: "Suivre le temps de travail dans le transport routier léger",
    network: "internet",
  },
  {
    title: "Datalab SSP Cloud",
    url: "https://datalab.sspcloud.fr/home",
    description:
      "Répertorier les services de traitement des données statistiques et de datascience",
    network: "internet",
  },
  {
    title: "Orion du CEREMA Internet",
    url: "https://orion.cerema.fr/auth/realms/CeremaApps/account/#/",
    description:
      "Répertorier les services du CEREMA (centre d’études et d’expertise sur les risques, l’environnement, la mobilité et l’aménagement)",
    network: "internet",
  },
  {
    title: "Orion du CEREMA RIE",
    url: "https://orion.cerema.e2.rie.gouv.fr/auth/realms/CeremaApps/account/#/",
    description:
      "Répertorier les services du CEREMA (centre d’études et d’expertise sur les risques, l’environnement, la mobilité et l’aménagement)",
    network: "RIE",
  },
  {
    title: "Expertises Territoires",
    url: "https://www.expertises-territoires.fr/",
    description:
      "Développer des projets de transition écologique et d'adaptation aux changements climatiques par la coopération entre acteurs territoriaux, partenaires et experts en vous connectant sur cette plateforme numérique collaborative en marque blanche",
    network: "internet",
  },
  {
    title: "Contrats Territoires Internet et RIE",
    url: "https://contrats-territoires.interieur.gouv.fr/accounts/login",
    description: "Élaborer les Contrats Plan État-Région (CPER)",
    isOpenToPrivate: true,
    network: "RIE",
  },
  {
    title: "DataPass",
    url: "https://datapass.api.gouv.fr/",
    description: "Régulariser l'exploitation de données à caractères personnel",
    isOpenToPrivate: true,
    network: "internet",
  },
  {
    title: "Mentor",
    url: "https://mentor.gouv.fr/login/index.php",
    description: "Former les professionnels",
    network: "internet",
  },
  {
    title: "VigiEau",
    url: "https://admin.vigieau.beta.gouv.fr",
    description:
      "S'informer sur les restrictions d'eau en période de sécheresse",
    network: "internet",
  },
  {
    title: "RIGA",
    url: "https://riga.cisirh.gouv.fr",
    description: "Suivre la volumétrie associée aux mouvements sociaux",
    network: "internet",
  },
  {
    title: "Plus Fraîche Ma Ville",
    url: "https://plusfraichemaville.fr",
    description:
      "Accompagner les élus et agents pour rafraîchir durablement leur collectivité",
    network: "internet",
  },
  {
    title: "SPOTE",
    url: "https://spote.developpement-durable.gouv.fr/",
    description:
      "Répertorier les services de l'État partenaires de la démarches naOS",
    network: "internet",
  },
  {
    title:
      "Le service public des cartes et données du territoire | cartes.gouv.fr",
    url: "https://cartes.gouv.fr",
    description: "Consulter, créer et partager des cartes et des géodonnées",
    network: "internet",
  },
  {
    title: "Chorus DT",
    url: "https://chorus-dt.finances.ader.gouv.fr",
    description: "Gérer les déplacements professionnels",
    network: "RIE",
  },
  {
    title: "Uniforces",
    url: "https://www.uniforces.fr",
    network: "internet",
    description:
      "Gérer les uniformes et équipements des agents de la Gendarmerie et Police Nationales",
  },
  {
    title: "RDV Solidarités",
    url: "https://rdv-solidarites.fr",
    network: "internet",
    description: "-",
    category: "inclusion",
  },
  {
    title: "La Coop de la médiation numérique",
    url: "https://coop-numerique.anct.gouv.fr",
    network: "internet",
    description: "Accompagner les personnes éloignées du numérique",
    category: "inclusion",
    isOpenToPrivate: true,
  },
  {
    title: "RDV Aide Numérique",
    url: "https://www.rdv-aide-numerique.fr",
    network: "internet",
    description: "-",
    category: "inclusion",
  },
  {
    title: "Tableau de pilotage - Conseiller numérique",
    url: "https://pilotage.conseiller-numerique.gouv.fr",
    network: "internet",
    description:
      "Visualiser l'ensemble des informations concernant le dispositif Conseiller Numérique",
    category: "inclusion",
    isOpenToPrivate: true,
  },
  {
    title: "La communauté de l'inclusion",
    url: "https://communaute.inclusion.beta.gouv.fr",
    network: "internet",
    description:
      "Améliorer la pratique professionnelle des accompagnateurs de personnes éloignées de l'emploi",
    category: "inclusion",
    isOpenToPrivate: true,
  },
  {
    title: "Les Bases du numérique d'intérêt général",
    url: "https://lesbases.anct.gouv.fr",
    network: "internet",
    description:
      "Partager les ressources & communs numériques à l’échelle nationale",
    category: "inclusion",
    isOpenToPrivate: true,
  },
  {
    title: "Espace sur Demande",
    url: "https://espacesurdemande.anct.gouv.fr",
    network: "internet",
    description:
      "Faciliter la mise à disposition et la location des espaces publics",
    isOpenToPrivate: true,
  },
  {
    title: "rdv-insertion",
    url: "https://rdv-insertion.fr",
    network: "internet",
    description:
      "Accélérer les rendez-vous d'insertion et diminuer le taux d'absentéisme",
    category: "inclusion",
    isOpenToPrivate: true,
  },
  {
    title: "Planka",
    url: "https://projets.beta.numerique.gouv.fr",
    network: "internet",
    description:
      "Organiser et suivre vos projets grâce à un outil collaboratif de gestion de tâches.",
    category: "suiteNumerique",
  },
  {
    title: "Aides-territoires",
    url: "https://aides-territoires.beta.gouv.fr",
    network: "internet",
    description:
      "Faciliter la recherche d'aides des collectivités territoriales et de leurs partenaires locaux.",
    isOpenToPrivate: true,
  },
  {
    title: "Parcours Solidarités",
    url: "https://www.parcours-solidarites.fr",
    network: "internet",
    description: "-",
    category: "inclusion",
  },
  {
    title: "Immersion Facilitée",
    url: "https://immersion-facile.beta.gouv.fr",
    network: "internet",
    description: "Faciliter la réalisation des immersions professionnelles",
    category: "inclusion",
    isOpenToPrivate: true,
  },
  {
    title: "Visio",
    url: "https://visio.numerique.gouv.fr",
    network: "internet",
    description:
      "Communiquer en direct avec vos équipes ou partenaires grâce à des appels vidéo sécurisés.",
    category: "suiteNumerique",
  },
  {
    title: "Diagoriente",
    url: "https://immersion-facile.beta.gouv.fr",
    network: "internet",
    description: "Faciliter l'orientation et les transitions professionnelles",
    category: "inclusion",
    isOpenToPrivate: true,
  },
  {
    title: "Académie France Travail",
    url: "https://app.bealink.io/?company=academiefrancetravail",
    network: "internet",
    description: "-",
    category: "inclusion",
    isOpenToPrivate: true,
  },
  {
    title: "Grist",
    url: "https://grist.numerique.gouv.fr",
    network: "internet",
    description:
      "Structurer et analyser vos données dans des tableaux collaboratifs sur mesure.",
    category: "suiteNumerique",
  },
  {
    title: "Horizon",
    url: "https://www.bimbamjob.fr/horizon",
    network: "internet",
    description:
      "Piloter l’accompagnement socioprofessionnel : identifier, proposer et suivre des solutions concrètes (emplois, formations, services)",
    category: "inclusion",
    isOpenToPrivate: true,
  },
  {
    title: "uMap",
    url: "https://umap.incubateur.anct.gouv.fr",
    network: "internet",
    description: "Créer des cartes en ligne",
  },
  {
    title: "MonServiceSécurisé (service ANSSI)",
    url: "https://www.monservicesecurise.cyber.gouv.fr",
    network: "internet",
    description:
      "Piloter en équipe la sécurité de tous vos services numériques et les homologuer rapidement",
    isOpenToPrivate: true,
  },
  {
    title: "eva",
    url: "https://eva.beta.gouv.fr",
    network: "internet",
    description:
      "Favoriser l’insertion en identifiant les difficultés avec les compétences de base et en valorisant les compétences transversales acquises",
    isOpenToPrivate: true,
    category: "inclusion",
  },
  {
    title: "Demande de bulletin numéro 2 du Casier Judiciaire National",
    url: "https://www.cjnb2plus.justice.gouv.fr",
    network: "internet",
    description:
      "Réaliser votre démarche en ligne de demande de bulletin numéro 2",
    isOpenToPrivate: true,
  },
  {
    title: "Annuaire des collectivités",
    url: "https://collectivite.fr",
    network: "internet",
    description:
      "Permet aux communes de certifier et modifier les données présentes sur l'Annuaire des Collectivités",
  },
  {
    title: "Les emplois de l'inclusion",
    url: "https://emplois.inclusion.beta.gouv.fr",
    description:
      "Faciliter la mise en relation des personnes les plus éloignées de l’emploi avec des employeurs inclusifs.",
    network: "internet",
    isOpenToPrivate: true,
    category: "inclusion",
  },
  {
    title: "MET Emploi Lyon",
    url: "https://metemploi.grandlyon.com/auth/connexion",
    description:
      "Regrouper des informations utiles concernant l'insertion sur le territoire de la Métropole de Lyon",
    network: "internet",
    isOpenToPrivate: true,
    category: "inclusion",
  },
  {
    title: "Insertis",
    url: "https://insertis.grandlyon.com/login",
    description:
      "Gérer les dossiers des bénéficiaires du RSA de la Métropole de Lyon",
    network: "internet",
    category: "inclusion",
    isOpenToPrivate: true,
  },
  {
    title: "DORA",
    url: "https://dora.inclusion.beta.gouv.fr",
    description: "Aider à la prescription des accompagnateurs professionnels",
    network: "internet",
    isOpenToPrivate: true,
    category: "inclusion",
  },
  {
    title: "Mon Suivi Social",
    url: "https://monsuivisocial.incubateur.anct.gouv.fr",
    description:
      "Améliorer la prise en charge des bénéficiaires d'accompagnement social",
    network: "internet",
    category: "inclusion",
    isOpenToPrivate: true,
  },
];

const titlesToKeep = ["Webinaire", "Osmose", "Resana", "DataPass"];

const SHORT_LIST_SERVICES = SERVICES_LIST.filter((service) =>
  titlesToKeep.includes(service.title)
).map(({ title, url, description }) => ({ title, url, description }));

export { SERVICES_LIST, SHORT_LIST_SERVICES };
export type { categoryType };
