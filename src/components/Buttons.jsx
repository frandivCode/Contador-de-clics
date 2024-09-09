import React from 'react';
import './stylesheets/Boton.css';

function Boton({ texto, esBotonDeClic, manejoDeClic }) {
  return (
    <button className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
      onClick={manejoDeClic}>
      {texto}
    </button>
  );
}

export default Boton;