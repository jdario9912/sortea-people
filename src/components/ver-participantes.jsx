import React, { useContext } from 'react';
import { appContext } from '../app';
import Sorteado from './sorteado';

const VerParticipantes = ({ participantes, eliminar }) => {
  const { verLista, sorteado } = useContext(appContext);
  if (participantes.length > 0) {
    if (verLista) {
      return(
        <div className='ver-participantes-container'>
          {
            participantes.map(participante => 
              <span 
                key={ participante } 
                onClick={ eliminar } 
                className='lista-nombre'
              >
                { participante }
              </span>  
            )
          }
        </div>
      )
    } else {
      return(
        <Sorteado sorteado={ sorteado } />
      ); 
    }
  } else {
    return (
      <div className='ver-participantes-container'>
        <p className='mensaje'>Todavia no hay participantes...</p>
      </div>
    );
  }
}

export default VerParticipantes;
