<script setup lang="ts">
import { usePostStore } from '@/store/post'
import { computed } from 'vue'

interface PostTablePaginationProps {
  currentPage: number
}

const props = defineProps<PostTablePaginationProps>()
const postStore = usePostStore()
/** computed value */
const pages = computed(() => {
  if (props.currentPage + 1 < 6) {
    if (postStore.totalPages < 6) {
      return Array.from({ length: 5 }, (_, i) => i + 1) // [1,2,3,4,5];
    }

    return [1, 2, 3, 4, '...', postStore.totalPages]
  }

  if (props.currentPage >= postStore.totalPages - 1) {
    return [1, 2, '...', postStore.totalPages - 1, postStore.totalPages]
  }

  return [1, 2, '...', props.currentPage, '....', postStore.totalPages]
})
</script>

<template>
  <div class="py-6 mx-auto">
    <nav aria-label="pagination">
      <div class="flex items-center space-x-1">
        <a
          v-if="currentPage > 1"
          @click="$emit('update:currentPage', Math.max(currentPage - 1, 0))"
          href="#"
          class="flex items-center px-4 py-2 border-neutral-500 bg-neutral-700 hover:bg-neutral-600 rounded-md"
        >
          Previous
        </a>
        <a
          v-for="page in pages"
          :class="[
            'px-4 py-2 border-neutral-50 hover:bg-neutral-500 rounded-md',
            {
              'bg-neutral-500': page == currentPage,
              'bg-neutral-700': page != currentPage
            }
          ]"
          @click="
            $emit(
              'update:currentPage',
              Math.max(Number.isInteger(page) ? Number(page) : currentPage, 0)
            )
          "
        >
          {{ Number.isInteger(page) ? Number(page) : '...' }}
        </a>
        <a
          v-if="currentPage < postStore.totalPages"
          href="#"
          class="px-4 py-2 font-bold border-neutral-500 bg-neutral-700 hover:bg-neutral-600 rounded-md"
          @click="$emit('update:currentPage', currentPage + 1)"
        >
          Next
        </a>
      </div>
    </nav>
  </div>
</template>
