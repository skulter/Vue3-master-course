<script>
  export default {
    name: "HomeTable",
    props: {
      groups: {
        type: Array,
        default: function() {
          return [{
            id: "key",
            author: "Dante",
            quote: "Slooooooow but steady"
          }]
        }
      }
    },
    methods: {
      onClickRow(id) {
        this.$router.push(`/quote/${id}`)
      }
    }
  }
</script>

<template>
  <div class="w-full h-full" data-tag-name="table">
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:mx-6 lg:mx-8">
        <div class="inline-block min-w-full py-2 sm:mx-6 lg:mx-8">
          <div class="overflow-hidden">
            <table class="min-w-full text-left text-sm font-light">
              <thead
                class="border-b bg-white font-medium dark:border-neutral-500 ">
                <tr>
                  <th scope="col" class="w-[10%] px-6 py-4">#</th>
                  <th scope="col" class="w-[70%] px-6 py-4">Quote</th>
                  <th scope="col" class="w-[20%] px-6 py-4">Speaker</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(group,index) in groups"
                  :key="group.id"
                  class="border-b honeydew:bg-neutral-700 honey transition-all cursor-pointer
                    hover:translate-y-1 hover:scale-101 hover:bg-vue-green-light"
                  :class="{
                    'bg-kahlua-green': index % 2 == 1,
                    'bg-white': index & 2 ==0
                  }"
                  @click="onClickRow(group.id)"
                >
                  <td class="whitespace-nowrap w-[10%] px-6 py-4 font-medium">{{ index + 1 }}</td>
                  <td class="whitespace-nowrap w-[70%] px-6 py-4 app-quote-name">{{ group.quote }}</td>
                  <td class="whitespace-nowrap w-[20%] px-6 py-4">@{{group.author}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>