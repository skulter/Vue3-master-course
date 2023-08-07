import * as VueRouter from 'vue-router'
import PostTableView from './views/PostTableView.vue'
import PostView from './views/PostView.vue'

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: [
    {
      path: '/post',
      component: PostTableView
    },
    {
      path: '/post/:id',
      component: PostView
    }
  ]
})

export default router
