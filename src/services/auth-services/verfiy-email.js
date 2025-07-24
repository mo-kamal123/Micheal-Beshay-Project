import { api } from "../axios-global"

export const verfiyEmail = async verification => {
    // Make a POST request to the verification endpoint with the verification data
    const response = await api.post('/api/web_clone/verification', verification)

    // Return the response data containing verification status or messages
    return response.data;
}