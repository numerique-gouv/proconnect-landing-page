import { ToggleSwitch } from "@codegouvfr/react-dsfr/ToggleSwitch";
import Card from "../../components/Card/Card";
import "./services.css";
import { useState } from "react";
import { SERVICES_LIST } from "./constants";

function Services() {
  const [availableToRIE, setAvailableToRIE] = useState<boolean | null>(false);

  const servicesOnInternet = SERVICES_LIST.filter(
    ({ network }) => network === "internet"
  );

  const servicesOnRIE = SERVICES_LIST.filter(
    ({ network }) => network === "RIE"
  );

  return (
    <div className="fr-container">
      <h1 className="fr-h3 fr-mt-2w">Annuaire des services</h1>
      <p className="fr-h6">Connectez-vous à tous ces sites avec ProConnect !</p>

      <ToggleSwitch
        inputTitle="the-title"
        label="Afficher les services disponibles sur le RIE"
        labelPosition="right"
        onChange={toggleServicesForRIE}
      />

      {availableToRIE ? (
        <div className="fr-grid-row fr-grid-row--gutters fr-mb-5w">
          {servicesOnRIE.map((offre, index) => (
            <Card offre={offre} key={index}></Card>
          ))}
        </div>
      ) : (
        <div className="fr-grid-row fr-grid-row--gutters fr-mb-5w">
          {servicesOnInternet.map((offre, index) => (
            <Card offre={offre} key={index}></Card>
          ))}
        </div>
      )}
    </div>
  );

  function toggleServicesForRIE() {
    return setAvailableToRIE((prevState) => !prevState);
  }
}

export default Services;
