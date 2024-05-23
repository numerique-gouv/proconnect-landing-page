import { ToggleSwitch } from '@codegouvfr/react-dsfr/ToggleSwitch';
import { offres_fi } from '../Datas';
import Card from '../components/Card/Card';
import './serviceDirectory.css';
import { useState } from 'react';

function ServiceDirectory() {
    const [availableToPrivate, setAvailableToPrivate] = useState<boolean | null>(false);

    const test = () => {
        return setAvailableToPrivate((prevState) => !prevState);
    };

    const filteredOffres = availableToPrivate
        ? offres_fi.filter(({ openPrivate }) => openPrivate)
        : offres_fi;

    return (
        <div className="fr-container">
            <h1 className="fr-h3 fr-mt-2w">Annuaire des entreprises</h1>
            <p>
                Avec ProConnect, accédez à de nombreux outils et sites de l'administation, en un
                clic !
            </p>
            <ToggleSwitch
                style={{
                    maxHeight: '0',
                }}
                inputTitle="the-title"
                label="Uniquement les sites ouverts au secteur privé"
                labelPosition="right"
                onChange={test}
            />
            <div className="fr-grid-row fr-grid-row--gutters fr-my-5w">
                {filteredOffres.map((offre, index) => (
                    <Card offre={offre} key={index}></Card>
                ))}
            </div>
        </div>
    );
}

export default ServiceDirectory;
