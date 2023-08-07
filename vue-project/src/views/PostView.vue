<script setup lang="ts">
import type { Post } from '@/types'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const post = ref<Post>({} as Post) // < - we will fix this later

const image = { array: [] }

const movePage = (to: 'next' | 'prev') => {
  const postId = Number(route.params.id)

  // check max page with dynamic number (later!! )
  if (to == 'next' && postId < 100) {
    router.push(`${Number(route.params.id) + 1}`)
  } else if (to == 'prev' && postId > 1) {
    router.push(`${Number(route.params.id) - 1}`)
  }
}
</script>

<template>
  <div class="my-10 bg-slate-800 rounded-3xl">
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ post.title }}</div>
        <p class="text-orange-300 text-base">
          {{ post.body }}
        </p>
      </div>

      <div class="px-6 pt-4 pb-2 flex justify-between items-center text-blue-400">
        <button
          @click="movePage('prev')"
          class="bg-transparent hover:bg-blue-500 text-blue-400 font-semibold hover:text-white py-2 px-4 border border-blue-400 hover:border-transparent rounded"
        >
          &lt;
        </button>
        <span>{{ route.params.id }}</span>
        <button
          @click="movePage('next')"
          class="bg-transparent hover:bg-blue-500 text-blue-400 font-semibold hover:text-white py-2 px-4 border border-blue-400 hover:border-transparent rounded"
        >
          >
        </button>
      </div>
    </div>
  </div>
</template>
