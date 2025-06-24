import axios from 'axios';

// This function handles the process of becoming a coach by sending the necessary data to the server
export const becomeCoach = async coachData => {
  try {
    // Make a GET request to the '/become-coach' endpoint with the provided coach data
    const response = axios.get('/become-coach', coachData);
    // Return the response data containing the result of the coach confirmation
    return response.data;
  } catch (error) {
    // Log the error to the console for debugging purposes
    console.error('Error confirming new coach:', error);
    // Re-throw the error for further handling by the caller
    throw error;
  }
};
