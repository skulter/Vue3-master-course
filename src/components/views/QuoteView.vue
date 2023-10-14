<script>
  import { getQuote } from "../../apis/getQuotes"
  import BaseLayout from "../ui/Layout/BaseLayout.vue";
  import BaseIndicator from "../ui/common/BaseIndicator.vue"

  export default {
    components: { 
      BaseLayout,
      BaseIndicator
    },
    data: function(){
      return {
        quote: {
          meta: {
            isLoading: false
          }
        }
      }
    },
    computed: { 
      quoteId() {
        console.log(this.$route.params)
        return this.$route.params.id;
      },
      randomId(){
        return ~~(Math.random()* 100)
      },
      isLoading(){ 
        return this.quote.meta.isLoading;
      }
    },
    async created() {
        try {
          this.quote.meta.isLoading = true 
          const quote = await getQuote(this.quoteId)
          this.quote = quote;
          this.quote.meta.isLoading = false;
        }
        catch(e) {
          if(e.response.status === 404) {
            this.$router.replace({name: "homePage"})
          }
        }
    },
    
}
</script>
 
<template>
  <BaseLayout>
    <div class="px-40 py-24 items-center flex justify-center flex-col-reverse lg:flex-row gap-16">
      <div class="flex w-full relative pb-12 justify-center items-center">
        <BaseIndicator
          v-if="isLoading"
        />
        <div 
          class="relative"
          v-else
        >
          <div class="absolute">
            <div>
              <h1 class="my-2 text-gray-700 font-bold text-2xl">
                  {{ quoteId }} 명언 살펴보기
              </h1>
              <p class="my-2 text-gray-700">어딜 가야 할까</p>
              <button class="my-2 border rounded md py-4 px-8 text-center bg-vue-green text-white hover:bg-vue-green focus:outline-none focus:ring-2 focus:ring-vue-green focus:ring-opacity-50">랜덤 명언 찾기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>