import PrivateOrPublic from "../components/PrivateOrPublic/PrivateOrPublic"
import {tilesData, stepsInfosPrivate} from "../Datas"

function PrivateProfessional(){
    return(
        <div className="fr-container">
            <PrivateOrPublic tiles={tilesData} stepsInfos={stepsInfosPrivate} />
        </div>
    )
}

export default PrivateProfessional
