import { Outlet } from 'react-router-dom';
import CoachDetails from '../componants/sections/coach-profile/coach-details';
import CoachFeedback from '../componants/sections/coach-profile/coach-feedback';
import CoachInfo from '../componants/sections/coach-profile/coach-info';

const CoachProfile = () => {
  return (
    <div className="bg-body">
      <CoachInfo />
      <Outlet />
    </div>
  );
};

export default CoachProfile;
