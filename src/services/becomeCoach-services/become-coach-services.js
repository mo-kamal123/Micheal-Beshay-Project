import { api } from '../axios-global';

// This function handles the process of becoming a coach by sending the necessary data to the server
export const becomeCoach = async coachData => {
    // Make a GET request to the '/become-coach' endpoint with the provided coach data
    const response = await api.get('/become-coach', coachData);
    // Return the response data containing the result of the coach confirmation
    return response.data;
};
