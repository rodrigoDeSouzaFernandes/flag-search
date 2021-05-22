import React from 'react';
import PropTypes from 'prop-types';
import flagContext from './flagContext';

function Provider({ children }) {
  const context = {
    algo: 'oi',
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
