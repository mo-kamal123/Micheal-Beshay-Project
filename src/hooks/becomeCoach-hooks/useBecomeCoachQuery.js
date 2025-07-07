import { useMutation } from '@tanstack/react-query';
import { becomeCoach } from '../../services/becomeCoach-services/become-coach-services';

// Custom hook for becoming a coach using React Query's useMutation
export const useBecomeCoach = () => {
  return useMutation({
    mutationFn: becomeCoach,
    onSuccess: () => {
      // Handle successful coach confirmation, e.g., show a success message
      console.log('data confirming successfully:', data);
    },
  });
};
