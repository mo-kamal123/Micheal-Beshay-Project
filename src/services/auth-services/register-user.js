import { api } from '../axios-global';

export const registerUser = async userData => {
  // Make a POST request to the registration endpoint with user data
  const response = await api.post('/api/web_clone/register', userData);

  // Return the response data containing user information or tokens
  return response.data;
};
