import React from 'react';

import PropTypes from 'prop-types';

import '../../Styles/ImageCard.css';

function ImageCard({ country }) {
  const { flag, name } = country;

  return (
    <img className="image-card" src={ flag } alt={ `flag of ${name}` } />
  );
}

ImageCard.propTypes = {
  country: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ImageCard;
