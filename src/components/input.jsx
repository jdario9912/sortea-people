import React from 'react';

const Input = () => {
  return (
    <div>
      <label htmlFor='participante' className='ingresar-form-label'>Ingresar participante</label>
      <input 
        type="text" 
        placeholder='Nombre del participante' 
        className='ingresar-form-input' 
        id='participante'
        data-participante 
        autoFocus
      />      
    </div>
  );
}

export default Input;
