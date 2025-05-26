import { Navigate } from 'react-router-dom';
import AuthLayout from '../componants/sections/auth/auth-layout';
import { useSelector } from 'react-redux';

const Auth = () => {
  const loggedIn = useSelector(state => state.auth.loggedIn);
  console.log(loggedIn);
  return <div>{loggedIn ? <Navigate to="/" replace /> : <AuthLayout />}</div>;
};

export default Auth;
