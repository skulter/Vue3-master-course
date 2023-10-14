import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import router from './router';

import "./index.css";

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.prototype.log = console.log

const routerPush = VueRouter.prototype.push;
const routerReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function(params){
  const from = router.currentRoute.fullPath
  const to = router.resolve(params).route.fullPath;
  if(from === to) {
    return;
  }
  routerPush.call(this,params);
}


VueRouter.prototype.replace = function(params) {
  const from = router.currentRoute.fullPath
  const to = router.resolve(params).route.fullPath;
  if(from === to) {
    return 
  }
  routerReplace.call(this,params)
}

new Vue({
  router,
  render: h => h(App),
})
  .$mount('#app')

