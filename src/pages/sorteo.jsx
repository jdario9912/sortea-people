import React from 'react';
import { Amigos } from '../models/amigos';
import '../styles/sorteo.css';
import { FaPeopleArrows } from "react-icons/fa";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import Mensaje from '../components/mensaje';
import ColumnaEntrega from '../components/columna-entrega';
import ColumnaRecibe from '../components/columna-recibe';

const Sorteo = () => {
  const amigosInvisibles = [];
  const amigos = [];
  const participantes = Object.values(window.sessionStorage);
  
  participantes.forEach(participante => {
    amigos.push(participante);
  });

  if (participantes.length > 0) {
    if (participantes.length === 1 ) {
      return(<Mensaje texto={ 'Debes agregar al menos dos participantes' } />);
    } else {
      participantes.forEach(participante => {
        let random;
    
        do {
          random = Math.floor(Math.random() * amigos.length);
        } while (participante === amigos[random]);  
        
          amigosInvisibles.push(new Amigos(participante, amigos[random]));
          amigos.splice(random, 1);
      });

      if (amigos.length > 0) {
        return(<Mensaje texto='Sorteando' />);
      } else {
        return (
          <div className='amigos-invisibles-container'>
            <a href="/"><BsArrowLeftSquareFill /></a>
            <FaPeopleArrows className='icono-invisible' />
            <div className="amigos-invisibles">
              <ColumnaEntrega amigosInvisibles={ amigosInvisibles } />
              <ColumnaRecibe amigosInvisibles={ amigosInvisibles } />
            </div>      
          </div>
        ); 
      }  
    }
  } else {
    return(
      <Mensaje texto={ 'No hay participantes' } />
    );
  }
  
}

export default Sorteo;