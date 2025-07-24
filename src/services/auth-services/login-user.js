import { api } from '../axios-global';

// Function to log in a user
export const loginUser = async data => {
  const reponse = await api.post('/api/web_clone/login', data , {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 1234, // Ensure you have the API key set in your environment variables
    },
  });
  return reponse.data; // Return the response data containing user information or tokens
};
