import { ToggleSwitch } from '@codegouvfr/react-dsfr/ToggleSwitch';
import Card from '../../components/Card/Card';
import './services.css';
import { useState } from 'react';
import coding from '../../assets/coding.svg';
import { SERVICES_LIST } from './constants';

function Services() {
    const [availableToRIE, setAvailableToRIE] = useState<boolean | null>(false);

    const servicesOnInternet = SERVICES_LIST.filter(({ network }) => network === 'internet');

    const servicesOnRIE = SERVICES_LIST.filter(({ network }) => network === 'RIE');

    return (
        <div className="fr-container">
            <h1 className="fr-h3 fr-mt-2w">Annuaire des services</h1>
            <p className="fr-h6">Connectez-vous à tous ces sites avec AgentConnect !</p>

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
            </div>
        </div>
    );

    function toggleServicesForRIE() {
        return setAvailableToRIE((prevState) => !prevState);
    }
}

export default Services;
