<template>
  <div class="flex items-center p-2 bg-white rounded-lg shadow-sm hover:bg-gray-100">
    <img 
      v-if="userData && userData.avatar"
      :src="userData.avatar" 
      alt="User Avatar" 
      class="w-8 h-8 rounded-full"
    />
    <span v-if="userData" class="ml-3 text-sm font-medium text-gray-700">
      {{ userData.name }}
    </span>
    <span v-if="userData.loading" class="ml-3 text-sm font-medium text-gray-700">
      Loading...
    </span>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from '../../stores/user'
import { watch, onMounted,ref, computed, toRefs  } from "vue";
const userStore = useUserStore();
const { userData } = storeToRefs(userStore);

</script>
