<script>
  import { useQuoteStore } from '@/stores/quote';
import BaseNav from './BaseNav.vue';
  export default {
    components: {
      BaseNav,
    },
    computed: {
      pageTitle() {
        if(this.$route.name == "QuotePage") {
          const { quoteById } = useQuoteStore()
          return quoteById(this.$route.params.id)?.author ?? "...loading"
        }
        return this.$route.meta.pageTitle
      },
      innerHeight() {
        return window.innerHeight
      }
    }
  }
</script>

<template>
  <div
    class="bg-gradient-to-b from-transparent via-stone-100 to-green-100"
    :style="{ minHeight: `${innerHeight}px` }"
  >
    <div class="flex">
      <BaseNav />
      <div class="w-full h-full">
        <div class="w-full p-4 text-center h-9 text-md">{{ pageTitle }}</div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>
