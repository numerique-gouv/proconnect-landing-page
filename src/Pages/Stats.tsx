import Iframe from 'react-iframe';

function Stats() {
    return (
        <div className="fr-container">
            <div className="fr-grid-row">
                <Iframe
                    className="fr-col-12"
                    width="100%"
                    height="2000"
                    url="https://stats.agentconnect.gouv.fr/public/dashboard/59405cec-eb60-47c6-9eb2-0f4ee9a0378c"
                ></Iframe>
            </div>
        </div>
    );
}
export default Stats;
