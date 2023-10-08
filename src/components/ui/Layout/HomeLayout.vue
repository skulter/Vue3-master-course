<script>
  export default {
    
  }
</script>

<template>
  <div class="flex">
    <div class="py-5 px-4 flex flex-col w-9">
      <div class="mb-8 h-7">
        <button class="outline-none">
          <img src="../../../assets/logo.png" class="w-6 h-6">
        </button>
      </div>
      <div class="flex-grow">
        <nav>
          <ul 
            class="text-center child:transition-transform child-hover:-translate-y-1 child-hover:scale-110"
          >
            <li>
              <div class="mb-6">
                <button class="focus:outline-none">
                  <i class="fas fa-quote-right text-army-green"></i>
                </button>
              </div>
            </li>
            <li>
              <div class="mb-6">
                <button class="focus:outline-none">
                  <i class="fas fa-search text-army-green"></i>
                </button>
              </div>
            </li>
            <li>
              <div class="mb-6">
                <button class="focus:outline-none">
                  <i class="fas fa-star text-army-green"></i>
                </button>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="w-full">
      <div class="w-full px-5 text-center py-1 h-6 text-base"> Tab name </div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
</style>