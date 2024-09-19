import HowTo from "./assets/howTo.svg";
import EnterEmail from "./assets/enterEmail.svg";
import Identity from "./assets/checkIdentity.svg";
import EnjoyServices from "./assets/enjoyServices.svg";

export type tyleDataType = { illu: string; content: string };

export const tilesData: tyleDataType[] = [
  { illu: HowTo, content: "Cliquez sur le bouton Proconnect." },
  {
    illu: EnterEmail,
    content: "Entrez votre adresse email professionnelle.",
  },
  {
    illu: Identity,
    content: "Nous vérifions votre identité et votre éligibilité.",
  },
  {
    illu: EnjoyServices,
    content:
      "Accédez à tous les services partenaires en un clic tout au long de la journée !",
  },
];
