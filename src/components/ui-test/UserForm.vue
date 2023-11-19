<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
    <div v-if="loading" class="text-lg text-blue-600">Loading...</div>
    <div v-else class="max-w-md w-full bg-white rounded-lg shadow-md p-6">
      <div v-if="error" class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
        Error: {{ error }}
      </div>
      <div v-else-if="userData">
        <h2 class="text-xl font-semibold mb-4">Edit User Profile</h2>
        <form @submit.prevent="updateUser" class="space-y-4">
          <!-- Form fields for user data -->
          <!-- Example: -->
          <!-- <input type="text" class="w-full p-2 border border-gray-300 rounded-md" /> -->
          <button type="submit" class="w-full bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700">Save Changes</button>
        </form>
        <button v-if="hasHistory" @click="clearUserHistory" class="mt-4 w-full bg-red-600 text-white rounded-md py-2 hover:bg-red-700">Clear History</button>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, computed } from 'vue';
import { useUserStore } from '@/store/userStore';
import { storeToRefs } from 'pinia';

const userStore = useUserStore();
const { userData, loading, error, hasHistory } = storeToRefs(userStore);

const formUserData = ref({ ...userData.value });

onMounted(() => {
  if (!userData.value) {
    userStore.fetchUserData(123);
  }
});

const updateUser = () => {
  userStore.updateUserData(formUserData.value);
};

const clearUserHistory = () => {
  userStore.clearHistory();
};

const isHistoryAvailable = computed(() => hasHistory.value && userStore.userHistory.length > 0);
</script>
