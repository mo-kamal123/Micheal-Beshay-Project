export const registerUser = async userData => {
  try {
    // Make a POST request to the registration endpoint with user data
    const response = await axios.post('/auth/register', userData);

    // Return the response data containing user information or tokens
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error; // Re-throw the error for further handling
  }
};
