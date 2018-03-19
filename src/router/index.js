import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ThreeD from '@/components/ThreeD'
import Home from '../components/home/home.vue'
import Empty from '../components/home/empty.vue'
import Blank from '../components/home/blank.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/three',
      component: ThreeD
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/hello',
      component: HelloWorld
    },
    {
      path: '/empty',
      component: Empty
    },
    {
      path: '/blank',
      component: Blank
    }
  ]
})
