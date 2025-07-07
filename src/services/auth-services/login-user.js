import { api } from '../axios-global';

// Function to log in a user
export const loginUser = async data => {
  const reponse = await api.post('/auth/login', data);
  return reponse.data; // Return the response data containing user information or tokens
};
