import React from 'react'
import '../styles/mensaje.css';
import { BsArrowLeftSquareFill, BsInfoCircleFill } from "react-icons/bs";

export default function Mensaje({ texto }) {
  return (
    <div className='mensaje-comp'>
      <a href="/"><BsArrowLeftSquareFill /></a>
      <div className='texto-container'>
        <BsInfoCircleFill className='icon' />
        <p>{ texto }</p>
      </div>
    </div>
  )
}
