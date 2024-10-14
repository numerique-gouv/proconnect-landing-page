import { Badge } from "@codegouvfr/react-dsfr/Badge";
import yourProfil from "../assets/your-profil.svg";
import Button from "@codegouvfr/react-dsfr/Button";
import Card from "../components/Card/Card";
import { SHORT_LIST_SERVICES } from "./Services/constants";

function Connexion() {
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
              <p className="fr-mb-2w fr-col-12 fr-col-md-7 bold">Jacintha</p>
              <Badge
                noIcon
                severity="info"
                className="fr-mr-0 fr-mb-1v fr-col-4 centered-content fr-mr-md-2w fr-mb-md-2w fr-col-sm-3"
              >
                Nom
              </Badge>
              <p className="fr-mb-2w fr-col-12 fr-col-md-7 bold">Froment</p>
              <Badge
                noIcon
                severity="info"
                className="fr-mr-0 fr-mb-1v fr-col-4 centered-content fr-mr-md-2w fr-mb-md-2w fr-col-sm-3"
              >
                Email
              </Badge>
              <p className="fr-mb-2w fr-col-12 fr-col-md-7 bold">
                jacintha.froment@beta.gouv.fr
              </p>
            </div>
            <Button
              iconId="fr-icon-settings-5-line"
              priority="secondary"
              className="fr-mt-2w"
            >
              Gérer le profil
            </Button>
          </div>
          <div>
            <h2 className="fr-h3">
              Découvrez encore plus de sites et de services
            </h2>
            <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
              {SHORT_LIST_SERVICES.map((offre, index) => (
                <Card
                  offre={offre}
                  customizedMdCol={"fr-col-lg-3 fr-col-md-6"}
                  key={index}
                ></Card>
              ))}
              <a href="/services">
                <Button className="centered-content fr-mt-4w">
                  Voir tous les services
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Connexion;
