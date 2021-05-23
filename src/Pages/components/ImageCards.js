import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import '../../Styles/ImageCard.css';

function ImageCard({ country }) {
  const { flag, name } = country;

  return (
    <Link to={ `/details/${name}` }>
      <img className="image-card" src={ flag } alt={ `flag of ${name}` } />
    </Link>
  );
}

ImageCard.propTypes = {
  country: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ImageCard;
