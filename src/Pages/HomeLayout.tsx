import React, { useState } from 'react'
import welcome from '../assets/welcome.svg'
import ButtonRadius from '../components/Buttons/ButtonRadius'
import AgentPublic from './AgentPublic'
import PrivateProfessional from './PrivateProfessional'
import { Element, scroller } from 'react-scroll';

type ComponentType = "publicMember" | "privateProfessional"

function HomeLayout(){
  const [selectedComponent, setSelectedComponent] = useState<ComponentType | null>(null);

  const handleButtonClick = (componentName: ComponentType) => {
    setSelectedComponent(componentName);
    scroller.scrollTo('componentStart', {
      duration: 400,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

    return(
      <React.Fragment>
        <div className='fr-container--fluid background-welcome-page fr-py-8w fr-px-12w'>
          <div className='fr-grid-row fr-grid-row--gutters fr-grid-row--middle'>
            <div className='fr-col-7'>
              <h1 className='fr-h2'>
                Avec le bouton <span className='blue-france'>ProConnect</span>, <br />nous vous identifions <br />sur les sites de l'administration.
              </h1>
              <p>Vous êtes :</p>
              <ButtonRadius onClick={() => handleButtonClick("publicMember")} isSelected={selectedComponent === "publicMember"} >Membre de la Fonction Publique</ButtonRadius>
              <ButtonRadius onClick={() => handleButtonClick("privateProfessional")} isSelected={selectedComponent === "privateProfessional"}>Professionnel du privé</ButtonRadius>
            </div>
            <div className='fr-col-5 centered-content'>
                <img src={welcome} alt="" />
            </div>
          </div>
        </div>
        <Element name="componentStart">
        {selectedComponent === 'publicMember' && <AgentPublic/>}
        {selectedComponent === 'privateProfessional' && <PrivateProfessional />}
        </Element>
      </React.Fragment>
    )
}

export default HomeLayout
