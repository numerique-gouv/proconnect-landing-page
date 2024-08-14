// import ButtonProCo from './assets/proConnect.svg';
import AgentConnect from "./assets/AgentConnect.svg";
import EnterEmail from "./assets/enterEmail.svg";
import Identity from "./assets/checkIdentity.svg";
import EnjoyServices from "./assets/enjoyServices.svg";

export const tilesData = [
  { illu: AgentConnect, content: "Cliquez sur le bouton Agentconnect." },
  { illu: EnterEmail, content: "Entrez votre adresse email professionnelle." },
  {
    illu: Identity,
    content:
      "Nous vérifions votre identité auprès d’une source officielle et votre éligibilité.",
  },
  {
    illu: EnjoyServices,
    content:
      "Accédez à tous les services partenaires en un clic tout au long de la journée !",
  },
];

export const stepsInfosPublic = [
  {
    question: "Êtes-vous éligible ?",
    response:
      "Oui ! Tous les membres de la Fonction Publique peuvent utiliser notre bouton de connexion AgentConnect.",
  },
  {
    question:
      "Que se passe-t-il si votre administration n’est pas partenaire ?",
    response: `Aucun problème, vous pouvez utiliser ProConnnect ! 
    Nous nous assurons nous-même que vous faites partie de la Fonction Publique en vérifiant votre email professionnel et le SIRET de votre organisation.`,
    link: "/partenaires",
    descriptionLink: "Découvrez la liste des partenaires",
  },
  {
    question: "À quels services en ligne pouvez-vous vous connecter ?",
    response:
      "Grâce au AgentConnect, accédez à tous les outils de la DINUM, à la Suite Numérique et à tous les services interministériels de nos partenaires.",
    link: "/services",
    descriptionLink: `Découvrez l'annuaire des services`,
  },
];

export const stepsInfosPrivate = [
  {
    question: "Êtes-vous éligible ?",
    response:
      "Toute les personnes qui font partie d’une organisation possédant un SIRET peuvent créer un compte sur ProConnect.",
  },
  {
    question: "A quels sites en ligne pouvez-vous accéder ?",
    response: `Grâce au bouton ProConnect, vous avez accès aux sites partenaires qui acceptent les utilisateurs du privé et à ceux pour lesquels vous avez reçus une invitation.`,
  },
  {
    question:
      "Pouvons-vous être certifié en tant que dirigeant.e d’une entreprise ?",
    response:
      "Pas encore ! ProConnect est également le nom de l’outil de certification des entreprises développé par l’INSEE.",
  },
];
