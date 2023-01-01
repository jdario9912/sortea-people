import React, { useContext } from 'react';
import Input from './input';
import Button from './button';
import { Buttons } from '../models/buttons';
import { FormContext } from './ingresar-participantes';


const Form = () => {
  const { handleIngresar, resetStorage } = useContext(FormContext);
  
  return (
    <form action="" className='ingresar-form'>
      <Input />
      <div className="ingresar-container-button">
        <Button props={ new Buttons(handleIngresar, 'ingr-form-btn btn-ingresar', 'ingresar')} />
        <Button props={ new Buttons(resetStorage, 'ingr-form-btn btn-resetear', 'resetear')} />
      </div>
    </form>
  );
}

export default Form;
