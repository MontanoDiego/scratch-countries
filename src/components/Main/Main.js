import React from 'react';
import CountryCards from '../CountryCards/CountryCards.js';
import Search from '../Search/Search.js';
import { useCountries } from '../../hooks/useCountries.js';

export default function Main() {
  const countries = useCountries();

  return (
    <>
      <h1>Countries of the World!</h1>
      <Search />
      {countries.map((country) => (
        <CountryCards key={country.id} {...country} />
      ))}
    </>
  );
}
