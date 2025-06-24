import axios from 'axios';

// This function handles the process of sending a contact message by making a POST request to the server
export const contactUs = async data => {
  try {
    // Make a POST request to the '/contact' endpoint with the provided data
    const response = axios.post('/contact', data);

    return response.data;
  } catch (error) {
    // Log the error to the console for debugging purposes
    console.error('Error in sending message:', error);
    // Re-throw the error for further handling by the caller
    throw error;
  }
};
