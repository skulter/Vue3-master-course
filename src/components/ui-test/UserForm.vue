<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
    <div v-if="loading" class="text-lg text-blue-600">Loading...</div>
    <div v-else class="max-w-md w-full bg-white rounded-lg shadow-md p-6">
      <div v-if="error" class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
        Error: {{ error }}
      </div>
      <div v-else-if="userData">
        <h2 class="text-xl font-semibold mb-4">Edit User Id</h2>
        <form @submit.prevent="updateUser" class="space-y-4">
          <input 
            type="number"
            min="1"
            v-model="userIdInput"
            class="w-full p-2 border border-gray-300 rounded-md" 
          />
          <button 
            type="submit" 
            class="w-full text-white rounded-md py-2"
            :class="[submitDisabled ? 'bg-red-600 hover:bg-red-600' :'bg-blue-600 hover:bg-blue-700']"
            :disabled="submitDisabled"
            :aria-disabled="submitDisabled"
          >
            Save Changes
          </button>
        </form>
        <button v-if="hasHistory" @click="clearUserHistory" class="mt-4 w-full bg-red-600 text-white rounded-md py-2 hover:bg-red-700">Clear History</button>
        <UserProfile v-if="hasHistory"/>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, computed } from 'vue';
import { useUserStore } from '../../stores/user';
import { storeToRefs } from 'pinia';
import UserProfile from "./UserProfile.vue"

const userStore = useUserStore();
const { userData, loading, error, hasHistory } = storeToRefs(userStore);
const { fetchUserData, updateUserData, clearHistory } = userStore;
const userIdInput = ref(userData.value)
const submitDisabled = computed(() => userIdInput.value < 1)
onMounted(() => {
  if (!userData.value) {
    fetchUserData(123);
  }
});

const updateUser = () => {
  updateUserData(userIdInput.value);
};

const clearUserHistory = () => {
  clearHistory();
};
</script>
