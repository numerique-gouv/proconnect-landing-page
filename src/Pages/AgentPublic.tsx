import YouAre from "../components/YouAre/YouAre"
import {tilesData, stepsInfosPublic} from "../Datas"

function AgentPublic(){
    return(
        <div className="fr-container" id="public">
            <YouAre tiles={tilesData} stepsInfos={stepsInfosPublic} ></YouAre>
        </div>
    )
}

export default AgentPublic
