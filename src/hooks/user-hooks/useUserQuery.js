import { useQuery } from '@tanstack/react-query';
import { userServices } from '../../services/user-services/user-services';

export const useUserQuery = (userId, sessions) => {
  return useQuery({
    queryKey: ['user', sessions],
    queryFn: () => {
      if (sessions) {
        return userServices.getUserSessions(userId);
      } else if (userId) {
        return userServices.getUserData(userId);
      }
    },
  });
};

