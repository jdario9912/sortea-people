import React from 'react';

const Input = () => {
  return (
    <>
      <input 
        type="text" 
        placeholder='Nombre del participante' 
        className='ingresar-form-input' 
        data-participante 
        autoFocus
      />      
    </>
  );
}

export default Input;
