import React, { useState } from 'react';
import CountryCards from '../CountryCards/CountryCards.js';
import Search from '../Search/Search.js';
import { useCountries } from '../../hooks/useCountries.js';
import './Main.css';

export default function Main() {
  const { countries, error } = useCountries();

  const [filter, setFilter] = useState('All');

  


  function filterHandler(data) {
    if (data === 'All') {
      return countries.map((country) => (
        <CountryCards key={country.id} {...country} />
      ));
    } else {
      return filter.map((country) => (
        <CountryCards key={country.id} {...country} />
      ));
    }
  }

  return (
    <>
      <h1>Countries of the World!</h1>
      <Search setFilter={setFilter} />
      <div className='countries-container'>
        {filterHandler(filter)}
      </div>
      {error}
    </>
  );
}
