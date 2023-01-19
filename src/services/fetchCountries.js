import { checkError, client } from './client.js';

export async function fetchCountries() {
  const response = await client.from('countries').select('*');
  return checkError(response);
}