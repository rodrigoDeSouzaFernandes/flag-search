import React, { useContext, useEffect, useState } from 'react';
import flagContext from '../../Context/flagContext';

import { getAllCountries } from '../../Services/api-request';

import ImageCard from './ImageCards';

import PageNav from './PageNav';

import '../../Styles/Main.css';
import Filter from './Filter';

const limitItens = 3;

function Main() {
  const [pageLimit] = useState(limitItens);
  const [actualPage, setActualPage] = useState(1);
  const { allCountries, setAllCountries } = useContext(flagContext);

  useEffect(() => {
    getAllCountries(setAllCountries);
  }, []);

  return (
    <main>
      <div className="flag-page">
        <Filter />
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
      <PageNav currentPage={ actualPage } setCurrentPage={ setActualPage } />
    </main>

  );
}

export default Main;
