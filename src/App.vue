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
      <KeepAlive>
        <router-view 
          :key="$route.fullPath"
        >
        </router-view>
      </KeepAlive>
    </BaseLayout>
  </div>
</template>

