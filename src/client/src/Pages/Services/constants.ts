type networkType = "internet" | "RIE";

type categoryType = "inclusion" | "suiteNumerique" | "suiteTerritoriale";

type serviceType = {
  title: string;
  url: string;
  description: string;
  categories?: categoryType[];
  isOpenToPrivate?: boolean;
  network: networkType;
};

export type { serviceType };

const SERVICES_LIST: Array<serviceType> = [
  {
    title: "Resana",
    url: "https://resana.numerique.gouv.fr/public/",
    description:
      "Collaborer en temps réel sur vos documents, présentations et tableurs, tout en facilitant les échanges au sein de vos équipes",
    isOpenToPrivate: true,
    network: "internet",
    categories: ["suiteNumerique"],
  },
  {
    title: "data.gouv.fr",
    url: "https://www.data.gouv.fr/",
    description: "Partager, améliorer et réutiliser les données publiques",
    network: "internet",
  },
  {
    title: "Pad",
    url: "https://pad.numerique.gouv.fr/",
    description: "Éditer des documents et des textes de manière collaborative",
    network: "internet",
  },
  {
    title: "Audioconf",
    url: "https://audioconf.numerique.gouv.fr/",
    description: "Organiser des conférences audio",
    network: "internet",
    categories: ["suiteNumerique"],
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
      "Collaborer en temps réel avec vos équipes via des réunions à distance",
    network: "internet",
    categories: ["suiteNumerique"],
  },
  {
    title: "Osmose",
    url: "https://osmose.numerique.gouv.fr/plugins/DINUMThemePlugin/jsp/front/privateLoginOsmose.jsp?redirect=https%3A%2F%2Fosmose.numerique.gouv.fr%2Fjcms%2F",
    description: "Travailler avec des outils collaboratifs",
    network: "internet",
    categories: ["suiteNumerique"],
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
    categories: ["suiteTerritoriale"],
    network: "internet",
  },
  {
    title: "Webinaire",
    url: "https://webinaire.numerique.gouv.fr/welcome",
    description:
      "Animer des présentations interactives avec un public à distance",
    network: "internet",
    categories: ["suiteNumerique"],
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
    categories: ["suiteNumerique", "suiteTerritoriale"],
  },
  {
    title: "RDV Service Public",
    url: "https://rdv.anct.gouv.fr",
    description:
      "Faciliter la prise des rendez-vous entre le service public et les usagers",
    categories: ["suiteTerritoriale"],
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
    description:
      "Profiter facilement d’habilitations conformes entre administrations et accéder à des données et services en accès restreint",
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
    description: "Prendre rendez-vous en ligne avec votre département",
    categories: ["inclusion"],
  },
  {
    title: "La Coop de la médiation numérique",
    url: "https://coop-numerique.anct.gouv.fr",
    network: "internet",
    description: "Accompagner les personnes éloignées du numérique",
    categories: ["inclusion"],
    isOpenToPrivate: true,
  },
  {
    title: "RDV Aide Numérique",
    url: "https://www.rdv-aide-numerique.fr",
    network: "internet",
    description: "Prendre rendez-vous avec un ou une médiatrice numérique",
    categories: ["inclusion"],
  },
  {
    title: "Tableau de pilotage - Conseiller numérique",
    url: "https://pilotage.conseiller-numerique.gouv.fr",
    network: "internet",
    description:
      "Visualiser l'ensemble des informations concernant le dispositif Conseiller Numérique",
    categories: ["inclusion"],
    isOpenToPrivate: true,
  },
  {
    title: "La communauté de l'inclusion",
    url: "https://communaute.inclusion.beta.gouv.fr",
    network: "internet",
    description:
      "Améliorer la pratique professionnelle des accompagnateurs de personnes éloignées de l'emploi",
    categories: ["inclusion"],
    isOpenToPrivate: true,
  },
  {
    title: "Les Bases du numérique d'intérêt général",
    url: "https://lesbases.anct.gouv.fr",
    network: "internet",
    description:
      "Partager les ressources & communs numériques à l’échelle nationale",
    categories: ["inclusion"],
    isOpenToPrivate: true,
  },
  {
    title: "Espace sur Demande",
    url: "https://espacesurdemande.anct.gouv.fr",
    network: "internet",
    description:
      "Faciliter la mise à disposition et la location des espaces publics",
    categories: ["suiteTerritoriale"],
    isOpenToPrivate: true,
  },
  {
    title: "rdv-insertion",
    url: "https://rdv-insertion.fr",
    network: "internet",
    description:
      "Accélérer les rendez-vous d'insertion et diminuer le taux d'absentéisme",
    categories: ["inclusion"],
    isOpenToPrivate: true,
  },
  {
    title: "Planka",
    url: "https://projets.beta.numerique.gouv.fr",
    network: "internet",
    description:
      "Organiser et suivre vos projets grâce à un outil collaboratif de gestion de tâches",
    categories: ["suiteNumerique"],
  },
  {
    title: "Aides-territoires",
    url: "https://aides-territoires.beta.gouv.fr",
    network: "internet",
    description:
      "Faciliter la recherche d'aides des collectivités territoriales et de leurs partenaires locaux",
    categories: ["suiteTerritoriale"],
    isOpenToPrivate: true,
  },
  {
    title: "Parcours Solidarités",
    url: "https://www.parcours-solidarites.fr",
    network: "internet",
    description:
      "Assister les travailleurs sociaux dans leurs missions d’accompagnement de l’usager",
    categories: ["inclusion"],
  },
  {
    title: "Immersion Facilitée",
    url: "https://immersion-facile.beta.gouv.fr",
    network: "internet",
    description: "Faciliter la réalisation des immersions professionnelles",
    categories: ["inclusion"],
    isOpenToPrivate: true,
  },
  {
    title: "Visio",
    url: "https://visio.numerique.gouv.fr",
    network: "internet",
    description:
      "Communiquer en direct avec vos équipes ou partenaires grâce à des appels vidéo sécurisés",
    categories: ["suiteNumerique", "suiteTerritoriale"],
  },
  {
    title: "Diagoriente",
    url: "https://immersion-facile.beta.gouv.fr",
    network: "internet",
    description: "Faciliter l'orientation et les transitions professionnelles",
    categories: ["inclusion"],
    isOpenToPrivate: true,
  },
  {
    title: "Académie France Travail",
    url: "https://academiefrancetravail.org",
    network: "internet",
    description:
      "Développer ses compétences dans le cadre du Réseau pour l'Emploi",
    categories: ["inclusion"],
    isOpenToPrivate: true,
  },
  {
    title: "Grist",
    url: "https://grist.numerique.gouv.fr",
    network: "internet",
    description:
      "Structurer et analyser vos données dans des tableaux collaboratifs sur mesure",
    categories: ["suiteNumerique"],
  },
  {
    title: "Grist (ANCT)",
    url: "https://grist.incubateur.anct.gouv.fr/",
    network: "internet",
    description:
      "Structurer et analyser vos données dans des tableaux collaboratifs sur mesure",
    categories: ["suiteTerritoriale"],
  },
  {
    title: "Horizon",
    url: "https://www.bimbamjob.fr/horizon",
    network: "internet",
    description:
      "Piloter l’accompagnement socioprofessionnel : identifier, proposer et suivre des solutions concrètes (emplois, formations, services)",
    categories: ["inclusion"],
    isOpenToPrivate: true,
  },
  {
    title: "uMap",
    url: "https://umap.incubateur.anct.gouv.fr",
    network: "internet",
    description: "Créer des cartes en ligne",
  },
  {
    title: "MonServiceSécurisé (ANSSI)",
    url: "https://www.monservicesecurise.cyber.gouv.fr",
    network: "internet",
    description:
      "Piloter en équipe la sécurité de tous vos services numériques et les homologuer rapidement",
    categories: ["suiteTerritoriale"],
    isOpenToPrivate: true,
  },
  {
    title: "eva",
    url: "https://eva.beta.gouv.fr",
    network: "internet",
    description:
      "Favoriser l’insertion en identifiant les difficultés avec les compétences de base et en valorisant les compétences transversales acquises",
    isOpenToPrivate: true,
    categories: ["inclusion"],
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
    categories: ["suiteTerritoriale"],
    description:
      "Certifier et modifier les données présentes sur l'Annuaire des Collectivités",
  },
  {
    title: "Les emplois de l'inclusion",
    url: "https://emplois.inclusion.beta.gouv.fr",
    description:
      "Faciliter la mise en relation des personnes les plus éloignées de l’emploi avec des employeurs inclusifs",
    network: "internet",
    isOpenToPrivate: true,
    categories: ["inclusion"],
  },
  {
    title: "MET Emploi Lyon",
    url: "https://metemploi.grandlyon.com/auth/connexion",
    description:
      "Regrouper des informations utiles concernant l'insertion sur le territoire de la Métropole de Lyon",
    network: "internet",
    isOpenToPrivate: true,
    categories: ["inclusion"],
  },
  {
    title: "Insertis",
    url: "https://insertis.grandlyon.com/login",
    description:
      "Gérer les dossiers des bénéficiaires du RSA de la Métropole de Lyon",
    network: "internet",
    categories: ["inclusion"],
    isOpenToPrivate: true,
  },
  {
    title: "DORA",
    url: "https://dora.inclusion.beta.gouv.fr",
    description: "Aider à la prescription des accompagnateurs professionnels",
    network: "internet",
    isOpenToPrivate: true,
    categories: ["inclusion"],
  },
  {
    title: "Mon Suivi Social",
    url: "https://monsuivisocial.incubateur.anct.gouv.fr",
    description:
      "Améliorer la prise en charge des bénéficiaires d'accompagnement social",
    network: "internet",
    categories: ["inclusion", "suiteTerritoriale"],
    isOpenToPrivate: true,
  },
  {
    title: "Egapro",
    url: "https://egapro.travail.gouv.fr/",
    description:
      "Calculer et publier l'index égalité professionnelle pour promouvoir la parité",
    network: "internet",
    isOpenToPrivate: false,
  },
  {
    title: "Docs",
    url: "https://docs.numerique.gouv.fr",
    description: "Éditer des documents et des textes de manière collaborative",
    network: "internet",
    categories: ["suiteNumerique"],
    isOpenToPrivate: false,
  },
  {
    title: "Agents en intervention",
    url: "https://agentsenintervention.anct.gouv.fr",
    description:
      "Faciliter la gestion et le suivi des interventions techniques dans les collectivités",
    network: "internet",
    categories: ["suiteTerritoriale"],
    isOpenToPrivate: false,
  },
  {
    title: "Mon espace collectivité",
    url: "https://monespacecollectivite.incubateur.anct.gouv.fr/",
    description:
      "Réunir en un seul endroit collectivités et État Local pour accélérer les projets et leur impact sur le territoire",
    network: "internet",
    categories: ["suiteTerritoriale"],
    isOpenToPrivate: false,
  },
  {
    title: "Déclic eLearning",
    url: "https://apprendre.asso-declic.fr/",
    description:
      "Accéder à la plateforme de eLearning dédiée aux OPSNs et collectivités adhérentes du réseau Déclic",
    network: "internet",
    categories: ["suiteTerritoriale"],
    isOpenToPrivate: false,
  },
  {
    title: "Portail-Immo",
    url: "https://www.portail-immo.gouv.fr",
    description:
      "Centraliser l'information, la documentation et l'accès aux applications de la politique immobilière de l'État en un point d'entrée unique.",
    network: "internet",
  },
  {
    title: "MesServicesCyber",
    url: "https://messervices.cyber.gouv.fr/",
    description:
      "Accéder aux services et ressources cyber proposés par l’ANSSI et ses partenaires.",
    network: "internet",
  },
  {
    title: "Mon Indemnisation Justice",
    url: "https://mon-indemnisation.anje-justice.fr/",
    description:
      "Réduire la durée de traitement des demandes d’indemnisation des usagers victimes des opérations de justice.",
    network: "internet",
    isOpenToPrivate: false,
  },
  {
    title: "TrackDéchets - Fiche Établissement",
    url: "https://fiche-etablissement.trackdechets.beta.gouv.fr/",
    description:
      "Mettre à disposition de l'administration des données sur la traçabilité des déchets.",
    network: "internet",
    isOpenToPrivate: false,
  },
  {
    title: "MonAideCyber",
    url: "https://monaidecyber.ssi.gouv.fr/",
    description:
      "Accompagner les entités publiques ou privées à améliorer leur niveau de cybersécurité au moyen d’un diagnostic.",
    network: "internet",
  },
  {
    title: "Maestro",
    url: "https://maestro.beta.gouv.fr/",
    description:
      "Faciliter et encadrer l'échange d'informations en temps réel entre les acteurs du dispositif de contrôle officiel de la DGAL.",
    network: "internet",
  },
  {
    title: "BeforeCare",
    url: "https://beforecare.lescrous.fr/home/",
    description:
      "Permettre aux établissements en zone blanche d’inscrire leurs étudiants éligibles à l'aide carte restauration universitaire.",
    network: "internet",
  },
  {
    title: "Mon Portail Pro",
    url: "https://monportailpro.francetravail.fr/",
    description:
      "Accéder à la marketplace des acteurs du réseau pour l'emploi.",
    network: "internet",
    categories: ["inclusion"],
  },
  {
    title: "Tchap",
    url: "https://tchap.gouv.fr/",
    description:
      "Communiquer facilement en toute sécurité entre agents de la fonction publique",
    network: "internet",
    categories: ["suiteNumerique"],
  },
];

const titlesToKeep = [
  "Egapro",
  "Les emplois de l'inclusion",
  "Immersion Facilitée",
  "DataPass",
];

const SHORT_LIST_SERVICES = SERVICES_LIST.filter((service) =>
  titlesToKeep.includes(service.title)
).map(({ title, url, description }) => ({ title, url, description }));

export { SERVICES_LIST, SHORT_LIST_SERVICES };
export type { categoryType };
