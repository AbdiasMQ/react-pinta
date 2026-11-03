import './Button.css';
import React from 'react';  
//recive por props el texto, el tipo de boton y la funcion a ejecutar al hacer click
const Button = ({ text , type, callback }) => {
  return (
    <button
      className={`button button-${type}`}
      onClick={callback}
    >
      {text}
    </button>
  );
};

export default Button;