import React from 'react';

import { useHistory } from 'react-router-dom';

import vector from '../../img/Vector.png';

import '../../Styles/ButtonBack.css';

function ButtonBack() {
  const history = useHistory();
  return (
    <button
      className="buttonBack"
      type="button"
      onClick={ () => { history.push('/'); } }
    >
      <img className="vector" src={ vector } alt="vector" />
      <span className="btn-text">Voltar</span>
    </button>
  );
}

export default ButtonBack;
