import NProgress from 'nprogress';
import VueRouter from "vue-router";
import HomeView from "./components/views/HomeView.vue"
import SearchView from "./components/views/SearchView.vue"
import QuoteView from "./components/views/QuoteView.vue"
import FavoriteView from "./components/views/FavoriteView.vue";
import NoFoundView from "./components/views/NoFoundView.vue";
import { getQuote } from "./apis";

const routes = [
  { 
    path: "/", 
    component: HomeView,
    name: "HomePage",
    meta: {
      requireAuth: false,
      pageTitle: "Quote Table"
    }
  },
  { 
    path: "/search", 
    component: SearchView,
    name: "SearchPage",
    meta: {
      requireAuth: false,
      pageTitle: "Search Quotes"
    }
  },
  { 
    path: "/quote/:id", 
    component: QuoteView,
    name: "QuotePage",
    meta: {
      requireAuth: false,
      pageTitle: "quote View"
    },
    props: route => ({
      quoteProps: route.meta.quote
    }),
    beforeEnter: async (to, from ,next) => {
      if(from.name) {
        NProgress.start();
        const quote = await getQuote(to.params.id)
        to.meta.quote = quote;
        to.meta.pageTitle = quote.author;
      }
      next();
    }
  },
  {
    path: "/favorite",
    component: FavoriteView,
    name: "FavoritePage",
    meta: {
      requireAuth: true,
      pageTitle: "My Favorite"
    }
  },
  { 
    path: "*", 
    component: NoFoundView,
    name: "notFoundPage",
    meta: {
      requireAuth: false,
      pageTitle: "Need some help?"
    }
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

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if(from.name !== "HomePage") {
      // https://stackoverflow.com/questions/62223195/vue-router-uncaught-in-promise-error-redirected-from-login-to-via-a?rq=1
      router.push({name: "HomePage"});
    }
  } else {
    next();
  }
});
router.afterEach(() => {
  NProgress.done();
})

export default router;