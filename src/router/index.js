import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import PageUnfound from '@/components/PageUnfound'
import GameDetail from '@/components/GameDetail'
import ShoppingCartPage from '@/components/ShoppingCartPage'
import LoginPage from '@/components/LoginPage'
import RegisterPage from '@/components/RegisterPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/PageUnfound',
      name: 'PageUnfound',
      component: PageUnfound
    },
    {
      path: '/GameDetail/:gname',
      name: 'GameDetail',
      component: GameDetail
    },
    {
      path: '*',
      name: '*',
      component: PageUnfound
    },
    {
      path: '/ShoppingCartPage',
      name: 'ShoppingCartPage',
      component: ShoppingCartPage
    },
    {
      path: '/LoginPage',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/RegisterPage',
      name: 'RegisterPage',
      component: RegisterPage
    }
  ]
})
