import React, { useContext, useEffect, useState } from 'react';
import flagContext from '../../Context/flagContext';

import { getAllCountries } from '../../Services/api-request';

import ImageCard from './ImageCards';

import PageNav from './PageNav';

import '../../Styles/Main.css';

const limitItens = 3;

function Main() {
  const [actualPage] = useState(1);
  const [pageLimit] = useState(limitItens);
  const { allCountries, setAllCountries } = useContext(flagContext);

  useEffect(() => {
    getAllCountries(setAllCountries);
  }, []);

  return (
    <main>
      <div className="flag-page">
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
      <PageNav currentPage={ actualPage } />
    </main>
  );
}

export default Main;
