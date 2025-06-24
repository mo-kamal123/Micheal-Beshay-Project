import { api } from '../axios-global';

// This function handles the process of sending a contact message by making a POST request to the server
export const contactUs = async data => {
    // Make a POST request to the '/contact' endpoint with the provided data
    const response = await api.post('/contact', data);

    return response.data;

};
