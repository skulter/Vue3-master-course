<script>
import BaseLayout from '../ui/Layout/BaseLayout.vue';

  export default {
    name: "NoFoundView",
    components: { BaseLayout }
}
</script>

<template>
  <BaseLayout>
    <div class="px-40 py-24 items-center flex justify-center flex-col-reverse lg:flex-row gap-16">
      <div class="w-full relative pb-12">
          <div class="relative">
              <div class="absolute">
                  <div class="">
                      <h1 class="my-2 text-gray-700 font-bold text-2xl">
                          길을 잃었다.
                      </h1>
                      <p class="my-2 text-gray-700">어딜 가야 할까</p>
                      <button class="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-vue-green text-white hover:bg-vue-green focus:outline-none focus:ring-2 focus:ring-vue-green focus:ring-opacity-50">랜덤 명언 찾기</button>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </BaseLayout>
</template>

