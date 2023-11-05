<script>
  export default {
    name: "QuoteCard",
    props: [
      'showImage',
      'quote',
    ],
    data: function() {
      return {
        imageLoaded: false
      }
    },
    methods: {
      onloadImg: function() {
        this.imageLoaded = true;
      },
    },
    
  }
</script>

<template>
  <div class="transition-all ease-in duration-700 opacity-100 rounded-3xl border-vue-green-400 border-2 p-6">
    <div>
      <section class="flex gap-8">
        <figure 
          class="relative w-15 h-15"
        >
          <img 
            class="rounded-3xl w-15 absolute" 
            :src="quote.thumbnail" 
            @load="onloadImg"
          />
          <div class="animate-pulse flex space-x-4"
            v-show="!imageLoaded"
          >
            <div class="rounded-3xll bg-slate-200 w-15 h-15"></div>
          </div>
        </figure>
        <article class="max-w-[35rem] max-h-15 overflow-y-auto">
          <h1 class="my-2 text-gray-400 font-bold text-2xl">{{ quote.author }}</h1>
          <h3 class="my-3">{{ quote.bio }}</h3>
        </article>
      </section>
      <section>
        <div class="p-10">
            <h2 class="my-2 duration-900 text-gray-700 text-3xl ">{{ quote.content }}</h2>
        </div>
      </section>
    </div>
  </div>
</template>