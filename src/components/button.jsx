import React from 'react';

const Button = ({ props }) => {
  return (
    <button onClick={ props.click } className={ props.clase }>
      { props.texto }
    </button>
  );
}

export default Button;
