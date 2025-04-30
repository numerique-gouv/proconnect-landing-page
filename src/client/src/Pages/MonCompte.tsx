import { Badge } from "@codegouvfr/react-dsfr/Badge";
import yourProfil from "../assets/your-profil.svg";
import Card from "../components/Card/Card";
import { SHORT_LIST_SERVICES } from "./Services/constants";
import { getUserInfo } from "../lib/authentication";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useTitle } from "../lib/useTitle";

function MonCompte() {
  const userInfo = getUserInfo();
  const navigate = useNavigate();
  useTitle("Mon compte");

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
  }, []);
  if (!userInfo) {
    return <div></div>;
  }
  const { isIdentityProviderPCI, lastName, email, firstName } = userInfo;

  return (
    <div>
      <div className="fr-container--fluid pc-background-alt-blue-france">
        <div className="fr-container fr-my-7w">
          <h1 className="fr-mb-4w">Bienvenue sur ProConnect !</h1>
          <div className="pc-background-white fr-p-3w fr-mb-7w fr-col-12 fr-col-md-8 fr-col-lg-6">
            <div className="fr-mb-4w fr-grid-row fr-grid-row--middle">
              <div className="fr-col-1 fr-mr-4w">
                <img src={yourProfil} alt="" />
              </div>
              <h2 className="fr-mb-0 fr-h3 blue-france">Votre profil</h2>
            </div>
            <div className="fr-grid-row fr-grid-row--middle">
              <Badge
                noIcon
                severity="info"
                className="fr-mr-0 fr-mb-1v fr-col-4 centered-content fr-mr-md-2w fr-mb-md-2w fr-col-sm-3"
              >
                Prénom
              </Badge>
              <p className="fr-mb-2w fr-col-12 fr-col-md-7 bold">{firstName}</p>
              <Badge
                noIcon
                severity="info"
                className="fr-mr-0 fr-mb-1v fr-col-4 centered-content fr-mr-md-2w fr-mb-md-2w fr-col-sm-3"
              >
                Nom
              </Badge>
              <p className="fr-mb-2w fr-col-12 fr-col-md-7 bold">{lastName}</p>
              <Badge
                noIcon
                severity="info"
                className="fr-mr-0 fr-mb-1v fr-col-4 centered-content fr-mr-md-2w fr-mb-md-2w fr-col-sm-3"
              >
                Email
              </Badge>
              <p className="fr-mb-2w fr-col-12 fr-col-md-7 bold">{email}</p>
            </div>
            {isIdentityProviderPCI && (
              <a
                className="fr-btn fr-btn--secondary fr-icon-settings-5-line fr-btn--icon-left fr-mt-2w"
                href="https://identite.proconnect.gouv.fr/personal-information"
              >
                Gérer le profil
              </a>
            )}
          </div>
          <div>
            <h2 className="fr-h3">
              Découvrez encore plus de sites et de services
            </h2>
            <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center fr-mb-2w">
              {SHORT_LIST_SERVICES.map((offre, index) => (
                <Card
                  offre={offre}
                  customizedMdCol={"fr-col-lg-3 fr-col-md-6"}
                  key={index}
                ></Card>
              ))}
            </div>
            <p className="centered-text">
              <a className="fr-btn" href="/services">
                Voir tous les services
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MonCompte;
