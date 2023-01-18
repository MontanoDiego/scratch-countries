import React from 'react';
import CountryCards from '../CountryCards/CountryCards.js';
import Search from '../Search/Search.js';

export default function Main() {
  return (
    <>
      <h1>Countries of the World!</h1>
      <Search />
      <CountryCards />
    </>
  );
}
