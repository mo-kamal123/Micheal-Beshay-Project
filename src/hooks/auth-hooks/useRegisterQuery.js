import { useMutation } from "@tanstack/react-query"
import { registerUser } from "../../services/auth-services/register-user"
import { changeStorage } from "../../utils/change-local-storage";


export const useRegister = () => {
    return useMutation({
        mutationFn: registerUser,
        onSuccess: (data) => {
            // Handle successful registration, e.g., store user data or tokens
            console.log("Registration successful:", data);
            changeStorage("token", JSON.stringify(data.token));
        },
    })
}