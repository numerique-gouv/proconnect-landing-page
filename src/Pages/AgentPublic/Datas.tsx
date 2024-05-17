import ButtonProCo from "../../assets/proConnect.svg"
import EnterEmail from '../../assets/enterEmail.svg'
import Identity from '../../assets/checkIdentity.svg'
import EnjoyServices from "../../assets/enjoyServices.svg"

export const tilesData = [
    { illu: ButtonProCo, content: "Cliquez sur le bouton ProConnect" },
    { illu: EnterEmail, content: "Entrez votre adresse email professionnelle." },
    { illu: Identity, content: "Nous vérifions votre identité auprès d’une source officielle et votre éligibilité." },
    { illu: EnjoyServices, content: "Accédez à tous les services partenaires en un clic tout au long de la journée !" }
]

export const stepsInfos = [
    { question: "Êtes-vous éligible ?", response: "Oui ! Tous les membres de la Fonction Publique peuvent utiliser nos boutons de connexion ProConnect et AgentConnect." },
    { question: "Que se passe-t-il si votre administration n’est pas partenaire ?", response: `Aucun problème, vous pouvez utiliser ProConnnect ! 
    Nous nous assurons nous-même que vous faites partie de la Fonction Publique en vérifiant votre email professionnel et le SIRET de votre organisation.` },
    { question: "À quels services en ligne pouvez-vous vous connecter ?", response: "Grâce aux boutons ProConnect et AgentConnect, accédez à tous les outils de la DINUM, à la Suite Numérique et à tous les services interministériels de nos partenaires." },
    { question: "Quelle est la différence entre AgentConnect et ProConnect ?", response: `Il n’y a aucune différence ! AgentConnect est l’ancien nom de ProConnect. Ces deux boutons fonctionnent exactement pareil pour vous.` }
]
