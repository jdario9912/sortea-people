import React, {
  useEffect,
  useContext
} from 'react';
import { appContext } from '../app';


const VerParticipantes = () => {
  const { setParticipantes, participantes, eliminarParticipante } = useContext(appContext);

  useEffect(() => {
    setParticipantes(Object.values(window.sessionStorage));
    participantes.sort();
  }, []);

  if (participantes.length > 0) {
    return(
      <div className='ver-participantes-container'>
        <p>Participantes: {participantes.length}</p>
        <div className="ver-participantes-lista">
          {
            participantes.sort().map(participante => 
              <span 
                key={ participante } 
                onClick={ eliminarParticipante } 
                className='lista-nombre'
              >
                { participante }
              </span>  
            )
          }
        </div>
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
