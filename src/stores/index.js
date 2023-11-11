import { createStore } from 'vuex';
import  { quoteModule } from "./quoteModule";
import { authModule } from "./authModule";

export const store = createStore({
  modules: {
    auth: authModule,
    quote: quoteModule
  },
  namespaced: true,
})

