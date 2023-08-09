<script setup lang="ts"></script>

<template>
  <header>
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <router-link :to="{ name: 'PostTableView' }">
          <a href="#" class="flex items-center">
            <img
              src="https://velog.velcdn.com/images/jay/profile/5f9413ee-7f2d-4218-a4b2-79ab163e3adb/image.png"
              class="mr-3 h-6 sm:h-9 rounded-2xl"
              alt="Dante Vue master course for beginner"
            />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
              >Dante's Tables</span
            >
          </a>
        </router-link>
        <div class="flex items-center lg:order-2">
          <router-link :to="{ name: 'PostTableView' }">
            <a
              href="#"
              class="text-white focus:ring-4 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-gray-700 focus:outline-none focus:ring-gray-800"
              >Posts</a
            >
          </router-link>
        </div>
      </div>
    </nav>
  </header>
  <main>
    <div class="mx-auto flex justify-center">
      <router-view></router-view>
    </div>
  </main>
</template>
