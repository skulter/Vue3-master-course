<script setup>
  import BaseIndicator from "../ui/common/BaseIndicator.vue";
  import QuoteCard from "../ui/Quote/QuoteCard.vue";
  import { FAVORITE_QUOTE_KEY } from "../../constants/token";
  import { getSingleRandomQuote } from "../../apis/getRandom";
  import { createNamespacedHelpers, useStore } from "vuex";
  import { onMounted, ref, computed } from "vue";
  import { useRouter, useRoute } from "vue-router";
  
  const {  mapGetters, mapState } = createNamespacedHelpers("quote");
  const random = ref({meta: {
    isLoading: false,
    fetchedAlready: false
  }});
  const router = useRouter();
  const route = useRoute();  
  const store = useStore();

  const checkisFavoriteQuote = () => {
    try {
      const savedQuotes = JSON.parse(localStorage.getItem(FAVORITE_QUOTE_KEY));
      
      if(savedQuotes.some(({_id}) => {
          return _id == quoteId
      })) {
        return true;
      }
      return false;
    }
    catch {
      return false;
    }
  }

  const isFavoriteQuote = ref(checkisFavoriteQuote());
  const onClickRandom = async () => {
    random.value.meta.isLoading = false;
    const data = await getSingleRandomQuote();
    random.value.meta.isLoading = false;
    router.push(data._id);
  }

  

  const toggleFavoriteQuotes = (quote) => {
    try {
      const saved = JSON.parse(localStorage.getItem(FAVORITE_QUOTE_KEY));
      let set = new Set(saved);

      if(checkisFavoriteQuote()) {
        const removed = saved.filter(({_id}) => _id !== quote._id);
        set = new Set(removed);
        isFavoriteQuote.value = false;
      } else {
        set.add(quote);
        isFavoriteQuote.value = true;
      }
      localStorage.setItem(FAVORITE_QUOTE_KEY, JSON.stringify(Array.from(set.values())));
    }
    catch (e){
      //
    }
  }

  const loadQuoteData = (id) => store.dispatch("quote/loadQuoteData",id);
  const getterMapper = mapGetters(["quoteById"]);
  const getters = Object.keys(getterMapper).reduce((acc,curr) => {
    acc[curr] = computed(getterMapper[curr].bind({$store: store}))
    return acc;
  },{})
  const {quoteById} = getters;
  const stateMapper = mapState(["isLoading"]);
  const { isLoading } = Object.keys(stateMapper).reduce((acc,curr) => {
    acc[curr] = computed(stateMapper[curr].bind({$store: store}))
    return acc;
  },{})
  const quoteId = route.params.id;
  const isRandomLoading = computed(() => random.value.meta.isLoading)
  const quote = computed(() => quoteById.value(quoteId));

  onMounted(async () => {
    if(quote.value) {
      return;
    }
    try {
      await loadQuoteData(quoteId);
    }  catch(e) {
      if(e.response?.status === 404) {
        router.replace({name: "homePage"})
      }
    }
    isFavoriteQuote.value = checkisFavoriteQuote();  
  })
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