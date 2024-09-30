import { RadioButtons } from "@codegouvfr/react-dsfr/RadioButtons";
import Button from "@codegouvfr/react-dsfr/Button";
import { useState } from "react";
import { bosses, bossNames, bossNameType } from "./constants";
import eligibility from "../../assets/eligibility.svg";
import WantToIntegrateProConnect from "../../components/WantToIntegrateProConnect/WantToIntegrateProConnect";
import { useNavigate } from "react-router-dom";

export function WhoIsYourBoss() {
  const [selectedOption, setSelectedOption] = useState<
    bossNameType | undefined
  >(undefined);
  const navigate = useNavigate();
  return (
    <>
      <div className="container fr-mt-8w">
        <div className="fr-container fr-py-3w">
          <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle">
            <div className="fr-col-6 fr-hidden fr-unhidden-md centered-content">
              <img src={eligibility} alt="" />
            </div>
            <div className="fr-col-12 fr-col-md-6">
              <h1 className="fr-h2">Testez votre éligibilité&nbsp;!</h1>
              <RadioButtons
                legend="Qui est votre employeur ?"
                name="radio"
                options={bossNames.map((name) => {
                  const { label } = bosses[name];
                  return {
                    label,
                    nativeInputProps: {
                      checked: selectedOption === name,
                      onChange: () => setSelectedOption(name),
                    },
                  };
                })}
                state="default"
              />

              <Button disabled={!selectedOption} onClick={navigateToResult}>
                Valider
              </Button>
            </div>
          </div>
        </div>
      </div>
      <WantToIntegrateProConnect />
    </>
  );

  function navigateToResult() {
    if (!selectedOption) {
      return;
    }

    navigate(`/eligibilite/${bosses[selectedOption].category}`);
  }
}
