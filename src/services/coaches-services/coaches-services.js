import { api } from '../axios-global';

export const coachesServices = {
  getCoaches: async () => {
    const response = await api.get('coaches');
    return response.data;
  },
  getCoachDetails: async id => {
    const response = await api.get(`coach/${id}`);
    return response.data;
  },
};
