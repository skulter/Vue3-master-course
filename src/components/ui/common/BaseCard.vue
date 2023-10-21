<script>
  export default {
    name: "BaseCard",
    props: {
      author: {
        type: String,
      },
      content: {
        type: String
      },
      cardId: {
        type: String
      },
    },
  }
</script>

<template>
  <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
    <a href="#">
      <h3 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">{{ author }}</h3>
    </a>
    <p class="mb-3 font-normal text-gray-500">{{ content }}</p>
    <router-link
      :to="{ path: `/quote/${cardId}`}" 
    >
      <a 
        href="#"
        class="inline-flex items-center text-green-600 hover:underline"
      >
        See what {{ author }} said
        <i class="fas fa-angle-double-right ml-2"></i>
      </a>
    </router-link>
  </div>
</template>