import React, { useContext, useEffect } from 'react';
import flagContext from '../../Context/flagContext';

import { getAllCountries } from '../../Services/api-request';

function Main() {
  const { allCountries, setAllCountries } = useContext(flagContext);

  useEffect(() => {
    getAllCountries(setAllCountries);
  }, []);

  return (
    <main>
      oi
    </main>
  );
}

export default Main;
