import construction from '../assets/construction.svg'

function InConstruction(){
    return(
        <div className='fr-container fr-my-2w' style={{textAlign: "center"}}>
            <h1>Page en construction</h1>
            <div>
                <img src={construction} alt="" style={{maxWidth: "300px"}} />
            </div>
        </div>
    )
}

export default InConstruction
