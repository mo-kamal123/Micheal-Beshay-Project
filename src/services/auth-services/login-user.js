import axios from 'axios';

// Function to log in a user
export const loginUser = async (email, password) => {
  try {
    const reponse = await axios.post('/auth/login', {
      email,
      password,
    });
    return reponse.data; // Return the response data containing user information or tokens
  } catch (error) {
    console.error('Error logging in user:', error);
    throw error; // Re-throw the error for further handling
  }
};
