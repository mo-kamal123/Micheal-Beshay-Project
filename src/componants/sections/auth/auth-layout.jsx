import { Link, Outlet, useLocation } from 'react-router-dom';
import clasess from './auth-layout.module.css';
import logo from '../../../assets/home-imgs/logo.png';
import { useState } from 'react';
const AuthLayout = () => {
  const [active, setActive] = useState('login');
  const { pathname } = useLocation(); // Gets current URL path
  const isRegisterRoute = pathname === '/auth/register'; // Checks if the current route is the register route

  return (
    <div className="flex justify-between min-h-svh w-[90%] m-auto md:p-10">
      <div className={`${clasess.authImg} hidden md:block relative w-1/2 rounded-2xl`}>
        <div className="absolute top-0 left-0 w-full h-full bg-[#00296B]/30 z-10"></div>
        <div className="absolute bottom-10 left-10 z-20">
          <h1 className="text-[35px] text-white font-[700] ">Lorem Ipsum is simply </h1>
          <p className="text-[24px]  text-white">Lorem Ipsum is simply </p>
        </div>
      </div>
      <div className="md:w-[40%] flex flex-col items-center justify-center gap-8">
        <Link to="/">
          <img className="w-16 md:absolute top-10 right-10 rounded-full" src={logo} alt="logo" />
        </Link>
        <div className="flex flex-col items-center gap-5">
          <h2 className="font-[700]  text-[24px] ">Welcome to lorem..!</h2>
          <div className="flex justify-around items-center w-[300px] py-2 px-1 bg-[#00296B]/10 rounded-4xl">
            <Link
              to="/auth"
              onClick={() => setActive('login')}
              className={`${active === 'login' && !isRegisterRoute ? 'bg-main text-white' : 'text-main'} px-10 py-2 rounded-4xl`}
            >
              Login
            </Link>
            <Link
              to="/auth/register"
              onClick={() => setActive('register')}
              className={`${active === 'register' || isRegisterRoute ? 'bg-main text-white' : 'text-main'} px-10 py-2 rounded-4xl`}
            >
              Register
            </Link>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
