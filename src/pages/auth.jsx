import { Navigate } from "react-router-dom"
import AuthLayout from "../componants/sections/auth/auth-layout"

const Auth = ({isAuthenticated}) => {
  return(
    <div>
        <AuthLayout />
    </div>
  )
}

export default Auth