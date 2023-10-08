<script>
  export default {
    name: "BaseCard",
    props: {
      title: {
        type: String,
        default: "result"
      }
    }
  }
</script>

<template>
  <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
    <a href="#">
      <h3 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Need a help in Claim?</h3>
    </a>
    <p class="mb-3 font-normal text-gray-500">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
    <a href="#" class="inline-flex items-center text-green-600 hover:underline">
        See searched {{ title }} 
        <i class="fas fa-angle-double-right ml-2"></i>
    </a>
  </div>
</template>