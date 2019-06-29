import Vue from 'vue'
import VueRouter from 'vue-router';   //链接路由
import routes from "./aside.js"


Vue.use(VueRouter,routes)
//const routes = []
//此部分信息在aside.js中

const router = new VueRouter({
    base:"/dist/",
    routes:routes,
    mode:"history"
})


router.beforeEach((to,from,next) =>{
    var isLogin = $cookies.get('username')
    if(to.path == "/login"){
      next()
    }else{
      if(!isLogin){
        next({path:'/login'})
        alert("您未登录")
      }else{
        next()
      }
    }
  })
  





export default router
