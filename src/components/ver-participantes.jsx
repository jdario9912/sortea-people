import React, {
  useEffect,
  useContext
} from 'react';
import { appContext } from '../app';

const VerParticipantes = () => {
  const { setParticipantes, participantes, eliminar } = useContext(appContext);

  useEffect(() => {
    setParticipantes(Object.values(window.sessionStorage));
  }, []);

  if (participantes.length > 0) {
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
    return (
      <div className='ver-participantes-container'>
        <p className='mensaje'>Todavia no hay participantes...</p>
      </div>
    );
  }
}

export default VerParticipantes;
