import React from 'react';
import { Amigos } from '../models/amigos';
import '../styles/sorteo.css';
import { FaPeopleArrows } from "react-icons/fa";
import { BsArrowLeftSquareFill } from "react-icons/bs";
// import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Sorteo = () => {
  const amigosInvisibles = [];
  const amigos = [];
  const participantes = Object.values(window.sessionStorage);
  
  participantes.forEach(participante => {
    amigos.push(participante);
  });

  participantes.forEach(participante => {
    let random;

    do {
      random = Math.floor(Math.random() * amigos.length);
    } while (participante === amigos[random]);  
    
      amigosInvisibles.push(new Amigos(participante, amigos[random]));
      amigos.splice(random, 1);
  });

  return (
    <div className='amigos-invisibles-container'>
      <a href="/"><BsArrowLeftSquareFill /></a>
      <FaPeopleArrows className='icono-invisible' />
      <div className="amigos-invisibles">
        <div className="tmain">
          <div className="thead">Entrega</div>
          <div className='nombres'>
          {
            amigosInvisibles.map(({entrega}) => 
              <div className="nombre" key={entrega}>
                { entrega }
                {/* <span><HiOutlineArrowNarrowRight /></span> */}
              </div>
            )
          }
          </div>
        </div>
        <div className="tmain">
          <div className="thead">Recibe</div>
          <div className='nombres'>
          {
            amigosInvisibles.map(({recibe}) => 
              <div className="nombre" key={recibe}>
                { recibe }
              </div>
            )
          }
          </div>
        </div>
      </div>      
    </div>
  );
}

export default Sorteo;