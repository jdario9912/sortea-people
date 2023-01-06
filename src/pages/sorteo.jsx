import React from 'react';
import { Amigos } from '../models/amigos';
import '../styles/sorteo.css';
import { GiInvisible } from "react-icons/gi";

const Sorteo = () => {
  const amigosInvisibles = [];
  const amigos = [];
  const participantes = Object.values(window.sessionStorage);
  
  participantes.forEach(participante => {
    amigos.push(participante);
  });

  participantes.forEach(participante => {
    const random = Math.floor(Math.random() * amigos.length);
    
    amigosInvisibles.push(new Amigos(participante, amigos[random]));

    amigos.splice(random, 1);
  });

  return (
    <div className='amigos-invisibles-container'>
      <a href="/">home</a>
      <GiInvisible className='icono-invisible' />
      <div className="amigos-invisibles">
        <div className="tmain">
          <div className="thead">Entrega</div>
          <div className='nombres'>
          {
            amigosInvisibles.map(({entrega}) => 
              <p className="nombre" key={entrega}>
                { entrega }
              </p>
            )
          }
          </div>
        </div>
        <div className="tmain">
          <div className="thead">Recibe</div>
          <div className='nombres'>
          {
            amigosInvisibles.map(({recibe}) => 
              <p className="nombre" key={recibe}>
                { recibe }
              </p>
            )
          }
          </div>
        </div>
      </div>      
    </div>
  );
}

export default Sorteo;