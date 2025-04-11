import { RadioButtons } from "@codegouvfr/react-dsfr/RadioButtons";
import Button from "@codegouvfr/react-dsfr/Button";
import { useState } from "react";
import { bosses, bossNames, bossNameType } from "./constants";
import profiling from "../../assets/illu_profiling.webp";
import { useNavigate } from "react-router-dom";

export function WhoIsYourEmployer() {
  const [selectedOption, setSelectedOption] = useState<
    bossNameType | undefined
  >(undefined);
  const navigate = useNavigate();
  return (
    <>
      <div className="container fr-mt-4w fr-mb-8w">
        <div className="fr-container fr-py-3w">
          <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle">
            <div className="fr-col-12 fr-col-md-6">
              <h1 className="fr-h2 blue-france">
                Quels sites sont faits pour vous ?
              </h1>
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
            <div className="fr-col-6 fr-hidden fr-unhidden-md centered-content">
              <img width="70%" src={profiling} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );

  function navigateToResult() {
    if (!selectedOption) {
      return;
    }

    navigate(`/recommandation/${selectedOption}`);
  }
}
