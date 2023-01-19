import React from 'react';
import CountryCards from '../CountryCards/CountryCards.js';
import Search from '../Search/Search.js';
import { useCountries } from '../../hooks/useCountries.js';
import './Main.css';

export default function Main() {
  const countries = useCountries();

  return (
    <>
      <h1>Countries of the World!</h1>
      <Search />
      <div className='countries-container'>
        {countries.map((country) => (
          <CountryCards key={country.id} {...country} />
        ))}
      </div>
    </>
  );
}
