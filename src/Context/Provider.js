import React, { useState } from 'react';
import PropTypes from 'prop-types';
import flagContext from './flagContext';

function Provider({ children }) {
  const [allCountries, setAllCountries] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const context = {
    allCountries,
    setAllCountries,
    isFetching,
    setIsFetching,
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
