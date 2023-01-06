import React from 'react';

const Input = () => {
  return (
    <div className='label-input-container'>
      <input 
        type="text" 
        placeholder='Ingresar participante' 
        className='ingresar-form-input' 
        id='participante'
        data-participante 
        autoFocus
      />      
    </div>
  );
}

export default Input;
