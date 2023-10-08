<script>
  import BaseNav from './BaseNav.vue';
  
  export default {
    components: {
      BaseNav,
    }
  }
</script>

<template>
  <div class="flex">
    <BaseNav />
    <div class="w-full">
      <div class="w-full px-5 text-center py-1 h-6 text-base"> Tab name </div>
      <slot></slot>
    </div>
  </div>
</template>