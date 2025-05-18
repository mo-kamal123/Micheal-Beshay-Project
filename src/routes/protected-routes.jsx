import { useSelector } from "react-redux";
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
  const isAuthenticated = useSelector((state) => state.auth.loggedIn ) 
  console.log(isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to="/auth" replace />;
};