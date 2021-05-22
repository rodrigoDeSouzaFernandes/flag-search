import React, { useState, useEffect } from 'react';

import { getCapitals, getLanguages,
  getCountry, getCallingCodes, regions } from '../../Services/api-request';

import '../../Styles/Filter.css';

function Filter() {
  const filterOptions = ['Região', 'Capital', 'Língua', 'País', 'Código de ligação'];

  const [subFilter, setSubfilter] = useState([]);
  const [selectFilter, setSelectFilter] = useState('none');

  const handleChange = ({ target }) => {
    setSelectFilter(target.value);
  };

  const chooseFilter = () => {
    console.log(subFilter.length);
    if (selectFilter === 'none') return setSubfilter([]);
    if (selectFilter === 'Região') return setSubfilter(regions);
    if (selectFilter === 'Capital') return getCapitals(setSubfilter);
    if (selectFilter === 'Língua') return getLanguages(setSubfilter);
    if (selectFilter === 'País') return getCountry(setSubfilter);
    if (selectFilter === 'Código de ligação') return getCallingCodes(setSubfilter);
  };

  useEffect(() => {
    chooseFilter();
  }, [selectFilter]);

  return (
    <form className="filterForm">
      <label htmlFor="mainFilter">
        Filtar por
        <select
          placeholder="selecione"
          onChange={ handleChange }
          value={ selectFilter }
        >
          <option value="none">Escolha uma opção</option>
          {filterOptions.map((elem, index) => (
            <option value={ elem } key={ index }>{elem}</option>
          ))}
        </select>
      </label>
      {
        subFilter.length === 0
          ? ''
          : (
            <label htmlFor="subFilter">
              {selectFilter}
              <select>
                <option>
                  {`Escolha por ${selectFilter}`}
                </option>
                {
                  subFilter.map((elem, i) => {
                    if (elem !== '') {
                      return (
                        <option
                          key={ `${elem} ${i}` }
                          value={ elem }
                        >
                          {elem}
                        </option>
                      );
                    }
                    return '';
                  })
                }
              </select>
            </label>
          )
      }
      <button
        type="button"
      >
        Pesquisar
      </button>
    </form>
  );
}

export default Filter;
