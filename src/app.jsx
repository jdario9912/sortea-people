import React, { useState, createContext } from 'react';
import IngresarParticipantes from './components/ingresar-participantes';
import Sortear from './components/sortear';
import { BsInfoCircleFill } from "react-icons/bs";
import VerParticipantes from './components/ver-participantes';
import './styles/app.css';
import { Link } from 'react-router-dom';

export const appContext = createContext();

const App = () => {
  let nombres;

  const [participantes, setParticipantes] = useState([]);
  const [sorteado, setSorteado] = useState('');
  const [verLista, setVerLista] = useState(true);

  const eliminarParticipante = (e) => {
    sessionStorage.removeItem(e.target.innerHTML);
    nombres = Object.values(window.sessionStorage);
    setParticipantes(nombres);
  }

  return (
    <div className='app'>
      <appContext.Provider value={{ 
        participantes, 
        setParticipantes, 
        sorteado, 
        setSorteado,
        verLista,
        setVerLista,
        eliminarParticipante
      }}>
        <Link to="/help"><BsInfoCircleFill className='help' /></Link>
          <h2 className='ingresar-h2'>amigo invisible</h2>
        <div className="ingresar-participantes-container">
          <div className="ingresar-sortear-container">
            <IngresarParticipantes />
            <VerParticipantes />
          </div>
          <Sortear />
        </div>
      </appContext.Provider>
    </div>
  );
}

export default App;
