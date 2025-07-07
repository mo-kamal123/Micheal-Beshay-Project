import { useState } from 'react';
import YourProfile from '../componants/sections/user-profile/your-profile';
import YourSesstions from '../componants/sections/user-profile/your-sessions';
import YourWallet from '../componants/sections/user-profile/your-wallet';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useUserQuery } from '../hooks/user-hooks/useUserQuery';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const [active, setActive] = useState('profile'); // Default active tab is 'profile'
  const user = useSelector(state => state.user); // Access user data from Redux store
  console.log('User Profile:', user); // Debug log to check user data
  const { data, isError, isLoading } = useUserQuery(user.id); // Custom hook to fetch user data, sessions, etc.
  const { pathname } = useLocation(); // Gets current URL path
  const currRoute = pathname; // Checks if the current route is the profile route
  console.log(currRoute); // Debug log to check the current route
  return (
    <div className="bg-body">
      <div className="w-[95%] md:w-[80%] m-auto py-20 flex flex-col gap-10">
        {currRoute !== '/profile/recharge-wallet' && (
          <div className="bg-white md:w-[50%] p-4 flex items-center justify-between gap-5 rounded-4xl">
            <Link
              to="/profile"
              onClick={() => setActive('profile')}
              className={`${active === 'profile' && currRoute === '/profile' ? ' bg-main text-white ' : ''}  px-3 py-2 rounded-4xl transition-all duration-300 text-[13px] md:text-[16px]`}
            >
              Your Profile
            </Link>
            <Link
              to="/profile/sessions"
              onClick={() => setActive('sessions')}
              className={`${active === 'sessions' || currRoute === '/profile/sessions' ? ' bg-main text-white ' : ''}  px-3 py-2 rounded-4xl transition-all duration-300 text-[13px] md:text-[16px]`}
            >
              Your Sessions
            </Link>
            <Link
              to="/profile/wallet"
              onClick={() => setActive('wallet')}
              className={`${active === 'wallet' || currRoute === '/profile/wallet' ? ' bg-main text-white ' : ''}  px-3 py-2 rounded-4xl transition-all duration-300 text-[13px] md:text-[16px]`}
            >
              Your Wallet
            </Link>
          </div>
        )}
        <Outlet />
      </div>
    </div>
  );
};

export default UserProfile;
