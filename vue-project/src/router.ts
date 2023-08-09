import Nprogress from 'nprogress'
import * as VueRouter from 'vue-router'
import { http } from './api/config'
import PostTableView from './views/PostTableView.vue'
import PostView from './views/PostView.vue'

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: [
    {
      path: '/post',
      component: PostTableView,
      name: 'PostTableView'
    },
    {
      path: '/post/:id',
      component: PostView,
      name: 'PostView',
      beforeEnter(to, from, next) {
        if (to.params.id != from.params.id) {
          Nprogress.start() // api 호출 전 !
          http
            .get(`/posts/${to.params.id}`)
            .then(({ data }) => {
              to.meta.post = data
              Nprogress.done() // api 호출 후!
              next()
            })
            .catch(() => {
              // 에러 핸들링 나중에 다시 봅시다.
              Nprogress.done() // api 호출 후!
            })
        }
      },
      props: (to) => ({
        post: to.meta.post
      })
    }
  ]
})

export default router
