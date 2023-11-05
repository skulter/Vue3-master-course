<script>
  import BaseIndicator from "../ui/common/BaseIndicator.vue";
  import QuoteCard from "../ui/Quote/QuoteCard.vue";
  import { FAVORITE_QUOTE_KEY } from "../../constants/token";
  import { getSingleRandomQuote } from "../../apis/getRandom";
  import { createNamespacedHelpers } from "vuex";
  
  const { mapActions, mapGetters, mapState } = createNamespacedHelpers("quote");
  export default {
    components: { 
      BaseIndicator,
      QuoteCard,
    },
    props: {
      quoteProps: {
        type: Object
      }
    },
    data: function(){
      return {
        random: {
          meta: {
            isLoading: false,
            fetchedAlready: false,
          }
        },
        isFavoriteQuote: false,
      }
    },
    methods: {
      onClickRandom: async function() {
        this.random.meta.isLoading = true;
        const data = await getSingleRandomQuote();
        this.random.meta.isLoading = false;
        this.$router.push(data._id);
      },
      checkisFavoriteQuote() {
        try {
          const savedQuotes = JSON.parse(localStorage.getItem(FAVORITE_QUOTE_KEY));
          
          if(savedQuotes.some(({_id}) => {
              return _id == this.quoteId
          })) {
            return true;
          }
          return false;
        }
        catch {
          return false;
        }
      },
      toggleFavoriteQuotes(quote) {
        try {
          const saved = JSON.parse(localStorage.getItem(FAVORITE_QUOTE_KEY));
          let set = new Set(saved);

          if(this.checkisFavoriteQuote()) {
            const removed = saved.filter(({_id}) => _id !== quote.data._id);
            set = new Set(removed);
            this.isFavoriteQuote = false;
          } else {
            set.add(quote.data);
            this.isFavoriteQuote = true;
          }
          localStorage.setItem(FAVORITE_QUOTE_KEY, JSON.stringify(Array.from(set.values())));
        }
        catch (e){
          //
        }
      },
      ...mapActions(['loadQuoteData'])
    },
    computed: {
      quoteId() {
        return this.$route.params.id;
      },
      randomId(){
        return ~~(Math.random()* 100)
      },
      isRandomLoading() {
        return this.random.meta.isLoading;
      },
      ...mapGetters(['quoteById']),
      ...mapState({
        isLoading: state => {
          return state.isLoading;
        }
      }),
      quote() {
        return this.quoteById(this.quoteId);
      }
    },
    async created() {
        if(this.quote){
          return;
        }

        try {
          await this.loadQuoteData(this.quoteId)
        }
        catch(e) {
          if(e.response?.status === 404) {
            this.$router.replace({name: "homePage"})
          }
        }
        
        this.isFavoriteQuote = this.checkisFavoriteQuote();
    },
}
</script>
 
<template>
  <div class="px-40 py-24 items-center flex justify-center flex-col-reverse lg:flex-row gap-16">
    <div class="flex w-full relative pb-12 justify-center items-center">
      <BaseIndicator
        v-if="isLoading"
      />
      <div 
        v-else
        class-="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto"
      >
        <QuoteCard 
          v-if="quote" 
          :quote="quote"
        />
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
            <div class="ml-4 flex">
              <button 
                class="focus:outline-none"
                @click="toggleFavoriteQuotes(quote)"
              >
                <i 
                  class="fas fa-star hover:text-yellow-300 text-xic"
                  :class="{
                    'text-yellow-300': isFavoriteQuote,
                    'text-gray-500': !isFavoriteQuote
                  }"
                ></i>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>