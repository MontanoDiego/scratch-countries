import { useEffect, useState } from 'react';
import { fetchCountries } from '../services/fetchCountries.js';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchCountries();
        setCountries(response);
      } catch (e) {
        setError('Something went catastrophic! The bombs are going off soon!');
      }
    };
    fetchData();
  }, []);
  return { countries, error };
}