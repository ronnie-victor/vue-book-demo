import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: () => import('../components/Home'), meta: {keepAlive: true}},
    {path: '/collect', component: () => import('../components/Collect')},
    {path: '/add', component: () => import('../components/Add')},
    {path: '/list', component: () => import('../components/List')},
    {path: '/detail/:bid', component: () => import('../components/Detail'), name: 'detail'}
  ]
})
