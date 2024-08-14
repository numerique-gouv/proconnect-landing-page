import PrivateOrPublic from '../components/PrivateOrPublic/PrivateOrPublic';
import { tilesData, stepsInfosPublic } from '../Datas';
import AgentConnectButton from '../assets/AgentConnectButton.svg';
import './layout.css';

function AgentPublic() {
    return (
        <div className="fr-container" id="public">
            <PrivateOrPublic tiles={tilesData} stepsInfos={stepsInfosPublic}></PrivateOrPublic>
            <div className="fr-container fr-py-4w fr-py-md-8w fr-mb-4w card-radius">
                <a href="/services">
                    <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle">
                        <div className="fr-col-12 fr-col-md-6 fr-pl-6w">
                            <p style={{ fontSize: '32px', lineHeight: '38px' }}>
                                Rejoignez 647589 membres de la <br />
                                Fonction Publique en <br />
                                utilisant <span style={{ fontWeight: 'bold' }}>AgentConnect</span> !
                            </p>
                        </div>
                        <div className="fr-col-6 fr-hidden fr-unhidden-md centered-content">
                            <img src={AgentConnectButton} alt="" />
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default AgentPublic;
