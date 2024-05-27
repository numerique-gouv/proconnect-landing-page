// import { ToggleSwitch } from '@codegouvfr/react-dsfr/ToggleSwitch';
import { offres_fs } from '../Datas';
import Card from '../components/Card/Card';
import './serviceDirectory.css';
// import { useState } from 'react';

function ServiceDirectory() {
    // const [availableToPrivate, setAvailableToPrivate] = useState<boolean | null>(false);

    // const displayServicesForPrivate = () => {
    //     return setAvailableToPrivate((prevState) => !prevState);
    // };

    // const filteredOffres = availableToPrivate
    //     ? offres_fs.filter(({ openPrivate }) => openPrivate)
    //     : offres_fs;

    return (
        <div className="fr-container">
            <h1 className="fr-h3 fr-mt-2w">Annuaire des entreprises</h1>
            <p>Connectez-vous à tous ces sites avec AgentConnect !</p>
            {/* <ToggleSwitch
                style={{
                    maxHeight: '0',
                }}
                inputTitle="the-title"
                label="Uniquement les sites ouverts au secteur privé"
                labelPosition="right"
                onChange={displayServicesForPrivate}
            /> */}
            <div className="fr-grid-row fr-grid-row--gutters fr-mb-5w">
                {offres_fs.map((offre, index) => (
                    <Card offre={offre} key={index}></Card>
                ))}
            </div>
        </div>
    );
}

export default ServiceDirectory;
