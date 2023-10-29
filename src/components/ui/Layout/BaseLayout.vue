<script>
  import BaseNav from './BaseNav.vue';
  
  export default {
    components: {
      BaseNav,
    },
    computed: {
      pageTitle() {
        return this.$route.meta.pageTitle
      }
    }
  }
</script>

<template>
  <div
    class="bg-gradient-to-b from-transparent via-stone-100 to-green-100"
		:style="{height: 'window.innerHeight'}"
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