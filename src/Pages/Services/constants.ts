type networkType = "internet" | "RIE";

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
    title: "Resana",
    url: "https://resana.numerique.gouv.fr/public/",
    description: "Outil de travail collaboratif",
    isOpenToPrivate: true,
    network: "internet",
  },
  {
    title: "Pad",
    url: "https://pad.numerique.gouv.fr/",
    description: "Editer des documents et des textes de manière collaborative",
    network: "internet",
  },
  {
    title: "Audioconf",
    url: "https://audioconf.numerique.gouv.fr/",
    description: "Organiser des conférences audio",
    network: "internet",
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
    description: "Organiser des conférences à distance",
    network: "internet",
  },
  {
    title: "Osmose",
    url: "https://osmose.numerique.gouv.fr/plugins/DINUMThemePlugin/jsp/front/privateLoginOsmose.jsp?redirect=https%3A%2F%2Fosmose.numerique.gouv.fr%2Fjcms%2F",
    description: "Travailler avec des outils collaboratifs",
    network: "internet",
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
    description: "Organiser des conférences à distance",
    network: "internet",
  },
  {
    title: "Rizomo",
    url: "https://rizomo.numerique.gouv.fr/",
    description:
      "Accéder au portail des applications collaboratives interministérielles",
    network: "internet",
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
      "Répertorier les services du CEREMA (centre d’études et d’expertise sur les risques, l’environnement, la mobilité et l’aménagement)",
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
];

export { SERVICES_LIST };
