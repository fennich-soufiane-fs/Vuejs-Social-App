import { getPosts } from "@/services/post_service"
import { defineStore } from "pinia"

export const usePostStore = defineStore('postStore', {
    state: () => {
        return {
            posts: []
        }
    },
    actions: {
        async getPosts() {
            // if (this.posts.length > 0) return;
            try {
                const response = await getPosts()
                this.posts = response.data.data
            } catch (error) {
                throw error
            }
        }
    }
})