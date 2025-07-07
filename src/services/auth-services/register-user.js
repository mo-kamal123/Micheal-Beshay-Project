import axios from 'axios';
export const registerUser = async userData => {
  // Make a POST request to the registration endpoint with user data
  const response = await axios.post('/auth/register', userData);

  // Return the response data containing user information or tokens
  return response.data;
};
