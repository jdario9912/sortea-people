import React from 'react';
import '../styles/help.css';

const Help = () => {
  return (
    <div className='help-container'>
      <h2>Ayuda</h2>
      <p>Luego de escribir el nombre, pulsa Enter o el boton 'Agregar'</p>
      <p>Pulsa sobre cualquier nombre para eliminarlo de la lista</p>
      <p>Pulsa 'Resetear' para borrar todos los nombres de la lista</p>
      <a href="/">hecho</a>
    </div>
  );
}

export default Help;
