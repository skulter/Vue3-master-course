<script>
  export default {
    name: "HomePagination",
    props: {
      totalPages: {
        default: 0,
        type: Number
      },
      page: {
        default: 0, 
        type: Number
      },
    },
    computed: {
      hasPreviousPage(){
        return this.page > 1
      },
      hasNextPage() {
        return this.page < this.totalPages && this.page !== 0
      }
    },
  }
</script>

<template>
  <div>
    <div 
      class="flex justify-center"
    >
      <a href="#" 
        class="flex items-center justify-center px-4 h-8 mr-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
        :class="{
          'bg-white': hasPreviousPage,
          'bg-gray-100': !hasPreviousPage
        }"
        @click="$emit('change-page', 'prev')"
      >
        <svg class="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
        </svg>
        Prev
      </a>
      <span
        class="flex items-center justify-center px-4 h-8 mr-3 text-base font-medium text-gray-500 bg-white rounded-lg"
      >
        {{ page }} / {{ totalPages }}</span>
      <a 
        href="#" 
        class="flex items-center justify-center px-4 h-8 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
        :class="{
          'bg-white': hasNextPage,
          'bg-gray-100': !hasNextPage
        }"
        @click="$emit('change-page', 'next')"
      >
        Next
        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </a>
    </div>
  </div>
</template>

<style>
</style>