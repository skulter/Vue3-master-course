<script>
  import BaseLayout from "./components/ui/Layout/BaseLayout.vue";

  export default {
    name: 'App',
    components: {
      BaseLayout,
    }
  }
</script>


<template>
  <div id="app">
    <BaseLayout>
        <router-view 
          :key="$route.fullPath"
          v-slot="{Component}"
        >
          <KeepAlive>
            <component :is="Component"></component>
          </KeepAlive>
        </router-view>
    </BaseLayout>
  </div>
</template>

