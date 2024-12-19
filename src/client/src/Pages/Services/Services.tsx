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
              onClick: onClickAllServices,
            }}
          >
            Tous les services
          </Tag>
        </div>
        <div className="tag-container">
          <Tag
            pressed={selectedTag === "suiteNumerique"}
            nativeButtonProps={{
              onClick: onClickSuiteNumeriqueServices,
            }}
          >
            Suite numérique
          </Tag>
        </div>
        <div className="tag-container">
          <Tag
            pressed={selectedTag === "suiteTerritoriale"}
            nativeButtonProps={{
              onClick: onClickSuiteTerritorialeServices,
            }}
          >
            Suite territoriale
          </Tag>
        </div>
        <div className="tag-container">
          <Tag
            pressed={selectedTag === "inclusion"}
            nativeButtonProps={{
              onClick: onClickInclusionServices,
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

  function onClickAllServices() {
    setSelectedTag("all");
  }

  function onClickInclusionServices() {
    if (selectedTag === "inclusion") {
      setSelectedTag("all");
    } else {
      setSelectedTag("inclusion");
    }
  }

  function onClickSuiteNumeriqueServices() {
    if (selectedTag === "suiteNumerique") {
      setSelectedTag("all");
    } else {
      setSelectedTag("suiteNumerique");
    }
  }

  function onClickSuiteTerritorialeServices() {
    if (selectedTag === "suiteTerritoriale") {
      setSelectedTag("all");
    } else {
      setSelectedTag("suiteTerritoriale");
    }
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
        return sortedServicesList.filter((service) =>
          service.categories?.includes("suiteNumerique")
        );
      case "suiteTerritoriale":
        return sortedServicesList.filter((service) =>
          service.categories?.includes("suiteTerritoriale")
        );
      case "inclusion":
        return sortedServicesList.filter((service) =>
          service.categories?.includes("inclusion")
        );
    }
  }
}

export default Services;
