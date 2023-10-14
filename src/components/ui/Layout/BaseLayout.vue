<script>
  import BaseNav from './BaseNav.vue';
  
  export default {
    components: {
      BaseNav,
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
        <div class="w-full px-5 text-center py-1 h-6 text-base"> Tab name </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>