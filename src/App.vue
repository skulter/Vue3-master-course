<script>
  import BaseLayout from "./components/ui/Layout/BaseLayout.vue";
  import { defineComponent } from "vue";

  // defineComponent 의 prop-types 기능 보여주기
  /**
  export default defineComponent({
    props: {
      user: Object as PropType<User>
    },
    setup(props) {
      // `props.user` is automatically typed as `User`
      console.log(props.user.name);
    }
  });
   */
  export default defineComponent({
    name: "App", 
    components: {
      BaseLayout,
    },
  })
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

