import React, { useState, createContext } from 'react';
import IngresarParticipantes from './components/ingresar-participantes';
import Sortear from './components/sortear';

export const appContext = createContext();

const App = () => {
  const [participantes, setParticipantes] = useState([]);
  const [sorteado, setSorteado] = useState('');
  const [verLista, setVerLista] = useState(true);

  return (
    <div className='app'>
      <appContext.Provider value={{ 
        participantes, 
        setParticipantes, 
        sorteado, 
        setSorteado,
        verLista,
        setVerLista
      }}>
        <IngresarParticipantes />
        <Sortear />
      </appContext.Provider>
    </div>
  );
}

export default App;
