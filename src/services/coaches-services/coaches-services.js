import axios from 'axios';

export const coachesServices = {
  getCoaches: async () => {
    try {
      const response = await axios.get('coaches');
      return response.data;
    } catch (error) {
      console.error('failed to get all coaches:', error);
      throw error;
    }
  },
  getCoachDetails: async (id) => {
    try {
        const response = await axios.get(`coach/${id}`)
        return response.data        
    } catch (error) {
        console.error(`failed to get coach with id: ${id} `, error);
        throw error
    }
  }
};
