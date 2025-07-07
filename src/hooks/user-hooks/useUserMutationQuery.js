import { useMutation } from '@tanstack/react-query';
import { userServices } from '../../services/user-services/user-services';

export const useUserMutationQuery = () => {
  return useMutation({
    mutationFn: ({ sessionId, userId, data }) => {
      if (sessionId) {
        return userServices.sendFeedBack(sessionId, userId, data);
      } else {
        return userServices.updateUserData(data);
      }
    },
  });
};
