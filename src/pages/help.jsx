import React from 'react';
import '../styles/help.css';
import { BsInfoCircleFill } from "react-icons/bs";

const Help = () => {
  return (
    <div className='help-container'>
      <BsInfoCircleFill className='help-icon' />
      <h2>Ayuda</h2>
      <p>Luego de escribir el nombre, pulsa Enter o el boton <i>Agregar</i>.</p>
      <p>Pulsa sobre cualquier nombre de la lista para eliminarlo.</p>
      <p>Pulsa <i>Resetear</i> para borrar todos los nombres de la lista.</p>
      <p>Una vez hecho el sorteo, puedes recargar la página para obtener un sorteo diferente.</p>
      <a href="/">hecho</a>
    </div>
  );
}

export default Help;
