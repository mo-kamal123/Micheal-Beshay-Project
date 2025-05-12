import { useState } from "react";
import YourProfile from "../componants/sections/user-profile/your-profile";
import YourSesstions from "../componants/sections/user-profile/your-sessions";
import YourWallet from "../componants/sections/user-profile/your-wallet";
import { Link, Outlet, useLocation } from "react-router-dom";

const UserProfile = () => {
  const [active, setActive] = useState('profile')
  const { pathname } = useLocation(); // Gets current URL path
  const currRoute = pathname ;
  console.log(currRoute);
  return (
    <div className="bg-body">
      <div className="w-[95%] md:w-[80%] m-auto py-20 flex flex-col gap-10">
        {currRoute !== '/profile/recharge-wallet' && <div className="bg-white md:w-[50%] p-4 flex items-center justify-between gap-5 rounded-4xl">
          <Link to='/profile' onClick={() => setActive('profile')} className={`${active === 'profile' && currRoute === '/profile' ? ' bg-main text-white ' :  ''}  px-3 py-2 rounded-4xl text-[13px]`}>
            Your Profile
          </Link>
          <Link to='/profile/sessions' onClick={() => setActive('sessions')} className={`${active === 'sessions' || currRoute === '/profile/sessions' ? ' bg-main text-white ' :  ''}  px-3 py-2 rounded-4xl text-[13px]`}>
            Your Sessions
          </Link>
          <Link to='/profile/wallet' onClick={() => setActive('wallet')} className={`${active === 'wallet' || currRoute === '/profile/wallet' ? ' bg-main text-white ' :  ''}  px-3 py-2 rounded-4xl text-[13px]`}>
            Your Wallet
          </Link>
        </div>}
          <Outlet />
        {/* {active === 'profile' && (
          <YourProfile /> 
        )}
        {active === 'sessions' && (
          <YourSesstions />
        )}
        {active === 'wallet' && (
          <YourWallet />
        )} */}
      </div>
    </div>
  );
};

export default UserProfile;
