import React from 'react';

const VerParticipantes = ({ participantes, eliminar }) => {
  
  if (participantes.length > 0) {
    return(
      <div className='ver-participantes-container lista'>
        {
          participantes.map(participante => 
            <span key={ participante } onClick={ eliminar } className='lista-nombre'>{participante}</span>  
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
