import React, { useContext } from 'react';
import { appContext } from '../app';

const VerParticipantes = ({ participantes, eliminar }) => {
  const { verLista } = useContext(appContext);
  console.log(verLista);
  if (participantes.length > 0) {
    return(
      <div className={ verLista ? 'ver-participantes-container' : 'hidden'}>
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
    );
  } else {
    return (
      <div className='ver-participantes-container'>
        <p className='mensaje'>Todavia no hay participantes...</p>
      </div>
    );
  }
}

export default VerParticipantes;
