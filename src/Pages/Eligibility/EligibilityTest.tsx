import './eligibility.css';
import eligibility from '../../assets/eligibility.svg';
import { RadioButtons } from '@codegouvfr/react-dsfr/RadioButtons';
import Button from '@codegouvfr/react-dsfr/Button';
import coding from '../../assets/coding.svg';
import { useState } from 'react';
import React from 'react';
import Lottie from 'react-lottie';
import notEligible from '../../assets/notEligible.svg';
import eligibleAnimation from '../../assets/Success.json';

function EligibilityTest({ closeTestEligibility }: any) {
    const [selectedOption, setSelectedOption] = useState<
        | 'asso_entreprise_prive'
        | 'autre_structure_public'
        | 'operateur_etat'
        | 'fonction_publique_hospitaliere'
        | 'fonction_publique_territoriale'
        | 'fonction_publique_etat'
        | undefined
    >(undefined);
    const [showResponse, setShowResponse] = useState<boolean>(false);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: eligibleAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    const closeTest = (
        <Button
            className="fr-mt-2w"
            iconId="ri-close-large-line"
            onClick={function noRefCheck() {
                closeTestEligibility(false);
            }}
            priority="tertiary no outline"
            title="Label button"
        >
            Fermer
        </Button>
    );

    return (
        <div className="fr-container" id="componentStart">
            {!showResponse ? (
                <React.Fragment>
                    {closeTest}
                    <div className="container fr-mt-1w">
                        <div className="fr-container fr-py-3w">
                            <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle">
                                <div className="fr-col-6 fr-hidden fr-unhidden-md centered-content">
                                    <img src={eligibility} alt="" />
                                </div>
                                <div className="fr-col-12 fr-col-md-6">
                                    <h1 className="fr-h2">Testez votre égibilité !</h1>
                                    <RadioButtons
                                        legend="Qui est votre employeur ?"
                                        name="radio"
                                        options={[
                                            {
                                                label: `Fonction publique d'État`,
                                                nativeInputProps: {
                                                    checked:
                                                        selectedOption === 'fonction_publique_etat',
                                                    onChange: () =>
                                                        setSelectedOption('fonction_publique_etat'),
                                                },
                                            },
                                            {
                                                label: 'Fonction publique territoriale',
                                                nativeInputProps: {
                                                    checked:
                                                        selectedOption ===
                                                        'fonction_publique_territoriale',
                                                    onChange: () =>
                                                        setSelectedOption(
                                                            'fonction_publique_territoriale',
                                                        ),
                                                },
                                            },
                                            {
                                                label: 'Fonction publique hospitalière',
                                                nativeInputProps: {
                                                    checked:
                                                        selectedOption ===
                                                        'fonction_publique_hospitaliere',
                                                    onChange: () =>
                                                        setSelectedOption(
                                                            'fonction_publique_hospitaliere',
                                                        ),
                                                },
                                            },
                                            {
                                                label: `Opérateur de l'État`,
                                                nativeInputProps: {
                                                    checked: selectedOption === 'operateur_etat',
                                                    onChange: () =>
                                                        setSelectedOption('operateur_etat'),
                                                },
                                            },
                                            {
                                                label: `Autre structure du service public`,
                                                nativeInputProps: {
                                                    checked:
                                                        selectedOption === 'autre_structure_public',
                                                    onChange: () =>
                                                        setSelectedOption('autre_structure_public'),
                                                },
                                            },
                                            {
                                                label: `Association ou entreprise privée`,
                                                nativeInputProps: {
                                                    checked:
                                                        selectedOption === 'asso_entreprise_prive',
                                                    onChange: () =>
                                                        setSelectedOption('asso_entreprise_prive'),
                                                },
                                            },
                                        ]}
                                        state="default"
                                    />
                                    <Button onClick={() => setShowResponse(true)}>Valider</Button>
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
                                    <p
                                        style={{ fontWeight: 'bold' }}
                                        className="centered-content delete-margin-bottom"
                                    >
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
                </React.Fragment>
            ) : (
                <React.Fragment>
                    {closeTest}
                    <div className="container fr-mt-1w fr-mb-8w">
                        {selectedOption !== 'asso_entreprise_prive' ? (
                            <div className="fr-container fr-py-3w">
                                <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle">
                                    <div className="fr-col-6 fr-hidden fr-unhidden-md centered-content">
                                        <Lottie options={defaultOptions} height={300} width={300} />
                                    </div>
                                    <div className="fr-col-12 fr-col-md-6">
                                        <h1 className="fr-h2">
                                            Bonne nouvelle, vous êtes éligible !
                                        </h1>
                                        <p>
                                            Vous pouvez dès maintenant utiliser AgentConnect pour
                                            vous connecter à de nombreux outils et sites de
                                            l'administration
                                        </p>
                                        <a className="fr-raw-link" href="/services">
                                            <Button>Explorer l'annuaire des sites</Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="fr-container fr-py-3w">
                                <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle">
                                    <div className="fr-col-6 fr-hidden fr-unhidden-md centered-content">
                                        <img src={notEligible} alt="" />
                                    </div>
                                    <div className="fr-col-12 fr-col-md-6">
                                        <h1 className="fr-h2">Vous n'êtes pas éligible.</h1>
                                        <p>
                                            AgentConnect est réservé aux agents publics. Les
                                            associations et entreprises privées ne peuvent pas
                                            l'utiliser.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </React.Fragment>
            )}
        </div>
        // </Element>
    );
}
export default EligibilityTest;
