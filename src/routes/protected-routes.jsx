import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
  const isAuthenticated = useSelector(state => state.auth.loggedIn); // Access the loggedIn state from the Redux store

  console.log(isAuthenticated); // Debug log to check the isAuthenticated state

  // If the user is authenticated, render the Outlet (child routes)
  return isAuthenticated ? <Outlet /> : <Navigate to="/auth" replace />;
};
