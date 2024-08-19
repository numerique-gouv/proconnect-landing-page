import eligibility from '../../assets/eligibility.svg';
import { RadioButtons } from '@codegouvfr/react-dsfr/RadioButtons';
import Button from '@codegouvfr/react-dsfr/Button';
import coding from '../../assets/coding.svg';
import { useState } from 'react';
import { bosses, bossNames, bossNameType } from './constants';

export function WhoIsYourBoss() {
    const [selectedOption, setSelectedOption] = useState<bossNameType | undefined>(undefined);
    return (
        <>
            <div className="container fr-mt-8w">
                <div className="fr-container fr-py-3w">
                    <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle">
                        <div className="fr-col-6 fr-hidden fr-unhidden-md centered-content">
                            <img src={eligibility} alt="" />
                        </div>
                        <div className="fr-col-12 fr-col-md-6">
                            <h1 className="fr-h2">Testez votre éligibilité !</h1>
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
                            <a
                                href={
                                    selectedOption && bosses[selectedOption].isEligible
                                        ? '/eligibilite/eligible'
                                        : '/eligibilite/non-eligible'
                                }
                            >
                                <Button>Valider</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fr-container fr-col-12 fr-col-md-8 fr-py-6w fr-py-md-2w fr-mt-4w fr-mb-8w card-radius">
                <div className="fr-container centered-content">
                    <div className="fr-grid-row fr-grid-row--center fr-grid-row--middle">
                        <div className="fr-col-1 fr-hidden fr-unhidden-md ">
                            <img src={coding} alt="" />
                        </div>
                        <div className="fr-ml-3w">
                            <p className="centered-content delete-margin-bottom bold">
                                Vous voulez intégrer AgentConnect sur votre site ?
                            </p>
                        </div>
                    </div>
                </div>
                <div className="fr-container centered-text fr-my-2w">
                    <a
                        className="fr-raw-link"
                        href="mailto:support.partenaires@agentconnect.gouv.fr"
                    >
                        <Button className="fr-mr-2w fr-mb-2w" iconId="fr-icon-mail-line">
                            Nous écrire
                        </Button>
                    </a>
                    <a
                        className="fr-raw-link"
                        href="https://github.com/numerique-gouv/agentconnect-documentation/blob/main/README.md#-agentconnect---documentation"
                    >
                        <Button priority="secondary" iconId="fr-icon-code-s-slash-line">
                            Commencer vos tests
                        </Button>
                    </a>
                </div>
            </div>
        </>
    );
}
