import "./tiles.css"

function Tile({illu, content}: {illu: string, content: string}){
    console.log(illu)
    return (
        <div className="tile space-between">
            <div>
                <img src={illu} style={{maxHeight:"150px"}} />
            </div>
            <div>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Tile
