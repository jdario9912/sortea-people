import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './app';
import './index.css';
import Help from './pages/help';
import Sorteo from './pages/sorteo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <App /> } />
      <Route path='/sorteo' element={ <Sorteo /> } />
      <Route path='/help' element={ <Help /> } />
    </Routes>
    {/* <App /> */}
  </BrowserRouter>
);