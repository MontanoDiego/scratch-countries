import React from 'react';
import './CountryCards.css';

export default function CountryCards({ name, iso2, local_name, continent }) {
  return (
    <div className='card-container'>
      <img src={`https://flagcdn.com/w80/${iso2.toLowerCase()}.png`} alt={name} className='flag'></img>
      <h3 className='name'>{name}</h3>
      <h2 className='iso'>{iso2}</h2>
      <h4 className='local'>{local_name}</h4>
      <h3 className='continent'>{continent}</h3>
    </div>
  );
}
