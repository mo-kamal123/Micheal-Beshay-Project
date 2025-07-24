import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://stg.michaelbeshay.com',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': 1234, // Ensure you have the API key set in your environment variables
  },
});
