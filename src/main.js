import { createApp } from 'vue'
// import VueRouter from "vue-router";
import App from './App.vue'
import router from './router';
import "./index.css";
import '../node_modules/nprogress/nprogress.css' 
import { setupPinia } from './stores';

const logPlugin = {
  install(app) {
    app.config.globalProperties.$log = console.log
  }
}

const pinia =  setupPinia();

export const app = createApp(App)
  .use(pinia)
  .use(router)
  .use(logPlugin);

// const routerPush = VueRouter.prototype.push;
// const routerReplace = VueRouter.prototype.replace;

// VueRouter.prototype.push = function(params){
//   const from = router.currentRoute.fullPath
//   const to = router.resolve(params).route.fullPath;
//   if(from === to) {
//     return;
//   }
//   routerPush.call(this,params);
// }


// VueRouter.prototype.replace = function(params) {
//   const from = router.currentRoute.fullPath
//   const to = router.resolve(params).route.fullPath;
//   if(from === to) {
//     return 
//   }
//   routerReplace.call(this,params)
// }

app.mount('#app')
  

