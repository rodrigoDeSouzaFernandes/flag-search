import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import leftArrow from '../../img/pag-vector-left.png';
import rightArrow from '../../img/pag-vector-right.png';

import '../../Styles/PageNav.css';

const initialPages = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
};

function PageNav({ currentPage }) {
  const [buttons, setButtons] = useState([]);

  const makeButtons = () => {
    const { one, two, three, four, five } = initialPages;
    if (currentPage <= initialPages.three) {
      setButtons([one, two, three, four, five]);
    } else {
      setButtons(
        [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2],
      );
    }
  };

  useEffect(() => {
    makeButtons();
  }, []);

  return (
    <div className="btn-container">
      <button type="button" className="btn-page left">
        <img src={ leftArrow } alt="" />
      </button>
      {
        buttons.map((elem, index) => (
          <button
            key={ index }
            className="btn-page"
            type="button"
          >
            {elem}
          </button>
        ))
      }
      <button type="button" className="btn-page right">
        <img src={ rightArrow } alt="" />
      </button>
    </div>
  );
}

PageNav.propTypes = {
  currentPage: PropTypes.number.isRequired,
};

export default PageNav;
