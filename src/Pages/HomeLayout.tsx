import React from 'react'
import welcome from '../assets/welcome.svg'
import Button from '../components/Buttons/ButtonRadius'
import AgentPublic from './AgentPublic/AgentPublic'

function HomeLayout(){
    return(
      <React.Fragment>
        <div className='fr-container--fluid background-welcome-page fr-py-8w fr-px-12w'>
          <div className='fr-grid-row fr-grid-row--gutters fr-grid-row--middle'>
            <div className='fr-col-7'>
              <h1 className='fr-h2'>
                Avec le bouton <span className='blue-france'>ProConnect</span>, <br />nous vous identifions <br />sur les sites de l'administration.
              </h1>
              <p>Vous êtes :</p>
              <Button>Membre de la Fonction Publique</Button>
              <Button>Professionnel du privé</Button>
            </div>
            <div className='fr-col-5 centered-content'>
                <img src={welcome} alt="" />
            </div>
          </div>
        </div>
        <AgentPublic></AgentPublic>
      </React.Fragment>
    )
}

export default HomeLayout
