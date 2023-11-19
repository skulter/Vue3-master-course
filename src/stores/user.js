import { defineStore } from "pinia";
import { createAvatar } from '@dicebear/core';
import { 
  adventurer,
  adventurerNeutral,
  avataaars,
  avataaarsNeutral,
  bigEars,
  bigEarsNeutral,
  bigSmile,
  bottts,
  botttsNeutral,
  croodles,
  croodlesNeutral
 } from '@dicebear/collection';

const profiles = [
  adventurer,
  adventurerNeutral,
  avataaars,
  avataaarsNeutral,
  bigEars,
  bigEarsNeutral,
  bigSmile,
  bottts,
  botttsNeutral,
  croodles,
  croodlesNeutral
];

const getRandomUserData = async (userId) => {
  const avatar = await createAvatar(Math.floor(profiles.length * Math.random()))
  return {
    name: `Dante${Math.floor(Math.random() * 100)}`,
    age: Math.floor(Math.random() * 100),
    userId,
    avatar: avatar.toString()
  }
};

const token = '$__userData';

export const useUserStore = defineStore("user", {
  state:() => ({
    userData: JSON.parse(localStorage.getItem(token) || null),
    userHistory: [],
    loading: false,
    error: null
  }),
  getters: {
    isUserLoggedIn: state => !!state.userData,
    hasHistory: state => state.userHistory.length > 0,
  },
  actions: {
    async fetchUserData(userId) {
      this.loading = true;
      const saved = localStorage.getItem(token);
      if(saved) {
        this.userData = JSON.parse(saved);
        this.loading = false;
        return;
      }


      const response = await new Promise(resolve => {
        setTimeout(() => {
          resolve(getRandomUserData(userId))
        },700)
      });
      this.userData = response;
      localStorage.setItem(token, JSON.stringify(this.userData));
      this.loading = false;
    },
    async updateUserData(userId) {
      this.loading = true;
      const response = await new Promise(resolve => {
        setTimeout(() => {
          resolve(getRandomUserData(userId))
        }, 700);
      })
      this.userData = response;
      this.userHistory.push(this.userData);
      this.loading = false;
    },
    clearHistory() {
      this.userHistory = [];
    },
    logout() {
      this.userData = null;
      localStorage.removeItem(token);
    }
  }
})