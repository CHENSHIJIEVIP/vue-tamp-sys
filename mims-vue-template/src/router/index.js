import Vue from 'vue'
import Router from 'vue-router'
/*import HelloWorld from '@/components/HelloWorld'*/

Vue.use(Router)

let router =  new Router({
  mode:'history',
  routes: [
    {
      path: '/',  //默认
      component: resolve => require(['../pages/login/login.vue'], resolve)
    },
    {
      path: '/login',   //登录
      component: resolve => require(['../pages/login/login.vue'], resolve)
    },
    {
      path: '/home',  //默认页
      component: resolve => require(['../pages/home/home.vue'], resolve)
    },
    {
      path: '/ledger',  //默认页
      name: '台账一览表',
      component: resolve => require(['../pages/appliances/LedgerTable'], resolve)
    },
    {
      path: '/ledger/info-data',  //器具信息页
      component: resolve => require(['../pages/appliances/dataInfo/UtensilInfo'], resolve)
    },
    {
      path: '/question',
      component: resolve => require(['../pages/question/question'], resolve)
    },
    {
      path: '/user',
      name: '器具新增',
      component: resolve => require(['../pages/user'], resolve)
    },
    {
      path: '/table',
      component: resolve => require(['../pages/table'], resolve)
    },
    {
      path: '/userHeader',
      component: resolve => require(['../components/UserHeader'], resolve)
    },
    {
      path: '/*',
      component: resolve => require(['../components/404'], resolve)
    }
  ]
})

// 访问之前，都检查下是否登录了s
router.beforeEach((to, from, next) => {
  if (to.path.startsWith('/login')) {
    window.sessionStorage.removeItem('access-token')
    next()
  } else {
    let token = window.sessionStorage.getItem('access-token')
    if (!token) {
      next({ path: '/login' })
    } else {
      next()
    }
  }
})

export default router

