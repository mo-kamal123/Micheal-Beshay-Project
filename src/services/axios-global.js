import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://stg.michaelbeshay.com',
  headers: {
    'Content-Type': 'application/json',
  },
});
