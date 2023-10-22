<script>
  import { FAVORITE_QUOTE_KEY } from "../../constants/token";
  export default {
    name: "FavoriteView",
    data() {
      return {
        quotes: [],
      }
    },
    methods: {
      getFavoriteQuotes() {
        try {
          const saved = JSON.parse(localStorage.getItem(FAVORITE_QUOTE_KEY));
          if(saved) {
            this.quotes = saved;
          }
        }
        catch {
          this.quotes = [];
        }
      }
    },
    created() {
      this.getFavoriteQuotes();
    }
  }
</script>

<template>
  <div class="container mx-auto mt-10 p-4 flex justify-items-center flex-col">
    <h1 class="text-2xl mb-4">명언 북마크</h1>
    <ul v-if="quotes.length > 0">
        <li v-for="quote in quotes" :key="quote.id" class="border p-2 mb-2 rounded hover:bg-vue-green-light">
          <router-link :to="{ path: `/quote/${quote._id}`}">
            <div class="font-bold text-lg mb-2">{{ quote.author }}</div>
            <div class="text-gray-600">{{ quote.content }}</div>
          </router-link>
        </li>
    </ul>
    <div
      v-else 
      class="font-bold text-xl"
    >
      즐겨찾기 설정한 명언이 없습니다. 지금 바로 맘에 드는 명언을 추가해보세요.
      <div class="text-right">
        <router-link to="/">
          <button
            class="my-5 border rounded md py-4 px-8 text-center bg-emerald-500
                    text-white hover:bg-emerald-400  focus:outline-none focus:ring-2 focus:ring-vue-green focus:ring-opacity-50"
          >
            명언 탐색하기
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>