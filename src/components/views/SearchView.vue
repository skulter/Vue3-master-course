<script>
  import BaseLayout from '../ui/Layout/BaseLayout.vue';
  import SearchInput from '../ui/Search/SearchInput.vue';
  import BaseIndicator from "../ui/common/BaseIndicator";
  import BaseCard from "../ui/common/BaseCard";
  // import BaseCounter from "../ui/common/BaseCounter"
  export default {
    props: {
      
    },
    components: {
      BaseLayout,
      SearchInput,
      BaseIndicator,
      BaseCard,
      // BaseCounter
    },
    data: function() {
      return {
        isSearching: false
      }
    },
    computed: {
      boxHeight: function() {
        if(this.isSearching) {
          return "108px"
        }
        return  "500px"
      }
    }
  }
</script>

<template>
  <BaseLayout>
      <!-- <BaseCounter name="counter A"/>
      <BaseCounter name="counter B"/>
      <BaseCounter name="counter C"/> -->
    <section class="p-10 flex justify-center">
      <SearchInput/>
    </section>
    <section class="p-10 pt-0 flex justify-center align-middle">
      <div 
        class="flex  justify-center w-[700px] border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 transition-all duration-200 overflow-hidden overflow-y-scroll scrollbar-hide items-start p-10"
        :style="{
          height: boxHeight
        }"
      >
        <BaseIndicator
          v-if="isSearching"
        />
        <div 
          v-else
          class="flex flex-col gap-5"
        >
          <BaseCard/>
          <BaseCard/>
          <BaseCard/>
          <BaseCard/>
        </div>
      </div>
    </section>
  </BaseLayout>
</template>

<style>
</style>