import VueRouter from "vue-router";
import HomeView from "./components/views/HomeView.vue"
import SearchView from "./components/views/SearchView.vue"
import QuoteView from "./components/views/QuoteView.vue"
import FavoriteView from "./components/views/FavoriteView.vue";
import NoFoundView from "./components/views/NoFoundView.vue";

const routes = [
  { 
    path: "/", 
    component: HomeView,
    name: "HomePage"
  },
  { 
    path: "/search", 
    component: SearchView,
    name: "SearchPage"
  },
  { 
    path: "/quote/:id", 
    component: QuoteView,
    name: "QuotePage",
  },
  {
    path: "/favorite",
    component: FavoriteView,
    name: "FavoritePage",
  },
  { 
    path: "*", 
    component: NoFoundView,
    name: "notFoundPage"
  },
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