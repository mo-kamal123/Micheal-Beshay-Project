import { Navigate } from 'react-router-dom';
import AuthLayout from '../componants/sections/auth/auth-layout';
import { useSelector } from 'react-redux';

const Auth = () => {
  const loggedIn = useSelector(state => state.auth.loggedIn); // Access the loggedIn state from the Redux store

  console.log(loggedIn); // Debug log to check the loggedIn state

  // If the user is logged in, redirect to home page
  return <div>{loggedIn ? <Navigate to="/" replace /> : <AuthLayout />}</div>;
};

export default Auth;
