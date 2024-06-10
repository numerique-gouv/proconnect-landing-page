import { Badge } from '@codegouvfr/react-dsfr/Badge';
import '../layout.css';
import { PARTNERS_LIST } from './constants';

function Partners() {
    return (
        <div className="fr-container fr-mt-2w">
            <h1 className="fr-h3">Liste des administrations partenaires</h1>
            <div className="fr-table fr-pt-0" style={{ verticalAlign: 'top' }}>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Structure</th>
                            <th scope="col">Fournisseur d'identité</th>
                            <th scope="col">Statut</th>
                        </tr>
                    </thead>
                    <tbody>
                        {PARTNERS_LIST.map((PARTNER_LIST) => (
                            <tr>
                                <td>{PARTNER_LIST.structure}</td>
                                <td>{renderIdentityProviders(PARTNER_LIST.identityProviders)}</td>
                                <td>
                                    <StatusBadge status={PARTNER_LIST.status} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <h2 className="fr-h4">
                Que se passe-t-il si votre administration n’est pas partenaire ?
            </h2>
            <p>
                Aucun problème, vous pouvez utiliser AgentConnect ! <br /> Nous nous assurons
                nous-même que vous faites partie de la Fonction Publique en vérifiant <br />
                votre email professionnel et le SIRET de votre organisation.
            </p>
        </div>
    );
}

function renderIdentityProviders(identityProviders: string[]) {
    if (identityProviders.length === 0) {
        return undefined;
    } else if (identityProviders.length === 1) {
        return identityProviders[0];
    } else {
        return (
            <ul>
                {identityProviders.map((identityProvider) => (
                    <li>{identityProvider}</li>
                ))}
            </ul>
        );
    }
}

function StatusBadge(props: { status: 'active' | 'pending' }) {
    switch (props.status) {
        case 'active':
            return <Badge severity="success">ACTIF</Badge>;
        case 'pending':
            return <Badge severity="info">PROCHAINEMENT</Badge>;
    }
}

export default Partners;
