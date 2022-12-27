import React, { useState } from 'react';
import VerParticipantes from './ver-participantes';

const IngresarParticipantes = () => {

  const [participantes, setParticipantes] = useState([]);

  let 
    nuevoParticipante,
    nombres
  ;

  const handleIngresar = (e) => {
    e.preventDefault();
    nuevoParticipante = document.querySelector('[data-participante]');
    if(nuevoParticipante.value.length > 0){
      sessionStorage.setItem(nuevoParticipante.value, nuevoParticipante.value);
      nombres = Object.values(window.sessionStorage);
      setParticipantes(nombres);
      nuevoParticipante.value = '';
      nuevoParticipante.focus();
      return;
    }
  };

  const eliminarParticipante = (e) => {
    sessionStorage.removeItem(e.target.innerHTML);
    nombres = Object.values(window.sessionStorage);
    setParticipantes(nombres);
  }

  const resetStorage = (e) => {
    e.preventDefault();
    sessionStorage.clear();
    setParticipantes([]);
  }
  
  return (
    <div className='ingresar-participantes-container'>
      <div className='ingresar-participantes'>
        <h2 className='ingresar-h2'>Ingresar participantes</h2>
        <form action="" className='ingresar-form'>
          <input type="text" placeholder='Nombre del participante' className='ingresar-form-input' data-participante />
          <div className="ingresar-container-button">
            <button onClick={ handleIngresar } className='ingresar-form-button button-ingresar' >ingresar</button>
            <button onClick={ resetStorage } className='ingresar-form-button button-resetear'>reset lista</button>
          </div>
        </form>   
      </div>
      <VerParticipantes participantes={ participantes } eliminar={ eliminarParticipante } />
    </div>
  );
}

export default IngresarParticipantes;
