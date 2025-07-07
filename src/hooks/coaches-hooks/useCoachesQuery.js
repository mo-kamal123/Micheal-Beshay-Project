import { useQuery } from '@tanstack/react-query';
import { coachesServices } from '../../services/coaches-services/coaches-services';

export const useCoachesQuery = coachId => {
  return useQuery({
    queryKey: ['coaches', coachId],
    queryFn: () => {
      if (coachId) {
        return coachesServices.getCoachDetails(coachId);
      } else {
        return coachesServices.getCoaches;
      }
    },
  });
};
