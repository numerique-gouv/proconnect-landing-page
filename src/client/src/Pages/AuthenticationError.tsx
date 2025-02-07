import { useEffect } from "react";
import ConnectionLost from "../assets/connectionLost.svg";
import { deleteUserInfo } from "../lib/authentication";
import { useTitle } from "../lib/useTitle";

function AuthenticationError() {
  useTitle("Erreur d'authentification");

  useEffect(() => {
    deleteUserInfo();
  }, []);
  return (
    <div className="fr-container">
      <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle fr-py-5w">
        <div className="fr-col-6">
          <h1 className="fr-h3 fr-mb-5w">Erreur d'authentification</h1>
          <p className="fr-mb-5w">
            Une erreur est survenue lors de la connexion. Veuillez réessayer.
          </p>
        </div>
        <div className="fr-col-6 centered-content">
          <img src={ConnectionLost} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AuthenticationError;
