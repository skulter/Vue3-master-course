<script setup lang="ts">
import { http } from '@/api/config'
import images from '@/assets/image'
import type { Post } from '@/types'
import { computed, ref } from 'vue'
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const post = ref<Post>({} as Post) // < - we will fix this later

// api를 호출해봅시다.
// watch(
//   () => route.params.id,
//   async () => {
//     const { data } = await http.get(`/posts/${route.params.id}`)
//     post.value = data
//   },
//   {
//     immediate: true
//   }
// )

// api 호출 두번째 방법! navigation guard
onBeforeRouteUpdate(async (to, from) => {
  if (to.params.id !== from.params.id) {
    const { data } = await http.get(`/posts/${to.params.id}`)
    post.value = data
  }
})

const imageSrc = computed(() => {
  const id = Number(route.params.id)
  return images.array[Math.ceil(id % 12)]
})

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
      <img :src="imageSrc" />
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
