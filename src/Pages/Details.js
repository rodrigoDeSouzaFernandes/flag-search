import React from 'react';

import PropTypes from 'prop-types';

import Header from './components/Header';

function Details({ match: { params: { name } } }) {
  console.log(name);

  return (
    <div>
      <Header />
    </div>
  );
}

Details.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Details;
