import { useMutation } from "@tanstack/react-query"
import { userServices } from "../../services/user-services/user-services"

export const useUserMutationQuery = (sessionId, userId, data) => {
    return useMutation({
        mutationFn: () => {
            if (sessionId) {
                return userServices.sendFeedBack(sessionId, userId, data)
            } else {
                return userServices.updateUserData(userId, data)
            }
        }
    })
}