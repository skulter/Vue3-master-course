<script setup lang="ts">
import postDummy from '@/json/posts.json'
import { ref } from 'vue'
import PostTablePagination from './PostTablePagination.vue'

type Post = {
  id: number
  userId: number
  title: string
  body: string
}

const MAX_COUNT = 10 //한 페이지에 보여줄 TD

const posts = ref<Post[]>(postDummy)
const currentPage = ref(1)
const totalPages = ref(posts.value.length / MAX_COUNT)

/** methods */
const updatePage = (page: number) => (currentPage.value = page)
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
  <PostTablePagination
    :total-pages="totalPages"
    :current-page="currentPage"
    @update:current-page="updatePage"
  />
</template>
