import React from 'react';
import './CountryCards.css';

export default function CountryCards({ name, iso2, iso3, local_name, continent }) {
  return (
    <div className='cardContainer'>
      <div className='card'>
        <img src={`https://flagcdn.com/w40/${iso2.toLowerCase()}.png`} width="40" alt={name}></img>
      </div>
    </div>
  );
}
