import React from 'react';

import logo from '../../img/logo.svg';
import ButtonBack from './ButtonBack';

import '../../Styles/Header.css';

function Header() {
  return (
    <header>
      <img className="mova-logo" src={ logo } alt="MOVA logo" />
      <ButtonBack />
    </header>
  );
}

export default Header;
