import { Outlet } from 'react-router-dom';
import CoachDetails from '../componants/sections/coach-profile/coach-details';
import CoachFeedback from '../componants/sections/coach-profile/coach-feedback';
import CoachInfo from '../componants/sections/coach-profile/coach-info';
import { useCoachesQuery } from '../hooks/coaches-hooks/useCoachesQuery';
import { useDispatch, useSelector } from 'react-redux';
import { setCoach } from '../store/coach-slice/coach-slice';

const CoachProfile = () => {
  const coach = useSelector(state => state.coach);
  const dispach = useDispatch();
  const { data, isError, isLoading } = useCoachesQuery(coach.id);
  if (data) {
    dispach(setCoach(coach));
  }
  return (
    <div className="bg-body">
      <CoachInfo coach={coach} />
      <Outlet />
    </div>
  );
};

export default CoachProfile;
