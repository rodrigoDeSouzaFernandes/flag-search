import React from 'react';

import vector from '../../img/Vector.png';

import '../../Styles/ButtonBack.css';

function ButtonBack() {
  return (
    <button
      className="buttonBack"
      type="button"
    >
      <img className="vector" src={ vector } alt="vector" />
      <span className="btn-text">Voltar</span>
    </button>
  );
}

export default ButtonBack;
