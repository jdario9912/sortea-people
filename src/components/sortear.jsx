import React, { useContext } from 'react';
import { appContext } from '../app';
import { Buttons } from '../models/buttons';
import Button from './button';

const Sortear = () => {
  const { participantes, setVerLista, verLista, setSorteado } = useContext(appContext);

  const sortear = () => {    
    if (participantes.length > 0) {
      setVerLista(!verLista);
      setSorteado(participantes[Math.floor(Math.random() * participantes.length)]);
    } else {
      console.log('No hay participantes para el sorteo');
    }
  };

  return (
    <div className='sortear-container-btn'>
      <Button props={ new Buttons(sortear, 'btn-sortear', 'sortear')} />
    </div>
  );
}

export default Sortear;
