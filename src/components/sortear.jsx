import React from 'react';
import { Link } from 'react-router-dom';

const Sortear = () => {
  
  return (
    <div className='sortear-container-btn'>
      <Link to='/sorteo' className='btn-sortear'>sortear</Link>
    </div>
  );
}

export default Sortear;
