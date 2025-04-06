import { updateProfile,changePassword } from "@/services/auth_service";
import { defineStore } from "pinia";

export const useAuthStore = defineStore('authStore', {
    state:  () => {
        return{
            user: {},
            isLoggedIn: !!localStorage.getItem('token'),
        }
    },
    getters: {
        isLoggedIn: () => !!localStorage.getItem('token') // Getter réactif
    },
    actions: {
        setUser(user) {
            this.user = user;
        },
        setToken(token) {
            localStorage.setItem('token', token);
            return token;
        },
        getToken() {
            return localStorage.getItem('token');
        },
        async handleUpdateProfile (data) {
            try {
                const response = await updateProfile(data)
                this.user = response.data.data
                console.log(this.user)
            } catch (error) {
                throw error
            }
        },
        async handleChangePassword (data) {
            try {
                await changePassword(data)
            } catch (error) {
                throw error
            }
        }
    },
    persist: {
        enabled: true
      }
})