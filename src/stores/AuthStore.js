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
        }
    },
    persist: {
        enabled: true
      }
})