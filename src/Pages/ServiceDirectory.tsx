import { ToggleSwitch } from '@codegouvfr/react-dsfr/ToggleSwitch';
import { offres_fs } from '../Datas';
import Card from '../components/Card/Card';
import './serviceDirectory.css';
import { useState } from 'react';
import { Button } from '@codegouvfr/react-dsfr/Button';
import coding from '../assets/coding.svg';

function ServiceDirectory() {
    // const [availableToPrivate, setAvailableToPrivate] = useState<boolean | null>(false);
    const [availableToRIE, setAvailableToRIE] = useState<boolean | null>(false);

    // const displayServicesForPrivate = () => {
    //     return setAvailableToPrivate((prevState) => !prevState);
    // };

    const displayServicesForRIE = () => {
        return setAvailableToRIE((prevState) => !prevState);
    };

    const servicesOnInternet = offres_fs.filter(({ internet }) => internet);
    console.log(servicesOnInternet);

    const servicesOnRIE = offres_fs.filter(({ internet }) => !internet);
    console.log(servicesOnRIE);

    // const filteredOffres = availableToPrivate
    //     ? offres_fs.filter(({ openPrivate }) => openPrivate)
    //     : offres_fs;

    return (
        <div className="fr-container">
            <h1 className="fr-h3 fr-mt-2w">Annuaire des services</h1>
            <p className="fr-h6">Connectez-vous à tous ces sites avec AgentConnect !</p>
            {/* <ToggleSwitch
                style={{
                    maxHeight: '0',
                }}
                inputTitle="the-title"
                label="Uniquement les sites ouverts au secteur privé"
                labelPosition="right"
                onChange={displayServicesForPrivate}
            /> */}
            <ToggleSwitch
                inputTitle="the-title"
                label="Afficher les services disponibles sur le RIE"
                labelPosition="right"
                onChange={displayServicesForRIE}
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
            <div className="fr-container fr-col-12 fr-col-md-8 fr-py-6w fr-py-md-2w fr-my-10w card-radius">
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
                        href="https://github.com/france-connect/Documentation-AgentConnect/blob/main/README.md#-agentconnect---documentation"
                    >
                        <Button priority="secondary" iconId="fr-icon-code-s-slash-line">
                            Commencer vos tests
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ServiceDirectory;
