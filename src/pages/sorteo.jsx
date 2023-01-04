import React, {

} from 'react';
import { Amigos } from '../models/amigos';
import '../styles/amigos-invisibles.css'

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
    <div>
      <a href="/">home</a>
      <table className='amigos-invisibles'>
        <thead>
          <tr>
            <th>Entrega</th>
            <th>Recibe</th>
          </tr>
        </thead>
        <tbody>
          {
            amigosInvisibles.map(({entrega, recibe}) => 
              <tr key={ entrega }>
                <td>{entrega}</td>
                <td>{recibe}</td>
              </tr>
            )
          }
        </tbody>
        
      </table>
      
    </div>
  );
}

export default Sorteo;

// const random = Math.floor(Math.random() * amigos.length);
//     if(participante !== amigos[random]){
//       amigosInvisibles.push( new Amigos(participante, amigos[random]));
//       console.log('antes de borrar', amigos.length);
//       delete(amigos[random]);

//       console.log('despues de borrar', amigos.length);
      
      
      
      
      
//     }else{
//       console.log('Salio igual: ', participante);
//     }