import React, { useContext } from 'react';
import { appContext } from '../app';
import { Buttons } from '../models/buttons';
import Button from './button';

// let nombres;

const Sortear = () => {
  const { participantes, setVerLista } = useContext(appContext);

  const sortear = () => {    
    if (participantes.length > 0) {
      console.log(participantes[Math.floor(Math.random() * participantes.length)]);
      setVerLista(false);
      // ME FALTA MOSTRAR EL PARTICIPANTE SORTEADO
    } else {
      console.log('No hay participantes para el sorteo');
    }
  };

  const sortearYEliminar = () => {
    console.log('Sorteando participante y eliminadolo del juego');
    console.log('moco');
  }

  return (
    <div className='sortear-container-btn'>
      <Button props={ new Buttons(sortear, 'btn-sortear', 'sortear')} />
      <Button props={ new Buttons(sortearYEliminar, 'btn-sortear-eliminar', 'sortear y eliminar')} />
    </div>
  );
}

export default Sortear;
