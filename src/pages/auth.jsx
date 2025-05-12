import { Navigate } from "react-router-dom"
import AuthLayout from "../componants/sections/auth/auth-layout"

const Auth = ({isAuthenticated}) => {
  return isAuthenticated ?
  <Navigate to="/" replace />
   : (
    <div>
        <AuthLayout />
    </div>
  )
}

export default Auth