import React, { useState } from 'react';
import PropTypes from 'prop-types';
import flagContext from './flagContext';

const limitItens = 3;

function Provider({ children }) {
  const [allCountries, setAllCountries] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [pageLimit, setPageLimit] = useState(limitItens);
  const [actualPage, setActualPage] = useState(1);

  const context = {
    allCountries,
    setAllCountries,
    isFetching,
    setIsFetching,
    pageLimit,
    setPageLimit,
    actualPage,
    setActualPage,
  };

  return (
    <flagContext.Provider value={ context }>
      {children}
    </flagContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Provider;
