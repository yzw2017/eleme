import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const goods = () => import('components/goods/goods')
const ratings = () => import('components/ratings/ratings')
const seller = () => import('components/seller/seller')

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/goods',
      component: goods
    },
    {
      path: '/ratings',
      component: ratings
    },
    {
      path: '/seller',
      component: seller
    }
  ]
})
