import YouAre from "../components/YouAre/YouAre"
import {tilesData, stepsInfosPrivate} from "../Datas"

function PrivateProfessional(){
    return(
        <div className="fr-container">
            <YouAre tiles={tilesData} stepsInfos={stepsInfosPrivate} ></YouAre>
        </div>
    )
}

export default PrivateProfessional
