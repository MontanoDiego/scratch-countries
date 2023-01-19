import React, { useState } from 'react';
import CountryCards from '../CountryCards/CountryCards.js';
import Search from '../Search/Search.js';
import { useCountries } from '../../hooks/useCountries.js';
import './Main.css';

export default function Main() {
  const countries = useCountries();

  const [filter, setFilter] = useState('All');

  const defaultDisplay = countries.map((country) => (
    <CountryCards key={country.id} {...country} />
  ));


  function filterHandler(D) {
    if (D === 'All') {
      return defaultDisplay;
    } else {
      const filteredDisplay = filter.map((country) => (
        <CountryCards key={country.id} {...country} />
      ));
      return filteredDisplay;
    }
  }

  return (
    <>
      <h1>Countries of the World!</h1>
      <Search filter={filter} setFilter={setFilter} />
      <div className='countries-container'>
        {filterHandler(filter)}
      </div>
    </>
  );
}
