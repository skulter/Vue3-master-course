import { http } from '@/api/config'
import type { Post } from '@/types'
import { defineStore } from 'pinia'

export const usePostStore = defineStore('post', {
  state: () => ({
    posts: [] as Post[]
  }),
  getters: {
    totalPages(state) {
      return state.posts.length
    }
  },
  actions: {
    async fetchPosts() {
      console.log('fetch posts')
      const { data } = await http.get('/posts')
      this.setPosts(data)
    },
    setPosts(posts: Post[]) {
      this.posts = posts
    }
  }
})
