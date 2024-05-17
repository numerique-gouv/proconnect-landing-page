import Tile from "../../components/Tiles/Tile"
import {tilesData, stepsInfos} from "./Datas"

function AgentPublic(){
    return(
        <div className="fr-container">
            <h2 className="fr-h3 fr-mt-2w">Comment ça marche ?</h2>
            <div className="grid-container">
                <div className="grid">
                    {
                        tilesData.map(({illu, content}, index) => (
                            <Tile illu={illu} content={content} key={index} />
                        ))
                    }
                </div>
            </div>
            {
                stepsInfos.map(({question, response}, index) => (
                    <div key={index}>
                        <h2 className="fr-h3 fr-mt-2w">{question}</h2>
                        <p className="fr-col-8">{response}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default AgentPublic
