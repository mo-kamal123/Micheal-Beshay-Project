import api from "../axios-global"

export const userServices = {
    getUserData: async (id) => {
            const response = await api.get(`user/${id}`)
            return response.data
    },
    updateUserData: async (id, data) => {
            const response = await api.put(`user/${id}`, data)
            return response.data
    },
    getUserSessions: async (id) => {
            const response = api.get(`user/${id}/sessions`)
            return response.data
    },
    sendFeedBack: async (sessionId, userId, data) => {
        const response = await api.post(`/user/${userId}/session/${sessionId}/feedback`, data)
        return response.data
    }
}