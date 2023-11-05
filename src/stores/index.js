import Vuex from 'vuex';

import  { quoteModule } from "./quoteModule";
import { authModule } from "./authModule";

export const store = new Vuex.Store({
  modules: {
    auth: authModule,
    quote: quoteModule
  },
  namespaced: true,
})

