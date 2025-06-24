import { api } from '../axios-global';

// Function to log in a user
export const loginUser = async (email, password) => {
  const reponse = await api.post('/auth/login', {
    email,
    password,
  });
  return reponse.data; // Return the response data containing user information or tokens
};
