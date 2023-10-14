import VueRouter from "vue-router";
import HomeView from "./components/views/HomeView.vue"
import SearchView from "./components/views/SearchView.vue"
import QuoteView from "./components/views/QuoteView.vue"
import NoFoundView from "./components/views/NoFoundView.vue";

const routes = [
  { 
    path: "/", 
    component: HomeView,
    name: "HomePage"
  },
  { path: "/search", component: SearchView },
  { 
    path: "/quote/:id", 
    // quote/3, quote/4,5
    component: QuoteView,
    name: "quotePage",
  },
  { 
    path: "*", 
    component: NoFoundView,
    name: "notFoundPage"
  }
]
/**
 * dynamic routes
 * /user/:username/post/:post_id
 * 
 * ## this.$route.params	
 * { username: 'evan', post_id: '123' }
 * 
 * ## this.$route.query
 * ## this.$route.hash
 * 
 */
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router;