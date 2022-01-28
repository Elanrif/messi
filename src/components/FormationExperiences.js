import React from 'react';
import DataFormations  from '../datas/Formation';
import DataExperiences from '../datas/Experience' ;
import Experiences from './Experiences'
import Formations from './Formations';
import "./FormationExperiences.css";

function FormationExperiences() {

     console.log(DataFormations)
        return (
            <>  
              <Formations datas= {DataFormations} />
              <Experiences datas= {DataExperiences} />
            </> 
        );
    
}


export default FormationExperiences;