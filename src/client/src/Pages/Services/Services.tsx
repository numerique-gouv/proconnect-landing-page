import Card from "../../components/Card/Card";
import { Tag } from "@codegouvfr/react-dsfr/Tag";
import "./services.css";
import { useState } from "react";
import { categoryType, SERVICES_LIST } from "./constants";

function Services() {
  const [selectedTag, setSelectedTag] = useState<categoryType | "all">("all");

  const services = computeFilteredServiceList();

  return (
    <div className="fr-container">
      <h1 className="fr-h3 fr-mt-2w">Annuaire des services</h1>
      <p className="fr-h6">
        ProConnect vous donne accès à de nombreux outils et sites Internet de
        l'administration.
      </p>
      <div className="tags-container">
        <div className="tag-container">
          <Tag
            pressed={selectedTag === "all"}
            nativeButtonProps={{
              onClick: selectAllServices,
            }}
          >
            Tous les services
          </Tag>
        </div>
        <div className="tag-container">
          <Tag
            pressed={selectedTag === "suiteNumerique"}
            nativeButtonProps={{
              onClick: selectSuiteNumeriqueServices,
            }}
          >
            Suite numérique
          </Tag>
        </div>
        <div className="tag-container">
          <Tag
            pressed={selectedTag === "suiteTerritoriale"}
            nativeButtonProps={{
              onClick: selectSuiteTerritorialeServices,
            }}
          >
            Suite territoriale
          </Tag>
        </div>
        <div className="tag-container">
          <Tag
            pressed={selectedTag === "inclusion"}
            nativeButtonProps={{
              onClick: selectInclusionServices,
            }}
          >
            Sphère inclusion
          </Tag>
        </div>
      </div>

      <div className="fr-grid-row fr-grid-row--gutters fr-mb-5w">
        {services.map((offre, index) => (
          <Card
            customizedMdCol={"fr-col-md-4"}
            offre={offre}
            key={index}
          ></Card>
        ))}
      </div>
    </div>
  );

  function selectAllServices() {
    setSelectedTag("all");
  }

  function selectInclusionServices() {
    setSelectedTag("inclusion");
  }

  function selectSuiteNumeriqueServices() {
    setSelectedTag("suiteNumerique");
  }

  function selectSuiteTerritorialeServices() {
    setSelectedTag("suiteTerritoriale");
  }

  function computeFilteredServiceList() {
    const sortedServicesList = [...SERVICES_LIST];
    sortedServicesList.sort((serviceA, serviceB) =>
      serviceA.title.localeCompare(serviceB.title)
    );
    switch (selectedTag) {
      case "all":
        return sortedServicesList;
      case "suiteNumerique":
        return sortedServicesList.filter(
          (service) => service.categories?.includes("suiteNumerique")
        );
        case "suiteTerritoriale":
          return sortedServicesList.filter(
            (service) => service.categories?.includes("suiteTerritoriale")
          );
      case "inclusion":
        return sortedServicesList.filter(
          (service) => service.categories?.includes("inclusion")
        );
    }
  }
}

export default Services;
