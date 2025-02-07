import Button from "@codegouvfr/react-dsfr/Button";
import ConnectionLost from "../assets/connectionLost.svg";

import { useNavigate } from "react-router-dom";
import { useTitle } from "../lib/useTitle";

function NotFound() {
  useTitle("Page non trouvée");

  let navigate = useNavigate();
  return (
    <div className="fr-container">
      <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle fr-py-5w">
        <div className="fr-col-6">
          <h1 className="fr-h3 fr-mb-5w">Page non trouvée</h1>
          <p className="fr-mb-5w">
            Nous n'arrivons pas à trouver la page que vous souhaitez afficher.
          </p>

          <Button onClick={() => navigate("/")}>Retour</Button>
        </div>
        <div className="fr-col-6 centered-content">
          <img src={ConnectionLost} alt="" />
        </div>
      </div>
    </div>
  );
}

export default NotFound;
