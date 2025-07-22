import "./recommandation.css";

import { useTitle } from "../../lib/useTitle";
import { Navigate, useParams } from "react-router-dom";
import { GROUPS_LIST, SERVICES_LIST } from "../Services/constants";
import {
  bosses,
  bossNames,
  bossNameType,
  recommandationMapping,
} from "./constants";
import Card from "../../components/Card/Card";

type offerType = {
  title: string;
  url: string;
  description: string;
};

function SiteRecommandation() {
  useTitle("Recommandation de site");

  const params = useParams();
  const employer = params["employer"] as bossNameType | undefined;
  if (!employer || !bossNames.includes(employer)) {
    return <Navigate to="/not-found" />;
  }
  const offers = computeOffers(employer);

  return (
    <div className="fr-container fr-pt-4w">
      <h1 className="fr-h2 blue-france">C'est parfait pour vous !</h1>
      <h2 className="fr-h6 blue-france">
        Recommandation des services pour {bosses[employer].label}
      </h2>
      <div className="fr-grid-row fr-grid-row--gutters fr-mb-2w">
        {offers.map((offer) => (
          <Card
            customizedMdCol={"fr-col-md-4"}
            key={offer.title}
            offre={{
              url: offer.url,
              description: offer.description,
              title: offer.title,
            }}
          ></Card>
        ))}
      </div>
      <p className="centered-text">
        <a className="fr-btn" href="/services">
          Voir tous les sites partenaires
        </a>
      </p>
    </div>
  );

  function computeOffers(employer: bossNameType): offerType[] {
    const offers: offerType[] = [];
    for (const { kind, title } of recommandationMapping[employer]) {
      switch (kind) {
        case "group":
          const group = GROUPS_LIST.find((GROUP) => GROUP.title === title);
          if (!group) {
            break;
          }
          offers.push(group);
          break;
        case "service":
          const service = SERVICES_LIST.find(
            (SERVICE) => SERVICE.title === title
          );
          if (!service) {
            break;
          }
          offers.push({
            description: service.description,
            title: service.title,
            url: service.url,
          });
          break;
      }
    }
    return offers;
  }
}
export default SiteRecommandation;
