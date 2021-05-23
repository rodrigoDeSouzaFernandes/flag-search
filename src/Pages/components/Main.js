import React, { useContext, useEffect, useState } from 'react';
import flagContext from '../../Context/flagContext';

import { getAllCountries } from '../../Services/api-request';

import ImageCard from './ImageCards';

import PageNav from './PageNav';

import '../../Styles/Main.css';
import Filter from './Filter';

function Main() {
  const [actualPage, setActualPage] = useState(1);
  const { allCountries, setAllCountries, pageLimit } = useContext(flagContext);

  useEffect(() => {
    getAllCountries(setAllCountries);
  }, []);

  return (
    <main>
      <div className="flag-page">
        <Filter />
        <div className="flags">
          {
            allCountries.map((country, index) => {
              if (index < actualPage * pageLimit
            && index >= actualPage * pageLimit - pageLimit) {
                return <ImageCard country={ country } />;
              }
              return '';
            })
          }
        </div>
      </div>
      <PageNav currentPage={ actualPage } setCurrentPage={ setActualPage } />
    </main>

  );
}

export default Main;
