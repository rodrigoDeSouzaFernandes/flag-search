import React, { useContext, useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import Header from './components/Header';
import getCountryDetails from '../Services/getCountryDetails';
import DetailsCard from './components/DetailsCard';
import ImageCard from './components/ImageCards';
import flagContext from '../Context/flagContext';
import PageNav from './components/PageNav';

import '../Styles/Details.css';

const itensPerPage = 3;

function Details({ match: { params: { name } } }) {
  const [country, setCountry] = useState();
  const [possibleBorders, setPossibleBorders] = useState([]);
  const { setPageLimit, actualPage, pageLimit, setActualPage } = useContext(flagContext);

  useEffect(() => {
    setActualPage(1);
    setPageLimit(itensPerPage);
    getCountryDetails(name, setCountry, setPossibleBorders);
  }, [name]);

  return (
    <div>
      {country
        ? (
          <div>
            <Header />
            <div className="details">
              <DetailsCard country={ country } />
              <div className="borders">
                <p className="borders-p">Países vizinhos:</p>

                {
                  possibleBorders
                    .filter((elem) => country.borders.some((e) => e === elem.alpha3Code))
                    .map((c, index) => {
                      if (index < actualPage * pageLimit
                      && index >= actualPage * pageLimit - pageLimit) {
                        return <ImageCard key={ index } country={ c } />;
                      }
                      return '';
                    })
                }
              </div>
              <PageNav currentPage={ actualPage } setCurrentPage={ setActualPage } />
            </div>
          </div>
        )
        : 'loading'}
    </div>
  );
}

Details.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Details;
