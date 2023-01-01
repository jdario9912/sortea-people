import React, { createContext, useContext } from 'react';
import Form from './form';
import VerParticipantes from './ver-participantes';
import { appContext } from '../app';

export const FormContext = createContext();

const IngresarParticipantes = () => {

  const { participantes, setParticipantes } = useContext(appContext);

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
        <FormContext.Provider value={{ handleIngresar, resetStorage}}>
          <Form />   
        </FormContext.Provider>
      </div>
      <VerParticipantes participantes={ participantes } eliminar={ eliminarParticipante } />
    </div>
  );
}

export default IngresarParticipantes;
