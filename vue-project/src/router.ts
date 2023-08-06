import * as VueRouter from 'vue-router'
import PostTableView from './views/PostTableView.vue'

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: [
    {
      path: '/post',
      component: PostTableView
    }
  ]
})

export default router
