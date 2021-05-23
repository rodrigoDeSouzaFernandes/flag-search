import React from 'react';

function detailsCard(country) {
  const { flag, name, population, region, subregion, capital, languages } = country;
  return (
    <div>
      <img src={ flag } alt={ `flag of ${name}` } />
      <div className="info">
        <p>{`Nome: ${name}`}</p>
        <p>{`Capital: ${capital}`}</p>
        <p>{`Região: ${region}`}</p>
        <p>{`Sub-região: ${subregion}`}</p>
        <p>{`População: ${population}`}</p>
        <ol>
          Línguas
          {languages.map(
            (language) => <li key={ language.iso639_1 }>{language.name}</li>,
          )}
        </ol>
      </div>
    </div>
  );
}

export default detailsCard;
