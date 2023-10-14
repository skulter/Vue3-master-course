<script>
  import { getQuote } from "../../apis/getQuotes"
  import BaseLayout from "../ui/Layout/BaseLayout.vue";
  import BaseIndicator from "../ui/common/BaseIndicator.vue";
  import QuoteCard from "../ui/Quote/QuoteCard.vue";
  import { getSingleRandomQuote } from "../../apis/getRandom";

  export default {
    components: { 
      BaseLayout,
      BaseIndicator,
      QuoteCard,
    },
    data: function(){
      return {
        quote: {
          meta: {
            isLoading: false
          },
          data: null
        },
        random: {
          meta: {
            isLoading: false,
          }
        }
      }
    },
    methods: {
      onClickRandom: async function() {
        this.random.meta.isLoading = true;
        const data = await getSingleRandomQuote();
        this.random.meta.isLoading = false;
        this.$router.push(data._id);
      }
    },
    computed: { 
      quoteId() {
        return this.$route.params.id;
      },
      randomId(){
        return ~~(Math.random()* 100)
      },
      isLoading(){ 
        return this.quote.meta.isLoading;
      },
      isRandomLoading() {
        return this.random.meta.isLoading;
      },
    },
    async created() {
        try {
          this.quote.meta.isLoading = true 
          const quote = await getQuote(this.quoteId)
          this.quote.data = quote;
          this.quote.meta.isLoading = false;
        }
        catch(e) {
          if(e.response?.status === 404) {
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
          v-else
          class-="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto"
        >
          <QuoteCard :quote="quote"/>
          <section>
            <div class="flex justify-end">
              <button 
                @click="onClickRandom"
                class="my-5 border rounded md py-4 px-8 text-center 
                 text-white hover:bg-emerald-400  focus:outline-none focus:ring-2 focus:ring-vue-green focus:ring-opacity-50"
                :disabled="isRandomLoading"
                :class="{
                  'bg-emerald-500': !isRandomLoading,
                  'bg-emerald-400': isRandomLoading
                }"
              >
                <span v-if="!isRandomLoading">랜덤 명언 찾기</span>
                <BaseIndicator
                  v-else
                />
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>