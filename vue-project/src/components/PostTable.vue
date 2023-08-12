<script setup lang="ts">
import router from '@/router'
import { usePostStore } from '@/store/post'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import PostTablePagination from './PostTablePagination.vue'

const MAX_COUNT = 10 //한 페이지에 보여줄 TD

const postStore = usePostStore()
const currentPage = ref(1)
const { posts } = storeToRefs(postStore)
/** methods */
const updatePage = (page: number) => (currentPage.value = page)
postStore.fetchPosts()

const gotoPage = (id: number) => {
  router.push({ name: 'PostView', params: { id } })
}
</script>

<template>
  <table class="text-left text-sm font-light">
    <thead class="border-b font-medium border-neutral-500 bg-neutral-600">
      <tr>
        <th class="px-6 py-4 uppercase">id</th>
        <th class="px-6 py-4 uppercase">user</th>
        <th class="px-6 py-4 uppercase">title</th>
        <th class="px-6 py-4 uppercase">content</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="post in posts.slice(MAX_COUNT * (currentPage - 1), MAX_COUNT * currentPage)"
        :key="post.id"
        class="border-b transition duration-300 ease-in-out border-neutral-500 bg-neutral-700 hover:bg-neutral-600"
        @click="gotoPage(post.id)"
      >
        <td class="px-6 py-4 text-center">{{ post.id }}</td>
        <td class="px-6 py-4 text-center">{{ post.userId }}</td>
        <td class="px-6 py-4 text-left truncate overflow-hidden max-w-[300px]">{{ post.title }}</td>
        <td class="px-6 py-4 text-left truncate overflow-hidden max-w-screen-sm">
          {{ post.body }}
        </td>
      </tr>
    </tbody>
  </table>
  <PostTablePagination :current-page="currentPage" @update:current-page="updatePage" />
</template>
