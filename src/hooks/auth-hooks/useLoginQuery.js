import { useMutation } from "@tanstack/react-query"
import { loginUser } from "../../services/auth-services/login-user"
import { changeStorage } from "../../utils/change-local-storage";


// Custom hook for user login using React Query's useMutation
export const  useLogin = () => {
    return useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => {
            // Handle successful login, e.g., store user data or tokens
            console.log("Login successful:", data);
            // changeStorage("token", JSON.stringify(data.token));
        }
    })
}