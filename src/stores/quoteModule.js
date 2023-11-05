import { getQuote } from "@/apis";

export const quoteModule = {
  namespaced: true,
  state: {
    isLoading: false,
    map: new Map(),
  },
  mutations: {
    SET_LOADING(state, payload) {
      state.isLoading = payload;
    },
    SET_QUOTE(state, payload) {
      const newMap = new Map(state.map);
      newMap.set(payload.key, payload.value);
      state.map = newMap;
    },
    SET_ERROR(state, payload) {
      state.error = payload;
    }
  },
  actions: {
    async loadQuoteData({commit}, id) {
      commit("SET_LOADING", true);
      try {
        const response = await getQuote(id)
        commit("SET_QUOTE", {
          key: response._id,
          value: response
        })
      } catch(error) {
        commit("SET_ERROR", error.message);
      }
      finally {
        commit("SET_LOADING", false);
      }
    },
  },
  getters: {
    quoteById: (state) => (id) => {
      return state.map.get(id);
    }
  }
}