import PrivateOrPublic from "../components/PrivateOrPublic/PrivateOrPublic"
import {tilesData, stepsInfosPublic} from "../Datas"

function AgentPublic(){
    return(
        <div className="fr-container" id="public">
            <PrivateOrPublic tiles={tilesData} stepsInfos={stepsInfosPublic} ></PrivateOrPublic>
        </div>
    )
}

export default AgentPublic
