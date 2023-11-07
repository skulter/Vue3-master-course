<script>
  import SearchInput from '../ui/Search/SearchInput.vue';
  import BaseIndicator from "@/components/ui/common/BaseIndicator.vue";
  import BaseCard from "@/components/ui/common/BaseCard.vue";
import { computed, defineComponent, ref } from 'vue';

  export default defineComponent({
    name: "SearchView",
    components: {
      SearchInput,
      BaseIndicator,
      BaseCard,
    },
    setup() {
      const isSearching = ref();
      const searchLists = ref([]);
      
      const boxHeight = computed(() => {
        if(isSearching.value) {
          return "108px"
        }
        return "500px"
      })

      const onSearchStart = () => {
        isSearching.value = true;
      }
      
      const onSearchEnd = (lists) => {
        searchLists.value = lists;
        isSearching.value = false;
      }

      return {
        isSearching,
        searchLists,
        boxHeight,
        onSearchStart,
        onSearchEnd
      }
    },

  })
</script>

<template>
  <div>
    <section class="p-10 flex justify-center">
      <SearchInput
        @on-search-start="onSearchStart"
        @on-search-end="onSearchEnd"
      />
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
          data-v-else
          class="flex flex-col gap-5"
        >
          <template v-if="searchLists.length > 0">
            <base-card
              v-for="item in searchLists"
              :key="item._id"
              :author="item.author"
              :content="item.content"
              :card-id="item._id"
            />
          </template>
          <div v-else>
            <div>검색 결과가 없습니다. 다른 명언을 검색해보세요.</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template> 
