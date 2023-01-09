import React, { createContext, useContext } from 'react';
import Form from './form';
import { appContext } from '../app';

export const FormContext = createContext();

const IngresarParticipantes = () => {

  const { setParticipantes } = useContext(appContext);

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
    }else{
      console.log('no se encontro valor');
    }
  };

  const resetStorage = (e) => {
    e.preventDefault();
    sessionStorage.clear();
    setParticipantes([]);
  }
  
  return (
    <div className='ingresar-participantes-container'>
      <FormContext.Provider value={{ handleIngresar, resetStorage}}>
        <Form />   
      </FormContext.Provider>
    </div>
  );
}

export default IngresarParticipantes;
